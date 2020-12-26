# `octokit.reactions`

[Previous: rateLimit](rateLimit.md) \| [Index](README.md) \| [Next: repos](repos.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`createForCommitComment(options)`](#createforcommitcommentoptions)
- [`createForIssue(options)`](#createforissueoptions)
- [`createForIssueComment(options)`](#createforissuecommentoptions)
- [`createForPullRequestReviewComment(options)`](#createforpullrequestreviewcommentoptions)
- [`createForTeamDiscussionCommentInOrg(options)`](#createforteamdiscussioncommentinorgoptions)
- [`createForTeamDiscussionInOrg(options)`](#createforteamdiscussioninorgoptions)
- [`deleteForCommitComment(options)`](#deleteforcommitcommentoptions)
- [`deleteForIssue(options)`](#deleteforissueoptions)
- [`deleteForIssueComment(options)`](#deleteforissuecommentoptions)
- [`deleteForPullRequestComment(options)`](#deleteforpullrequestcommentoptions)
- [`deleteForTeamDiscussion(options)`](#deleteforteamdiscussionoptions)
- [`deleteForTeamDiscussionComment(options)`](#deleteforteamdiscussioncommentoptions)
- [`deleteLegacy(options)`](#deletelegacyoptions)
- [`listForCommitComment(options)`](#listforcommitcommentoptions)
- [`listForIssue(options)`](#listforissueoptions)
- [`listForIssueComment(options)`](#listforissuecommentoptions)
- [`listForPullRequestReviewComment(options)`](#listforpullrequestreviewcommentoptions)
- [`listForTeamDiscussionCommentInOrg(options)`](#listforteamdiscussioncommentinorgoptions)
- [`listForTeamDiscussionInOrg(options)`](#listforteamdiscussioninorgoptions)

</details>

## [`createForCommitComment(options)`](https://docs.github.com/v3/reactions/#create-reaction-for-a-commit-comment)

Create a reaction to a [commit comment](https://docs.github.com/rest/reference/repos#comments). A response with a `Status: 200 OK` means that you already added the reaction type to this commit comment.

**Usage**

```js
const response = await octokit.reactions.createForCommitComment({
  owner,
  repo,
  comment_id,
  content
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)
- `content` (required, string): The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the commit comment.

**Reaction exists (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDg6UmVhY3Rpb24x',
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
    content: 'heart',
    created_at: '2016-05-20T20:09:31Z'
  }
}
```

</details>

**Reaction created (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDg6UmVhY3Rpb24x',
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
    content: 'heart',
    created_at: '2016-05-20T20:09:31Z'
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.createForCommitComment({
    owner,
    repo,
    comment_id,
    content
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`createForIssue(options)`](https://docs.github.com/v3/reactions/#create-reaction-for-an-issue)

Create a reaction to an [issue](https://docs.github.com/rest/reference/issues/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue.

**Usage**

```js
const response = await octokit.reactions.createForIssue({
  owner,
  repo,
  issue_number,
  content
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `content` (required, string): The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the issue.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDg6UmVhY3Rpb24x',
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
    content: 'heart',
    created_at: '2016-05-20T20:09:31Z'
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.createForIssue({
    owner,
    repo,
    issue_number,
    content
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`createForIssueComment(options)`](https://docs.github.com/v3/reactions/#create-reaction-for-an-issue-comment)

Create a reaction to an [issue comment](https://docs.github.com/rest/reference/issues#comments). A response with a `Status: 200 OK` means that you already added the reaction type to this issue comment.

**Usage**

```js
const response = await octokit.reactions.createForIssueComment({
  owner,
  repo,
  comment_id,
  content
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)
- `content` (required, string): The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the issue comment.

**Reaction exists (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDg6UmVhY3Rpb24x',
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
    content: 'heart',
    created_at: '2016-05-20T20:09:31Z'
  }
}
```

</details>

**Reaction created (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDg6UmVhY3Rpb24x',
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
    content: 'heart',
    created_at: '2016-05-20T20:09:31Z'
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.createForIssueComment({
    owner,
    repo,
    comment_id,
    content
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`createForPullRequestReviewComment(options)`](https://docs.github.com/v3/reactions/#create-reaction-for-a-pull-request-review-comment)

Create a reaction to a [pull request review comment](https://docs.github.com/rest/reference/pulls#comments). A response with a `Status: 200 OK` means that you already added the reaction type to this pull request review comment.

**Usage**

```js
const response = await octokit.reactions.createForPullRequestReviewComment({
  owner,
  repo,
  comment_id,
  content
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)
- `content` (required, string): The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the pull request review comment.

**Reaction exists (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDg6UmVhY3Rpb24x',
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
    content: 'heart',
    created_at: '2016-05-20T20:09:31Z'
  }
}
```

</details>

**Reaction created (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDg6UmVhY3Rpb24x',
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
    content: 'heart',
    created_at: '2016-05-20T20:09:31Z'
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.createForPullRequestReviewComment({
    owner,
    repo,
    comment_id,
    content
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`createForTeamDiscussionCommentInOrg(options)`](https://docs.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment)

Create a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

**Usage**

```js
const response = await octokit.reactions.createForTeamDiscussionCommentInOrg({
  org,
  team_slug,
  discussion_number,
  comment_number,
  content
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `comment_number` (required, integer)
- `content` (required, string): The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion comment.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDg6UmVhY3Rpb24x',
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
    content: 'heart',
    created_at: '2016-05-20T20:09:31Z'
  }
}
```

</details>

## [`createForTeamDiscussionInOrg(options)`](https://docs.github.com/v3/reactions/#create-reaction-for-a-team-discussion)

Create a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

**Usage**

```js
const response = await octokit.reactions.createForTeamDiscussionInOrg({
  org,
  team_slug,
  discussion_number,
  content
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `content` (required, string): The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDg6UmVhY3Rpb24x',
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
    content: 'heart',
    created_at: '2016-05-20T20:09:31Z'
  }
}
```

</details>

## [`deleteForCommitComment(options)`](https://docs.github.com/v3/reactions/#delete-a-commit-comment-reaction)

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to a [commit comment](https://docs.github.com/rest/reference/repos#comments).

**Usage**

```js
const response = await octokit.reactions.deleteForCommitComment({
  owner,
  repo,
  comment_id,
  reaction_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)
- `reaction_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteForIssue(options)`](https://docs.github.com/v3/reactions/#delete-an-issue-reaction)

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.

Delete a reaction to an [issue](https://docs.github.com/rest/reference/issues/).

**Usage**

```js
const response = await octokit.reactions.deleteForIssue({
  owner,
  repo,
  issue_number,
  reaction_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `reaction_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteForIssueComment(options)`](https://docs.github.com/v3/reactions/#delete-an-issue-comment-reaction)

**Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to an [issue comment](https://docs.github.com/rest/reference/issues#comments).

**Usage**

```js
const response = await octokit.reactions.deleteForIssueComment({
  owner,
  repo,
  comment_id,
  reaction_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)
- `reaction_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteForPullRequestComment(options)`](https://docs.github.com/v3/reactions/#delete-a-pull-request-comment-reaction)

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`

Delete a reaction to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).

**Usage**

```js
const response = await octokit.reactions.deleteForPullRequestComment({
  owner,
  repo,
  comment_id,
  reaction_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)
- `reaction_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteForTeamDiscussion(options)`](https://docs.github.com/v3/reactions/#delete-team-discussion-reaction)

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Usage**

```js
const response = await octokit.reactions.deleteForTeamDiscussion({
  org,
  team_slug,
  discussion_number,
  reaction_id
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `reaction_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteForTeamDiscussionComment(options)`](https://docs.github.com/v3/reactions/#delete-team-discussion-comment-reaction)

**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Usage**

```js
const response = await octokit.reactions.deleteForTeamDiscussionComment({
  org,
  team_slug,
  discussion_number,
  comment_number,
  reaction_id
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `comment_number` (required, integer)
- `reaction_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteLegacy(options)`](https://docs.github.com/v3/reactions/#delete-a-reaction-legacy)

**This method is deprecated.**

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).

OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments).

**Usage**

```js
const response = await octokit.reactions.deleteLegacy({ reaction_id })
```

**Options**

- `reaction_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is gone (HTTP 410)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.deleteLegacy({ reaction_id })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.deleteLegacy({ reaction_id })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listForCommitComment(options)`](https://docs.github.com/v3/reactions/#list-reactions-for-a-commit-comment)

List the reactions to a [commit comment](https://docs.github.com/rest/reference/repos#comments).

**Usage**

```js
const response = await octokit.reactions.listForCommitComment({
  owner,
  repo,
  comment_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.reactions.listForCommitComment.all({
  owner,
  repo,
  comment_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)
- `content` (string): Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a commit comment.
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
      node_id: 'MDg6UmVhY3Rpb24x',
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
      content: 'heart',
      created_at: '2016-05-20T20:09:31Z'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.listForCommitComment({
    owner,
    repo,
    comment_id
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
  response = await octokit.reactions.listForCommitComment({
    owner,
    repo,
    comment_id
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listForIssue(options)`](https://docs.github.com/v3/reactions/#list-reactions-for-an-issue)

List the reactions to an [issue](https://docs.github.com/rest/reference/issues).

**Usage**

```js
const response = await octokit.reactions.listForIssue({
  owner,
  repo,
  issue_number
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.reactions.listForIssue.all({
  owner,
  repo,
  issue_number
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `content` (string): Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue.
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
      node_id: 'MDg6UmVhY3Rpb24x',
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
      content: 'heart',
      created_at: '2016-05-20T20:09:31Z'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.listForIssue({ owner, repo, issue_number })
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
  response = await octokit.reactions.listForIssue({ owner, repo, issue_number })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.listForIssue({ owner, repo, issue_number })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listForIssueComment(options)`](https://docs.github.com/v3/reactions/#list-reactions-for-an-issue-comment)

List the reactions to an [issue comment](https://docs.github.com/rest/reference/issues#comments).

**Usage**

```js
const response = await octokit.reactions.listForIssueComment({
  owner,
  repo,
  comment_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.reactions.listForIssueComment.all({
  owner,
  repo,
  comment_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)
- `content` (string): Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue comment.
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
      node_id: 'MDg6UmVhY3Rpb24x',
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
      content: 'heart',
      created_at: '2016-05-20T20:09:31Z'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.listForIssueComment({
    owner,
    repo,
    comment_id
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
  response = await octokit.reactions.listForIssueComment({
    owner,
    repo,
    comment_id
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listForPullRequestReviewComment(options)`](https://docs.github.com/v3/reactions/#list-reactions-for-a-pull-request-review-comment)

List the reactions to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).

**Usage**

```js
const response = await octokit.reactions.listForPullRequestReviewComment({
  owner,
  repo,
  comment_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.reactions.listForPullRequestReviewComment.all(
  { owner, repo, comment_id }
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)
- `content` (string): Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a pull request review comment.
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
      node_id: 'MDg6UmVhY3Rpb24x',
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
      content: 'heart',
      created_at: '2016-05-20T20:09:31Z'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.reactions.listForPullRequestReviewComment({
    owner,
    repo,
    comment_id
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
  response = await octokit.reactions.listForPullRequestReviewComment({
    owner,
    repo,
    comment_id
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listForTeamDiscussionCommentInOrg(options)`](https://docs.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment)

List the reactions to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.

**Usage**

```js
const response = await octokit.reactions.listForTeamDiscussionCommentInOrg({
  org,
  team_slug,
  discussion_number,
  comment_number
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.reactions.listForTeamDiscussionCommentInOrg.all(
  { org, team_slug, discussion_number, comment_number }
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `comment_number` (required, integer)
- `content` (string): Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
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
      node_id: 'MDg6UmVhY3Rpb24x',
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
      content: 'heart',
      created_at: '2016-05-20T20:09:31Z'
    }
  ]
}
```

</details>

## [`listForTeamDiscussionInOrg(options)`](https://docs.github.com/v3/reactions/#list-reactions-for-a-team-discussion)

List the reactions to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.

**Usage**

```js
const response = await octokit.reactions.listForTeamDiscussionInOrg({
  org,
  team_slug,
  discussion_number
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.reactions.listForTeamDiscussionInOrg.all({
  org,
  team_slug,
  discussion_number
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `content` (string): Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion.
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
      node_id: 'MDg6UmVhY3Rpb24x',
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
      content: 'heart',
      created_at: '2016-05-20T20:09:31Z'
    }
  ]
}
```

</details>
