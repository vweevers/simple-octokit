# simple-octokit

**Preconfigured GitHub API client with GraphQL and REST.** Bundles common [`@octokit`](https://github.com/octokit) plugins into a simple factory function.

[![npm status](http://img.shields.io/npm/v/simple-octokit.svg)](https://www.npmjs.org/package/simple-octokit)
[![node](https://img.shields.io/node/v/simple-octokit.svg)](https://www.npmjs.org/package/simple-octokit)
![Test](https://github.com/vweevers/simple-octokit/workflows/Test/badge.svg?branch=main)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

<details><summary>Click to expand</summary>

- [Highlights :sparkles:](#highlights-sparkles)
- [Usage](#usage)
- [API](#api)
  - [`octokit = simpleOctokit([options])`](#octokit--simpleoctokitoptions)
  - [`octokit.graphql(query[, variables])`](#octokitgraphqlquery-variables)
  - [`octokit[scope][method]()`](#octokitscopemethod)
  - [`octokit.request(route, options)`](#octokitrequestroute-options)
- [Usage In Actions](#usage-in-actions)
- [Install](#install)
- [License](#license)

</details>

## Highlights :sparkles:

- Typical usage requires only a single option
- Builtin retry (for network errors and rate limiting)
- Includes [REST](https://docs.github.com/en/free-pro-team@latest/rest) (until [GraphQL](https://docs.github.com/en/free-pro-team@latest/graphql) has full coverage) with automatic pagination
- Suitable for use in Actions like [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github), but not only in Actions
- Respects [`HTTP(S)_PROXY` and `NO_PROXY`](https://github.com/vweevers/auto-http-agent) (and lowercase equivalents).

## Usage

```js
const simpleOctokit = require('simple-octokit')
const octokit = simpleOctokit('my-github-token')
```

Query the [GitHub GraphQL API](https://docs.github.com/en/free-pro-team@latest/graphql):

```js
const { createIssue } = await octokit.graphql(`
  mutation($repositoryId:ID!, $title:String!) {
    createIssue(input: { repositoryId: $repositoryId, title: $title }) {
      issue { number }
    }
  }`,
  { repositoryId, title }
)

console.log(createIssue.issue.number)
```

Query the [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest):

```js
const response = await octokit.issues.listForRepo({
  owner: 'octocat',
  repo: 'hello-world',
  per_page: 100
})

for (const issue of response.data) {
  console.log(issue.number)
}
```

The above example only fetches the first page of 100 issues. Lazily fetch all pages using [`for await...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of):

```js
const iterable = octokit.issues.listForRepo.all({
  owner: 'octocat',
  repo: 'hello-world',
  per_page: 100
})

for await (const response of iterable) {
  for (const issue of response.data) {
    console.log(issue.number)
  }
}
```

## API

### `octokit = simpleOctokit([options])`

The `options` argument can be a string as a shorthand for `{ auth }` or an object with:

- `auth` (string): personal access token, defaults to `GITHUB_TOKEN` environment variable. Can also be an object to be combined with a custom [`authStrategy`](https://github.com/octokit/core.js#options).
- `keepAlive` (boolean): reuse connections between requests, defaults to `false`
- `baseUrl` (string): defaults to [`GITHUB_API_URL`](https://docs.github.com/en/free-pro-team@latest/actions/reference/environment-variables) environment variable or `https://api.github.com`
- `userAgent` (string): defaults to `simple-octokit/${version}`.

Other options are forwarded to [`@octokit/core`](https://github.com/octokit/core.js).

### `octokit.graphql(query[, variables])`

Query the [GitHub GraphQL API](https://docs.github.com/en/free-pro-team@latest/graphql). Takes a `query` string and an optional `variables` object. Returns a promise for the query result. It's recommended to use `variables` rather than [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)  as those would make your code vulnerable to query injection attacks. The `variables` object can also contain custom request headers. For example to enable the `deletePackageVersion` mutation which is in preview at the time of writing:

```js
const { deletePackageVersion } = await octokit.graphql(`
  mutation ($id: String!) {
    deletePackageVersion(input:{packageVersionId:$id}) {
      success
    }
  }
`, {
  id,
  headers: {
    accept: `application/vnd.github.package-deletes-preview+json`
  }
})
```

See [`@octokit/graphql`](https://github.com/octokit/graphql.js) for further details. You may also like the [Explorer](https://docs.github.com/en/free-pro-team@latest/graphql/overview/explorer). The query result displayed there is exactly what you'll get from `octokit.graphql()`.

### `octokit[scope][method]()`

Query the [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest) through a programmatic API. See [`docs`](docs/README.md) for a complete list of methods.

### `octokit.request(route, options)`

Query the [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest) through a low-level method. Returns a promise for the response. See [`@octokit/request`](https://github.com/octokit/request.js) for details. You may prefer the programmatic API above.

## Usage In Actions

Add an input to your `action.yml`:

```yaml
inputs:
  token:
    default: ${{ github.token }}
```

```js
const simpleOctokit = require('simple-octokit')
const octokit = simpleOctokit(process.env.INPUT_TOKEN)
```

Or require consumers of your action to (more explicitly) set the token in their env:

```yaml
- uses: example-action
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

```js
const simpleOctokit = require('simple-octokit')
const octokit = simpleOctokit()
```

## Install

With [npm](https://npmjs.org) do:

```
npm install simple-octokit
```

## License

[MIT](LICENSE) © Vincent Weevers
