# `octokit.codeScanning`

[Previous: checks](checks.md) \| [Index](README.md) \| [Next: codesOfConduct](codesOfConduct.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`getAlert(options)`](#getalertoptions)
- [`listAlertsForRepo(options)`](#listalertsforrepooptions)
- [`listRecentAnalyses(options)`](#listrecentanalysesoptions)
- [`updateAlert(options)`](#updatealertoptions)
- [`uploadSarif(options)`](#uploadsarifoptions)

</details>

## [`getAlert(options)`](https://docs.github.com/v3/code-scanning/#get-a-code-scanning-alert)

Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

The security `alert_number` is found at the end of the security alert's URL. For example, the security alert ID for `https://github.com/Octo-org/octo-repo/security/code-scanning/88` is `88`.

**Usage**

```js
const response = await octokit.codeScanning.getAlert({
  owner,
  repo,
  alert_number
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `alert_number` (required, integer)
- `alert_id` (integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    number: 42,
    created_at: '2020-06-19T11:21:34Z',
    url:
      'https://api.github.com/repos/github/hello-world/code-scanning/alerts/42',
    html_url: 'https://github.com/github/hello-world/code-scanning/42',
    instances: [
      {
        ref: 'refs/heads/main',
        analysis_key: '.github/workflows/codeql-analysis.yml:CodeQL-Build',
        environment: '',
        state: 'fixed'
      },
      {
        ref: 'refs/pull/3740/head',
        analysis_key: '.github/workflows/codeql-analysis.yml:CodeQL-Build',
        environment: '',
        state: 'dismissed'
      }
    ],
    state: 'dismissed',
    dismissed_by: {
      login: 'octocat',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url:
        'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false
    },
    dismissed_at: '2020-02-14T12:29:18Z',
    dismissed_reason: 'false positive',
    rule: {
      id: 'js/polynomial-redos',
      severity: 'warning',
      description: 'Polynomial regular expression used on uncontrolled data'
    },
    tool: {
      name: 'CodeQL command-line toolchain',
      version: null
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.codeScanning.getAlert({ owner, repo, alert_number })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listAlertsForRepo(options)`](https://docs.github.com/v3/code-scanning/#list-code-scanning-alerts-for-a-repository)

Lists all open code scanning alerts for the default branch (usually `main` or `master`). For private repos, you must use an access token with the `repo` scope. For public repos, you must use an access token with `public_repo` and `repo:security_events` scopes. GitHub Apps must have the `security_events` read permission to use this endpoint.

**Usage**

```js
const response = await octokit.codeScanning.listAlertsForRepo({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `state` (string): Set to `open`, `fixed`, or `dismissed` to list code scanning alerts in a specific state.
- `ref` (string): Set a full Git reference to list alerts for a specific branch. The `ref` must be formatted as `refs/heads/<branch name>`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      number: 4,
      created_at: '2020-02-13T12:29:18Z',
      url:
        'https://api.github.com/repos/github/hello-world/code-scanning/alerts/4',
      html_url: 'https://github.com/github/hello-world/code-scanning/4',
      state: 'open',
      dismissed_by: null,
      dismissed_at: null,
      dismissed_reason: null,
      rule: {
        id: 'js/zipslip',
        severity: 'error',
        description: 'Arbitrary file write during zip extraction'
      },
      tool: {
        name: 'CodeQL command-line toolchain',
        version: null
      }
    },
    {
      number: 3,
      created_at: '2020-02-13T12:29:18Z',
      url:
        'https://api.github.com/repos/github/hello-world/code-scanning/alerts/3',
      html_url: 'https://github.com/github/hello-world/code-scanning/3',
      state: 'dismissed',
      dismissed_by: {
        login: 'octocat',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://github.com/images/error/octocat_happy.gif',
        gravatar_id: '',
        url: 'https://api.github.com/users/octocat',
        html_url: 'https://github.com/octocat',
        followers_url: 'https://api.github.com/users/octocat/followers',
        following_url:
          'https://api.github.com/users/octocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/octocat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
        organizations_url: 'https://api.github.com/users/octocat/orgs',
        repos_url: 'https://api.github.com/users/octocat/repos',
        events_url: 'https://api.github.com/users/octocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/octocat/received_events',
        type: 'User',
        site_admin: false
      },
      dismissed_at: '2020-02-14T12:29:18Z',
      dismissed_reason: 'false positive',
      rule: {
        id: 'js/zipslip',
        severity: 'error',
        description: 'Arbitrary file write during zip extraction'
      },
      tool: {
        name: 'CodeQL command-line toolchain',
        version: null
      }
    }
  ]
}
```

</details>

**Error if the ref does not match an existing ref (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.codeScanning.listAlertsForRepo({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listRecentAnalyses(options)`](https://docs.github.com/v3/code-scanning/#list-recent-analyses)

List the details of recent code scanning analyses for a repository. For private repos, you must use an access token with the `repo` scope. For public repos, you must use an access token with `public_repo` and `repo:security_events` scopes. GitHub Apps must have the `security_events` read permission to use this endpoint.

**Usage**

```js
const response = await octokit.codeScanning.listRecentAnalyses({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (string): Set a full Git reference to list alerts for a specific branch. The `ref` must be formatted as `refs/heads/<branch name>`.
- `tool_name` (string): Set a single code scanning tool name to filter alerts by tool.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      ref: 'refs/heads/master',
      commit_sha: 'd99612c3e1f2970085cfbaeadf8f010ef69bad83',
      analysis_key: '.github/workflows/codeql-analysis.yml:analyze',
      tool_name: 'CodeQL command-line toolchain',
      environment: '{}',
      error: '',
      created_at: '2020-08-27T15:05:21Z'
    },
    {
      ref: 'refs/heads/my-branch',
      commit_sha: 'c8cff6510d4d084fb1b4aa13b64b97ca12b07321',
      analysis_key: '.github/workflows/shiftleft.yml:build',
      tool_name: 'Python Security Analysis',
      environment: '{}',
      error: '',
      created_at: '2020-08-31T22:46:44Z'
    }
  ]
}
```

</details>

## [`updateAlert(options)`](https://docs.github.com/v3/code-scanning/#upload-a-code-scanning-alert)

Updates the status of a single code scanning alert. For private repos, you must use an access token with the `repo` scope. For public repos, you must use an access token with `public_repo` and `repo:security_events` scopes. GitHub Apps must have the `security_events` write permission to use this endpoint.

**Usage**

```js
const response = await octokit.codeScanning.updateAlert({
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
- `state` (required, string): Sets the state of the code scanning alert. Can be one of `open` or `dismissed`. You must provide `dismissed_reason` when you set the state to `dismissed`.
- `dismissed_reason` (string): **Required when the state is dismissed.** The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    number: 42,
    created_at: '2020-08-25T21:28:36Z',
    url:
      'https://api.github.com/repos/github/hello-world/code-scanning/alerts/42',
    html_url: 'https://github.com/github/hello-world/code-scanning/42',
    instances: [
      {
        ref: 'refs/heads/codeql-analysis-yml',
        analysis_key: '.github/workflows/codeql-analysis.yml:CodeQL-Build',
        environment: '',
        state: 'dismissed'
      },
      {
        ref: 'refs/pull/3740/head',
        analysis_key: '.github/workflows/codeql-analysis.yml:CodeQL-Build',
        environment: '',
        state: 'dismissed'
      }
    ],
    state: 'dismissed',
    dismissed_by: {
      login: 'octocat',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url:
        'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false
    },
    dismissed_at: '2020-09-02T22:34:56Z',
    dismissed_reason: 'false positive',
    rule: {
      id: 'js/polynomial-redos',
      severity: 'warning',
      description: 'Polynomial regular expression used on uncontrolled data'
    },
    tool: {
      name: 'CodeQL command-line toolchain',
      version: null
    }
  }
}
```

</details>

## [`uploadSarif(options)`](https://docs.github.com/v3/code-scanning/#upload-a-sarif-analysis)

Upload a SARIF file containing the results of a code scanning analysis to make the results available in a repository. For private repos, you must use an access token with the `repo` scope. For public repos, you must use an access token with `public_repo` and `repo:security_events` scopes. GitHub Apps must have the `security_events` write permission to use this endpoint.

**Usage**

```js
const response = await octokit.codeScanning.uploadSarif({
  owner,
  repo,
  commit_sha,
  ref,
  sarif,
  tool_name
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `commit_sha` (required, string): The commit SHA of the code scanning analysis file.
- `ref` (required, string): The full Git reference of the code scanning analysis file, formatted as `refs/heads/<branch name>`.
- `sarif` (required, string): A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string.
- `checkout_uri` (string): The base directory used in the analysis, as it appears in the SARIF file. This property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.
- `started_at` (string): The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `tool_name` (required, string): The name of the tool used to generate the code scanning analysis alert.

**Response (HTTP 202)**

<details><summary>Example</summary>

```js
const response = { status: 202 }
```

</details>

**Error if `commit_sha` or `ref` cannot be found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.codeScanning.uploadSarif({
    owner,
    repo,
    commit_sha,
    ref,
    sarif,
    tool_name
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error if the `sarif` field is too large (HTTP 413)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.codeScanning.uploadSarif({
    owner,
    repo,
    commit_sha,
    ref,
    sarif,
    tool_name
  })
} catch (err) {
  if (err.status === 413) {
    // ..
  }
}
```

</details>
