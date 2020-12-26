# `octokit.orgs`

[Previous: migrations](migrations.md) \| [Index](README.md) \| [Next: projects](projects.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`blockUser(options)`](#blockuseroptions)
- [`checkBlockedUser(options)`](#checkblockeduseroptions)
- [`checkMembershipForUser(options)`](#checkmembershipforuseroptions)
- [`checkPublicMembershipForUser(options)`](#checkpublicmembershipforuseroptions)
- [`convertMemberToOutsideCollaborator(options)`](#convertmembertooutsidecollaboratoroptions)
- [`createInvitation(options)`](#createinvitationoptions)
- [`createWebhook(options)`](#createwebhookoptions)
- [`deleteWebhook(options)`](#deletewebhookoptions)
- [`get(options)`](#getoptions)
- [`getMembershipForAuthenticatedUser(options)`](#getmembershipforauthenticateduseroptions)
- [`getMembershipForUser(options)`](#getmembershipforuseroptions)
- [`getWebhook(options)`](#getwebhookoptions)
- [`getWebhookConfigForOrg(options)`](#getwebhookconfigfororgoptions)
- [`list([options])`](#listoptions)
- [`listAppInstallations(options)`](#listappinstallationsoptions)
- [`listBlockedUsers(options)`](#listblockedusersoptions)
- [`listForAuthenticatedUser([options])`](#listforauthenticateduseroptions)
- [`listForUser(options)`](#listforuseroptions)
- [`listInvitationTeams(options)`](#listinvitationteamsoptions)
- [`listMembers(options)`](#listmembersoptions)
- [`listMembershipsForAuthenticatedUser([options])`](#listmembershipsforauthenticateduseroptions)
- [`listOutsideCollaborators(options)`](#listoutsidecollaboratorsoptions)
- [`listPendingInvitations(options)`](#listpendinginvitationsoptions)
- [`listPublicMembers(options)`](#listpublicmembersoptions)
- [`listWebhooks(options)`](#listwebhooksoptions)
- [`pingWebhook(options)`](#pingwebhookoptions)
- [`removeMember(options)`](#removememberoptions)
- [`removeMembershipForUser(options)`](#removemembershipforuseroptions)
- [`removeOutsideCollaborator(options)`](#removeoutsidecollaboratoroptions)
- [`removePublicMembershipForAuthenticatedUser(options)`](#removepublicmembershipforauthenticateduseroptions)
- [`setMembershipForUser(options)`](#setmembershipforuseroptions)
- [`setPublicMembershipForAuthenticatedUser(options)`](#setpublicmembershipforauthenticateduseroptions)
- [`unblockUser(options)`](#unblockuseroptions)
- [`update(options)`](#updateoptions)
- [`updateMembershipForAuthenticatedUser(options)`](#updatemembershipforauthenticateduseroptions)
- [`updateWebhook(options)`](#updatewebhookoptions)
- [`updateWebhookConfigForOrg(options)`](#updatewebhookconfigfororgoptions)

</details>

## [`blockUser(options)`](https://docs.github.com/rest/reference/orgs#block-a-user-from-an-organization)

**Usage**

```js
const response = await octokit.orgs.blockUser({ org, username })
```

**Options**

- `org` (required, string)
- `username` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`checkBlockedUser(options)`](https://docs.github.com/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization)

**Usage**

```js
const response = await octokit.orgs.checkBlockedUser({ org, username })
```

**Options**

- `org` (required, string)
- `username` (required, string)

**Response if the user is blocked (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error if the user is not blocked (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.checkBlockedUser({ org, username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`checkMembershipForUser(options)`](https://docs.github.com/rest/reference/orgs#check-organization-membership-for-a-user)

Check if a user is, publicly or privately, a member of the organization.

**Usage**

```js
const response = await octokit.orgs.checkMembershipForUser({ org, username })
```

**Options**

- `org` (required, string)
- `username` (required, string)

**Response if requester is an organization member and user is a member (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Response if requester is not an organization member (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

**Error if requester is an organization member and user is not a member (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.checkMembershipForUser({ org, username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`checkPublicMembershipForUser(options)`](https://docs.github.com/rest/reference/orgs#check-public-organization-membership-for-a-user)

**Usage**

```js
const response = await octokit.orgs.checkPublicMembershipForUser({
  org,
  username
})
```

**Options**

- `org` (required, string)
- `username` (required, string)

**Response if user is a public member (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error if user is not a public member (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.checkPublicMembershipForUser({ org, username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`convertMemberToOutsideCollaborator(options)`](https://docs.github.com/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator)

When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see [Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/).

**Usage**

```js
const response = await octokit.orgs.convertMemberToOutsideCollaborator({
  org,
  username
})
```

**Options**

- `org` (required, string)
- `username` (required, string)

**User is getting converted asynchronously (HTTP 202)**

<details><summary>Example</summary>

```js
const response = { status: 202 }
```

</details>

**User was converted (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.convertMemberToOutsideCollaborator({
    org,
    username
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createInvitation(options)`](https://docs.github.com/rest/reference/orgs#create-an-organization-invitation)

Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits) for details.

**Usage**

```js
const response = await octokit.orgs.createInvitation({ org })
```

**Options**

- `org` (required, string)
- `invitee_id` (integer): **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
- `email` (string): **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
- `role` (string): Specify role for new member. Can be one of:  
  \* `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.  
  \* `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.  
  \* `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
- `team_ids` (integer\[]): Specify IDs for the teams you want to invite new members to.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    login: 'monalisa',
    email: 'octocat@github.com',
    role: 'direct_member',
    created_at: '2016-11-30T06:46:10-08:00',
    inviter: {
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
    },
    team_count: 2,
    invitation_team_url:
      'https://api.github.com/organizations/2/invitations/1/teams'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.createInvitation({ org })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createWebhook(options)`](https://docs.github.com/rest/reference/orgs#create-an-organization-webhook)

Here's how you can create a hook that posts payloads in JSON format:

**Usage**

```js
const response = await octokit.orgs.createWebhook({ org, name, config })
```

**Options**

- `org` (required, string)
- `name` (required, string): Must be passed as "web".
- `config` (required, object): Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#create-hook-config-params).
- `config.url` (required, string): The URL to which the payloads will be delivered.
- `config.content_type` (string): The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
- `config.secret` (string): If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
- `config.insecure_ssl` (string): Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
- `config.username` (string)
- `config.password` (string)
- `events` (string\[]): Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
- `active` (boolean): Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    url: 'https://api.github.com/orgs/octocat/hooks/1',
    ping_url: 'https://api.github.com/orgs/octocat/hooks/1/pings',
    name: 'web',
    events: ['push', 'pull_request'],
    active: true,
    config: {
      url: 'http://example.com',
      content_type: 'json'
    },
    updated_at: '2011-09-06T20:39:23Z',
    created_at: '2011-09-06T17:26:27Z',
    type: 'Organization'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.createWebhook({ org, name, config })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteWebhook(options)`](https://docs.github.com/rest/reference/orgs#delete-an-organization-webhook)

**Usage**

```js
const response = await octokit.orgs.deleteWebhook({ org, hook_id })
```

**Options**

- `org` (required, string)
- `hook_id` (required, integer)

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
  response = await octokit.orgs.deleteWebhook({ org, hook_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`get(options)`](https://docs.github.com/v3/orgs/#get-an-organization)

To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).

GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub plan. See [Authenticating with GitHub Apps](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/) for details. For an example response, see 'Response with GitHub plan information' below."

**Usage**

```js
const response = await octokit.orgs.get({ org })
```

**Options**

- `org` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    login: 'github',
    id: 1,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
    url: 'https://api.github.com/orgs/github',
    repos_url: 'https://api.github.com/orgs/github/repos',
    events_url: 'https://api.github.com/orgs/github/events',
    hooks_url: 'https://api.github.com/orgs/github/hooks',
    issues_url: 'https://api.github.com/orgs/github/issues',
    members_url: 'https://api.github.com/orgs/github/members{/member}',
    public_members_url:
      'https://api.github.com/orgs/github/public_members{/member}',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    description: 'A great organization',
    name: 'github',
    company: 'GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: 'octocat@github.com',
    twitter_username: 'github',
    is_verified: true,
    has_organization_projects: true,
    has_repository_projects: true,
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    html_url: 'https://github.com/octocat',
    created_at: '2008-01-14T04:33:35Z',
    updated_at: '2014-03-03T18:58:10Z',
    type: 'Organization',
    total_private_repos: 100,
    owned_private_repos: 100,
    private_gists: 81,
    disk_usage: 10000,
    collaborators: 8,
    billing_email: 'mona@github.com',
    plan: {
      name: 'Medium',
      space: 400,
      private_repos: 20
    },
    default_repository_permission: 'read',
    members_can_create_repositories: true,
    two_factor_requirement_enabled: true,
    members_allowed_repository_creation_type: 'all',
    members_can_create_public_repositories: false,
    members_can_create_private_repositories: false,
    members_can_create_internal_repositories: false,
    members_can_create_pages: true
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    login: 'github',
    id: 1,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
    url: 'https://api.github.com/orgs/github',
    repos_url: 'https://api.github.com/orgs/github/repos',
    events_url: 'https://api.github.com/orgs/github/events',
    hooks_url: 'https://api.github.com/orgs/github/hooks',
    issues_url: 'https://api.github.com/orgs/github/issues',
    members_url: 'https://api.github.com/orgs/github/members{/member}',
    public_members_url:
      'https://api.github.com/orgs/github/public_members{/member}',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    description: 'A great organization',
    name: 'github',
    company: 'GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: 'octocat@github.com',
    twitter_username: 'github',
    is_verified: true,
    has_organization_projects: true,
    has_repository_projects: true,
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    html_url: 'https://github.com/octocat',
    created_at: '2008-01-14T04:33:35Z',
    updated_at: '2014-03-03T18:58:10Z',
    type: 'Organization',
    plan: {
      name: 'team',
      space: 976562499,
      private_repos: 999999,
      filled_seats: 4,
      seats: 5
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.get({ org })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getMembershipForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user)

**Usage**

```js
const response = await octokit.orgs.getMembershipForAuthenticatedUser({ org })
```

**Options**

- `org` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/orgs/invitocat/memberships/defunkt',
    state: 'pending',
    role: 'admin',
    organization_url: 'https://api.github.com/orgs/invitocat',
    organization: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      hooks_url: 'https://api.github.com/orgs/github/hooks',
      issues_url: 'https://api.github.com/orgs/github/issues',
      members_url: 'https://api.github.com/orgs/github/members{/member}',
      public_members_url:
        'https://api.github.com/orgs/github/public_members{/member}',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      description: 'A great organization'
    },
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
  response = await octokit.orgs.getMembershipForAuthenticatedUser({ org })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getMembershipForUser(options)`](https://docs.github.com/rest/reference/orgs#get-organization-membership-for-a-user)

In order to get a user's membership with an organization, the authenticated user must be an organization member.

**Usage**

```js
const response = await octokit.orgs.getMembershipForUser({ org, username })
```

**Options**

- `org` (required, string)
- `username` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/orgs/octocat/memberships/defunkt',
    state: 'active',
    role: 'admin',
    organization_url: 'https://api.github.com/orgs/octocat',
    organization: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      hooks_url: 'https://api.github.com/orgs/github/hooks',
      issues_url: 'https://api.github.com/orgs/github/issues',
      members_url: 'https://api.github.com/orgs/github/members{/member}',
      public_members_url:
        'https://api.github.com/orgs/github/public_members{/member}',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      description: 'A great organization'
    },
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

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/orgs/octocat/memberships/defunkt',
    state: 'active',
    role: 'member',
    organization_url: 'https://api.github.com/orgs/octocat',
    organization: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      hooks_url: 'https://api.github.com/orgs/github/hooks',
      issues_url: 'https://api.github.com/orgs/github/issues',
      members_url: 'https://api.github.com/orgs/github/members{/member}',
      public_members_url:
        'https://api.github.com/orgs/github/public_members{/member}',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      description: 'A great organization'
    },
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

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/orgs/invitocat/memberships/defunkt',
    state: 'pending',
    role: 'member',
    organization_url: 'https://api.github.com/orgs/invitocat',
    organization: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      hooks_url: 'https://api.github.com/orgs/github/hooks',
      issues_url: 'https://api.github.com/orgs/github/issues',
      members_url: 'https://api.github.com/orgs/github/members{/member}',
      public_members_url:
        'https://api.github.com/orgs/github/public_members{/member}',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      description: 'A great organization'
    },
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
  response = await octokit.orgs.getMembershipForUser({ org, username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getWebhook(options)`](https://docs.github.com/rest/reference/orgs#get-an-organization-webhook)

Returns a webhook configured in an organization. To get only the webhook `config` properties, see [Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization).

**Usage**

```js
const response = await octokit.orgs.getWebhook({ org, hook_id })
```

**Options**

- `org` (required, string)
- `hook_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    url: 'https://api.github.com/orgs/octocat/hooks/1',
    ping_url: 'https://api.github.com/orgs/octocat/hooks/1/pings',
    name: 'web',
    events: ['push', 'pull_request'],
    active: true,
    config: {
      url: 'http://example.com',
      content_type: 'json'
    },
    updated_at: '2011-09-06T20:39:23Z',
    created_at: '2011-09-06T17:26:27Z',
    type: 'Organization'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.getWebhook({ org, hook_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getWebhookConfigForOrg(options)`](https://docs.github.com/v3/orgs#get-a-webhook-configuration-for-an-organization)

Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use [Get an organization webhook](/rest/reference/orgs#get-an-organization-webhook).

Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.

**Usage**

```js
const response = await octokit.orgs.getWebhookConfigForOrg({ org, hook_id })
```

**Options**

- `org` (required, string)
- `hook_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    content_type: 'json',
    insecure_ssl: '0',
    secret: '********',
    url: 'https://example.com/webhook'
  }
}
```

</details>

## [`list([options])`](https://docs.github.com/v3/orgs/#list-organizations)

Lists all organizations, in the order that they were created on GitHub.

**Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.

**Usage**

```js
const response = await octokit.orgs.list()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.list.all(options)) {
  console.log(response.data)
}
```

</details>

**Options**

- `since` (integer): An organization ID. Only return organizations with an ID greater than this ID.
- `per_page` (integer): Results per page (max 100)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      hooks_url: 'https://api.github.com/orgs/github/hooks',
      issues_url: 'https://api.github.com/orgs/github/issues',
      members_url: 'https://api.github.com/orgs/github/members{/member}',
      public_members_url:
        'https://api.github.com/orgs/github/public_members{/member}',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      description: 'A great organization'
    }
  ]
}
```

</details>

## [`listAppInstallations(options)`](https://docs.github.com/v3/orgs/#list-app-installations-for-an-organization)

Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.

**Usage**

```js
const response = await octokit.orgs.listAppInstallations({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.listAppInstallations.all({ org })) {
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
const response = {
  status: 200,
  data: {
    total_count: 1,
    installations: [
      {
        id: 25381,
        account: {
          login: 'octo-org',
          id: 6811672,
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjY4MTE2NzI=',
          avatar_url: 'https://avatars3.githubusercontent.com/u/6811672?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/octo-org',
          html_url: 'https://github.com/octo-org',
          followers_url: 'https://api.github.com/users/octo-org/followers',
          following_url:
            'https://api.github.com/users/octo-org/following{/other_user}',
          gists_url: 'https://api.github.com/users/octo-org/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/octo-org/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/octo-org/subscriptions',
          organizations_url: 'https://api.github.com/users/octo-org/orgs',
          repos_url: 'https://api.github.com/users/octo-org/repos',
          events_url: 'https://api.github.com/users/octo-org/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/octo-org/received_events',
          type: 'Organization',
          site_admin: false
        },
        repository_selection: 'selected',
        access_tokens_url:
          'https://api.github.com/app/installations/25381/access_tokens',
        repositories_url: 'https://api.github.com/installation/repositories',
        html_url:
          'https://github.com/organizations/octo-org/settings/installations/25381',
        app_id: 2218,
        target_id: 6811672,
        target_type: 'Organization',
        permissions: {
          deployments: 'write',
          metadata: 'read',
          pull_requests: 'read',
          statuses: 'read'
        },
        events: ['deployment', 'deployment_status'],
        created_at: '2017-05-16T08:47:09.000-07:00',
        updated_at: '2017-06-06T11:23:23.000-07:00',
        single_file_name: 'config.yml',
        has_multiple_single_files: true,
        single_file_paths: ['config.yml', '.github/issue_TEMPLATE.md'],
        app_slug: 'github-actions'
      }
    ]
  }
}
```

</details>

## [`listBlockedUsers(options)`](https://docs.github.com/rest/reference/orgs#list-users-blocked-by-an-organization)

List the users blocked by an organization.

**Usage**

```js
const response = await octokit.orgs.listBlockedUsers({ org })
```

**Options**

- `org` (required, string)

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

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.listBlockedUsers({ org })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listForAuthenticatedUser([options])`](https://docs.github.com/v3/orgs/#list-organizations-for-the-authenticated-user)

List organizations for the authenticated user.

**OAuth scope requirements**

This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.

**Usage**

```js
const response = await octokit.orgs.listForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.listForAuthenticatedUser.all(
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
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      hooks_url: 'https://api.github.com/orgs/github/hooks',
      issues_url: 'https://api.github.com/orgs/github/issues',
      members_url: 'https://api.github.com/orgs/github/members{/member}',
      public_members_url:
        'https://api.github.com/orgs/github/public_members{/member}',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      description: 'A great organization'
    }
  ]
}
```

</details>

## [`listForUser(options)`](https://docs.github.com/v3/orgs/#list-organizations-for-a-user)

List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.

This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.

**Usage**

```js
const response = await octokit.orgs.listForUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.listForUser.all({ username })) {
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
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      hooks_url: 'https://api.github.com/orgs/github/hooks',
      issues_url: 'https://api.github.com/orgs/github/issues',
      members_url: 'https://api.github.com/orgs/github/members{/member}',
      public_members_url:
        'https://api.github.com/orgs/github/public_members{/member}',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      description: 'A great organization'
    }
  ]
}
```

</details>

## [`listInvitationTeams(options)`](https://docs.github.com/rest/reference/orgs#list-organization-invitation-teams)

List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.

**Usage**

```js
const response = await octokit.orgs.listInvitationTeams({ org, invitation_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.listInvitationTeams.all({
  org,
  invitation_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `invitation_id` (required, integer)
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
      node_id: 'MDQ6VGVhbTE=',
      url: 'https://api.github.com/teams/1',
      html_url: 'https://api.github.com/teams/justice-league',
      name: 'Justice League',
      slug: 'justice-league',
      description: 'A great team.',
      privacy: 'closed',
      permission: 'admin',
      members_url: 'https://api.github.com/teams/1/members{/member}',
      repositories_url: 'https://api.github.com/teams/1/repos',
      parent: null
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.listInvitationTeams({ org, invitation_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listMembers(options)`](https://docs.github.com/rest/reference/orgs#list-organization-members)

List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.

**Usage**

```js
const response = await octokit.orgs.listMembers({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.listMembers.all({ org })) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `filter` (string): Filter members returned in the list. Can be one of:  
  \* `2fa_disabled` - Members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled. Available for organization owners.  
  \* `all` - All members the authenticated user can see.
- `role` (string): Filter members returned by their role. Can be one of:  
  \* `all` - All members of the organization, regardless of role.  
  \* `admin` - Organization owners.  
  \* `member` - Non-owner organization members.
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

**Response if requester is not an organization member (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

## [`listMembershipsForAuthenticatedUser([options])`](https://docs.github.com/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user)

**Usage**

```js
const response = await octokit.orgs.listMembershipsForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.listMembershipsForAuthenticatedUser.all(
  options
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `state` (string): Indicates the state of the memberships to return. Can be either `active` or `pending`. If not specified, the API returns both active and pending memberships.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/orgs/octocat/memberships/defunkt',
      state: 'active',
      role: 'admin',
      organization_url: 'https://api.github.com/orgs/octocat',
      organization: {
        login: 'github',
        id: 1,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
        url: 'https://api.github.com/orgs/github',
        repos_url: 'https://api.github.com/orgs/github/repos',
        events_url: 'https://api.github.com/orgs/github/events',
        hooks_url: 'https://api.github.com/orgs/github/hooks',
        issues_url: 'https://api.github.com/orgs/github/issues',
        members_url: 'https://api.github.com/orgs/github/members{/member}',
        public_members_url:
          'https://api.github.com/orgs/github/public_members{/member}',
        avatar_url: 'https://github.com/images/error/octocat_happy.gif',
        description: 'A great organization'
      },
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
    },
    {
      url: 'https://api.github.com/orgs/invitocat/memberships/defunkt',
      state: 'pending',
      role: 'admin',
      organization_url: 'https://api.github.com/orgs/invitocat',
      organization: {
        login: 'github',
        id: 1,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
        url: 'https://api.github.com/orgs/github',
        repos_url: 'https://api.github.com/orgs/github/repos',
        events_url: 'https://api.github.com/orgs/github/events',
        hooks_url: 'https://api.github.com/orgs/github/hooks',
        issues_url: 'https://api.github.com/orgs/github/issues',
        members_url: 'https://api.github.com/orgs/github/members{/member}',
        public_members_url:
          'https://api.github.com/orgs/github/public_members{/member}',
        avatar_url: 'https://github.com/images/error/octocat_happy.gif',
        description: 'A great organization'
      },
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
  ]
}
```

</details>

## [`listOutsideCollaborators(options)`](https://docs.github.com/rest/reference/orgs#list-outside-collaborators-for-an-organization)

List all users who are outside collaborators of an organization.

**Usage**

```js
const response = await octokit.orgs.listOutsideCollaborators({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.listOutsideCollaborators.all({
  org
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `filter` (string): Filter the list of outside collaborators. Can be one of:  
  \* `2fa_disabled`: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.  
  \* `all`: All outside collaborators.
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

## [`listPendingInvitations(options)`](https://docs.github.com/rest/reference/orgs#list-pending-organization-invitations)

The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.

**Usage**

```js
const response = await octokit.orgs.listPendingInvitations({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.listPendingInvitations.all({ org })) {
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
const response = {
  status: 200,
  data: [
    {
      id: 1,
      login: 'monalisa',
      email: 'octocat@github.com',
      role: 'direct_member',
      created_at: '2016-11-30T06:46:10-08:00',
      inviter: {
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
      },
      team_count: 2,
      invitation_team_url:
        'https://api.github.com/organizations/2/invitations/1/teams'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.listPendingInvitations({ org })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listPublicMembers(options)`](https://docs.github.com/rest/reference/orgs#list-public-organization-members)

Members of an organization can choose to have their membership publicized or not.

**Usage**

```js
const response = await octokit.orgs.listPublicMembers({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.listPublicMembers.all({ org })) {
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

## [`listWebhooks(options)`](https://docs.github.com/rest/reference/orgs#list-organization-webhooks)

**Usage**

```js
const response = await octokit.orgs.listWebhooks({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.orgs.listWebhooks.all({ org })) {
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
const response = {
  status: 200,
  data: [
    {
      id: 1,
      url: 'https://api.github.com/orgs/octocat/hooks/1',
      ping_url: 'https://api.github.com/orgs/octocat/hooks/1/pings',
      name: 'web',
      events: ['push', 'pull_request'],
      active: true,
      config: {
        url: 'http://example.com',
        content_type: 'json'
      },
      updated_at: '2011-09-06T20:39:23Z',
      created_at: '2011-09-06T17:26:27Z',
      type: 'Organization'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.listWebhooks({ org })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`pingWebhook(options)`](https://docs.github.com/rest/reference/orgs#ping-an-organization-webhook)

This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.

**Usage**

```js
const response = await octokit.orgs.pingWebhook({ org, hook_id })
```

**Options**

- `org` (required, string)
- `hook_id` (required, integer)

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
  response = await octokit.orgs.pingWebhook({ org, hook_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`removeMember(options)`](https://docs.github.com/rest/reference/orgs#remove-an-organization-member)

Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.

**Usage**

```js
const response = await octokit.orgs.removeMember({ org, username })
```

**Options**

- `org` (required, string)
- `username` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`removeMembershipForUser(options)`](https://docs.github.com/rest/reference/orgs#remove-organization-membership-for-a-user)

In order to remove a user's membership with an organization, the authenticated user must be an organization owner.

If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.

**Usage**

```js
const response = await octokit.orgs.removeMembershipForUser({ org, username })
```

**Options**

- `org` (required, string)
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
  response = await octokit.orgs.removeMembershipForUser({ org, username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`removeOutsideCollaborator(options)`](https://docs.github.com/rest/reference/orgs#remove-outside-collaborator-from-an-organization)

Removing a user from this list will remove them from all the organization's repositories.

**Usage**

```js
const response = await octokit.orgs.removeOutsideCollaborator({ org, username })
```

**Options**

- `org` (required, string)
- `username` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`removePublicMembershipForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user)

**Usage**

```js
const response = await octokit.orgs.removePublicMembershipForAuthenticatedUser({
  org,
  username
})
```

**Options**

- `org` (required, string)
- `username` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`setMembershipForUser(options)`](https://docs.github.com/rest/reference/orgs#set-organization-membership-for-a-user)

Only authenticated organization owners can add a member to the organization or update the member's role.

- If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
- Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.

**Rate limits**

To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.

**Usage**

```js
const response = await octokit.orgs.setMembershipForUser({ org, username })
```

**Options**

- `org` (required, string)
- `username` (required, string)
- `role` (string): The role to give the user in the organization. Can be one of:  
  \* `admin` - The user will become an owner of the organization.  
  \* `member` - The user will become a non-owner member of the organization.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/orgs/invitocat/memberships/defunkt',
    state: 'pending',
    role: 'admin',
    organization_url: 'https://api.github.com/orgs/invitocat',
    organization: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      hooks_url: 'https://api.github.com/orgs/github/hooks',
      issues_url: 'https://api.github.com/orgs/github/issues',
      members_url: 'https://api.github.com/orgs/github/members{/member}',
      public_members_url:
        'https://api.github.com/orgs/github/public_members{/member}',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      description: 'A great organization'
    },
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

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/orgs/octocat/memberships/defunkt',
    state: 'active',
    role: 'admin',
    organization_url: 'https://api.github.com/orgs/octocat',
    organization: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      hooks_url: 'https://api.github.com/orgs/github/hooks',
      issues_url: 'https://api.github.com/orgs/github/issues',
      members_url: 'https://api.github.com/orgs/github/members{/member}',
      public_members_url:
        'https://api.github.com/orgs/github/public_members{/member}',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      description: 'A great organization'
    },
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

## [`setPublicMembershipForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user)

The user can publicize their own membership. (A user cannot publicize the membership for another user.)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see [HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs).

**Usage**

```js
const response = await octokit.orgs.setPublicMembershipForAuthenticatedUser({
  org,
  username
})
```

**Options**

- `org` (required, string)
- `username` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`unblockUser(options)`](https://docs.github.com/rest/reference/orgs#unblock-a-user-from-an-organization)

**Usage**

```js
const response = await octokit.orgs.unblockUser({ org, username })
```

**Options**

- `org` (required, string)
- `username` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`update(options)`](https://docs.github.com/v3/orgs/#update-an-organization)

**Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.

**Usage**

```js
const response = await octokit.orgs.update({ org })
```

**Options**

- `org` (required, string)
- `billing_email` (string): Billing email address. This address is not publicized.
- `company` (string): The company name.
- `email` (string): The publicly visible email address.
- `twitter_username` (string): The Twitter username of the company.
- `location` (string): The location.
- `name` (string): The shorthand name of the company.
- `description` (string): The description of the company.
- `has_organization_projects` (boolean): Toggles whether an organization can use organization projects.
- `has_repository_projects` (boolean): Toggles whether repositories that belong to the organization can use repository projects.
- `default_repository_permission` (string): Default permission level members have for organization repositories:  
  \* `read` - can pull, but not push to or administer this repository.  
  \* `write` - can pull and push, but not administer this repository.  
  \* `admin` - can pull, push, and administer this repository.  
  \* `none` - no permissions granted by default.
- `members_can_create_repositories` (boolean): Toggles the ability of non-admin organization members to create repositories. Can be one of:  
  \* `true` - all organization members can create repositories.  
  \* `false` - only organization owners can create repositories.  
  Default: `true`  
  **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.
- `members_can_create_internal_repositories` (boolean): Toggles whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. Can be one of:  
  \* `true` - all organization members can create internal repositories.  
  \* `false` - only organization owners can create internal repositories.  
  Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
- `members_can_create_private_repositories` (boolean): Toggles whether organization members can create private repositories, which are visible to organization members with permission. Can be one of:  
  \* `true` - all organization members can create private repositories.  
  \* `false` - only organization owners can create private repositories.  
  Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
- `members_can_create_public_repositories` (boolean): Toggles whether organization members can create public repositories, which are visible to anyone. Can be one of:  
  \* `true` - all organization members can create public repositories.  
  \* `false` - only organization owners can create public repositories.  
  Default: `true`. For more information, see "[Restricting repository creation in your organization](https://help.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
- `members_allowed_repository_creation_type` (string): Specifies which types of repositories non-admin organization members can create. Can be one of:  
  \* `all` - all organization members can create public and private repositories.  
  \* `private` - members can create private repositories. This option is only available to repositories that are part of an organization on GitHub Enterprise Cloud.  
  \* `none` - only admin members can create repositories.  
  **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See the parameter deprecation notice in the operation description for details.
- `members_can_create_pages` (boolean): Toggles whether organization members can create GitHub Pages sites. Can be one of:  
  \* `true` - all organization members can create GitHub Pages sites.  
  \* `false` - no organization members can create GitHub Pages sites. Existing published sites will not be impacted.  
  Default: `true`.
- `blog` (string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    login: 'github',
    id: 1,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
    url: 'https://api.github.com/orgs/github',
    repos_url: 'https://api.github.com/orgs/github/repos',
    events_url: 'https://api.github.com/orgs/github/events',
    hooks_url: 'https://api.github.com/orgs/github/hooks',
    issues_url: 'https://api.github.com/orgs/github/issues',
    members_url: 'https://api.github.com/orgs/github/members{/member}',
    public_members_url:
      'https://api.github.com/orgs/github/public_members{/member}',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    description: 'A great organization',
    name: 'github',
    company: 'GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: 'octocat@github.com',
    twitter_username: 'github',
    is_verified: true,
    has_organization_projects: true,
    has_repository_projects: true,
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    html_url: 'https://github.com/octocat',
    created_at: '2008-01-14T04:33:35Z',
    type: 'Organization',
    total_private_repos: 100,
    owned_private_repos: 100,
    private_gists: 81,
    disk_usage: 10000,
    collaborators: 8,
    billing_email: 'mona@github.com',
    plan: {
      name: 'Medium',
      space: 400,
      private_repos: 20
    },
    default_repository_permission: 'read',
    members_can_create_repositories: true,
    two_factor_requirement_enabled: true,
    members_allowed_repository_creation_type: 'all',
    members_can_create_public_repositories: false,
    members_can_create_private_repositories: false,
    members_can_create_internal_repositories: false,
    members_can_create_pages: true,
    updated_at: '2014-03-03T18:58:10Z'
  }
}
```

</details>

**Error upon conflict (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.update({ org })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.update({ org })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`updateMembershipForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user)

**Usage**

```js
const response = await octokit.orgs.updateMembershipForAuthenticatedUser({
  org,
  state
})
```

**Options**

- `org` (required, string)
- `state` (required, string): The state that the membership should be in. Only `"active"` will be accepted.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/orgs/octocat/memberships/defunkt',
    state: 'active',
    role: 'admin',
    organization_url: 'https://api.github.com/orgs/octocat',
    organization: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      hooks_url: 'https://api.github.com/orgs/github/hooks',
      issues_url: 'https://api.github.com/orgs/github/issues',
      members_url: 'https://api.github.com/orgs/github/members{/member}',
      public_members_url:
        'https://api.github.com/orgs/github/public_members{/member}',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      description: 'A great organization'
    },
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
  response = await octokit.orgs.updateMembershipForAuthenticatedUser({
    org,
    state
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateWebhook(options)`](https://docs.github.com/rest/reference/orgs#update-an-organization-webhook)

Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use [Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization).

**Usage**

```js
const response = await octokit.orgs.updateWebhook({ org, hook_id, config })
```

**Options**

- `org` (required, string)
- `hook_id` (required, integer)
- `config` (object): Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#update-hook-config-params).
- `config.url` (required, string): The URL to which the payloads will be delivered.
- `config.content_type` (string): The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
- `config.secret` (string): If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
- `config.insecure_ssl` (string): Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
- `events` (string\[]): Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
- `active` (boolean): Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
- `name` (string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    url: 'https://api.github.com/orgs/octocat/hooks/1',
    ping_url: 'https://api.github.com/orgs/octocat/hooks/1/pings',
    name: 'web',
    events: ['pull_request'],
    active: true,
    config: {
      url: 'http://example.com',
      content_type: 'json'
    },
    updated_at: '2011-09-06T20:39:23Z',
    created_at: '2011-09-06T17:26:27Z',
    type: 'Organization'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.orgs.updateWebhook({ org, hook_id, config })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateWebhookConfigForOrg(options)`](https://docs.github.com/v3/orgs#update-a-webhook-configuration-for-an-organization)

Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use [Update an organization webhook](/rest/reference/orgs#update-an-organization-webhook).

Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.

**Usage**

```js
const response = await octokit.orgs.updateWebhookConfigForOrg({ org, hook_id })
```

**Options**

- `org` (required, string)
- `hook_id` (required, integer)
- `url` (string): The URL to which the payloads will be delivered.
- `content_type` (string): The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
- `secret` (string): If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
- `insecure_ssl` (string): Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    content_type: 'json',
    insecure_ssl: '0',
    secret: '********',
    url: 'https://example.com/webhook'
  }
}
```

</details>
