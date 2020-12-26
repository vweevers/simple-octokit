'use strict'

const prettier = require('prettier')
const fs = require('fs')
const fsp = fs.promises
const clone = require('./util/clone')

main().catch(function (err) {
  console.error(err)
  process.exit(1)
})

async function main () {
  const { endpoints } = await clone(__dirname)
  const tree = {}

  for (const endpoint of endpoints) {
    if (endpoint.parameters.some(p => p.name === 'per_page')) {
      if (!tree[endpoint.scope]) tree[endpoint.scope] = []
      tree[endpoint.scope].push(endpoint.id)
    }
  }

  const json = JSON.stringify(tree, null, 2)
  const js = prettier.format(`module.exports = ${json}`, {
    semi: false,
    singleQuote: true,
    proseWrap: 'never',
    trailingComma: 'none',
    parser: 'babel'
  })

  return fsp.writeFile('iterables.js', js)
}
