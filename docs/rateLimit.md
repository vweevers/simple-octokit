# `octokit.rateLimit`

[Previous: pulls](pulls.md) \| [Index](README.md) \| [Next: reactions](reactions.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`get()`](#get)

</details>

## [`get()`](https://docs.github.com/v3/rate_limit/#get-rate-limit-status-for-the-authenticated-user)

**Note:** Accessing this endpoint does not count against your REST API rate limit.

**Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.

**Usage**

```js
const response = await octokit.rateLimit.get()
```

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    resources: {
      core: {
        limit: 5000,
        remaining: 4999,
        reset: 1372700873
      },
      search: {
        limit: 30,
        remaining: 18,
        reset: 1372697452
      },
      graphql: {
        limit: 5000,
        remaining: 4993,
        reset: 1372700389
      },
      integration_manifest: {
        limit: 5000,
        remaining: 4999,
        reset: 1551806725
      },
      code_scanning_upload: {
        limit: 500,
        remaining: 499,
        reset: 1551806725
      }
    },
    rate: {
      limit: 5000,
      remaining: 4999,
      reset: 1372700873
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.rateLimit.get()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>
