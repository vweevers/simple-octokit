# `octokit.meta`

[Previous: markdown](markdown.md) \| [Index](README.md) \| [Next: migrations](migrations.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`get()`](#get)
- [`getOctocat([options])`](#getoctocatoptions)
- [`getZen()`](#getzen)
- [`root()`](#root)

</details>

## [`get()`](https://docs.github.com/v3/meta/#get-github-meta-information)

This endpoint provides a list of GitHub's IP addresses. For more information, see [About GitHub's IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/).

**Usage**

```js
const response = await octokit.meta.get()
```

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    verifiable_password_authentication: true,
    ssh_key_fingerprints: {
      SHA256_RSA: 'nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8',
      SHA256_DSA: 'br9IjFspm1vxR3iA35FWE+4VTyz1hYVLIE2t1/CeyWQ'
    },
    hooks: ['192.30.252.0/22'],
    web: ['192.30.252.0/22', '185.199.108.0/22'],
    api: ['192.30.252.0/22', '185.199.108.0/22'],
    git: ['192.30.252.0/22'],
    pages: ['192.30.252.153/32', '192.30.252.154/32'],
    importer: ['54.158.161.132', '54.226.70.38']
  }
}
```

</details>

## [`getOctocat([options])`](<>)

Get the octocat as ASCII art

**Usage**

```js
const response = await octokit.meta.getOctocat()
```

**Options**

- `s` (string): The words to show in Octocat's speech bubble

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`getZen()`](<>)

Get a random sentence from the Zen of GitHub

**Usage**

```js
const response = await octokit.meta.getZen()
```

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`root()`](<>)

Get Hypermedia links to resources accessible in GitHub's REST API

**Usage**

```js
const response = await octokit.meta.root()
```

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>
