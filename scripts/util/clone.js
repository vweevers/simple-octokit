'use strict'

const promisify = require('util').promisify
const execFile = promisify(require('child_process').execFile)
const path = require('path')
const fs = require('fs')

module.exports = async function clone (basedir) {
  const version = require('@octokit/plugin-rest-endpoint-methods/package.json').version
  const url = 'https://github.com/octokit/plugin-rest-endpoint-methods.js.git'
  const repo = path.join(basedir, 'plugin-rest-endpoint-methods', version)

  if (!fs.existsSync(repo)) {
    await execFile('git', [
      'clone', '--branch', 'v' + version, '--depth=1', url, repo
    ])
  }

  let endpoints = require(
    path.join(repo, 'scripts/update-endpoints/generated/endpoints.json')
  )

  const { isDeprecated } = require(path.join(repo, 'scripts/update-endpoints/util.js'))
  const scopes = new Set()

  endpoints = endpoints.filter(function (endpoint) {
    if (isDeprecated(endpoint)) return false

    for (const param of endpoint.parameters) {
      // Remove dummy parameter descriptions
      if (param.description === `${param.name}+ parameter` ||
        param.description === `${param.name} parameter`) {
        param.description = ''
      }
    }

    scopes.add(endpoint.scope)
    return true
  })

  return {
    endpoints,
    scopes: Array.from(scopes)
  }
}
