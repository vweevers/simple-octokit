'use strict'

const prettier = require('prettier')
const fs = require('fs')
const fsp = fs.promises
const clone = require('./util/clone')
const iterables = require('../iterables')

main().catch(function (err) {
  console.error(err)
  process.exit(1)
})

// Adapted from @octokit/plugin-rest-endpoint-methods;
// adds argument types, responses, errors and tables of contents.
async function main () {
  const { endpoints, scopes } = await clone(__dirname)
  const lines = [header('Index', 1)]

  let prevScope = ''

  for (const endpoint of endpoints) {
    const fp = `docs/${endpoint.scope}.md`

    if (prevScope !== endpoint.scope) {
      const left = prevScope || scopes[scopes.length - 1]
      const right = scopes[scopes.indexOf(endpoint.scope) + 1] || scopes[0]

      const breadcrumbs = [
        link(`Previous: ${left}`, `${left}.md`),
        link('Index', 'README.md'),
        link(`Next: ${right}`, `${right}.md`)
      ].join(' | ')

      const content = [
        header(code(`octokit.${endpoint.scope}`), 1),
        breadcrumbs,
        header('Table of Contents', 2),
        ''
      ].join('\n\n')

      await fsp.writeFile(fp, content)

      lines.push('- ' + link(code(`octokit.${endpoint.scope}`), `${endpoint.scope}.md`))
      prevScope = endpoint.scope
    }

    await fsp.appendFile(fp, template(endpoint) + '\n')
  }

  await fsp.writeFile('docs/README.md', lines.join('\n'))

  function template (endpoint) {
    const deprecationNotice = endpoint.isDeprecated
      ? strong('This method is deprecated.')
      : ''

    const renameNotice = endpoint.renamed
      ? strong('Deprecated:') + ` This method has been renamed to ${endpoint.renamed.after.scope}.${endpoint.renamed.after.id}`
      : ''

    const requiredParams = Array.from(new Set(
      endpoint.parameters
        .filter(p => p.required)
        .map(p => p.name.split(/[.[]/)[0])
    ))

    const example =
      `const response = await octokit.${endpoint.scope}.${endpoint.id}` +
      (requiredParams.length ? `({ ${requiredParams.join(',\n')} })` : '()')

    const args = requiredParams.length
      ? 'options'
      : (endpoint.parameters.length ? '[options]' : '')

    const content = [
      header(link(code(`${endpoint.id}(${args})`), endpoint.documentationUrl), 2),
      deprecationNotice,
      renameNotice,
      description(endpoint),
      strong('Usage'),
      codeBlock(example, 'js'),
      iterableExample(endpoint, requiredParams),
      optionsList(endpoint),
      responses(endpoint, example)
    ].join('\n\n')

    return prettier.format(content, {
      semi: false,
      singleQuote: true,
      proseWrap: 'never',
      trailingComma: 'none',
      parser: 'markdown'
    })
  }

  function description (endpoint) {
    return endpoint.description
      // Replace headers with bold text, we have too many headers
      .replace(
        /\n####? (.+)/g,
        (m, content) => `\n\n${strong(content)}\n\n`
      )

      // Unquote links
      .replace(
        /"\[(.+?)\]\((.+?)\)(\.?)"/g,
        (m, content, url, dot) => `[${content}](${url})${dot || ''}`
      )

      // Fix links with extraneous whitespace
      .replace(/webhook \]\(/g, 'webhook](')

      // Fix broken links
      .replace(
        /\(#(set-github-actions-permissions-for-[^)]+)\)/g,
        (m, p1) => `(https://docs.github.com/rest/reference/actions#${p1})`
      )
  }

  function optionsList (endpoint) {
    if (!endpoint.parameters.length) {
      return ''
    }

    const list = endpoint.parameters.map(param => {
      const desc = (param.description || '').trim()
      const attributes = []

      if (param.required) attributes.push('required')
      if (param.type) attributes.push(param.type)

      const attr = attributes.length ? ` (${attributes.join(', ')})` : ''

      return `- ${code(param.name)}${attr}${desc ? ': ' + desc : ''}`
    }).join('\n')

    return `${strong('Options')}\n\n${list}`
  }

  function responses (endpoint, example) {
    const seen = new Set()

    return endpoint.responses.map(res => {
      let { code: status, description, examples } = res

      if (status === 401) return '' // All our requests are authenticated
      if (status === 400 || status === 403 || status === 422) return '' // Not interesting
      if (status === 304) return ''
      if (status >= 500) return ''

      if (seen.has(status)) {
        // Why does the data have multiple responses in different
        // shapes while docs.github.com doesn't show these responses?
        if (endpoint.scope === 'activity' && endpoint.id === 'listReposStarredByAuthenticatedUser') return ''
        if (endpoint.scope === 'activity' && endpoint.id === 'listReposStarredByUser') return ''
        if (endpoint.scope === 'activity' && endpoint.id === 'listStargazersForRepo') return ''

        if (endpoint.scope !== 'repos' || endpoint.id !== 'getContent') {
          console.error('Duplicate status?', endpoint.scope + '.' + endpoint.id, status)
        }
      } else {
        seen.add(status)
      }

      if (endpoint.scope === 'repos' && endpoint.id === 'getContent' && !examples) {
        return ''
      }

      let content = ''
      let isError = false

      // These statuses cause @octokit/request to throw errors
      if (status >= 400 || status === 304) {
        const code = [
          'try {',
          example.replace(/^const response =/, 'response ='),
          '} catch (err) {',
          `  if (err.status === ${status}) {`,
          '    // ..',
          '  }',
          '}'
        ].join('\n')

        isError = true
        content = collapse(codeBlock(code, 'js'), 'Example')
      } else if (examples && examples.length) {
        content = examples.map(example => {
          const data = JSON.parse(example.data)
          const response = JSON.stringify({ status, data }, null, 2)

          return collapse(codeBlock('const response = ' + response, 'js'), 'Example')
        }).join('\n\n')
      } else if (status) {
        // TODO: how are redirects handled?
        const code = `const response = { status: ${status} }`
        content = collapse(codeBlock(code, 'js'), 'Example')
      } else {
        throw new Error('No content')
      }

      if (!description || description === 'response' || description === 'Default response') {
        description = status === 403 ? 'Forbidden' : 'Response'
      } else if (description.startsWith('If ') || description.startsWith('When ')) {
        description = 'Response ' + lcfirst(description)
      } else if (
        (endpoint.scope === 'repos' && endpoint.id === 'getContributorsStats') ||
        (endpoint.scope === 'migrations' && endpoint.id === 'getStatusForOrg')) {
        // Is a paragraph unlike all the others. Ditch it.
        description = 'Response'
      }

      if (description.endsWith(':')) {
        description = description.slice(0, -1)
      }

      if (description.includes('\n')) {
        console.error(description)
        throw new Error(
          `Unexpected paragraph in description of ${endpoint.scope}.${endpoint.id}`
        )
      }

      if (isError) {
        // Some have human descriptions, others do not. Normalize it.
        if (description === 'Forbidden' || description === 'Forbidden Gist') {
          description = 'Error when forbidden'
        } else if (description === 'Preview Header Missing') {
          description = 'Error when preview header is missing'
        } else if (description === 'Gone') {
          description = 'Error when resource is gone'
        } else if (description === 'Resource Not Found') {
          description = 'Error when resource is not found'
        } else if (/^(Validation Failed|Not Modified)$/i.test(description)) {
          description = 'Error when ' + description.toLowerCase()
        } else if (/^(Conflict|Merge conflict response)$/i.test(description)) {
          description = 'Error upon ' + description.toLowerCase()
        } else if (/^Otherwise a .+ status code is returned/.test(description)) {
          description = 'Error otherwise'
        } else if (/^(Repository is|State does) /.test(description)) {
          description = 'Error when ' + lcfirst(description)
        } else if (description.startsWith('Response')) {
          description = 'Error ' + description.slice(8).trim()
        } else {
          console.error(description)
          throw new Error(
            `Unexpected description in ${endpoint.scope}.${endpoint.id}`
          )
        }
      }

      return strong(`${description} (HTTP ${status})`) + '\n\n' + content
    }).filter(Boolean).join('\n\n')
  }
}

function iterableExample (endpoint, requiredParams) {
  if (!iterables[endpoint.scope]) return ''
  if (!iterables[endpoint.scope].includes(endpoint.id)) return ''

  const args = requiredParams.length ? `{ ${requiredParams.join(',\n')} }` : 'options'
  const it = `octokit.${endpoint.scope}.${endpoint.id}.all(${args})`
  const code = `for await (const response of ${it}) {\nconsole.log(response.data)\n}`

  return strong('Fetch all pages') + '\n\n' + collapse(codeBlock(code, 'js'), 'Example')
}

function link (content, url) {
  return `[${content}](${url})`
}

function code (code) {
  const delim = code.includes('`') ? '``' : '`'
  return delim + code + delim
}

function codeBlock (code, language) {
  const delim = '```'

  if (language === 'js') {
    code = prettier.format(code, {
      semi: false,
      singleQuote: true,
      proseWrap: 'never',
      trailingComma: 'none',
      parser: 'babel'
    })
  }

  return `${delim}${language || ''}\n${code}\n${delim}`
}

function header (name, depth) {
  return '######'.slice(0, depth) + ' ' + name.trim()
}

function strong (md) {
  return '**' + md.replace(/\*{2,}/g, '').trim() + '**'
}

function lcfirst (str) {
  return str[0].toLowerCase() + str.slice(1)
}

function collapse (md, name) {
  return `<details><summary>${name}</summary>\n\n${md}\n\n</details>`
}
