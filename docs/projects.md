# `octokit.projects`

[Previous: orgs](orgs.md) \| [Index](README.md) \| [Next: pulls](pulls.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`addCollaborator(options)`](#addcollaboratoroptions)
- [`createCard(options)`](#createcardoptions)
- [`createColumn(options)`](#createcolumnoptions)
- [`createForAuthenticatedUser(options)`](#createforauthenticateduseroptions)
- [`createForOrg(options)`](#createfororgoptions)
- [`createForRepo(options)`](#createforrepooptions)
- [`delete(options)`](#deleteoptions)
- [`deleteCard(options)`](#deletecardoptions)
- [`deleteColumn(options)`](#deletecolumnoptions)
- [`get(options)`](#getoptions)
- [`getCard(options)`](#getcardoptions)
- [`getColumn(options)`](#getcolumnoptions)
- [`getPermissionForUser(options)`](#getpermissionforuseroptions)
- [`listCards(options)`](#listcardsoptions)
- [`listCollaborators(options)`](#listcollaboratorsoptions)
- [`listColumns(options)`](#listcolumnsoptions)
- [`listForOrg(options)`](#listfororgoptions)
- [`listForRepo(options)`](#listforrepooptions)
- [`listForUser(options)`](#listforuseroptions)
- [`moveCard(options)`](#movecardoptions)
- [`moveColumn(options)`](#movecolumnoptions)
- [`removeCollaborator(options)`](#removecollaboratoroptions)
- [`update(options)`](#updateoptions)
- [`updateCard(options)`](#updatecardoptions)
- [`updateColumn(options)`](#updatecolumnoptions)

</details>

## [`addCollaborator(options)`](https://docs.github.com/rest/reference/projects#add-project-collaborator)

Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.

**Usage**

```js
const response = await octokit.projects.addCollaborator({
  project_id,
  username
})
```

**Options**

- `project_id` (required, integer)
- `username` (required, string)
- `permission` (string): The permission to grant the collaborator.

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
  response = await octokit.projects.addCollaborator({ project_id, username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.addCollaborator({ project_id, username })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`createCard(options)`](https://docs.github.com/rest/reference/projects#create-a-project-card)

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the [List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests) endpoint.

**Usage**

```js
const response = await octokit.projects.createCard({
  column_id,
  note,
  content_id,
  content_type
})
```

**Options**

- `column_id` (required, integer)
- `note` (required, string): The project card's note
- `content_id` (required, integer): The unique identifier of the content associated with the card
- `content_type` (required, string): The piece of content associated with the card

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/projects/columns/cards/1478',
    id: 1478,
    node_id: 'MDExOlByb2plY3RDYXJkMTQ3OA==',
    note: 'Add payload for delete Project column',
    creator: {
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
    created_at: '2016-09-05T14:21:06Z',
    updated_at: '2016-09-05T14:20:22Z',
    archived: false,
    column_url: 'https://api.github.com/projects/columns/367',
    content_url:
      'https://api.github.com/repos/api-playground/projects-test/issues/3',
    project_url: 'https://api.github.com/projects/120'
  }
}
```

</details>

## [`createColumn(options)`](https://docs.github.com/rest/reference/projects#create-a-project-column)

**Usage**

```js
const response = await octokit.projects.createColumn({ project_id, name })
```

**Options**

- `project_id` (required, integer)
- `name` (required, string): Name of the project column

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/projects/columns/367',
    project_url: 'https://api.github.com/projects/120',
    cards_url: 'https://api.github.com/projects/columns/367/cards',
    id: 367,
    node_id: 'MDEzOlByb2plY3RDb2x1bW4zNjc=',
    name: 'To Do',
    created_at: '2016-09-05T14:18:44Z',
    updated_at: '2016-09-05T14:22:28Z'
  }
}
```

</details>

## [`createForAuthenticatedUser(options)`](https://docs.github.com/v3/projects/#create-a-user-project)

**Usage**

```js
const response = await octokit.projects.createForAuthenticatedUser({ name })
```

**Options**

- `name` (required, string): Name of the project
- `body` (string): Body of the project

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    owner_url: 'https://api.github.com/users/octocat',
    url: 'https://api.github.com/projects/1002603',
    html_url: 'https://github.com/users/octocat/projects/1',
    columns_url: 'https://api.github.com/projects/1002603/columns',
    id: 1002603,
    node_id: 'MDc6UHJvamVjdDEwMDI2MDM=',
    name: 'My Projects',
    body: 'A board to manage my personal projects.',
    number: 1,
    state: 'open',
    creator: {
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
    created_at: '2011-04-10T20:09:31Z',
    updated_at: '2014-03-03T18:58:10Z'
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.createForAuthenticatedUser({ name })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`createForOrg(options)`](https://docs.github.com/v3/projects/#create-an-organization-project)

Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

**Usage**

```js
const response = await octokit.projects.createForOrg({ org, name })
```

**Options**

- `org` (required, string)
- `name` (required, string): The name of the project.
- `body` (string): The description of the project.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    owner_url: 'https://api.github.com/orgs/octocat',
    url: 'https://api.github.com/projects/1002605',
    html_url: 'https://github.com/orgs/api-playground/projects/1',
    columns_url: 'https://api.github.com/projects/1002605/columns',
    id: 1002605,
    node_id: 'MDc6UHJvamVjdDEwMDI2MDU=',
    name: 'Organization Roadmap',
    body: 'High-level roadmap for the upcoming year.',
    number: 1,
    state: 'open',
    creator: {
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
    created_at: '2011-04-11T20:09:31Z',
    updated_at: '2014-03-04T18:58:10Z'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.createForOrg({ org, name })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error when resource is gone (HTTP 410)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.createForOrg({ org, name })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`createForRepo(options)`](https://docs.github.com/v3/projects/#create-a-repository-project)

Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

**Usage**

```js
const response = await octokit.projects.createForRepo({ owner, repo, name })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `name` (required, string): The name of the project.
- `body` (string): The description of the project.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    owner_url: 'https://api.github.com/repos/api-playground/projects-test',
    url: 'https://api.github.com/projects/1002604',
    html_url: 'https://github.com/api-playground/projects-test/projects/1',
    columns_url: 'https://api.github.com/projects/1002604/columns',
    id: 1002604,
    node_id: 'MDc6UHJvamVjdDEwMDI2MDQ=',
    name: 'Projects Documentation',
    body: 'Developer documentation project for the developer site.',
    number: 1,
    state: 'open',
    creator: {
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
    created_at: '2011-04-10T20:09:31Z',
    updated_at: '2014-03-03T18:58:10Z'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.createForRepo({ owner, repo, name })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error when resource is gone (HTTP 410)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.createForRepo({ owner, repo, name })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`delete(options)`](https://docs.github.com/v3/projects/#delete-a-project)

Deletes a project board. Returns a `404 Not Found` status if projects are disabled.

**Usage**

```js
const response = await octokit.projects.delete({ project_id })
```

**Options**

- `project_id` (required, integer)

**Delete Success (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.delete({ project_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error when resource is gone (HTTP 410)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.delete({ project_id })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`deleteCard(options)`](https://docs.github.com/rest/reference/projects#delete-a-project-card)

**Usage**

```js
const response = await octokit.projects.deleteCard({ card_id })
```

**Options**

- `card_id` (required, integer)

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
  response = await octokit.projects.deleteCard({ card_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteColumn(options)`](https://docs.github.com/rest/reference/projects#delete-a-project-column)

**Usage**

```js
const response = await octokit.projects.deleteColumn({ column_id })
```

**Options**

- `column_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`get(options)`](https://docs.github.com/v3/projects/#get-a-project)

Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

**Usage**

```js
const response = await octokit.projects.get({ project_id })
```

**Options**

- `project_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    owner_url: 'https://api.github.com/repos/api-playground/projects-test',
    url: 'https://api.github.com/projects/1002604',
    html_url: 'https://github.com/api-playground/projects-test/projects/1',
    columns_url: 'https://api.github.com/projects/1002604/columns',
    id: 1002604,
    node_id: 'MDc6UHJvamVjdDEwMDI2MDQ=',
    name: 'Projects Documentation',
    body: 'Developer documentation project for the developer site.',
    number: 1,
    state: 'open',
    creator: {
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
    created_at: '2011-04-10T20:09:31Z',
    updated_at: '2014-03-03T18:58:10Z'
  }
}
```

</details>

## [`getCard(options)`](https://docs.github.com/rest/reference/projects#get-a-project-card)

**Usage**

```js
const response = await octokit.projects.getCard({ card_id })
```

**Options**

- `card_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/projects/columns/cards/1478',
    id: 1478,
    node_id: 'MDExOlByb2plY3RDYXJkMTQ3OA==',
    note: 'Add payload for delete Project column',
    creator: {
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
    created_at: '2016-09-05T14:21:06Z',
    updated_at: '2016-09-05T14:20:22Z',
    archived: false,
    column_url: 'https://api.github.com/projects/columns/367',
    content_url:
      'https://api.github.com/repos/api-playground/projects-test/issues/3',
    project_url: 'https://api.github.com/projects/120'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.getCard({ card_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getColumn(options)`](https://docs.github.com/rest/reference/projects#get-a-project-column)

**Usage**

```js
const response = await octokit.projects.getColumn({ column_id })
```

**Options**

- `column_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/projects/columns/367',
    project_url: 'https://api.github.com/projects/120',
    cards_url: 'https://api.github.com/projects/columns/367/cards',
    id: 367,
    node_id: 'MDEzOlByb2plY3RDb2x1bW4zNjc=',
    name: 'To Do',
    created_at: '2016-09-05T14:18:44Z',
    updated_at: '2016-09-05T14:22:28Z'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.getColumn({ column_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getPermissionForUser(options)`](https://docs.github.com/rest/reference/projects#get-project-permission-for-a-user)

Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.

**Usage**

```js
const response = await octokit.projects.getPermissionForUser({
  project_id,
  username
})
```

**Options**

- `project_id` (required, integer)
- `username` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    permission: 'admin',
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
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.getPermissionForUser({
    project_id,
    username
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.getPermissionForUser({
    project_id,
    username
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listCards(options)`](https://docs.github.com/rest/reference/projects#list-project-cards)

**Usage**

```js
const response = await octokit.projects.listCards({ column_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.projects.listCards.all({ column_id })) {
  console.log(response.data)
}
```

</details>

**Options**

- `column_id` (required, integer)
- `archived_state` (string): Filters the project cards that are returned by the card's state. Can be one of `all`,`archived`, or `not_archived`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/projects/columns/cards/1478',
      id: 1478,
      node_id: 'MDExOlByb2plY3RDYXJkMTQ3OA==',
      note: 'Add payload for delete Project column',
      creator: {
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
      created_at: '2016-09-05T14:21:06Z',
      updated_at: '2016-09-05T14:20:22Z',
      archived: false,
      column_url: 'https://api.github.com/projects/columns/367',
      content_url:
        'https://api.github.com/repos/api-playground/projects-test/issues/3',
      project_url: 'https://api.github.com/projects/120'
    }
  ]
}
```

</details>

## [`listCollaborators(options)`](https://docs.github.com/rest/reference/projects#list-project-collaborators)

Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.

**Usage**

```js
const response = await octokit.projects.listCollaborators({ project_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.projects.listCollaborators.all({
  project_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `project_id` (required, integer)
- `affiliation` (string): Filters the collaborators by their affiliation. Can be one of:  
  \* `outside`: Outside collaborators of a project that are not a member of the project's organization.  
  \* `direct`: Collaborators with permissions to a project, regardless of organization membership status.  
  \* `all`: All collaborators the authenticated user can see.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
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
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.listCollaborators({ project_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.listCollaborators({ project_id })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listColumns(options)`](https://docs.github.com/rest/reference/projects#list-project-columns)

**Usage**

```js
const response = await octokit.projects.listColumns({ project_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.projects.listColumns.all({ project_id })) {
  console.log(response.data)
}
```

</details>

**Options**

- `project_id` (required, integer)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/projects/columns/367',
      project_url: 'https://api.github.com/projects/120',
      cards_url: 'https://api.github.com/projects/columns/367/cards',
      id: 367,
      node_id: 'MDEzOlByb2plY3RDb2x1bW4zNjc=',
      name: 'To Do',
      created_at: '2016-09-05T14:18:44Z',
      updated_at: '2016-09-05T14:22:28Z'
    }
  ]
}
```

</details>

## [`listForOrg(options)`](https://docs.github.com/v3/projects/#list-organization-projects)

Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

**Usage**

```js
const response = await octokit.projects.listForOrg({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.projects.listForOrg.all({ org })) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `state` (string): Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      owner_url: 'https://api.github.com/orgs/octocat',
      url: 'https://api.github.com/projects/1002605',
      html_url: 'https://github.com/orgs/api-playground/projects/1',
      columns_url: 'https://api.github.com/projects/1002605/columns',
      id: 1002605,
      node_id: 'MDc6UHJvamVjdDEwMDI2MDU=',
      name: 'Organization Roadmap',
      body: 'High-level roadmap for the upcoming year.',
      number: 1,
      state: 'open',
      creator: {
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
      created_at: '2011-04-11T20:09:31Z',
      updated_at: '2014-03-04T18:58:10Z'
    }
  ]
}
```

</details>

## [`listForRepo(options)`](https://docs.github.com/v3/projects/#list-repository-projects)

Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

**Usage**

```js
const response = await octokit.projects.listForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.projects.listForRepo.all({
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
- `state` (string): Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      owner_url: 'https://api.github.com/repos/api-playground/projects-test',
      url: 'https://api.github.com/projects/1002604',
      html_url: 'https://github.com/api-playground/projects-test/projects/1',
      columns_url: 'https://api.github.com/projects/1002604/columns',
      id: 1002604,
      node_id: 'MDc6UHJvamVjdDEwMDI2MDQ=',
      name: 'Projects Documentation',
      body: 'Developer documentation project for the developer site.',
      number: 1,
      state: 'open',
      creator: {
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
      created_at: '2011-04-10T20:09:31Z',
      updated_at: '2014-03-03T18:58:10Z'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.listForRepo({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error when resource is gone (HTTP 410)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.listForRepo({ owner, repo })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`listForUser(options)`](https://docs.github.com/v3/projects/#list-user-projects)

**Usage**

```js
const response = await octokit.projects.listForUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.projects.listForUser.all({ username })) {
  console.log(response.data)
}
```

</details>

**Options**

- `username` (required, string)
- `state` (string): Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      owner_url: 'https://api.github.com/users/octocat',
      url: 'https://api.github.com/projects/1002603',
      html_url: 'https://github.com/users/octocat/projects/1',
      columns_url: 'https://api.github.com/projects/1002603/columns',
      id: 1002603,
      node_id: 'MDc6UHJvamVjdDEwMDI2MDM=',
      name: 'My Projects',
      body: 'A board to manage my personal projects.',
      number: 1,
      state: 'open',
      creator: {
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
      created_at: '2011-04-10T20:09:31Z',
      updated_at: '2014-03-03T18:58:10Z'
    }
  ]
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.listForUser({ username })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`moveCard(options)`](https://docs.github.com/rest/reference/projects#move-a-project-card)

**Usage**

```js
const response = await octokit.projects.moveCard({ card_id, position })
```

**Options**

- `card_id` (required, integer)
- `position` (required, string): The position of the card in a column
- `column_id` (integer): The unique identifier of the column the card should be moved to

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = { status: 201 }
```

</details>

## [`moveColumn(options)`](https://docs.github.com/rest/reference/projects#move-a-project-column)

**Usage**

```js
const response = await octokit.projects.moveColumn({ column_id, position })
```

**Options**

- `column_id` (required, integer)
- `position` (required, string): The position of the column in a project

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = { status: 201 }
```

</details>

## [`removeCollaborator(options)`](https://docs.github.com/rest/reference/projects#remove-project-collaborator)

Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.

**Usage**

```js
const response = await octokit.projects.removeCollaborator({
  project_id,
  username
})
```

**Options**

- `project_id` (required, integer)
- `username` (required, string)

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
  response = await octokit.projects.removeCollaborator({ project_id, username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.removeCollaborator({ project_id, username })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`update(options)`](https://docs.github.com/v3/projects/#update-a-project)

Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

**Usage**

```js
const response = await octokit.projects.update({ project_id })
```

**Options**

- `project_id` (required, integer)
- `name` (string): Name of the project
- `body` (string): Body of the project
- `state` (string): State of the project; either 'open' or 'closed'
- `organization_permission` (string): The baseline permission that all organization members have on this project
- `private` (boolean): Whether or not this project can be seen by everyone.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    owner_url: 'https://api.github.com/repos/api-playground/projects-test',
    url: 'https://api.github.com/projects/1002604',
    html_url: 'https://github.com/api-playground/projects-test/projects/1',
    columns_url: 'https://api.github.com/projects/1002604/columns',
    id: 1002604,
    node_id: 'MDc6UHJvamVjdDEwMDI2MDQ=',
    name: 'Projects Documentation',
    body: 'Developer documentation project for the developer site.',
    number: 1,
    state: 'open',
    creator: {
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
    created_at: '2011-04-10T20:09:31Z',
    updated_at: '2014-03-03T18:58:10Z'
  }
}
```

</details>

**Error if the authenticated user does not have access to the project (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.update({ project_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error when resource is gone (HTTP 410)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.update({ project_id })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`updateCard(options)`](https://docs.github.com/rest/reference/projects#update-a-project-card)

**Usage**

```js
const response = await octokit.projects.updateCard({ card_id })
```

**Options**

- `card_id` (required, integer)
- `note` (string): The project card's note
- `archived` (boolean): Whether or not the card is archived

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/projects/columns/cards/1478',
    id: 1478,
    node_id: 'MDExOlByb2plY3RDYXJkMTQ3OA==',
    note: 'Add payload for delete Project column',
    creator: {
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
    created_at: '2016-09-05T14:21:06Z',
    updated_at: '2016-09-05T14:20:22Z',
    archived: false,
    column_url: 'https://api.github.com/projects/columns/367',
    content_url:
      'https://api.github.com/repos/api-playground/projects-test/issues/3',
    project_url: 'https://api.github.com/projects/120'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.projects.updateCard({ card_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateColumn(options)`](https://docs.github.com/rest/reference/projects#update-a-project-column)

**Usage**

```js
const response = await octokit.projects.updateColumn({ column_id, name })
```

**Options**

- `column_id` (required, integer)
- `name` (required, string): Name of the project column

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/projects/columns/367',
    project_url: 'https://api.github.com/projects/120',
    cards_url: 'https://api.github.com/projects/columns/367/cards',
    id: 367,
    node_id: 'MDEzOlByb2plY3RDb2x1bW4zNjc=',
    name: 'To Do',
    created_at: '2016-09-05T14:18:44Z',
    updated_at: '2016-09-05T14:22:28Z'
  }
}
```

</details>
