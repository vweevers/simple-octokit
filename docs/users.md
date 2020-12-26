# `octokit.users`

[Previous: teams](teams.md) \| [Index](README.md) \| [Next: actions](actions.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`addEmailForAuthenticated(options)`](#addemailforauthenticatedoptions)
- [`block(options)`](#blockoptions)
- [`checkBlocked(options)`](#checkblockedoptions)
- [`checkFollowingForUser(options)`](#checkfollowingforuseroptions)
- [`checkPersonIsFollowedByAuthenticated(options)`](#checkpersonisfollowedbyauthenticatedoptions)
- [`createGpgKeyForAuthenticated(options)`](#creategpgkeyforauthenticatedoptions)
- [`createPublicSshKeyForAuthenticated(options)`](#createpublicsshkeyforauthenticatedoptions)
- [`deleteEmailForAuthenticated(options)`](#deleteemailforauthenticatedoptions)
- [`deleteGpgKeyForAuthenticated(options)`](#deletegpgkeyforauthenticatedoptions)
- [`deletePublicSshKeyForAuthenticated(options)`](#deletepublicsshkeyforauthenticatedoptions)
- [`follow(options)`](#followoptions)
- [`getAuthenticated()`](#getauthenticated)
- [`getByUsername(options)`](#getbyusernameoptions)
- [`getContextForUser(options)`](#getcontextforuseroptions)
- [`getGpgKeyForAuthenticated(options)`](#getgpgkeyforauthenticatedoptions)
- [`getPublicSshKeyForAuthenticated(options)`](#getpublicsshkeyforauthenticatedoptions)
- [`list([options])`](#listoptions)
- [`listBlockedByAuthenticated()`](#listblockedbyauthenticated)
- [`listEmailsForAuthenticated([options])`](#listemailsforauthenticatedoptions)
- [`listFollowedByAuthenticated([options])`](#listfollowedbyauthenticatedoptions)
- [`listFollowersForAuthenticatedUser([options])`](#listfollowersforauthenticateduseroptions)
- [`listFollowersForUser(options)`](#listfollowersforuseroptions)
- [`listFollowingForUser(options)`](#listfollowingforuseroptions)
- [`listGpgKeysForAuthenticated([options])`](#listgpgkeysforauthenticatedoptions)
- [`listGpgKeysForUser(options)`](#listgpgkeysforuseroptions)
- [`listPublicEmailsForAuthenticated([options])`](#listpublicemailsforauthenticatedoptions)
- [`listPublicKeysForUser(options)`](#listpublickeysforuseroptions)
- [`listPublicSshKeysForAuthenticated([options])`](#listpublicsshkeysforauthenticatedoptions)
- [`setPrimaryEmailVisibilityForAuthenticated(options)`](#setprimaryemailvisibilityforauthenticatedoptions)
- [`unblock(options)`](#unblockoptions)
- [`unfollow(options)`](#unfollowoptions)
- [`updateAuthenticated([options])`](#updateauthenticatedoptions)

</details>

## [`addEmailForAuthenticated(options)`](https://docs.github.com/rest/reference/users#add-an-email-address-for-the-authenticated-user)

This endpoint is accessible with the `user` scope.

**Usage**

```js
const response = await octokit.users.addEmailForAuthenticated({ emails })
```

**Options**

- `emails` (required, string\[]): Adds one or more email addresses to your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: [
    {
      email: 'octocat@octocat.org',
      primary: false,
      verified: false,
      visibility: 'public'
    },
    {
      email: 'octocat@github.com',
      primary: false,
      verified: false,
      visibility: null
    },
    {
      email: 'mona@github.com',
      primary: false,
      verified: false,
      visibility: null
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.addEmailForAuthenticated({ emails })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`block(options)`](https://docs.github.com/rest/reference/users#block-a-user)

**Usage**

```js
const response = await octokit.users.block({ username })
```

**Options**

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
  response = await octokit.users.block({ username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`checkBlocked(options)`](https://docs.github.com/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user)

If the user is blocked:

If the user is not blocked:

**Usage**

```js
const response = await octokit.users.checkBlocked({ username })
```

**Options**

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
  response = await octokit.users.checkBlocked({ username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`checkFollowingForUser(options)`](https://docs.github.com/rest/reference/users#check-if-a-user-follows-another-user)

**Usage**

```js
const response = await octokit.users.checkFollowingForUser({
  username,
  target_user
})
```

**Options**

- `username` (required, string)
- `target_user` (required, string)

**Response if the user follows the target user (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error if the user does not follow the target user (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.checkFollowingForUser({
    username,
    target_user
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`checkPersonIsFollowedByAuthenticated(options)`](https://docs.github.com/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user)

**Usage**

```js
const response = await octokit.users.checkPersonIsFollowedByAuthenticated({
  username
})
```

**Options**

- `username` (required, string)

**Response if the person is followed by the authenticated user (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error if the person is not followed by the authenticated user (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.checkPersonIsFollowedByAuthenticated({
    username
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createGpgKeyForAuthenticated(options)`](https://docs.github.com/rest/reference/users#create-a-gpg-key-for-the-authenticated-user)

Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Usage**

```js
const response = await octokit.users.createGpgKeyForAuthenticated({
  armored_public_key
})
```

**Options**

- `armored_public_key` (required, string): A GPG key in ASCII-armored format.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 3,
    primary_key_id: 2,
    key_id: '3262EFF25BA0D270',
    public_key: 'xsBNBFayYZ...',
    emails: [
      {
        email: 'mastahyeti@users.noreply.github.com',
        verified: true
      }
    ],
    subkeys: [
      {
        id: 4,
        primary_key_id: 3,
        key_id: '4A595D4C72EE49C7',
        public_key: 'zsBNBFayYZ...',
        emails: [],
        subkeys: [],
        can_sign: false,
        can_encrypt_comms: true,
        can_encrypt_storage: true,
        can_certify: false,
        created_at: '2016-03-24T11:31:04-06:00',
        expires_at: '2016-03-24T11:31:04-07:00'
      }
    ],
    can_sign: true,
    can_encrypt_comms: false,
    can_encrypt_storage: false,
    can_certify: true,
    created_at: '2016-03-24T11:31:04-06:00',
    expires_at: '2016-03-24T11:31:04-07:00',
    raw_key:
      '"-----BEGIN PGP PUBLIC KEY BLOCK-----\\nVersion: GnuPG v2\\n\\n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\\nIts/HFYRLiFgDLmTlxo=\\n=+OzK\\n-----END PGP PUBLIC KEY BLOCK-----"'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.createGpgKeyForAuthenticated({
    armored_public_key
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createPublicSshKeyForAuthenticated(options)`](https://docs.github.com/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user)

Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Usage**

```js
const response = await octokit.users.createPublicSshKeyForAuthenticated({ key })
```

**Options**

- `title` (string): A descriptive name for the new key.
- `key` (required, string): The public SSH key to add to your GitHub account.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    key_id: '012345678912345678',
    key: '2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv1234',
    id: 2,
    url: 'https://api.github.com/user/keys/2',
    title: 'ssh-rsa AAAAB3NzaC1yc2EAAA',
    created_at: '2020-06-11T21:31:57Z',
    verified: false,
    read_only: false
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.createPublicSshKeyForAuthenticated({ key })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteEmailForAuthenticated(options)`](https://docs.github.com/rest/reference/users#delete-an-email-address-for-the-authenticated-user)

This endpoint is accessible with the `user` scope.

**Usage**

```js
const response = await octokit.users.deleteEmailForAuthenticated({ emails })
```

**Options**

- `emails` (required, string\[]): Email addresses associated with the GitHub user account.

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
  response = await octokit.users.deleteEmailForAuthenticated({ emails })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteGpgKeyForAuthenticated(options)`](https://docs.github.com/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user)

Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Usage**

```js
const response = await octokit.users.deleteGpgKeyForAuthenticated({
  gpg_key_id
})
```

**Options**

- `gpg_key_id` (required, integer)

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
  response = await octokit.users.deleteGpgKeyForAuthenticated({ gpg_key_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deletePublicSshKeyForAuthenticated(options)`](https://docs.github.com/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user)

Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Usage**

```js
const response = await octokit.users.deletePublicSshKeyForAuthenticated({
  key_id
})
```

**Options**

- `key_id` (required, integer)

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
  response = await octokit.users.deletePublicSshKeyForAuthenticated({ key_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`follow(options)`](https://docs.github.com/rest/reference/users#follow-a-user)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see [HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs).

Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

**Usage**

```js
const response = await octokit.users.follow({ username })
```

**Options**

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
  response = await octokit.users.follow({ username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getAuthenticated()`](https://docs.github.com/v3/users/#get-the-authenticated-user)

If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.

If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.

**Usage**

```js
const response = await octokit.users.getAuthenticated()
```

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
    name: 'monalisa octocat',
    company: 'GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: 'octocat@github.com',
    hireable: false,
    bio: 'There once was...',
    twitter_username: 'monatheoctocat',
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    created_at: '2008-01-14T04:33:35Z',
    updated_at: '2008-01-14T04:33:35Z',
    private_gists: 81,
    total_private_repos: 100,
    owned_private_repos: 100,
    disk_usage: 10000,
    collaborators: 8,
    two_factor_authentication: true,
    plan: {
      name: 'Medium',
      space: 400,
      private_repos: 20,
      collaborators: 0
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
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
    name: 'monalisa octocat',
    company: 'GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: 'octocat@github.com',
    hireable: false,
    bio: 'There once was...',
    twitter_username: 'monatheoctocat',
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    created_at: '2008-01-14T04:33:35Z',
    updated_at: '2008-01-14T04:33:35Z'
  }
}
```

</details>

## [`getByUsername(options)`](https://docs.github.com/v3/users/#get-a-user)

Provides publicly available information about someone with a GitHub account.

GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub plan. The GitHub App must be authenticated as a user. See [Identifying and authorizing users for GitHub Apps](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) for details about authentication. For an example response, see 'Response with GitHub plan information' below"

The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://docs.github.com/rest/overview/resources-in-the-rest-api#authentication).

The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see [Emails API](https://docs.github.com/rest/reference/users#emails).

**Usage**

```js
const response = await octokit.users.getByUsername({ username })
```

**Options**

- `username` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
    name: 'monalisa octocat',
    company: 'GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: 'octocat@github.com',
    hireable: false,
    bio: 'There once was...',
    twitter_username: 'monatheoctocat',
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    created_at: '2008-01-14T04:33:35Z',
    updated_at: '2008-01-14T04:33:35Z'
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
    name: 'monalisa octocat',
    company: 'GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: 'octocat@github.com',
    hireable: false,
    bio: 'There once was...',
    twitter_username: 'monatheoctocat',
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    created_at: '2008-01-14T04:33:35Z',
    updated_at: '2008-01-14T04:33:35Z',
    plan: {
      name: 'pro',
      space: 976562499,
      collaborators: 0,
      private_repos: 9999
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.getByUsername({ username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getContextForUser(options)`](https://docs.github.com/v3/users/#get-contextual-information-for-a-user)

Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.

The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:

```shell
 curl -u username:token
  https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
```

**Usage**

```js
const response = await octokit.users.getContextForUser({ username })
```

**Options**

- `username` (required, string)
- `subject_type` (string): Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
- `subject_id` (string): Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    contexts: [
      {
        message: 'Owns this repository',
        octicon: 'repo'
      }
    ]
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.getContextForUser({ username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getGpgKeyForAuthenticated(options)`](https://docs.github.com/rest/reference/users#get-a-gpg-key-for-the-authenticated-user)

View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Usage**

```js
const response = await octokit.users.getGpgKeyForAuthenticated({ gpg_key_id })
```

**Options**

- `gpg_key_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 3,
    primary_key_id: 2,
    key_id: '3262EFF25BA0D270',
    public_key: 'xsBNBFayYZ...',
    emails: [
      {
        email: 'mastahyeti@users.noreply.github.com',
        verified: true
      }
    ],
    subkeys: [
      {
        id: 4,
        primary_key_id: 3,
        key_id: '4A595D4C72EE49C7',
        public_key: 'zsBNBFayYZ...',
        emails: [],
        subkeys: [],
        can_sign: false,
        can_encrypt_comms: true,
        can_encrypt_storage: true,
        can_certify: false,
        created_at: '2016-03-24T11:31:04-06:00',
        expires_at: '2016-03-24T11:31:04-07:00'
      }
    ],
    can_sign: true,
    can_encrypt_comms: false,
    can_encrypt_storage: false,
    can_certify: true,
    created_at: '2016-03-24T11:31:04-06:00',
    expires_at: '2016-03-24T11:31:04-07:00',
    raw_key:
      '"-----BEGIN PGP PUBLIC KEY BLOCK-----\\nVersion: GnuPG v2\\n\\n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\\nIts/HFYRLiFgDLmTlxo=\\n=+OzK\\n-----END PGP PUBLIC KEY BLOCK-----"'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.getGpgKeyForAuthenticated({ gpg_key_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getPublicSshKeyForAuthenticated(options)`](https://docs.github.com/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user)

View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Usage**

```js
const response = await octokit.users.getPublicSshKeyForAuthenticated({ key_id })
```

**Options**

- `key_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    key_id: '012345678912345678',
    key: '2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv1234',
    id: 2,
    url: 'https://api.github.com/user/keys/2',
    title: 'ssh-rsa AAAAB3NzaC1yc2EAAA',
    created_at: '2020-06-11T21:31:57Z',
    verified: false,
    read_only: false
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.getPublicSshKeyForAuthenticated({ key_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`list([options])`](https://docs.github.com/v3/users/#list-users)

Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.

**Usage**

```js
const response = await octokit.users.list()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.list.all(options)) {
  console.log(response.data)
}
```

</details>

**Options**

- `since` (integer): A user ID. Only return users with an ID greater than this ID.
- `per_page` (integer): Results per page (max 100)

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

## [`listBlockedByAuthenticated()`](https://docs.github.com/rest/reference/users#list-users-blocked-by-the-authenticated-user)

List the users you've blocked on your personal account.

**Usage**

```js
const response = await octokit.users.listBlockedByAuthenticated()
```

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
  response = await octokit.users.listBlockedByAuthenticated()
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
  response = await octokit.users.listBlockedByAuthenticated()
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listEmailsForAuthenticated([options])`](https://docs.github.com/rest/reference/users#list-email-addresses-for-the-authenticated-user)

Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.

**Usage**

```js
const response = await octokit.users.listEmailsForAuthenticated()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.listEmailsForAuthenticated.all(
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
      email: 'octocat@github.com',
      verified: true,
      primary: true,
      visibility: 'public'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.listEmailsForAuthenticated()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listFollowedByAuthenticated([options])`](https://docs.github.com/rest/reference/users#list-the-people-the-authenticated-user-follows)

Lists the people who the authenticated user follows.

**Usage**

```js
const response = await octokit.users.listFollowedByAuthenticated()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.listFollowedByAuthenticated.all(
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

## [`listFollowersForAuthenticatedUser([options])`](https://docs.github.com/rest/reference/users#list-followers-of-the-authenticated-user)

Lists the people following the authenticated user.

**Usage**

```js
const response = await octokit.users.listFollowersForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.listFollowersForAuthenticatedUser.all(
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

## [`listFollowersForUser(options)`](https://docs.github.com/rest/reference/users#list-followers-of-a-user)

Lists the people following the specified user.

**Usage**

```js
const response = await octokit.users.listFollowersForUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.listFollowersForUser.all({
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

## [`listFollowingForUser(options)`](https://docs.github.com/rest/reference/users#list-the-people-a-user-follows)

Lists the people who the specified user follows.

**Usage**

```js
const response = await octokit.users.listFollowingForUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.listFollowingForUser.all({
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

## [`listGpgKeysForAuthenticated([options])`](https://docs.github.com/rest/reference/users#list-gpg-keys-for-the-authenticated-user)

Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Usage**

```js
const response = await octokit.users.listGpgKeysForAuthenticated()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.listGpgKeysForAuthenticated.all(
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
      id: 3,
      primary_key_id: 2,
      key_id: '3262EFF25BA0D270',
      public_key: 'xsBNBFayYZ...',
      emails: [
        {
          email: 'mastahyeti@users.noreply.github.com',
          verified: true
        }
      ],
      subkeys: [
        {
          id: 4,
          primary_key_id: 3,
          key_id: '4A595D4C72EE49C7',
          public_key: 'zsBNBFayYZ...',
          emails: [],
          subkeys: [],
          can_sign: false,
          can_encrypt_comms: true,
          can_encrypt_storage: true,
          can_certify: false,
          created_at: '2016-03-24T11:31:04-06:00',
          expires_at: '2016-03-24T11:31:04-07:00'
        }
      ],
      can_sign: true,
      can_encrypt_comms: false,
      can_encrypt_storage: false,
      can_certify: true,
      created_at: '2016-03-24T11:31:04-06:00',
      expires_at: '2016-03-24T11:31:04-07:00',
      raw_key: 'string'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.listGpgKeysForAuthenticated()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listGpgKeysForUser(options)`](https://docs.github.com/rest/reference/users#list-gpg-keys-for-a-user)

Lists the GPG keys for a user. This information is accessible by anyone.

**Usage**

```js
const response = await octokit.users.listGpgKeysForUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.listGpgKeysForUser.all({
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
      id: 3,
      primary_key_id: 2,
      key_id: '3262EFF25BA0D270',
      public_key: 'xsBNBFayYZ...',
      emails: [
        {
          email: 'mastahyeti@users.noreply.github.com',
          verified: true
        }
      ],
      subkeys: [
        {
          id: 4,
          primary_key_id: 3,
          key_id: '4A595D4C72EE49C7',
          public_key: 'zsBNBFayYZ...',
          emails: [],
          subkeys: [],
          can_sign: false,
          can_encrypt_comms: true,
          can_encrypt_storage: true,
          can_certify: false,
          created_at: '2016-03-24T11:31:04-06:00',
          expires_at: '2016-03-24T11:31:04-07:00'
        }
      ],
      can_sign: true,
      can_encrypt_comms: false,
      can_encrypt_storage: false,
      can_certify: true,
      created_at: '2016-03-24T11:31:04-06:00',
      expires_at: '2016-03-24T11:31:04-07:00',
      raw_key: 'string'
    }
  ]
}
```

</details>

## [`listPublicEmailsForAuthenticated([options])`](https://docs.github.com/rest/reference/users#list-public-email-addresses-for-the-authenticated-user)

Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.

**Usage**

```js
const response = await octokit.users.listPublicEmailsForAuthenticated()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.listPublicEmailsForAuthenticated.all(
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
      email: 'octocat@github.com',
      verified: true,
      primary: true,
      visibility: 'public'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.listPublicEmailsForAuthenticated()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listPublicKeysForUser(options)`](https://docs.github.com/rest/reference/users#list-public-keys-for-a-user)

Lists the _verified_ public SSH keys for a user. This is accessible by anyone.

**Usage**

```js
const response = await octokit.users.listPublicKeysForUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.listPublicKeysForUser.all({
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
      id: 1,
      key: 'ssh-rsa AAA...'
    }
  ]
}
```

</details>

## [`listPublicSshKeysForAuthenticated([options])`](https://docs.github.com/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user)

Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Usage**

```js
const response = await octokit.users.listPublicSshKeysForAuthenticated()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.users.listPublicSshKeysForAuthenticated.all(
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
      key_id: '012345678912345678',
      key: '2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv1234',
      id: 2,
      url: 'https://api.github.com/user/keys/2',
      title: 'ssh-rsa AAAAB3NzaC1yc2EAAA',
      created_at: '2020-06-11T21:31:57Z',
      verified: false,
      read_only: false
    },
    {
      key_id: '012345678912345608',
      key: '2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJy931234',
      id: 3,
      url: 'https://api.github.com/user/keys/3',
      title: 'ssh-rsa AAAAB3NzaC1yc2EAAB',
      created_at: '2020-07-11T21:31:57Z',
      verified: false,
      read_only: false
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.listPublicSshKeysForAuthenticated()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`setPrimaryEmailVisibilityForAuthenticated(options)`](https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user)

Sets the visibility for your primary email addresses.

**Usage**

```js
const response = await octokit.users.setPrimaryEmailVisibilityForAuthenticated({
  email,
  visibility
})
```

**Options**

- `email` (required, string): An email address associated with the GitHub user account to manage.
- `visibility` (required, string): Denotes whether an email is publically visible.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      email: 'octocat@github.com',
      primary: true,
      verified: true,
      visibility: 'private'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.setPrimaryEmailVisibilityForAuthenticated({
    email,
    visibility
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`unblock(options)`](https://docs.github.com/rest/reference/users#unblock-a-user)

**Usage**

```js
const response = await octokit.users.unblock({ username })
```

**Options**

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
  response = await octokit.users.unblock({ username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`unfollow(options)`](https://docs.github.com/rest/reference/users#unfollow-a-user)

Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

**Usage**

```js
const response = await octokit.users.unfollow({ username })
```

**Options**

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
  response = await octokit.users.unfollow({ username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateAuthenticated([options])`](https://docs.github.com/v3/users/#update-the-authenticated-user)

**Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.

**Usage**

```js
const response = await octokit.users.updateAuthenticated()
```

**Options**

- `name` (string): The new name of the user.
- `email` (string): The publicly visible email address of the user.
- `blog` (string): The new blog URL of the user.
- `twitter_username` (string): The new Twitter username of the user.
- `company` (string): The new company of the user.
- `location` (string): The new location of the user.
- `hireable` (boolean): The new hiring availability of the user.
- `bio` (string): The new short biography of the user.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
    name: 'monalisa octocat',
    company: 'GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: 'octocat@github.com',
    hireable: false,
    bio: 'There once was...',
    twitter_username: 'monatheoctocat',
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    created_at: '2008-01-14T04:33:35Z',
    updated_at: '2008-01-14T04:33:35Z',
    private_gists: 81,
    total_private_repos: 100,
    owned_private_repos: 100,
    disk_usage: 10000,
    collaborators: 8,
    two_factor_authentication: true,
    plan: {
      name: 'Medium',
      space: 400,
      private_repos: 20,
      collaborators: 0
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.users.updateAuthenticated()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>
