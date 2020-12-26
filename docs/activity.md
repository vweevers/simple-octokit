# `octokit.activity`

[Previous: actions](actions.md) \| [Index](README.md) \| [Next: apps](apps.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`checkRepoIsStarredByAuthenticatedUser(options)`](#checkrepoisstarredbyauthenticateduseroptions)
- [`deleteRepoSubscription(options)`](#deletereposubscriptionoptions)
- [`deleteThreadSubscription(options)`](#deletethreadsubscriptionoptions)
- [`getFeeds()`](#getfeeds)
- [`getRepoSubscription(options)`](#getreposubscriptionoptions)
- [`getThread(options)`](#getthreadoptions)
- [`getThreadSubscriptionForAuthenticatedUser(options)`](#getthreadsubscriptionforauthenticateduseroptions)
- [`listEventsForAuthenticatedUser(options)`](#listeventsforauthenticateduseroptions)
- [`listNotificationsForAuthenticatedUser([options])`](#listnotificationsforauthenticateduseroptions)
- [`listOrgEventsForAuthenticatedUser(options)`](#listorgeventsforauthenticateduseroptions)
- [`listPublicEvents([options])`](#listpubliceventsoptions)
- [`listPublicEventsForRepoNetwork(options)`](#listpubliceventsforreponetworkoptions)
- [`listPublicEventsForUser(options)`](#listpubliceventsforuseroptions)
- [`listPublicOrgEvents(options)`](#listpublicorgeventsoptions)
- [`listReceivedEventsForUser(options)`](#listreceivedeventsforuseroptions)
- [`listReceivedPublicEventsForUser(options)`](#listreceivedpubliceventsforuseroptions)
- [`listRepoEvents(options)`](#listrepoeventsoptions)
- [`listRepoNotificationsForAuthenticatedUser(options)`](#listreponotificationsforauthenticateduseroptions)
- [`listReposStarredByAuthenticatedUser([options])`](#listreposstarredbyauthenticateduseroptions)
- [`listReposStarredByUser(options)`](#listreposstarredbyuseroptions)
- [`listReposWatchedByUser(options)`](#listreposwatchedbyuseroptions)
- [`listStargazersForRepo(options)`](#liststargazersforrepooptions)
- [`listWatchedReposForAuthenticatedUser([options])`](#listwatchedreposforauthenticateduseroptions)
- [`listWatchersForRepo(options)`](#listwatchersforrepooptions)
- [`markNotificationsAsRead([options])`](#marknotificationsasreadoptions)
- [`markRepoNotificationsAsRead(options)`](#markreponotificationsasreadoptions)
- [`markThreadAsRead(options)`](#markthreadasreadoptions)
- [`setRepoSubscription(options)`](#setreposubscriptionoptions)
- [`setThreadSubscription(options)`](#setthreadsubscriptionoptions)
- [`starRepoForAuthenticatedUser(options)`](#starrepoforauthenticateduseroptions)
- [`unstarRepoForAuthenticatedUser(options)`](#unstarrepoforauthenticateduseroptions)

</details>

## [`checkRepoIsStarredByAuthenticatedUser(options)`](https://docs.github.com/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user)

**Usage**

```js
const response = await octokit.activity.checkRepoIsStarredByAuthenticatedUser({
  owner,
  repo
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

**Response if this repository is starred by you (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error if this repository is not starred by you (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.activity.checkRepoIsStarredByAuthenticatedUser({
    owner,
    repo
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteRepoSubscription(options)`](https://docs.github.com/rest/reference/activity#delete-a-repository-subscription)

This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/rest/reference/activity#set-a-repository-subscription).

**Usage**

```js
const response = await octokit.activity.deleteRepoSubscription({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteThreadSubscription(options)`](https://docs.github.com/rest/reference/activity#delete-a-thread-subscription)

Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.

**Usage**

```js
const response = await octokit.activity.deleteThreadSubscription({ thread_id })
```

**Options**

- `thread_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`getFeeds()`](https://docs.github.com/rest/reference/activity#get-feeds)

GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:

- **Timeline**: The GitHub global public timeline
- **User**: The public timeline for any user, using [URI template](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia)
- **Current user public**: The public timeline for the authenticated user
- **Current user**: The private timeline for the authenticated user
- **Current user actor**: The private timeline for activity created by the authenticated user
- **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
- **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.

**Usage**

```js
const response = await octokit.activity.getFeeds()
```

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    timeline_url: 'https://github.com/timeline',
    user_url: 'https://github.com/{user}',
    current_user_public_url: 'https://github.com/octocat',
    current_user_url: 'https://github.com/octocat.private?token=abc123',
    current_user_actor_url:
      'https://github.com/octocat.private.actor?token=abc123',
    current_user_organization_url: '',
    current_user_organization_urls: [
      'https://github.com/organizations/github/octocat.private.atom?token=abc123'
    ],
    security_advisories_url: 'https://github.com/security-advisories',
    _links: {
      timeline: {
        href: 'https://github.com/timeline',
        type: 'application/atom+xml'
      },
      user: {
        href: 'https://github.com/{user}',
        type: 'application/atom+xml'
      },
      current_user_public: {
        href: 'https://github.com/octocat',
        type: 'application/atom+xml'
      },
      current_user: {
        href: 'https://github.com/octocat.private?token=abc123',
        type: 'application/atom+xml'
      },
      current_user_actor: {
        href: 'https://github.com/octocat.private.actor?token=abc123',
        type: 'application/atom+xml'
      },
      current_user_organization: {
        href: '',
        type: ''
      },
      current_user_organizations: [
        {
          href:
            'https://github.com/organizations/github/octocat.private.atom?token=abc123',
          type: 'application/atom+xml'
        }
      ],
      security_advisories: {
        href: 'https://github.com/security-advisories',
        type: 'application/atom+xml'
      }
    }
  }
}
```

</details>

## [`getRepoSubscription(options)`](https://docs.github.com/rest/reference/activity#get-a-repository-subscription)

**Usage**

```js
const response = await octokit.activity.getRepoSubscription({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

**Response if you subscribe to the repository (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    subscribed: true,
    ignored: false,
    reason: null,
    created_at: '2012-10-06T21:34:12Z',
    url: 'https://api.github.com/repos/octocat/example/subscription',
    repository_url: 'https://api.github.com/repos/octocat/example'
  }
}
```

</details>

**Error if you don't subscribe to the repository (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.activity.getRepoSubscription({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getThread(options)`](https://docs.github.com/rest/reference/activity#get-a-thread)

**Usage**

```js
const response = await octokit.activity.getThread({ thread_id })
```

**Options**

- `thread_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: '1',
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
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
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
      hooks_url: 'http://api.github.com/repos/octocat/Hello-World/hooks'
    },
    subject: {
      title: 'Greetings',
      url: 'https://api.github.com/repos/octokit/octokit.rb/issues/123',
      latest_comment_url:
        'https://api.github.com/repos/octokit/octokit.rb/issues/comments/123',
      type: 'Issue'
    },
    reason: 'subscribed',
    unread: true,
    updated_at: '2014-11-07T22:01:45Z',
    last_read_at: '2014-11-07T22:01:45Z',
    url: 'https://api.github.com/notifications/threads/1'
  }
}
```

</details>

## [`getThreadSubscriptionForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user)

This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/rest/reference/activity#get-a-repository-subscription).

Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **[**@mentioned**](https://github.com/mentioned)**, or manually subscribe to a thread.

**Usage**

```js
const response = await octokit.activity.getThreadSubscriptionForAuthenticatedUser(
  { thread_id }
)
```

**Options**

- `thread_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    subscribed: true,
    ignored: false,
    reason: null,
    created_at: '2012-10-06T21:34:12Z',
    url: 'https://api.github.com/notifications/threads/1/subscription',
    thread_url: 'https://api.github.com/notifications/threads/1'
  }
}
```

</details>

## [`listEventsForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/activity#list-events-for-the-authenticated-user)

If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.

**Usage**

```js
const response = await octokit.activity.listEventsForAuthenticatedUser({
  username
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listEventsForAuthenticatedUser.all(
  { username }
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `username` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`listNotificationsForAuthenticatedUser([options])`](https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user)

List all notifications for the current user, sorted by most recently updated.

**Usage**

```js
const response = await octokit.activity.listNotificationsForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listNotificationsForAuthenticatedUser.all(
  options
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `all` (boolean): If `true`, show notifications marked as read.
- `participating` (boolean): If `true`, only shows notifications in which the user is directly participating or mentioned.
- `since` (string): Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `before` (string): Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: '1',
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
        hooks_url: 'http://api.github.com/repos/octocat/Hello-World/hooks'
      },
      subject: {
        title: 'Greetings',
        url: 'https://api.github.com/repos/octokit/octokit.rb/issues/123',
        latest_comment_url:
          'https://api.github.com/repos/octokit/octokit.rb/issues/comments/123',
        type: 'Issue'
      },
      reason: 'subscribed',
      unread: true,
      updated_at: '2014-11-07T22:01:45Z',
      last_read_at: '2014-11-07T22:01:45Z',
      url: 'https://api.github.com/notifications/threads/1'
    }
  ]
}
```

</details>

## [`listOrgEventsForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/activity#list-organization-events-for-the-authenticated-user)

This is the user's organization dashboard. You must be authenticated as the user to view this.

**Usage**

```js
const response = await octokit.activity.listOrgEventsForAuthenticatedUser({
  username,
  org
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listOrgEventsForAuthenticatedUser.all(
  { username, org }
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `username` (required, string)
- `org` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`listPublicEvents([options])`](https://docs.github.com/rest/reference/activity#list-public-events)

We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.

**Usage**

```js
const response = await octokit.activity.listPublicEvents()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listPublicEvents.all(options)) {
  console.log(response.data)
}
```

</details>

**Options**

- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`listPublicEventsForRepoNetwork(options)`](https://docs.github.com/rest/reference/activity#list-public-events-for-a-network-of-repositories)

**Usage**

```js
const response = await octokit.activity.listPublicEventsForRepoNetwork({
  owner,
  repo
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listPublicEventsForRepoNetwork.all(
  { owner, repo }
)) {
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
const response = { status: 200 }
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
  response = await octokit.activity.listPublicEventsForRepoNetwork({
    owner,
    repo
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listPublicEventsForUser(options)`](https://docs.github.com/rest/reference/activity#list-public-events-for-a-user)

**Usage**

```js
const response = await octokit.activity.listPublicEventsForUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listPublicEventsForUser.all({
  username
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `username` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`listPublicOrgEvents(options)`](https://docs.github.com/rest/reference/activity#list-public-organization-events)

**Usage**

```js
const response = await octokit.activity.listPublicOrgEvents({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listPublicOrgEvents.all({
  org
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`listReceivedEventsForUser(options)`](https://docs.github.com/rest/reference/activity#list-events-received-by-the-authenticated-user)

These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.

**Usage**

```js
const response = await octokit.activity.listReceivedEventsForUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listReceivedEventsForUser.all({
  username
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `username` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`listReceivedPublicEventsForUser(options)`](https://docs.github.com/rest/reference/activity#list-public-events-received-by-a-user)

**Usage**

```js
const response = await octokit.activity.listReceivedPublicEventsForUser({
  username
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listReceivedPublicEventsForUser.all(
  { username }
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `username` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`listRepoEvents(options)`](https://docs.github.com/rest/reference/activity#list-repository-events)

**Usage**

```js
const response = await octokit.activity.listRepoEvents({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listRepoEvents.all({
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
const response = { status: 200 }
```

</details>

## [`listRepoNotificationsForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/activity#list-repository-notifications-for-the-authenticated-user)

List all notifications for the current user.

**Usage**

```js
const response = await octokit.activity.listRepoNotificationsForAuthenticatedUser(
  { owner, repo }
)
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listRepoNotificationsForAuthenticatedUser.all(
  { owner, repo }
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `all` (boolean): If `true`, show notifications marked as read.
- `participating` (boolean): If `true`, only shows notifications in which the user is directly participating or mentioned.
- `since` (string): Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `before` (string): Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: '1',
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
        hooks_url: 'http://api.github.com/repos/octocat/Hello-World/hooks'
      },
      subject: {
        title: 'Greetings',
        url: 'https://api.github.com/repos/octokit/octokit.rb/issues/123',
        latest_comment_url:
          'https://api.github.com/repos/octokit/octokit.rb/issues/comments/123',
        type: 'Issue'
      },
      reason: 'subscribed',
      unread: true,
      updated_at: '2014-11-07T22:01:45Z',
      last_read_at: '2014-11-07T22:01:45Z',
      url: 'https://api.github.com/notifications/threads/1'
    }
  ]
}
```

</details>

## [`listReposStarredByAuthenticatedUser([options])`](https://docs.github.com/rest/reference/activity#list-repositories-starred-by-the-authenticated-user)

Lists repositories the authenticated user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:

**Usage**

```js
const response = await octokit.activity.listReposStarredByAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listReposStarredByAuthenticatedUser.all(
  options
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `sort` (string): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
- `direction` (string): One of `asc` (ascending) or `desc` (descending).
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
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
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
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
    }
  ]
}
```

</details>

## [`listReposStarredByUser(options)`](https://docs.github.com/rest/reference/activity#list-repositories-starred-by-a-user)

Lists repositories a user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:

**Usage**

```js
const response = await octokit.activity.listReposStarredByUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listReposStarredByUser.all({
  username
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `username` (required, string)
- `sort` (string): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
- `direction` (string): One of `asc` (ascending) or `desc` (descending).
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
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
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
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
    }
  ]
}
```

</details>

## [`listReposWatchedByUser(options)`](https://docs.github.com/rest/reference/activity#list-repositories-watched-by-a-user)

Lists repositories a user is watching.

**Usage**

```js
const response = await octokit.activity.listReposWatchedByUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listReposWatchedByUser.all({
  username
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `username` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
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
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
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
      template_repository: 'octocat/template',
      temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
      delete_branch_on_merge: true,
      subscribers_count: 42,
      network_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZW1pdA=='
      }
    }
  ]
}
```

</details>

## [`listStargazersForRepo(options)`](https://docs.github.com/rest/reference/activity#list-stargazers)

Lists the people that have starred the repository.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:

**Usage**

```js
const response = await octokit.activity.listStargazersForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listStargazersForRepo.all({
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

## [`listWatchedReposForAuthenticatedUser([options])`](https://docs.github.com/rest/reference/activity#list-repositories-watched-by-the-authenticated-user)

Lists repositories the authenticated user is watching.

**Usage**

```js
const response = await octokit.activity.listWatchedReposForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listWatchedReposForAuthenticatedUser.all(
  options
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
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
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
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
      template_repository: 'octocat/template',
      temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
      delete_branch_on_merge: true,
      subscribers_count: 42,
      network_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZW1pdA=='
      }
    }
  ]
}
```

</details>

## [`listWatchersForRepo(options)`](https://docs.github.com/rest/reference/activity#list-watchers)

Lists the people watching the specified repository.

**Usage**

```js
const response = await octokit.activity.listWatchersForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.activity.listWatchersForRepo.all({
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

## [`markNotificationsAsRead([options])`](https://docs.github.com/rest/reference/activity#mark-notifications-as-read)

Marks all notifications as "read" removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

**Usage**

```js
const response = await octokit.activity.markNotificationsAsRead()
```

**Options**

- `last_read_at` (string): Describes the last point that notifications were checked.
- `read` (boolean): Whether the notification has been read.

**Response (HTTP 202)**

<details><summary>Example</summary>

```js
const response = { status: 202 }
```

</details>

**Response (HTTP 205)**

<details><summary>Example</summary>

```js
const response = { status: 205 }
```

</details>

## [`markRepoNotificationsAsRead(options)`](https://docs.github.com/rest/reference/activity#mark-repository-notifications-as-read)

Marks all notifications in a repository as "read" removes them from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

**Usage**

```js
const response = await octokit.activity.markRepoNotificationsAsRead({
  owner,
  repo
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `last_read_at` (string): Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Default: The current timestamp.

**Response (HTTP 202)**

<details><summary>Example</summary>

```js
const response = { status: 202 }
```

</details>

## [`markThreadAsRead(options)`](https://docs.github.com/rest/reference/activity#mark-a-thread-as-read)

**Usage**

```js
const response = await octokit.activity.markThreadAsRead({ thread_id })
```

**Options**

- `thread_id` (required, integer)

**Response (HTTP 205)**

<details><summary>Example</summary>

```js
const response = { status: 205 }
```

</details>

## [`setRepoSubscription(options)`](https://docs.github.com/rest/reference/activity#set-a-repository-subscription)

If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/rest/reference/activity#delete-a-repository-subscription) completely.

**Usage**

```js
const response = await octokit.activity.setRepoSubscription({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `subscribed` (boolean): Determines if notifications should be received from this repository.
- `ignored` (boolean): Determines if all notifications should be blocked from this repository.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    subscribed: true,
    ignored: false,
    reason: null,
    created_at: '2012-10-06T21:34:12Z',
    url: 'https://api.github.com/repos/octocat/example/subscription',
    repository_url: 'https://api.github.com/repos/octocat/example'
  }
}
```

</details>

## [`setThreadSubscription(options)`](https://docs.github.com/rest/reference/activity#set-a-thread-subscription)

If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.

You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.

Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/rest/reference/activity#delete-a-thread-subscription) endpoint.

**Usage**

```js
const response = await octokit.activity.setThreadSubscription({ thread_id })
```

**Options**

- `thread_id` (required, integer)
- `ignored` (boolean): Whether to block all notifications from a thread.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    subscribed: true,
    ignored: false,
    reason: null,
    created_at: '2012-10-06T21:34:12Z',
    url: 'https://api.github.com/notifications/threads/1/subscription',
    thread_url: 'https://api.github.com/notifications/threads/1'
  }
}
```

</details>

## [`starRepoForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/activity#star-a-repository-for-the-authenticated-user)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see [HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs).

**Usage**

```js
const response = await octokit.activity.starRepoForAuthenticatedUser({
  owner,
  repo
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

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
  response = await octokit.activity.starRepoForAuthenticatedUser({
    owner,
    repo
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`unstarRepoForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/activity#unstar-a-repository-for-the-authenticated-user)

**Usage**

```js
const response = await octokit.activity.unstarRepoForAuthenticatedUser({
  owner,
  repo
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

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
  response = await octokit.activity.unstarRepoForAuthenticatedUser({
    owner,
    repo
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>
