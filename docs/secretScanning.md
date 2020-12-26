# `octokit.secretScanning`

[Previous: search](search.md) \| [Index](README.md) \| [Next: teams](teams.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`getAlert(options)`](#getalertoptions)
- [`listAlertsForRepo(options)`](#listalertsforrepooptions)
- [`updateAlert(options)`](#updatealertoptions)

</details>

## [`getAlert(options)`](https://docs.github.com/rest/reference/secret-scanning#get-a-secret-scanning-alert)

Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

**Usage**

```js
const response = await octokit.secretScanning.getAlert({
  owner,
  repo,
  alert_number
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `alert_number` (required, integer): The security alert number, found at the end of the security alert's URL.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    number: 42,
    created_at: '2020-11-06T18:18:30Z',
    url:
      'https://api.github.com/repos/owner/private-repo/secret-scanning/alerts/42',
    html_url:
      'https://github.com/owner/private-repo/security/secret-scanning/42',
    state: 'open',
    resolution: null,
    resolved_at: null,
    resolved_by: null,
    secret_type: 'mailchimp_api_key',
    secret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-us2'
  }
}
```

</details>

**Error when repository is public, or secret scanning is disabled for the repository, or the resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.secretScanning.getAlert({
    owner,
    repo,
    alert_number
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listAlertsForRepo(options)`](https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository)

Lists all secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

**Usage**

```js
const response = await octokit.secretScanning.listAlertsForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.secretScanning.listAlertsForRepo.all({
  owner,
  repo
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `state` (string): Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
- `page` (integer): Page number of the results to fetch.
- `per_page` (integer): Results per page (max 100)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      number: 2,
      created_at: '2020-11-06T18:48:51Z',
      url:
        'https://api.github.com/repos/owner/private-repo/secret-scanning/alerts/2',
      html_url:
        'https://github.com/owner/private-repo/security/secret-scanning/2',
      state: 'resolved',
      resolution: 'false_positive',
      resolved_at: '2020-11-07T02:47:13Z',
      resolved_by: {
        login: 'monalisa',
        id: 2,
        node_id: 'MDQ6VXNlcjI=',
        avatar_url: 'https://alambic.github.com/avatars/u/2?',
        gravatar_id: '',
        url: 'https://api.github.com/users/monalisa',
        html_url: 'https://github.com/monalisa',
        followers_url: 'https://api.github.com/users/monalisa/followers',
        following_url:
          'https://api.github.com/users/monalisa/following{/other_user}',
        gists_url: 'https://api.github.com/users/monalisa/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/monalisa/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/monalisa/subscriptions',
        organizations_url: 'https://api.github.com/users/monalisa/orgs',
        repos_url: 'https://api.github.com/users/monalisa/repos',
        events_url: 'https://api.github.com/users/monalisa/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/monalisa/received_events',
        type: 'User',
        site_admin: true
      },
      secret_type: 'adafruit_io_key',
      secret: 'aio_XXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    },
    {
      number: 1,
      created_at: '2020-11-06T18:18:30Z',
      url: 'https://api.github.com/repos/owner/repo/secret-scanning/alerts/1',
      html_url: 'https://github.com/owner/repo/security/secret-scanning/1',
      state: 'open',
      resolution: null,
      resolved_at: null,
      resolved_by: null,
      secret_type: 'mailchimp_api_key',
      secret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-us2'
    }
  ]
}
```

</details>

**Error when repository is public or secret scanning is disabled for the repository (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.secretScanning.listAlertsForRepo({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateAlert(options)`](https://docs.github.com/rest/reference/secret-scanning#update-a-secret-scanning-alert)

Updates the status of a secret scanning alert in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.

**Usage**

```js
const response = await octokit.secretScanning.updateAlert({
  owner,
  repo,
  alert_number,
  state
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `alert_number` (required, integer): The security alert number, found at the end of the security alert's URL.
- `state` (required, string): Sets the state of the secret scanning alert. Can be either `open` or `resolved`. You must provide `resolution` when you set the state to `resolved`.
- `resolution` (string): **Required when the `state` is `resolved`.** The reason for resolving the alert. Can be one of `false_positive`, `wont_fix`, `revoked`, or `used_in_tests`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    number: 42,
    created_at: '2020-11-06T18:18:30Z',
    url:
      'https://api.github.com/repos/owner/private-repo/secret-scanning/alerts/42',
    html_url:
      'https://github.com/owner/private-repo/security/secret-scanning/42',
    state: 'resolved',
    resolution: 'used_in_tests',
    resolved_at: '2020-11-16T22:42:07Z',
    resolved_by: {
      login: 'monalisa',
      id: 2,
      node_id: 'MDQ6VXNlcjI=',
      avatar_url: 'https://alambic.github.com/avatars/u/2?',
      gravatar_id: '',
      url: 'https://api.github.com/users/monalisa',
      html_url: 'https://github.com/monalisa',
      followers_url: 'https://api.github.com/users/monalisa/followers',
      following_url:
        'https://api.github.com/users/monalisa/following{/other_user}',
      gists_url: 'https://api.github.com/users/monalisa/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/monalisa/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/monalisa/subscriptions',
      organizations_url: 'https://api.github.com/users/monalisa/orgs',
      repos_url: 'https://api.github.com/users/monalisa/repos',
      events_url: 'https://api.github.com/users/monalisa/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/monalisa/received_events',
      type: 'User',
      site_admin: true
    },
    secret_type: 'mailchimp_api_key',
    secret: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX-us2'
  }
}
```

</details>

**Error when repository is public, or secret scanning is disabled for the repository, or the resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.secretScanning.updateAlert({
    owner,
    repo,
    alert_number,
    state
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>
