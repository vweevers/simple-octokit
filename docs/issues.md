# `octokit.issues`

[Previous: interactions](interactions.md) \| [Index](README.md) \| [Next: licenses](licenses.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`addAssignees(options)`](#addassigneesoptions)
- [`addLabels(options)`](#addlabelsoptions)
- [`checkUserCanBeAssigned(options)`](#checkusercanbeassignedoptions)
- [`create(options)`](#createoptions)
- [`createComment(options)`](#createcommentoptions)
- [`createLabel(options)`](#createlabeloptions)
- [`createMilestone(options)`](#createmilestoneoptions)
- [`deleteComment(options)`](#deletecommentoptions)
- [`deleteLabel(options)`](#deletelabeloptions)
- [`deleteMilestone(options)`](#deletemilestoneoptions)
- [`get(options)`](#getoptions)
- [`getComment(options)`](#getcommentoptions)
- [`getEvent(options)`](#geteventoptions)
- [`getLabel(options)`](#getlabeloptions)
- [`getMilestone(options)`](#getmilestoneoptions)
- [`list([options])`](#listoptions)
- [`listAssignees(options)`](#listassigneesoptions)
- [`listComments(options)`](#listcommentsoptions)
- [`listCommentsForRepo(options)`](#listcommentsforrepooptions)
- [`listEvents(options)`](#listeventsoptions)
- [`listEventsForRepo(options)`](#listeventsforrepooptions)
- [`listEventsForTimeline(options)`](#listeventsfortimelineoptions)
- [`listForAuthenticatedUser([options])`](#listforauthenticateduseroptions)
- [`listForOrg(options)`](#listfororgoptions)
- [`listForRepo(options)`](#listforrepooptions)
- [`listLabelsForMilestone(options)`](#listlabelsformilestoneoptions)
- [`listLabelsForRepo(options)`](#listlabelsforrepooptions)
- [`listLabelsOnIssue(options)`](#listlabelsonissueoptions)
- [`listMilestones(options)`](#listmilestonesoptions)
- [`lock(options)`](#lockoptions)
- [`removeAllLabels(options)`](#removealllabelsoptions)
- [`removeAssignees(options)`](#removeassigneesoptions)
- [`removeLabel(options)`](#removelabeloptions)
- [`setLabels(options)`](#setlabelsoptions)
- [`unlock(options)`](#unlockoptions)
- [`update(options)`](#updateoptions)
- [`updateComment(options)`](#updatecommentoptions)
- [`updateLabel(options)`](#updatelabeloptions)
- [`updateMilestone(options)`](#updatemilestoneoptions)

</details>

## [`addAssignees(options)`](https://docs.github.com/rest/reference/issues#add-assignees-to-an-issue)

Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.

**Usage**

```js
const response = await octokit.issues.addAssignees({
  owner,
  repo,
  issue_number
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `assignees` (string\[]): Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDU6SXNzdWUx',
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    repository_url: 'https://api.github.com/repos/octocat/Hello-World',
    labels_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
    comments_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
    events_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
    html_url: 'https://github.com/octocat/Hello-World/issues/1347',
    number: 1347,
    state: 'open',
    title: 'Found a bug',
    body: "I'm having a problem with this.",
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
    labels: [
      {
        id: 208045946,
        node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
        url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
        name: 'bug',
        description: "Something isn't working",
        color: 'f29513',
        default: true
      }
    ],
    assignee: {
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
    assignees: [
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
      },
      {
        login: 'hubot',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://github.com/images/error/hubot_happy.gif',
        gravatar_id: '',
        url: 'https://api.github.com/users/hubot',
        html_url: 'https://github.com/hubot',
        followers_url: 'https://api.github.com/users/hubot/followers',
        following_url:
          'https://api.github.com/users/hubot/following{/other_user}',
        gists_url: 'https://api.github.com/users/hubot/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/hubot/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/hubot/subscriptions',
        organizations_url: 'https://api.github.com/users/hubot/orgs',
        repos_url: 'https://api.github.com/users/hubot/repos',
        events_url: 'https://api.github.com/users/hubot/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/hubot/received_events',
        type: 'User',
        site_admin: true
      },
      {
        login: 'other_user',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://github.com/images/error/other_user_happy.gif',
        gravatar_id: '',
        url: 'https://api.github.com/users/other_user',
        html_url: 'https://github.com/other_user',
        followers_url: 'https://api.github.com/users/other_user/followers',
        following_url:
          'https://api.github.com/users/other_user/following{/other_user}',
        gists_url: 'https://api.github.com/users/other_user/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/other_user/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/other_user/subscriptions',
        organizations_url: 'https://api.github.com/users/other_user/orgs',
        repos_url: 'https://api.github.com/users/other_user/repos',
        events_url: 'https://api.github.com/users/other_user/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/other_user/received_events',
        type: 'User',
        site_admin: false
      }
    ],
    milestone: {
      url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
      html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
      id: 1002604,
      node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
      number: 1,
      state: 'open',
      title: 'v1.0',
      description: 'Tracking milestone for version 1.0',
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
      open_issues: 4,
      closed_issues: 8,
      created_at: '2011-04-10T20:09:31Z',
      updated_at: '2014-03-03T18:58:10Z',
      closed_at: '2013-02-12T13:22:01Z',
      due_on: '2012-10-09T23:39:01Z'
    },
    locked: true,
    active_lock_reason: 'too heated',
    comments: 0,
    pull_request: {
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
      html_url: 'https://github.com/octocat/Hello-World/pull/1347',
      diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
      patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
    },
    closed_at: null,
    created_at: '2011-04-22T13:33:48Z',
    updated_at: '2011-04-22T13:33:48Z',
    author_association: 'collaborator'
  }
}
```

</details>

## [`addLabels(options)`](https://docs.github.com/rest/reference/issues#add-labels-to-an-issue)

**Usage**

```js
const response = await octokit.issues.addLabels({
  owner,
  repo,
  issue_number,
  labels
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `labels` (required, string\[]): The name of the label to add to the issue. Must contain at least one label. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 208045946,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
      url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
      name: 'bug',
      description: "Something isn't working",
      color: 'f29513',
      default: true
    },
    {
      id: 208045947,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDc=',
      url:
        'https://api.github.com/repos/octocat/Hello-World/labels/enhancement',
      name: 'enhancement',
      description: 'New feature or request',
      color: 'a2eeef',
      default: false
    }
  ]
}
```

</details>

**Error when resource is gone (HTTP 410)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.addLabels({
    owner,
    repo,
    issue_number,
    labels
  })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`checkUserCanBeAssigned(options)`](https://docs.github.com/rest/reference/issues#check-if-a-user-can-be-assigned)

Checks if a user has permission to be assigned to an issue in this repository.

If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.

Otherwise a `404` status code is returned.

**Usage**

```js
const response = await octokit.issues.checkUserCanBeAssigned({
  owner,
  repo,
  assignee
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `assignee` (required, string)

**Response if the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned. (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error otherwise (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.checkUserCanBeAssigned({
    owner,
    repo,
    assignee
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`create(options)`](https://docs.github.com/v3/issues/#create-an-issue)

Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits) for details.

**Usage**

```js
const response = await octokit.issues.create({ owner, repo, title })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `title` (required, string): The title of the issue.
- `body` (string): The contents of the issue.
- `assignee` (string): Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_
- `milestone` (integer): The `number` of the milestone to associate this issue with. _NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise._
- `labels` (undefined\[]): Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._
- `assignees` (string\[]): Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDU6SXNzdWUx',
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    repository_url: 'https://api.github.com/repos/octocat/Hello-World',
    labels_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
    comments_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
    events_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
    html_url: 'https://github.com/octocat/Hello-World/issues/1347',
    number: 1347,
    state: 'open',
    title: 'Found a bug',
    body: "I'm having a problem with this.",
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
    labels: [
      {
        id: 208045946,
        node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
        url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
        name: 'bug',
        description: "Something isn't working",
        color: 'f29513',
        default: true
      }
    ],
    assignee: {
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
    assignees: [
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
    ],
    milestone: {
      url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
      html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
      id: 1002604,
      node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
      number: 1,
      state: 'open',
      title: 'v1.0',
      description: 'Tracking milestone for version 1.0',
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
      open_issues: 4,
      closed_issues: 8,
      created_at: '2011-04-10T20:09:31Z',
      updated_at: '2014-03-03T18:58:10Z',
      closed_at: '2013-02-12T13:22:01Z',
      due_on: '2012-10-09T23:39:01Z'
    },
    locked: true,
    active_lock_reason: 'too heated',
    comments: 0,
    pull_request: {
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
      html_url: 'https://github.com/octocat/Hello-World/pull/1347',
      diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
      patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
    },
    closed_at: null,
    created_at: '2011-04-22T13:33:48Z',
    updated_at: '2011-04-22T13:33:48Z',
    closed_by: {
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
    author_association: 'collaborator'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.create({ owner, repo, title })
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
  response = await octokit.issues.create({ owner, repo, title })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`createComment(options)`](https://docs.github.com/rest/reference/issues#create-an-issue-comment)

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits) for details.

**Usage**

```js
const response = await octokit.issues.createComment({
  owner,
  repo,
  issue_number,
  body
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `body` (required, string): The contents of the comment.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDEyOklzc3VlQ29tbWVudDE=',
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/comments/1',
    html_url:
      'https://github.com/octocat/Hello-World/issues/1347#issuecomment-1',
    body: 'Me too',
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
    created_at: '2011-04-14T16:00:49Z',
    updated_at: '2011-04-14T16:00:49Z',
    issue_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    author_association: 'collaborator'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.createComment({
    owner,
    repo,
    issue_number,
    body
  })
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
  response = await octokit.issues.createComment({
    owner,
    repo,
    issue_number,
    body
  })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`createLabel(options)`](https://docs.github.com/rest/reference/issues#create-a-label)

**Usage**

```js
const response = await octokit.issues.createLabel({ owner, repo, name })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `name` (required, string): The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).
- `color` (string): The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
- `description` (string): A short description of the label.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 208045946,
    node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
    url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
    name: 'bug',
    description: "Something isn't working",
    color: 'f29513',
    default: true
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.createLabel({ owner, repo, name })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createMilestone(options)`](https://docs.github.com/rest/reference/issues#create-a-milestone)

**Usage**

```js
const response = await octokit.issues.createMilestone({ owner, repo, title })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `title` (required, string): The title of the milestone.
- `state` (string): The state of the milestone. Either `open` or `closed`.
- `description` (string): A description of the milestone.
- `due_on` (string): The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
    html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
    labels_url:
      'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
    id: 1002604,
    node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
    number: 1,
    state: 'open',
    title: 'v1.0',
    description: 'Tracking milestone for version 1.0',
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
    open_issues: 4,
    closed_issues: 8,
    created_at: '2011-04-10T20:09:31Z',
    updated_at: '2014-03-03T18:58:10Z',
    closed_at: '2013-02-12T13:22:01Z',
    due_on: '2012-10-09T23:39:01Z'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.createMilestone({ owner, repo, title })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteComment(options)`](https://docs.github.com/rest/reference/issues#delete-an-issue-comment)

**Usage**

```js
const response = await octokit.issues.deleteComment({ owner, repo, comment_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteLabel(options)`](https://docs.github.com/rest/reference/issues#delete-a-label)

**Usage**

```js
const response = await octokit.issues.deleteLabel({ owner, repo, name })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `name` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteMilestone(options)`](https://docs.github.com/rest/reference/issues#delete-a-milestone)

**Usage**

```js
const response = await octokit.issues.deleteMilestone({
  owner,
  repo,
  milestone_number
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `milestone_number` (required, integer)

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
  response = await octokit.issues.deleteMilestone({
    owner,
    repo,
    milestone_number
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`get(options)`](https://docs.github.com/v3/issues/#get-an-issue)

The API returns a [`301 Moved Permanently` status](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was [transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe to the [`issues`](https://docs.github.com/webhooks/event-payloads/#issues) webhook.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the [List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests) endpoint.

**Usage**

```js
const response = await octokit.issues.get({ owner, repo, issue_number })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDU6SXNzdWUx',
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    repository_url: 'https://api.github.com/repos/octocat/Hello-World',
    labels_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
    comments_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
    events_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
    html_url: 'https://github.com/octocat/Hello-World/issues/1347',
    number: 1347,
    state: 'open',
    title: 'Found a bug',
    body: "I'm having a problem with this.",
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
    labels: [
      {
        id: 208045946,
        node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
        url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
        name: 'bug',
        description: "Something isn't working",
        color: 'f29513',
        default: true
      }
    ],
    assignee: {
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
    assignees: [
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
    ],
    milestone: {
      url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
      html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
      id: 1002604,
      node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
      number: 1,
      state: 'open',
      title: 'v1.0',
      description: 'Tracking milestone for version 1.0',
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
      open_issues: 4,
      closed_issues: 8,
      created_at: '2011-04-10T20:09:31Z',
      updated_at: '2014-03-03T18:58:10Z',
      closed_at: '2013-02-12T13:22:01Z',
      due_on: '2012-10-09T23:39:01Z'
    },
    locked: true,
    active_lock_reason: 'too heated',
    comments: 0,
    pull_request: {
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
      html_url: 'https://github.com/octocat/Hello-World/pull/1347',
      diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
      patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
    },
    closed_at: null,
    created_at: '2011-04-22T13:33:48Z',
    updated_at: '2011-04-22T13:33:48Z',
    closed_by: {
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
    author_association: 'collaborator'
  }
}
```

</details>

**Moved Permanently (HTTP 301)**

<details><summary>Example</summary>

```js
const response = { status: 301 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.get({ owner, repo, issue_number })
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
  response = await octokit.issues.get({ owner, repo, issue_number })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`getComment(options)`](https://docs.github.com/rest/reference/issues#get-an-issue-comment)

**Usage**

```js
const response = await octokit.issues.getComment({ owner, repo, comment_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDEyOklzc3VlQ29tbWVudDE=',
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/comments/1',
    html_url:
      'https://github.com/octocat/Hello-World/issues/1347#issuecomment-1',
    body: 'Me too',
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
    created_at: '2011-04-14T16:00:49Z',
    updated_at: '2011-04-14T16:00:49Z',
    issue_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    author_association: 'collaborator'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.getComment({ owner, repo, comment_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getEvent(options)`](https://docs.github.com/rest/reference/issues#get-an-issue-event)

**Usage**

```js
const response = await octokit.issues.getEvent({ owner, repo, event_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `event_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDEwOklzc3VlRXZlbnQx',
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/events/1',
    actor: {
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
    event: 'closed',
    commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    commit_url:
      'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
    created_at: '2011-04-14T16:00:49Z',
    issue: {
      id: 1,
      node_id: 'MDU6SXNzdWUx',
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
      repository_url: 'https://api.github.com/repos/octocat/Hello-World',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
      comments_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
      events_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
      html_url: 'https://github.com/octocat/Hello-World/issues/1347',
      number: 1347,
      state: 'open',
      title: 'Found a bug',
      body: "I'm having a problem with this.",
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
      labels: [
        {
          id: 208045946,
          node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
          url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
          name: 'bug',
          description: "Something isn't working",
          color: 'f29513',
          default: true
        }
      ],
      assignee: {
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
      assignees: [
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        }
      ],
      milestone: {
        url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
        html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
        labels_url:
          'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
        id: 1002604,
        node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
        number: 1,
        state: 'open',
        title: 'v1.0',
        description: 'Tracking milestone for version 1.0',
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        },
        open_issues: 4,
        closed_issues: 8,
        created_at: '2011-04-10T20:09:31Z',
        updated_at: '2014-03-03T18:58:10Z',
        closed_at: '2013-02-12T13:22:01Z',
        due_on: '2012-10-09T23:39:01Z'
      },
      locked: true,
      active_lock_reason: 'too heated',
      comments: 0,
      pull_request: {
        url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
        html_url: 'https://github.com/octocat/Hello-World/pull/1347',
        diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
        patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
      },
      closed_at: null,
      created_at: '2011-04-22T13:33:48Z',
      updated_at: '2011-04-22T13:33:48Z',
      author_association: 'collaborator'
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.getEvent({ owner, repo, event_id })
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
  response = await octokit.issues.getEvent({ owner, repo, event_id })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`getLabel(options)`](https://docs.github.com/rest/reference/issues#get-a-label)

**Usage**

```js
const response = await octokit.issues.getLabel({ owner, repo, name })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `name` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 208045946,
    node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
    url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
    name: 'bug',
    description: "Something isn't working",
    color: 'f29513',
    default: true
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.getLabel({ owner, repo, name })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getMilestone(options)`](https://docs.github.com/rest/reference/issues#get-a-milestone)

**Usage**

```js
const response = await octokit.issues.getMilestone({
  owner,
  repo,
  milestone_number
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `milestone_number` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
    html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
    labels_url:
      'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
    id: 1002604,
    node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
    number: 1,
    state: 'open',
    title: 'v1.0',
    description: 'Tracking milestone for version 1.0',
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
    open_issues: 4,
    closed_issues: 8,
    created_at: '2011-04-10T20:09:31Z',
    updated_at: '2014-03-03T18:58:10Z',
    closed_at: '2013-02-12T13:22:01Z',
    due_on: '2012-10-09T23:39:01Z'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.getMilestone({
    owner,
    repo,
    milestone_number
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`list([options])`](https://docs.github.com/v3/issues/#list-issues-assigned-to-the-authenticated-user)

List issues assigned to the authenticated user across all visible repositories including owned repositories, member repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not necessarily assigned to you.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the [List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests) endpoint.

**Usage**

```js
const response = await octokit.issues.list()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.list.all(options)) {
  console.log(response.data)
}
```

</details>

**Options**

- `filter` (string): Indicates which sorts of issues to return. Can be one of:  
  \* `assigned`: Issues assigned to you  
  \* `created`: Issues created by you  
  \* `mentioned`: Issues mentioning you  
  \* `subscribed`: Issues you're subscribed to updates for  
  \* `all`: All issues the authenticated user can see, regardless of participation or creation
- `state` (string): Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
- `labels` (string): A list of comma separated label names. Example: `bug,ui,@high`
- `sort` (string): What to sort results by. Can be either `created`, `updated`, `comments`.
- `direction` (string): One of `asc` (ascending) or `desc` (descending).
- `since` (string): Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `collab` (boolean)
- `orgs` (boolean)
- `owned` (boolean)
- `pulls` (boolean)
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
      node_id: 'MDU6SXNzdWUx',
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
      repository_url: 'https://api.github.com/repos/octocat/Hello-World',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
      comments_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
      events_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
      html_url: 'https://github.com/octocat/Hello-World/issues/1347',
      number: 1347,
      state: 'open',
      title: 'Found a bug',
      body: "I'm having a problem with this.",
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
      labels: [
        {
          id: 208045946,
          node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
          url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
          name: 'bug',
          description: "Something isn't working",
          color: 'f29513',
          default: true
        }
      ],
      assignee: {
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
      assignees: [
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        }
      ],
      milestone: {
        url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
        html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
        labels_url:
          'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
        id: 1002604,
        node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
        number: 1,
        state: 'open',
        title: 'v1.0',
        description: 'Tracking milestone for version 1.0',
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        },
        open_issues: 4,
        closed_issues: 8,
        created_at: '2011-04-10T20:09:31Z',
        updated_at: '2014-03-03T18:58:10Z',
        closed_at: '2013-02-12T13:22:01Z',
        due_on: '2012-10-09T23:39:01Z'
      },
      locked: true,
      active_lock_reason: 'too heated',
      comments: 0,
      pull_request: {
        url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
        html_url: 'https://github.com/octocat/Hello-World/pull/1347',
        diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
        patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
      },
      closed_at: null,
      created_at: '2011-04-22T13:33:48Z',
      updated_at: '2011-04-22T13:33:48Z',
      repository: {
        id: 1296269,
        node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
        name: 'Hello-World',
        full_name: 'octocat/Hello-World',
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        },
        private: false,
        html_url: 'https://github.com/octocat/Hello-World',
        description: 'This your first repo!',
        fork: false,
        url: 'https://api.github.com/repos/octocat/Hello-World',
        archive_url:
          'https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}',
        assignees_url:
          'https://api.github.com/repos/octocat/Hello-World/assignees{/user}',
        blobs_url:
          'https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}',
        branches_url:
          'https://api.github.com/repos/octocat/Hello-World/branches{/branch}',
        collaborators_url:
          'https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}',
        comments_url:
          'https://api.github.com/repos/octocat/Hello-World/comments{/number}',
        commits_url:
          'https://api.github.com/repos/octocat/Hello-World/commits{/sha}',
        compare_url:
          'https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}',
        contents_url:
          'https://api.github.com/repos/octocat/Hello-World/contents/{+path}',
        contributors_url:
          'https://api.github.com/repos/octocat/Hello-World/contributors',
        deployments_url:
          'https://api.github.com/repos/octocat/Hello-World/deployments',
        downloads_url:
          'https://api.github.com/repos/octocat/Hello-World/downloads',
        events_url: 'https://api.github.com/repos/octocat/Hello-World/events',
        forks_url: 'https://api.github.com/repos/octocat/Hello-World/forks',
        git_commits_url:
          'https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}',
        git_refs_url:
          'https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}',
        git_url: 'git:github.com/octocat/Hello-World.git',
        issue_comment_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}',
        issue_events_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/events{/number}',
        issues_url:
          'https://api.github.com/repos/octocat/Hello-World/issues{/number}',
        keys_url:
          'https://api.github.com/repos/octocat/Hello-World/keys{/key_id}',
        labels_url:
          'https://api.github.com/repos/octocat/Hello-World/labels{/name}',
        languages_url:
          'https://api.github.com/repos/octocat/Hello-World/languages',
        merges_url: 'https://api.github.com/repos/octocat/Hello-World/merges',
        milestones_url:
          'https://api.github.com/repos/octocat/Hello-World/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}',
        pulls_url:
          'https://api.github.com/repos/octocat/Hello-World/pulls{/number}',
        releases_url:
          'https://api.github.com/repos/octocat/Hello-World/releases{/id}',
        ssh_url: 'git@github.com:octocat/Hello-World.git',
        stargazers_url:
          'https://api.github.com/repos/octocat/Hello-World/stargazers',
        statuses_url:
          'https://api.github.com/repos/octocat/Hello-World/statuses/{sha}',
        subscribers_url:
          'https://api.github.com/repos/octocat/Hello-World/subscribers',
        subscription_url:
          'https://api.github.com/repos/octocat/Hello-World/subscription',
        tags_url: 'https://api.github.com/repos/octocat/Hello-World/tags',
        teams_url: 'https://api.github.com/repos/octocat/Hello-World/teams',
        trees_url:
          'https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}',
        clone_url: 'https://github.com/octocat/Hello-World.git',
        mirror_url: 'git:git.example.com/octocat/Hello-World',
        hooks_url: 'https://api.github.com/repos/octocat/Hello-World/hooks',
        svn_url: 'https://svn.github.com/octocat/Hello-World',
        homepage: 'https://github.com',
        language: null,
        forks_count: 9,
        stargazers_count: 80,
        watchers_count: 80,
        size: 108,
        default_branch: 'master',
        open_issues_count: 0,
        is_template: true,
        topics: ['octocat', 'atom', 'electron', 'api'],
        has_issues: true,
        has_projects: true,
        has_wiki: true,
        has_pages: false,
        has_downloads: true,
        archived: false,
        disabled: false,
        visibility: 'public',
        pushed_at: '2011-01-26T19:06:43Z',
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        permissions: {
          admin: false,
          push: false,
          pull: true
        },
        allow_rebase_merge: true,
        template_repository: null,
        temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
        allow_squash_merge: true,
        delete_branch_on_merge: true,
        allow_merge_commit: true,
        subscribers_count: 42,
        network_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          url: 'https://api.github.com/licenses/mit',
          spdx_id: 'MIT',
          node_id: 'MDc6TGljZW5zZW1pdA==',
          html_url: 'https://github.com/licenses/mit'
        },
        forks: 1,
        open_issues: 1,
        watchers: 1
      },
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
  response = await octokit.issues.list()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listAssignees(options)`](https://docs.github.com/rest/reference/issues#list-assignees)

Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.

**Usage**

```js
const response = await octokit.issues.listAssignees({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listAssignees.all({
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
  response = await octokit.issues.listAssignees({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listComments(options)`](https://docs.github.com/rest/reference/issues#list-issue-comments)

Issue Comments are ordered by ascending ID.

**Usage**

```js
const response = await octokit.issues.listComments({
  owner,
  repo,
  issue_number
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listComments.all({
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
      id: 1,
      node_id: 'MDEyOklzc3VlQ29tbWVudDE=',
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/comments/1',
      html_url:
        'https://github.com/octocat/Hello-World/issues/1347#issuecomment-1',
      body: 'Me too',
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
      created_at: '2011-04-14T16:00:49Z',
      updated_at: '2011-04-14T16:00:49Z',
      issue_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
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
  response = await octokit.issues.listComments({ owner, repo, issue_number })
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
  response = await octokit.issues.listComments({ owner, repo, issue_number })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`listCommentsForRepo(options)`](https://docs.github.com/rest/reference/issues#list-issue-comments-for-a-repository)

By default, Issue Comments are ordered by ascending ID.

**Usage**

```js
const response = await octokit.issues.listCommentsForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listCommentsForRepo.all({
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
- `sort` (string): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
- `direction` (string): Either `asc` or `desc`. Ignored without the `sort` parameter.
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
      id: 1,
      node_id: 'MDEyOklzc3VlQ29tbWVudDE=',
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/comments/1',
      html_url:
        'https://github.com/octocat/Hello-World/issues/1347#issuecomment-1',
      body: 'Me too',
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
      created_at: '2011-04-14T16:00:49Z',
      updated_at: '2011-04-14T16:00:49Z',
      issue_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
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
  response = await octokit.issues.listCommentsForRepo({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listEvents(options)`](https://docs.github.com/rest/reference/issues#list-issue-events)

**Usage**

```js
const response = await octokit.issues.listEvents({ owner, repo, issue_number })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listEvents.all({
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
      node_id: 'MDEwOklzc3VlRXZlbnQx',
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/events/1',
      actor: {
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
      event: 'closed',
      commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
      commit_url:
        'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
      created_at: '2011-04-14T16:00:49Z'
    }
  ]
}
```

</details>

**Error when resource is gone (HTTP 410)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.listEvents({ owner, repo, issue_number })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`listEventsForRepo(options)`](https://docs.github.com/rest/reference/issues#list-issue-events-for-a-repository)

**Usage**

```js
const response = await octokit.issues.listEventsForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listEventsForRepo.all({
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
      node_id: 'MDEwOklzc3VlRXZlbnQx',
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/events/1',
      actor: {
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
      event: 'closed',
      commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
      commit_url:
        'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
      created_at: '2011-04-14T16:00:49Z',
      issue: {
        id: 1,
        node_id: 'MDU6SXNzdWUx',
        url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
        repository_url: 'https://api.github.com/repos/octocat/Hello-World',
        labels_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
        comments_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
        events_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
        html_url: 'https://github.com/octocat/Hello-World/issues/1347',
        number: 1347,
        state: 'open',
        title: 'Found a bug',
        body: "I'm having a problem with this.",
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        },
        labels: [
          {
            id: 208045946,
            node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
            url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
            name: 'bug',
            description: "Something isn't working",
            color: 'f29513',
            default: true
          }
        ],
        assignee: {
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        },
        assignees: [
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
            subscriptions_url:
              'https://api.github.com/users/octocat/subscriptions',
            organizations_url: 'https://api.github.com/users/octocat/orgs',
            repos_url: 'https://api.github.com/users/octocat/repos',
            events_url: 'https://api.github.com/users/octocat/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/octocat/received_events',
            type: 'User',
            site_admin: false
          }
        ],
        milestone: {
          url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
          html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
          labels_url:
            'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
          id: 1002604,
          node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
          number: 1,
          state: 'open',
          title: 'v1.0',
          description: 'Tracking milestone for version 1.0',
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
            subscriptions_url:
              'https://api.github.com/users/octocat/subscriptions',
            organizations_url: 'https://api.github.com/users/octocat/orgs',
            repos_url: 'https://api.github.com/users/octocat/repos',
            events_url: 'https://api.github.com/users/octocat/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/octocat/received_events',
            type: 'User',
            site_admin: false
          },
          open_issues: 4,
          closed_issues: 8,
          created_at: '2011-04-10T20:09:31Z',
          updated_at: '2014-03-03T18:58:10Z',
          closed_at: '2013-02-12T13:22:01Z',
          due_on: '2012-10-09T23:39:01Z'
        },
        locked: true,
        active_lock_reason: 'too heated',
        comments: 0,
        pull_request: {
          url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
          html_url: 'https://github.com/octocat/Hello-World/pull/1347',
          diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
          patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
        },
        closed_at: null,
        created_at: '2011-04-22T13:33:48Z',
        updated_at: '2011-04-22T13:33:48Z',
        author_association: 'collaborator'
      }
    }
  ]
}
```

</details>

## [`listEventsForTimeline(options)`](https://docs.github.com/rest/reference/issues#list-timeline-events-for-an-issue)

**Usage**

```js
const response = await octokit.issues.listEventsForTimeline({
  owner,
  repo,
  issue_number
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listEventsForTimeline.all({
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
      node_id: 'MDEwOklzc3VlRXZlbnQx',
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/events/1',
      actor: {
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
      event: 'closed',
      commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
      commit_url:
        'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
      created_at: '2011-04-14T16:00:49Z'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.listEventsForTimeline({
    owner,
    repo,
    issue_number
  })
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
  response = await octokit.issues.listEventsForTimeline({
    owner,
    repo,
    issue_number
  })
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
  response = await octokit.issues.listEventsForTimeline({
    owner,
    repo,
    issue_number
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listForAuthenticatedUser([options])`](https://docs.github.com/v3/issues/#list-user-account-issues-assigned-to-the-authenticated-user)

List issues across owned and member repositories assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the [List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests) endpoint.

**Usage**

```js
const response = await octokit.issues.listForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listForAuthenticatedUser.all(
  options
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `filter` (string): Indicates which sorts of issues to return. Can be one of:  
  \* `assigned`: Issues assigned to you  
  \* `created`: Issues created by you  
  \* `mentioned`: Issues mentioning you  
  \* `subscribed`: Issues you're subscribed to updates for  
  \* `all`: All issues the authenticated user can see, regardless of participation or creation
- `state` (string): Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
- `labels` (string): A list of comma separated label names. Example: `bug,ui,@high`
- `sort` (string): What to sort results by. Can be either `created`, `updated`, `comments`.
- `direction` (string): One of `asc` (ascending) or `desc` (descending).
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
      id: 1,
      node_id: 'MDU6SXNzdWUx',
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
      repository_url: 'https://api.github.com/repos/octocat/Hello-World',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
      comments_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
      events_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
      html_url: 'https://github.com/octocat/Hello-World/issues/1347',
      number: 1347,
      state: 'open',
      title: 'Found a bug',
      body: "I'm having a problem with this.",
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
      labels: [
        {
          id: 208045946,
          node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
          url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
          name: 'bug',
          description: "Something isn't working",
          color: 'f29513',
          default: true
        }
      ],
      assignee: {
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
      assignees: [
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        }
      ],
      milestone: {
        url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
        html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
        labels_url:
          'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
        id: 1002604,
        node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
        number: 1,
        state: 'open',
        title: 'v1.0',
        description: 'Tracking milestone for version 1.0',
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        },
        open_issues: 4,
        closed_issues: 8,
        created_at: '2011-04-10T20:09:31Z',
        updated_at: '2014-03-03T18:58:10Z',
        closed_at: '2013-02-12T13:22:01Z',
        due_on: '2012-10-09T23:39:01Z'
      },
      locked: true,
      active_lock_reason: 'too heated',
      comments: 0,
      pull_request: {
        url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
        html_url: 'https://github.com/octocat/Hello-World/pull/1347',
        diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
        patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
      },
      closed_at: null,
      created_at: '2011-04-22T13:33:48Z',
      updated_at: '2011-04-22T13:33:48Z',
      repository: {
        id: 1296269,
        node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
        name: 'Hello-World',
        full_name: 'octocat/Hello-World',
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        },
        private: false,
        html_url: 'https://github.com/octocat/Hello-World',
        description: 'This your first repo!',
        fork: false,
        url: 'https://api.github.com/repos/octocat/Hello-World',
        archive_url:
          'https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}',
        assignees_url:
          'https://api.github.com/repos/octocat/Hello-World/assignees{/user}',
        blobs_url:
          'https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}',
        branches_url:
          'https://api.github.com/repos/octocat/Hello-World/branches{/branch}',
        collaborators_url:
          'https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}',
        comments_url:
          'https://api.github.com/repos/octocat/Hello-World/comments{/number}',
        commits_url:
          'https://api.github.com/repos/octocat/Hello-World/commits{/sha}',
        compare_url:
          'https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}',
        contents_url:
          'https://api.github.com/repos/octocat/Hello-World/contents/{+path}',
        contributors_url:
          'https://api.github.com/repos/octocat/Hello-World/contributors',
        deployments_url:
          'https://api.github.com/repos/octocat/Hello-World/deployments',
        downloads_url:
          'https://api.github.com/repos/octocat/Hello-World/downloads',
        events_url: 'https://api.github.com/repos/octocat/Hello-World/events',
        forks_url: 'https://api.github.com/repos/octocat/Hello-World/forks',
        git_commits_url:
          'https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}',
        git_refs_url:
          'https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}',
        git_url: 'git:github.com/octocat/Hello-World.git',
        issue_comment_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}',
        issue_events_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/events{/number}',
        issues_url:
          'https://api.github.com/repos/octocat/Hello-World/issues{/number}',
        keys_url:
          'https://api.github.com/repos/octocat/Hello-World/keys{/key_id}',
        labels_url:
          'https://api.github.com/repos/octocat/Hello-World/labels{/name}',
        languages_url:
          'https://api.github.com/repos/octocat/Hello-World/languages',
        merges_url: 'https://api.github.com/repos/octocat/Hello-World/merges',
        milestones_url:
          'https://api.github.com/repos/octocat/Hello-World/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}',
        pulls_url:
          'https://api.github.com/repos/octocat/Hello-World/pulls{/number}',
        releases_url:
          'https://api.github.com/repos/octocat/Hello-World/releases{/id}',
        ssh_url: 'git@github.com:octocat/Hello-World.git',
        stargazers_url:
          'https://api.github.com/repos/octocat/Hello-World/stargazers',
        statuses_url:
          'https://api.github.com/repos/octocat/Hello-World/statuses/{sha}',
        subscribers_url:
          'https://api.github.com/repos/octocat/Hello-World/subscribers',
        subscription_url:
          'https://api.github.com/repos/octocat/Hello-World/subscription',
        tags_url: 'https://api.github.com/repos/octocat/Hello-World/tags',
        teams_url: 'https://api.github.com/repos/octocat/Hello-World/teams',
        trees_url:
          'https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}',
        clone_url: 'https://github.com/octocat/Hello-World.git',
        mirror_url: 'git:git.example.com/octocat/Hello-World',
        hooks_url: 'https://api.github.com/repos/octocat/Hello-World/hooks',
        svn_url: 'https://svn.github.com/octocat/Hello-World',
        homepage: 'https://github.com',
        language: null,
        forks_count: 9,
        stargazers_count: 80,
        watchers_count: 80,
        size: 108,
        default_branch: 'master',
        open_issues_count: 0,
        is_template: true,
        topics: ['octocat', 'atom', 'electron', 'api'],
        has_issues: true,
        has_projects: true,
        has_wiki: true,
        has_pages: false,
        has_downloads: true,
        archived: false,
        disabled: false,
        visibility: 'public',
        pushed_at: '2011-01-26T19:06:43Z',
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        permissions: {
          admin: false,
          push: false,
          pull: true
        },
        allow_rebase_merge: true,
        template_repository: null,
        temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
        allow_squash_merge: true,
        delete_branch_on_merge: true,
        allow_merge_commit: true,
        subscribers_count: 42,
        network_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          url: 'https://api.github.com/licenses/mit',
          spdx_id: 'MIT',
          node_id: 'MDc6TGljZW5zZW1pdA==',
          html_url: 'https://github.com/licenses/mit'
        },
        forks: 1,
        open_issues: 1,
        watchers: 1
      },
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
  response = await octokit.issues.listForAuthenticatedUser()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listForOrg(options)`](https://docs.github.com/v3/issues/#list-organization-issues-assigned-to-the-authenticated-user)

List issues in an organization assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the [List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests) endpoint.

**Usage**

```js
const response = await octokit.issues.listForOrg({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listForOrg.all({ org })) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `filter` (string): Indicates which sorts of issues to return. Can be one of:  
  \* `assigned`: Issues assigned to you  
  \* `created`: Issues created by you  
  \* `mentioned`: Issues mentioning you  
  \* `subscribed`: Issues you're subscribed to updates for  
  \* `all`: All issues the authenticated user can see, regardless of participation or creation
- `state` (string): Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
- `labels` (string): A list of comma separated label names. Example: `bug,ui,@high`
- `sort` (string): What to sort results by. Can be either `created`, `updated`, `comments`.
- `direction` (string): One of `asc` (ascending) or `desc` (descending).
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
      id: 1,
      node_id: 'MDU6SXNzdWUx',
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
      repository_url: 'https://api.github.com/repos/octocat/Hello-World',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
      comments_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
      events_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
      html_url: 'https://github.com/octocat/Hello-World/issues/1347',
      number: 1347,
      state: 'open',
      title: 'Found a bug',
      body: "I'm having a problem with this.",
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
      labels: [
        {
          id: 208045946,
          node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
          url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
          name: 'bug',
          description: "Something isn't working",
          color: 'f29513',
          default: true
        }
      ],
      assignee: {
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
      assignees: [
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        }
      ],
      milestone: {
        url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
        html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
        labels_url:
          'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
        id: 1002604,
        node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
        number: 1,
        state: 'open',
        title: 'v1.0',
        description: 'Tracking milestone for version 1.0',
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        },
        open_issues: 4,
        closed_issues: 8,
        created_at: '2011-04-10T20:09:31Z',
        updated_at: '2014-03-03T18:58:10Z',
        closed_at: '2013-02-12T13:22:01Z',
        due_on: '2012-10-09T23:39:01Z'
      },
      locked: true,
      active_lock_reason: 'too heated',
      comments: 0,
      pull_request: {
        url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
        html_url: 'https://github.com/octocat/Hello-World/pull/1347',
        diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
        patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
      },
      closed_at: null,
      created_at: '2011-04-22T13:33:48Z',
      updated_at: '2011-04-22T13:33:48Z',
      repository: {
        id: 1296269,
        node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
        name: 'Hello-World',
        full_name: 'octocat/Hello-World',
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        },
        private: false,
        html_url: 'https://github.com/octocat/Hello-World',
        description: 'This your first repo!',
        fork: false,
        url: 'https://api.github.com/repos/octocat/Hello-World',
        archive_url:
          'https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}',
        assignees_url:
          'https://api.github.com/repos/octocat/Hello-World/assignees{/user}',
        blobs_url:
          'https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}',
        branches_url:
          'https://api.github.com/repos/octocat/Hello-World/branches{/branch}',
        collaborators_url:
          'https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}',
        comments_url:
          'https://api.github.com/repos/octocat/Hello-World/comments{/number}',
        commits_url:
          'https://api.github.com/repos/octocat/Hello-World/commits{/sha}',
        compare_url:
          'https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}',
        contents_url:
          'https://api.github.com/repos/octocat/Hello-World/contents/{+path}',
        contributors_url:
          'https://api.github.com/repos/octocat/Hello-World/contributors',
        deployments_url:
          'https://api.github.com/repos/octocat/Hello-World/deployments',
        downloads_url:
          'https://api.github.com/repos/octocat/Hello-World/downloads',
        events_url: 'https://api.github.com/repos/octocat/Hello-World/events',
        forks_url: 'https://api.github.com/repos/octocat/Hello-World/forks',
        git_commits_url:
          'https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}',
        git_refs_url:
          'https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}',
        git_url: 'git:github.com/octocat/Hello-World.git',
        issue_comment_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}',
        issue_events_url:
          'https://api.github.com/repos/octocat/Hello-World/issues/events{/number}',
        issues_url:
          'https://api.github.com/repos/octocat/Hello-World/issues{/number}',
        keys_url:
          'https://api.github.com/repos/octocat/Hello-World/keys{/key_id}',
        labels_url:
          'https://api.github.com/repos/octocat/Hello-World/labels{/name}',
        languages_url:
          'https://api.github.com/repos/octocat/Hello-World/languages',
        merges_url: 'https://api.github.com/repos/octocat/Hello-World/merges',
        milestones_url:
          'https://api.github.com/repos/octocat/Hello-World/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}',
        pulls_url:
          'https://api.github.com/repos/octocat/Hello-World/pulls{/number}',
        releases_url:
          'https://api.github.com/repos/octocat/Hello-World/releases{/id}',
        ssh_url: 'git@github.com:octocat/Hello-World.git',
        stargazers_url:
          'https://api.github.com/repos/octocat/Hello-World/stargazers',
        statuses_url:
          'https://api.github.com/repos/octocat/Hello-World/statuses/{sha}',
        subscribers_url:
          'https://api.github.com/repos/octocat/Hello-World/subscribers',
        subscription_url:
          'https://api.github.com/repos/octocat/Hello-World/subscription',
        tags_url: 'https://api.github.com/repos/octocat/Hello-World/tags',
        teams_url: 'https://api.github.com/repos/octocat/Hello-World/teams',
        trees_url:
          'https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}',
        clone_url: 'https://github.com/octocat/Hello-World.git',
        mirror_url: 'git:git.example.com/octocat/Hello-World',
        hooks_url: 'https://api.github.com/repos/octocat/Hello-World/hooks',
        svn_url: 'https://svn.github.com/octocat/Hello-World',
        homepage: 'https://github.com',
        language: null,
        forks_count: 9,
        stargazers_count: 80,
        watchers_count: 80,
        size: 108,
        default_branch: 'master',
        open_issues_count: 0,
        is_template: true,
        topics: ['octocat', 'atom', 'electron', 'api'],
        has_issues: true,
        has_projects: true,
        has_wiki: true,
        has_pages: false,
        has_downloads: true,
        archived: false,
        disabled: false,
        visibility: 'public',
        pushed_at: '2011-01-26T19:06:43Z',
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        permissions: {
          admin: false,
          push: false,
          pull: true
        },
        allow_rebase_merge: true,
        template_repository: null,
        temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
        allow_squash_merge: true,
        delete_branch_on_merge: true,
        allow_merge_commit: true,
        subscribers_count: 42,
        network_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          url: 'https://api.github.com/licenses/mit',
          spdx_id: 'MIT',
          node_id: 'MDc6TGljZW5zZW1pdA==',
          html_url: 'https://github.com/licenses/mit'
        },
        forks: 1,
        open_issues: 1,
        watchers: 1
      },
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
  response = await octokit.issues.listForOrg({ org })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listForRepo(options)`](https://docs.github.com/v3/issues/#list-repository-issues)

List issues in a repository.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the [List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests) endpoint.

**Usage**

```js
const response = await octokit.issues.listForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listForRepo.all({ owner, repo })) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `milestone` (string): If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
- `state` (string): Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
- `assignee` (string): Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
- `creator` (string): The user that created the issue.
- `mentioned` (string): A user that's mentioned in the issue.
- `labels` (string): A list of comma separated label names. Example: `bug,ui,@high`
- `sort` (string): What to sort results by. Can be either `created`, `updated`, `comments`.
- `direction` (string): One of `asc` (ascending) or `desc` (descending).
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
      id: 1,
      node_id: 'MDU6SXNzdWUx',
      url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
      repository_url: 'https://api.github.com/repos/octocat/Hello-World',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
      comments_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
      events_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
      html_url: 'https://github.com/octocat/Hello-World/issues/1347',
      number: 1347,
      state: 'open',
      title: 'Found a bug',
      body: "I'm having a problem with this.",
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
      labels: [
        {
          id: 208045946,
          node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
          url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
          name: 'bug',
          description: "Something isn't working",
          color: 'f29513',
          default: true
        }
      ],
      assignee: {
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
      assignees: [
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        }
      ],
      milestone: {
        url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
        html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
        labels_url:
          'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
        id: 1002604,
        node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
        number: 1,
        state: 'open',
        title: 'v1.0',
        description: 'Tracking milestone for version 1.0',
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
          subscriptions_url:
            'https://api.github.com/users/octocat/subscriptions',
          organizations_url: 'https://api.github.com/users/octocat/orgs',
          repos_url: 'https://api.github.com/users/octocat/repos',
          events_url: 'https://api.github.com/users/octocat/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octocat/received_events',
          type: 'User',
          site_admin: false
        },
        open_issues: 4,
        closed_issues: 8,
        created_at: '2011-04-10T20:09:31Z',
        updated_at: '2014-03-03T18:58:10Z',
        closed_at: '2013-02-12T13:22:01Z',
        due_on: '2012-10-09T23:39:01Z'
      },
      locked: true,
      active_lock_reason: 'too heated',
      comments: 0,
      pull_request: {
        url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
        html_url: 'https://github.com/octocat/Hello-World/pull/1347',
        diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
        patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
      },
      closed_at: null,
      created_at: '2011-04-22T13:33:48Z',
      updated_at: '2011-04-22T13:33:48Z',
      author_association: 'collaborator'
    }
  ]
}
```

</details>

**Moved Permanently (HTTP 301)**

<details><summary>Example</summary>

```js
const response = { status: 301 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.listForRepo({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listLabelsForMilestone(options)`](https://docs.github.com/rest/reference/issues#list-labels-for-issues-in-a-milestone)

**Usage**

```js
const response = await octokit.issues.listLabelsForMilestone({
  owner,
  repo,
  milestone_number
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listLabelsForMilestone.all({
  owner,
  repo,
  milestone_number
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `milestone_number` (required, integer)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 208045946,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
      url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
      name: 'bug',
      description: "Something isn't working",
      color: 'f29513',
      default: true
    },
    {
      id: 208045947,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDc=',
      url:
        'https://api.github.com/repos/octocat/Hello-World/labels/enhancement',
      name: 'enhancement',
      description: 'New feature or request',
      color: 'a2eeef',
      default: false
    }
  ]
}
```

</details>

## [`listLabelsForRepo(options)`](https://docs.github.com/rest/reference/issues#list-labels-for-a-repository)

**Usage**

```js
const response = await octokit.issues.listLabelsForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listLabelsForRepo.all({
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
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 208045946,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
      url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
      name: 'bug',
      description: "Something isn't working",
      color: 'f29513',
      default: true
    },
    {
      id: 208045947,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDc=',
      url:
        'https://api.github.com/repos/octocat/Hello-World/labels/enhancement',
      name: 'enhancement',
      description: 'New feature or request',
      color: 'a2eeef',
      default: false
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.listLabelsForRepo({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listLabelsOnIssue(options)`](https://docs.github.com/rest/reference/issues#list-labels-for-an-issue)

**Usage**

```js
const response = await octokit.issues.listLabelsOnIssue({
  owner,
  repo,
  issue_number
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listLabelsOnIssue.all({
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
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 208045946,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
      url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
      name: 'bug',
      description: "Something isn't working",
      color: 'f29513',
      default: true
    },
    {
      id: 208045947,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDc=',
      url:
        'https://api.github.com/repos/octocat/Hello-World/labels/enhancement',
      name: 'enhancement',
      description: 'New feature or request',
      color: 'a2eeef',
      default: false
    }
  ]
}
```

</details>

**Error when resource is gone (HTTP 410)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.listLabelsOnIssue({
    owner,
    repo,
    issue_number
  })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`listMilestones(options)`](https://docs.github.com/rest/reference/issues#list-milestones)

**Usage**

```js
const response = await octokit.issues.listMilestones({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.issues.listMilestones.all({
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
- `state` (string): The state of the milestone. Either `open`, `closed`, or `all`.
- `sort` (string): What to sort results by. Either `due_on` or `completeness`.
- `direction` (string): The direction of the sort. Either `asc` or `desc`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
      html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
      id: 1002604,
      node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
      number: 1,
      state: 'open',
      title: 'v1.0',
      description: 'Tracking milestone for version 1.0',
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
      open_issues: 4,
      closed_issues: 8,
      created_at: '2011-04-10T20:09:31Z',
      updated_at: '2014-03-03T18:58:10Z',
      closed_at: '2013-02-12T13:22:01Z',
      due_on: '2012-10-09T23:39:01Z'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.listMilestones({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`lock(options)`](https://docs.github.com/v3/issues/#lock-an-issue)

Users with push access can lock an issue or pull request's conversation.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see [HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs).

**Usage**

```js
const response = await octokit.issues.lock({ owner, repo, issue_number })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `lock_reason` (string): The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:  
  \* `off-topic`  
  \* `too heated`  
  \* `resolved`  
  \* `spam`

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
  response = await octokit.issues.lock({ owner, repo, issue_number })
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
  response = await octokit.issues.lock({ owner, repo, issue_number })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`removeAllLabels(options)`](https://docs.github.com/rest/reference/issues#remove-all-labels-from-an-issue)

**Usage**

```js
const response = await octokit.issues.removeAllLabels({
  owner,
  repo,
  issue_number
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)

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
  response = await octokit.issues.removeAllLabels({ owner, repo, issue_number })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`removeAssignees(options)`](https://docs.github.com/rest/reference/issues#remove-assignees-from-an-issue)

Removes one or more assignees from an issue.

**Usage**

```js
const response = await octokit.issues.removeAssignees({
  owner,
  repo,
  issue_number
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `assignees` (string\[]): Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDU6SXNzdWUx',
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    repository_url: 'https://api.github.com/repos/octocat/Hello-World',
    labels_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
    comments_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
    events_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
    html_url: 'https://github.com/octocat/Hello-World/issues/1347',
    number: 1347,
    state: 'open',
    title: 'Found a bug',
    body: "I'm having a problem with this.",
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
    labels: [
      {
        id: 208045946,
        node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
        url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
        name: 'bug',
        description: "Something isn't working",
        color: 'f29513',
        default: true
      }
    ],
    assignee: {
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
    assignees: [
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
      },
      {
        login: 'hubot',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://github.com/images/error/hubot_happy.gif',
        gravatar_id: '',
        url: 'https://api.github.com/users/hubot',
        html_url: 'https://github.com/hubot',
        followers_url: 'https://api.github.com/users/hubot/followers',
        following_url:
          'https://api.github.com/users/hubot/following{/other_user}',
        gists_url: 'https://api.github.com/users/hubot/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/hubot/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/hubot/subscriptions',
        organizations_url: 'https://api.github.com/users/hubot/orgs',
        repos_url: 'https://api.github.com/users/hubot/repos',
        events_url: 'https://api.github.com/users/hubot/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/hubot/received_events',
        type: 'User',
        site_admin: true
      },
      {
        login: 'other_user',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://github.com/images/error/other_user_happy.gif',
        gravatar_id: '',
        url: 'https://api.github.com/users/other_user',
        html_url: 'https://github.com/other_user',
        followers_url: 'https://api.github.com/users/other_user/followers',
        following_url:
          'https://api.github.com/users/other_user/following{/other_user}',
        gists_url: 'https://api.github.com/users/other_user/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/other_user/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/other_user/subscriptions',
        organizations_url: 'https://api.github.com/users/other_user/orgs',
        repos_url: 'https://api.github.com/users/other_user/repos',
        events_url: 'https://api.github.com/users/other_user/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/other_user/received_events',
        type: 'User',
        site_admin: false
      }
    ],
    milestone: {
      url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
      html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
      id: 1002604,
      node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
      number: 1,
      state: 'open',
      title: 'v1.0',
      description: 'Tracking milestone for version 1.0',
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
      open_issues: 4,
      closed_issues: 8,
      created_at: '2011-04-10T20:09:31Z',
      updated_at: '2014-03-03T18:58:10Z',
      closed_at: '2013-02-12T13:22:01Z',
      due_on: '2012-10-09T23:39:01Z'
    },
    locked: true,
    active_lock_reason: 'too heated',
    comments: 0,
    pull_request: {
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
      html_url: 'https://github.com/octocat/Hello-World/pull/1347',
      diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
      patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
    },
    closed_at: null,
    created_at: '2011-04-22T13:33:48Z',
    updated_at: '2011-04-22T13:33:48Z',
    author_association: 'collaborator'
  }
}
```

</details>

## [`removeLabel(options)`](https://docs.github.com/rest/reference/issues#remove-a-label-from-an-issue)

Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.

**Usage**

```js
const response = await octokit.issues.removeLabel({
  owner,
  repo,
  issue_number,
  name
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `name` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 208045946,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
      url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
      name: 'bug',
      description: "Something isn't working",
      color: 'f29513',
      default: true
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.removeLabel({
    owner,
    repo,
    issue_number,
    name
  })
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
  response = await octokit.issues.removeLabel({
    owner,
    repo,
    issue_number,
    name
  })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`setLabels(options)`](https://docs.github.com/rest/reference/issues#set-labels-for-an-issue)

Removes any previous labels and sets the new labels for an issue.

**Usage**

```js
const response = await octokit.issues.setLabels({ owner, repo, issue_number })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `labels` (string\[]): The names of the labels to add to the issue. You can pass an empty array to remove all labels. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 208045946,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
      url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
      name: 'bug',
      description: "Something isn't working",
      color: 'f29513',
      default: true
    },
    {
      id: 208045947,
      node_id: 'MDU6TGFiZWwyMDgwNDU5NDc=',
      url:
        'https://api.github.com/repos/octocat/Hello-World/labels/enhancement',
      name: 'enhancement',
      description: 'New feature or request',
      color: 'a2eeef',
      default: false
    }
  ]
}
```

</details>

**Error when resource is gone (HTTP 410)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.setLabels({ owner, repo, issue_number })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`unlock(options)`](https://docs.github.com/v3/issues/#unlock-an-issue)

Users with push access can unlock an issue's conversation.

**Usage**

```js
const response = await octokit.issues.unlock({ owner, repo, issue_number })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)

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
  response = await octokit.issues.unlock({ owner, repo, issue_number })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`update(options)`](https://docs.github.com/v3/issues/#update-an-issue)

Issue owners and users with push access can edit an issue.

**Usage**

```js
const response = await octokit.issues.update({ owner, repo, issue_number })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `issue_number` (required, integer)
- `title` (string): The title of the issue.
- `body` (string): The contents of the issue.
- `assignee` (string): Login for the user that this issue should be assigned to. **This field is deprecated.**
- `state` (string): State of the issue. Either `open` or `closed`.
- `milestone` (integer): The `number` of the milestone to associate this issue with or `null` to remove current. _NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise._
- `labels` (undefined\[]): Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._
- `assignees` (string\[]): Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDU6SXNzdWUx',
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    repository_url: 'https://api.github.com/repos/octocat/Hello-World',
    labels_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
    comments_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
    events_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
    html_url: 'https://github.com/octocat/Hello-World/issues/1347',
    number: 1347,
    state: 'open',
    title: 'Found a bug',
    body: "I'm having a problem with this.",
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
    labels: [
      {
        id: 208045946,
        node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
        url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
        name: 'bug',
        description: "Something isn't working",
        color: 'f29513',
        default: true
      }
    ],
    assignee: {
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
    assignees: [
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
    ],
    milestone: {
      url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
      html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
      labels_url:
        'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
      id: 1002604,
      node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
      number: 1,
      state: 'open',
      title: 'v1.0',
      description: 'Tracking milestone for version 1.0',
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
      open_issues: 4,
      closed_issues: 8,
      created_at: '2011-04-10T20:09:31Z',
      updated_at: '2014-03-03T18:58:10Z',
      closed_at: '2013-02-12T13:22:01Z',
      due_on: '2012-10-09T23:39:01Z'
    },
    locked: true,
    active_lock_reason: 'too heated',
    comments: 0,
    pull_request: {
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
      html_url: 'https://github.com/octocat/Hello-World/pull/1347',
      diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
      patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch'
    },
    closed_at: null,
    created_at: '2011-04-22T13:33:48Z',
    updated_at: '2011-04-22T13:33:48Z',
    closed_by: {
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
    author_association: 'collaborator'
  }
}
```

</details>

**Moved Permanently (HTTP 301)**

<details><summary>Example</summary>

```js
const response = { status: 301 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.issues.update({ owner, repo, issue_number })
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
  response = await octokit.issues.update({ owner, repo, issue_number })
} catch (err) {
  if (err.status === 410) {
    // ..
  }
}
```

</details>

## [`updateComment(options)`](https://docs.github.com/rest/reference/issues#update-an-issue-comment)

**Usage**

```js
const response = await octokit.issues.updateComment({
  owner,
  repo,
  comment_id,
  body
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `comment_id` (required, integer)
- `body` (required, string): The contents of the comment.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDEyOklzc3VlQ29tbWVudDE=',
    url: 'https://api.github.com/repos/octocat/Hello-World/issues/comments/1',
    html_url:
      'https://github.com/octocat/Hello-World/issues/1347#issuecomment-1',
    body: 'Me too',
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
    created_at: '2011-04-14T16:00:49Z',
    updated_at: '2011-04-14T16:00:49Z',
    issue_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    author_association: 'collaborator'
  }
}
```

</details>

## [`updateLabel(options)`](https://docs.github.com/rest/reference/issues#update-a-label)

**Usage**

```js
const response = await octokit.issues.updateLabel({ owner, repo, name })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `name` (required, string)
- `new_name` (string): The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).
- `color` (string): The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
- `description` (string): A short description of the label.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 208045946,
    node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
    url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug%20:bug:',
    name: 'bug :bug:',
    description: 'Small bug fix required',
    color: 'b01f26',
    default: true
  }
}
```

</details>

## [`updateMilestone(options)`](https://docs.github.com/rest/reference/issues#update-a-milestone)

**Usage**

```js
const response = await octokit.issues.updateMilestone({
  owner,
  repo,
  milestone_number
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `milestone_number` (required, integer)
- `title` (string): The title of the milestone.
- `state` (string): The state of the milestone. Either `open` or `closed`.
- `description` (string): A description of the milestone.
- `due_on` (string): The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
    html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
    labels_url:
      'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
    id: 1002604,
    node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
    number: 1,
    state: 'open',
    title: 'v1.0',
    description: 'Tracking milestone for version 1.0',
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
    open_issues: 4,
    closed_issues: 8,
    created_at: '2011-04-10T20:09:31Z',
    updated_at: '2014-03-03T18:58:10Z',
    closed_at: '2013-02-12T13:22:01Z',
    due_on: '2012-10-09T23:39:01Z'
  }
}
```

</details>
