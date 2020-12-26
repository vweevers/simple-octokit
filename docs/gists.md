# `octokit.gists`

[Previous: enterpriseAdmin](enterpriseAdmin.md) \| [Index](README.md) \| [Next: git](git.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`checkIsStarred(options)`](#checkisstarredoptions)
- [`create(options)`](#createoptions)
- [`createComment(options)`](#createcommentoptions)
- [`delete(options)`](#deleteoptions)
- [`deleteComment(options)`](#deletecommentoptions)
- [`fork(options)`](#forkoptions)
- [`get(options)`](#getoptions)
- [`getComment(options)`](#getcommentoptions)
- [`getRevision(options)`](#getrevisionoptions)
- [`list([options])`](#listoptions)
- [`listComments(options)`](#listcommentsoptions)
- [`listCommits(options)`](#listcommitsoptions)
- [`listForUser(options)`](#listforuseroptions)
- [`listForks(options)`](#listforksoptions)
- [`listPublic([options])`](#listpublicoptions)
- [`listStarred([options])`](#liststarredoptions)
- [`star(options)`](#staroptions)
- [`unstar(options)`](#unstaroptions)
- [`update(options)`](#updateoptions)
- [`updateComment(options)`](#updatecommentoptions)

</details>

## [`checkIsStarred(options)`](https://docs.github.com/v3/gists/#check-if-a-gist-is-starred)

**Usage**

```js
const response = await octokit.gists.checkIsStarred({ gist_id })
```

**Options**

- `gist_id` (required, string)

**Response if gist is starred (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error if gist is not starred (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.checkIsStarred({ gist_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`create(options)`](https://docs.github.com/v3/gists/#create-a-gist)

Allows you to add a new gist with one or more files.

**Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.

**Usage**

```js
const response = await octokit.gists.create({ files })
```

**Options**

- `description` (string): Description of the gist
- `files` (required, object): Names and content for the files that make up the gist
- `files.*` (object)
- `files.*.content` (required, string): Content of the file
- `public`

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/gists/aa5a315d61ae9438b18d',
    forks_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/forks',
    commits_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/commits',
    id: 'aa5a315d61ae9438b18d',
    node_id: 'MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk',
    git_pull_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    git_push_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    html_url: 'https://gist.github.com/aa5a315d61ae9438b18d',
    created_at: '2010-04-14T02:15:15Z',
    updated_at: '2011-06-20T11:34:15Z',
    description: 'Hello World Examples',
    comments: 0,
    comments_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/comments/'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.create({ files })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createComment(options)`](https://docs.github.com/rest/reference/gists#create-a-gist-comment)

**Usage**

```js
const response = await octokit.gists.createComment({ gist_id, body })
```

**Options**

- `gist_id` (required, string)
- `body` (required, string): The comment text.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDExOkdpc3RDb21tZW50MQ==',
    url: 'https://api.github.com/gists/a6db0bec360bb87e9418/comments/1',
    body: 'Just commenting for the sake of commenting',
    user: {
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
    created_at: '2011-04-18T23:23:56Z',
    updated_at: '2011-04-18T23:23:56Z',
    author_association: 'collaborator'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.createComment({ gist_id, body })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`delete(options)`](https://docs.github.com/v3/gists/#delete-a-gist)

**Usage**

```js
const response = await octokit.gists.delete({ gist_id })
```

**Options**

- `gist_id` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.delete({ gist_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteComment(options)`](https://docs.github.com/rest/reference/gists#delete-a-gist-comment)

**Usage**

```js
const response = await octokit.gists.deleteComment({ gist_id, comment_id })
```

**Options**

- `gist_id` (required, string)
- `comment_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.deleteComment({ gist_id, comment_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`fork(options)`](https://docs.github.com/v3/gists/#fork-a-gist)

**Note**: This was previously `/gists/:gist_id/fork`.

**Usage**

```js
const response = await octokit.gists.fork({ gist_id })
```

**Options**

- `gist_id` (required, string)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/gists/aa5a315d61ae9438b18d',
    forks_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/forks',
    commits_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/commits',
    id: 'aa5a315d61ae9438b18d',
    node_id: 'MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk',
    git_pull_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    git_push_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    html_url: 'https://gist.github.com/aa5a315d61ae9438b18d',
    files: {
      'hello_world.rb': {
        filename: 'hello_world.rb',
        type: 'application/x-ruby',
        language: 'Ruby',
        raw_url:
          'https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb',
        size: 167
      }
    },
    public: true,
    created_at: '2010-04-14T02:15:15Z',
    updated_at: '2011-06-20T11:34:15Z',
    description: 'Hello World Examples',
    comments: 0,
    user: null,
    comments_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/comments/',
    owner: {
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
    truncated: false
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.fork({ gist_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`get(options)`](https://docs.github.com/v3/gists/#get-a-gist)

**Usage**

```js
const response = await octokit.gists.get({ gist_id })
```

**Options**

- `gist_id` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/gists/aa5a315d61ae9438b18d',
    forks_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/forks',
    commits_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/commits',
    id: 'aa5a315d61ae9438b18d',
    node_id: 'MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk',
    git_pull_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    git_push_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    html_url: 'https://gist.github.com/aa5a315d61ae9438b18d',
    created_at: '2010-04-14T02:15:15Z',
    updated_at: '2011-06-20T11:34:15Z',
    description: 'Hello World Examples',
    comments: 0,
    comments_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/comments/'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.get({ gist_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getComment(options)`](https://docs.github.com/rest/reference/gists#get-a-gist-comment)

**Usage**

```js
const response = await octokit.gists.getComment({ gist_id, comment_id })
```

**Options**

- `gist_id` (required, string)
- `comment_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDExOkdpc3RDb21tZW50MQ==',
    url: 'https://api.github.com/gists/a6db0bec360bb87e9418/comments/1',
    body: 'Just commenting for the sake of commenting',
    user: {
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
    created_at: '2011-04-18T23:23:56Z',
    updated_at: '2011-04-18T23:23:56Z',
    author_association: 'collaborator'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.getComment({ gist_id, comment_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getRevision(options)`](https://docs.github.com/v3/gists/#get-a-gist-revision)

**Usage**

```js
const response = await octokit.gists.getRevision({ gist_id, sha })
```

**Options**

- `gist_id` (required, string)
- `sha` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f',
    forks_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/forks',
    commits_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/commits',
    id: 'aa5a315d61ae9438b18d',
    node_id: 'MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk',
    git_pull_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    git_push_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    html_url: 'https://gist.github.com/aa5a315d61ae9438b18d',
    created_at: '2010-04-14T02:15:15Z',
    updated_at: '2011-06-20T11:34:15Z',
    description: 'Hello World Examples',
    comments: 0,
    comments_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/comments/'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.getRevision({ gist_id, sha })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`list([options])`](https://docs.github.com/v3/gists/#list-gists-for-the-authenticated-user)

Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:

**Usage**

```js
const response = await octokit.gists.list()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.gists.list.all(options)) {
  console.log(response.data)
}
```

</details>

**Options**

- `since` (string): Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/gists/aa5a315d61ae9438b18d',
      forks_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/forks',
      commits_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/commits',
      id: 'aa5a315d61ae9438b18d',
      node_id: 'MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk',
      git_pull_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
      git_push_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
      html_url: 'https://gist.github.com/aa5a315d61ae9438b18d',
      files: {
        'hello_world.rb': {
          filename: 'hello_world.rb',
          type: 'application/x-ruby',
          language: 'Ruby',
          raw_url:
            'https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb',
          size: 167
        }
      },
      public: true,
      created_at: '2010-04-14T02:15:15Z',
      updated_at: '2011-06-20T11:34:15Z',
      description: 'Hello World Examples',
      comments: 0,
      user: null,
      comments_url:
        'https://api.github.com/gists/aa5a315d61ae9438b18d/comments/',
      owner: {
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
      truncated: false
    }
  ]
}
```

</details>

## [`listComments(options)`](https://docs.github.com/rest/reference/gists#list-gist-comments)

**Usage**

```js
const response = await octokit.gists.listComments({ gist_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.gists.listComments.all({ gist_id })) {
  console.log(response.data)
}
```

</details>

**Options**

- `gist_id` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 1,
      node_id: 'MDExOkdpc3RDb21tZW50MQ==',
      url: 'https://api.github.com/gists/a6db0bec360bb87e9418/comments/1',
      body: 'Just commenting for the sake of commenting',
      user: {
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
      created_at: '2011-04-18T23:23:56Z',
      updated_at: '2011-04-18T23:23:56Z',
      author_association: 'collaborator'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.listComments({ gist_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listCommits(options)`](https://docs.github.com/v3/gists/#list-gist-commits)

**Usage**

```js
const response = await octokit.gists.listCommits({ gist_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.gists.listCommits.all({ gist_id })) {
  console.log(response.data)
}
```

</details>

**Options**

- `gist_id` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url:
        'https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f',
      version: '57a7f021a713b1c5a6a199b54cc514735d2d462f',
      user: {
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
      change_status: {
        deletions: 0,
        additions: 180,
        total: 180
      },
      committed_at: '2010-04-14T02:15:15Z'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.listCommits({ gist_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listForUser(options)`](https://docs.github.com/v3/gists/#list-gists-for-a-user)

Lists public gists for the specified user:

**Usage**

```js
const response = await octokit.gists.listForUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.gists.listForUser.all({ username })) {
  console.log(response.data)
}
```

</details>

**Options**

- `username` (required, string)
- `since` (string): Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/gists/aa5a315d61ae9438b18d',
      forks_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/forks',
      commits_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/commits',
      id: 'aa5a315d61ae9438b18d',
      node_id: 'MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk',
      git_pull_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
      git_push_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
      html_url: 'https://gist.github.com/aa5a315d61ae9438b18d',
      files: {
        'hello_world.rb': {
          filename: 'hello_world.rb',
          type: 'application/x-ruby',
          language: 'Ruby',
          raw_url:
            'https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb',
          size: 167
        }
      },
      public: true,
      created_at: '2010-04-14T02:15:15Z',
      updated_at: '2011-06-20T11:34:15Z',
      description: 'Hello World Examples',
      comments: 0,
      user: null,
      comments_url:
        'https://api.github.com/gists/aa5a315d61ae9438b18d/comments/',
      owner: {
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
      truncated: false
    }
  ]
}
```

</details>

## [`listForks(options)`](https://docs.github.com/v3/gists/#list-gist-forks)

**Usage**

```js
const response = await octokit.gists.listForks({ gist_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.gists.listForks.all({ gist_id })) {
  console.log(response.data)
}
```

</details>

**Options**

- `gist_id` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/gists/dee9c42e4998ce2ea439',
      id: 'dee9c42e4998ce2ea439',
      created_at: '2011-04-14T16:00:49Z',
      updated_at: '2011-04-14T16:00:49Z'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.listForks({ gist_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listPublic([options])`](https://docs.github.com/v3/gists/#list-public-gists)

List public gists sorted by most recently updated to least recently updated.

Note: With [pagination](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.

**Usage**

```js
const response = await octokit.gists.listPublic()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.gists.listPublic.all(options)) {
  console.log(response.data)
}
```

</details>

**Options**

- `since` (string): Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/gists/aa5a315d61ae9438b18d',
      forks_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/forks',
      commits_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/commits',
      id: 'aa5a315d61ae9438b18d',
      node_id: 'MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk',
      git_pull_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
      git_push_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
      html_url: 'https://gist.github.com/aa5a315d61ae9438b18d',
      files: {
        'hello_world.rb': {
          filename: 'hello_world.rb',
          type: 'application/x-ruby',
          language: 'Ruby',
          raw_url:
            'https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb',
          size: 167
        }
      },
      public: true,
      created_at: '2010-04-14T02:15:15Z',
      updated_at: '2011-06-20T11:34:15Z',
      description: 'Hello World Examples',
      comments: 0,
      user: null,
      comments_url:
        'https://api.github.com/gists/aa5a315d61ae9438b18d/comments/',
      owner: {
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
      truncated: false
    }
  ]
}
```

</details>

## [`listStarred([options])`](https://docs.github.com/v3/gists/#list-starred-gists)

List the authenticated user's starred gists:

**Usage**

```js
const response = await octokit.gists.listStarred()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.gists.listStarred.all(options)) {
  console.log(response.data)
}
```

</details>

**Options**

- `since` (string): Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/gists/aa5a315d61ae9438b18d',
      forks_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/forks',
      commits_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/commits',
      id: 'aa5a315d61ae9438b18d',
      node_id: 'MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk',
      git_pull_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
      git_push_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
      html_url: 'https://gist.github.com/aa5a315d61ae9438b18d',
      files: {
        'hello_world.rb': {
          filename: 'hello_world.rb',
          type: 'application/x-ruby',
          language: 'Ruby',
          raw_url:
            'https://gist.githubusercontent.com/octocat/6cad326836d38bd3a7ae/raw/db9c55113504e46fa076e7df3a04ce592e2e86d8/hello_world.rb',
          size: 167
        }
      },
      public: true,
      created_at: '2010-04-14T02:15:15Z',
      updated_at: '2011-06-20T11:34:15Z',
      description: 'Hello World Examples',
      comments: 0,
      user: null,
      comments_url:
        'https://api.github.com/gists/aa5a315d61ae9438b18d/comments/',
      owner: {
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
      truncated: false
    }
  ]
}
```

</details>

## [`star(options)`](https://docs.github.com/v3/gists/#star-a-gist)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see [HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs).

**Usage**

```js
const response = await octokit.gists.star({ gist_id })
```

**Options**

- `gist_id` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.star({ gist_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`unstar(options)`](https://docs.github.com/v3/gists/#unstar-a-gist)

**Usage**

```js
const response = await octokit.gists.unstar({ gist_id })
```

**Options**

- `gist_id` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.unstar({ gist_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`update(options)`](https://docs.github.com/v3/gists/#update-a-gist)

Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.

**Usage**

```js
const response = await octokit.gists.update({ gist_id })
```

**Options**

- `gist_id` (required, string)
- `description` (string): Description of the gist
- `files` (object): Names of files to be updated
- `files.*` (object)
- `files.*.content` (string): The new content of the file
- `files.*.filename` (string): The new filename for the file

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/gists/aa5a315d61ae9438b18d',
    forks_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/forks',
    commits_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/commits',
    id: 'aa5a315d61ae9438b18d',
    node_id: 'MDQ6R2lzdGFhNWEzMTVkNjFhZTk0MzhiMThk',
    git_pull_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    git_push_url: 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    html_url: 'https://gist.github.com/aa5a315d61ae9438b18d',
    created_at: '2010-04-14T02:15:15Z',
    updated_at: '2011-06-20T11:34:15Z',
    description: 'Hello World Examples',
    comments: 0,
    comments_url: 'https://api.github.com/gists/aa5a315d61ae9438b18d/comments/'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.update({ gist_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateComment(options)`](https://docs.github.com/rest/reference/gists#update-a-gist-comment)

**Usage**

```js
const response = await octokit.gists.updateComment({
  gist_id,
  comment_id,
  body
})
```

**Options**

- `gist_id` (required, string)
- `comment_id` (required, integer)
- `body` (required, string): The comment text.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDExOkdpc3RDb21tZW50MQ==',
    url: 'https://api.github.com/gists/a6db0bec360bb87e9418/comments/1',
    body: 'Just commenting for the sake of commenting',
    user: {
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
    created_at: '2011-04-18T23:23:56Z',
    updated_at: '2011-04-18T23:23:56Z',
    author_association: 'collaborator'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.gists.updateComment({ gist_id, comment_id, body })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>
