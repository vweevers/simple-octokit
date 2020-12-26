# `octokit.apps`

[Previous: activity](activity.md) \| [Index](README.md) \| [Next: billing](billing.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`addRepoToInstallation(options)`](#addrepotoinstallationoptions)
- [`checkToken(options)`](#checktokenoptions)
- [`createContentAttachment(options)`](#createcontentattachmentoptions)
- [`createFromManifest(options)`](#createfrommanifestoptions)
- [`createInstallationAccessToken(options)`](#createinstallationaccesstokenoptions)
- [`deleteAuthorization(options)`](#deleteauthorizationoptions)
- [`deleteInstallation(options)`](#deleteinstallationoptions)
- [`deleteToken(options)`](#deletetokenoptions)
- [`getAuthenticated()`](#getauthenticated)
- [`getBySlug(options)`](#getbyslugoptions)
- [`getInstallation(options)`](#getinstallationoptions)
- [`getOrgInstallation(options)`](#getorginstallationoptions)
- [`getRepoInstallation(options)`](#getrepoinstallationoptions)
- [`getSubscriptionPlanForAccount(options)`](#getsubscriptionplanforaccountoptions)
- [`getSubscriptionPlanForAccountStubbed(options)`](#getsubscriptionplanforaccountstubbedoptions)
- [`getUserInstallation(options)`](#getuserinstallationoptions)
- [`getWebhookConfigForApp()`](#getwebhookconfigforapp)
- [`listAccountsForPlan(options)`](#listaccountsforplanoptions)
- [`listAccountsForPlanStubbed(options)`](#listaccountsforplanstubbedoptions)
- [`listInstallationReposForAuthenticatedUser(options)`](#listinstallationreposforauthenticateduseroptions)
- [`listInstallations([options])`](#listinstallationsoptions)
- [`listInstallationsForAuthenticatedUser([options])`](#listinstallationsforauthenticateduseroptions)
- [`listPlans([options])`](#listplansoptions)
- [`listPlansStubbed([options])`](#listplansstubbedoptions)
- [`listReposAccessibleToInstallation([options])`](#listreposaccessibletoinstallationoptions)
- [`listSubscriptionsForAuthenticatedUser([options])`](#listsubscriptionsforauthenticateduseroptions)
- [`listSubscriptionsForAuthenticatedUserStubbed([options])`](#listsubscriptionsforauthenticateduserstubbedoptions)
- [`removeRepoFromInstallation(options)`](#removerepofrominstallationoptions)
- [`resetToken(options)`](#resettokenoptions)
- [`revokeInstallationAccessToken()`](#revokeinstallationaccesstoken)
- [`suspendInstallation(options)`](#suspendinstallationoptions)
- [`unsuspendInstallation(options)`](#unsuspendinstallationoptions)
- [`updateWebhookConfigForApp([options])`](#updatewebhookconfigforappoptions)

</details>

## [`addRepoToInstallation(options)`](https://docs.github.com/rest/reference/apps#add-a-repository-to-an-app-installation)

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations#create-a-new-authorization) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.addRepoToInstallation({
  installation_id,
  repository_id
})
```

**Options**

- `installation_id` (required, integer)
- `repository_id` (required, integer)

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
  response = await octokit.apps.addRepoToInstallation({
    installation_id,
    repository_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`checkToken(options)`](https://docs.github.com/rest/reference/apps#check-a-token)

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

**Usage**

```js
const response = await octokit.apps.checkToken({ client_id, access_token })
```

**Options**

- `client_id` (required, string)
- `access_token` (required, string): The access_token of the OAuth application.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    url: 'https://api.github.com/authorizations/1',
    scopes: ['public_repo'],
    token: 'abcdefgh12345678',
    token_last_eight: '12345678',
    hashed_token:
      '25f94a2a5c7fbaf499c665bc73d67c1c87e496da8985131633ee0a95819db2e8',
    app: {
      url: 'http://my-github-app.com',
      name: 'my github app',
      client_id: 'abcde12345fghij67890'
    },
    note: 'optional note',
    note_url: 'http://optional/note/url',
    updated_at: '2011-09-06T20:39:23Z',
    created_at: '2011-09-06T17:26:27Z',
    fingerprint: 'jklmnop12345678',
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
  response = await octokit.apps.checkToken({ client_id, access_token })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createContentAttachment(options)`](https://docs.github.com/rest/reference/apps#create-a-content-attachment)

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` of the content reference from the [`content_reference` event](https://docs.github.com/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See [Using content attachments](https://docs.github.com/apps/using-content-attachments/) for details about content attachments.

You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.createContentAttachment({
  content_reference_id,
  title,
  body
})
```

**Options**

- `content_reference_id` (required, integer)
- `title` (required, string): The title of the attachment
- `body` (required, string): The body of the attachment

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 101,
    title: "[A-1234] Error found in core/models.py file'",
    body:
      'You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.apps.createContentAttachment({
    content_reference_id,
    title,
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
  response = await octokit.apps.createContentAttachment({
    content_reference_id,
    title,
    body
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
  response = await octokit.apps.createContentAttachment({
    content_reference_id,
    title,
    body
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`createFromManifest(options)`](https://docs.github.com/v3/apps/#create-a-github-app-from-a-manifest)

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

**Usage**

```js
const response = await octokit.apps.createFromManifest({ code })
```

**Options**

- `code` (required, string)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    slug: 'octoapp',
    node_id: 'MDxOkludGVncmF0aW9uMQ==',
    owner: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url:
        'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      received_events_url:
        'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: true
    },
    name: 'Octocat App',
    description: '',
    external_url: 'https://example.com',
    html_url: 'https://github.com/apps/octoapp',
    created_at: '2017-07-08T16:18:44-04:00',
    updated_at: '2017-07-08T16:18:44-04:00',
    permissions: {
      metadata: 'read',
      contents: 'read',
      issues: 'write',
      single_file: 'write'
    },
    events: ['push', 'pull_request'],
    client_id: 'Iv1.8a61f9b3a7aba766',
    client_secret: '1726be1638095a19edd134c77bde3aa2ece1e5d8',
    webhook_secret: 'e340154128314309424b7c8e90325147d99fdafa',
    pem:
      '-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAuEPzOUE+kiEH1WLiMeBytTEF856j0hOVcSUSUkZxKvqczkWM\n9vo1gDyC7ZXhdH9fKh32aapba3RSsp4ke+giSmYTk2mGR538ShSDxh0OgpJmjiKP\nX0Bj4j5sFqfXuCtl9SkH4iueivv4R53ktqM+n6hk98l6hRwC39GVIblAh2lEM4L/\n6WvYwuQXPMM5OG2Ryh2tDZ1WS5RKfgq+9ksNJ5Q9UtqtqHkO+E63N5OK9sbzpUUm\noNaOl3udTlZD3A8iqwMPVxH4SxgATBPAc+bmjk6BMJ0qIzDcVGTrqrzUiywCTLma\nszdk8GjzXtPDmuBgNn+o6s02qVGpyydgEuqmTQIDAQABAoIBACL6AvkjQVVLn8kJ\ndBYznJJ4M8ECo+YEgaFwgAHODT0zRQCCgzd+Vxl4YwHmKV2Lr+y2s0drZt8GvYva\nKOK8NYYZyi15IlwFyRXmvvykF1UBpSXluYFDH7KaVroWMgRreHcIys5LqVSIb6Bo\ngDmK0yBLPp8qR29s2b7ScZRtLaqGJiX+j55rNzrZwxHkxFHyG9OG+u9IsBElcKCP\nkYCVE8ZdYexfnKOZbgn2kZB9qu0T/Mdvki8yk3I2bI6xYO24oQmhnT36qnqWoCBX\nNuCNsBQgpYZeZET8mEAUmo9d+ABmIHIvSs005agK8xRaP4+6jYgy6WwoejJRF5yd\nNBuF7aECgYEA50nZ4FiZYV0vcJDxFYeY3kYOvVuKn8OyW+2rg7JIQTremIjv8FkE\nZnwuF9ZRxgqLxUIfKKfzp/5l5LrycNoj2YKfHKnRejxRWXqG+ZETfxxlmlRns0QG\nJ4+BYL0CoanDSeA4fuyn4Bv7cy/03TDhfg/Uq0Aeg+hhcPE/vx3ebPsCgYEAy/Pv\neDLssOSdeyIxf0Brtocg6aPXIVaLdus+bXmLg77rJIFytAZmTTW8SkkSczWtucI3\nFI1I6sei/8FdPzAl62/JDdlf7Wd9K7JIotY4TzT7Tm7QU7xpfLLYIP1bOFjN81rk\n77oOD4LsXcosB/U6s1blPJMZ6AlO2EKs10UuR1cCgYBipzuJ2ADEaOz9RLWwi0AH\nPza2Sj+c2epQD9ZivD7Zo/Sid3ZwvGeGF13JyR7kLEdmAkgsHUdu1rI7mAolXMaB\n1pdrsHureeLxGbRM6za3tzMXWv1Il7FQWoPC8ZwXvMOR1VQDv4nzq7vbbA8z8c+c\n57+8tALQHOTDOgQIzwK61QKBgERGVc0EJy4Uag+VY8J4m1ZQKBluqo7TfP6DQ7O8\nM5MX73maB/7yAX8pVO39RjrhJlYACRZNMbK+v/ckEQYdJSSKmGCVe0JrGYDuPtic\nI9+IGfSorf7KHPoMmMN6bPYQ7Gjh7a++tgRFTMEc8956Hnt4xGahy9NcglNtBpVN\n6G8jAoGBAMCh028pdzJa/xeBHLLaVB2sc0Fe7993WlsPmnVE779dAz7qMscOtXJK\nfgtriltLSSD6rTA9hUAsL/X62rY0wdXuNdijjBb/qvrx7CAV6i37NK1CjABNjsfG\nZM372Ac6zc1EqSrid2IjET1YqyIW2KGLI1R2xbQc98UGlt48OdWu\n-----END RSA PRIVATE KEY-----\n'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.apps.createFromManifest({ code })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createInstallationAccessToken(options)`](https://docs.github.com/v3/apps/#create-an-installation-access-token-for-an-app)

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.createInstallationAccessToken({
  installation_id
})
```

**Options**

- `installation_id` (required, integer)
- `repositories` (string\[]): List of repository names that the token should have access to
- `repository_ids` (integer\[]): List of repository IDs that the token should have access to
- `permissions` (object)
- `permissions.contents` (string)
- `permissions.issues` (string)
- `permissions.deployments` (string)
- `permissions.single_file` (string)
- `permissions.def_not_a_repo` (string)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    token: 'v1.1f699f1069f60xxx',
    expires_at: '2016-07-11T22:14:10Z',
    permissions: {
      issues: 'write',
      contents: 'read'
    },
    repository_selection: 'selected',
    repositories: [
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
  response = await octokit.apps.createInstallationAccessToken({
    installation_id
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
  response = await octokit.apps.createInstallationAccessToken({
    installation_id
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`deleteAuthorization(options)`](https://docs.github.com/rest/reference/apps#delete-an-app-authorization)

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted. Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

**Usage**

```js
const response = await octokit.apps.deleteAuthorization({ client_id })
```

**Options**

- `client_id` (required, string)
- `access_token` (string): The OAuth access token used to authenticate to the GitHub API.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteInstallation(options)`](https://docs.github.com/v3/apps/#delete-an-installation-for-the-authenticated-app)

Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the [Suspend an app installation](https://docs.github.com/v3/apps/#suspend-an-app-installation) endpoint.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.deleteInstallation({ installation_id })
```

**Options**

- `installation_id` (required, integer)

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
  response = await octokit.apps.deleteInstallation({ installation_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteToken(options)`](https://docs.github.com/rest/reference/apps#delete-an-app-token)

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

**Usage**

```js
const response = await octokit.apps.deleteToken({ client_id })
```

**Options**

- `client_id` (required, string)
- `access_token` (string): The OAuth access token used to authenticate to the GitHub API.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`getAuthenticated()`](https://docs.github.com/v3/apps/#get-the-authenticated-app)

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the [List installations for the authenticated app](https://docs.github.com/rest/reference/apps#list-installations-for-the-authenticated-app) endpoint.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.getAuthenticated()
```

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    slug: 'octoapp',
    node_id: 'MDExOkludGVncmF0aW9uMQ==',
    owner: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url:
        'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      received_events_url:
        'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: true
    },
    name: 'Octocat App',
    description: '',
    external_url: 'https://example.com',
    html_url: 'https://github.com/apps/octoapp',
    created_at: '2017-07-08T16:18:44-04:00',
    updated_at: '2017-07-08T16:18:44-04:00',
    permissions: {
      metadata: 'read',
      contents: 'read',
      issues: 'write',
      single_file: 'write'
    },
    events: ['push', 'pull_request']
  }
}
```

</details>

## [`getBySlug(options)`](https://docs.github.com/v3/apps/#get-an-app)

**Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.getBySlug({ app_slug })
```

**Options**

- `app_slug` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    slug: 'octoapp',
    node_id: 'MDExOkludGVncmF0aW9uMQ==',
    owner: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      url: 'https://api.github.com/orgs/github',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url:
        'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      received_events_url:
        'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: true
    },
    name: 'Octocat App',
    description: '',
    external_url: 'https://example.com',
    html_url: 'https://github.com/apps/octoapp',
    created_at: '2017-07-08T16:18:44-04:00',
    updated_at: '2017-07-08T16:18:44-04:00',
    permissions: {
      metadata: 'read',
      contents: 'read',
      issues: 'write',
      single_file: 'write'
    },
    events: ['push', 'pull_request']
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.apps.getBySlug({ app_slug })
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
  response = await octokit.apps.getBySlug({ app_slug })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`getInstallation(options)`](https://docs.github.com/v3/apps/#get-an-installation-for-the-authenticated-app)

Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.getInstallation({ installation_id })
```

**Options**

- `installation_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    account: {
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
    access_tokens_url: 'https://api.github.com/installations/1/access_tokens',
    repositories_url: 'https://api.github.com/installation/repositories',
    html_url:
      'https://github.com/organizations/github/settings/installations/1',
    app_id: 1,
    target_id: 1,
    target_type: 'Organization',
    permissions: {
      checks: 'write',
      metadata: 'read',
      contents: 'read'
    },
    events: ['push', 'pull_request'],
    single_file_name: 'config.yaml',
    has_multiple_single_files: true,
    single_file_paths: ['config.yml', '.github/issue_TEMPLATE.md'],
    repository_selection: 'selected',
    created_at: '2017-07-08T16:18:44-04:00',
    updated_at: '2017-07-08T16:18:44-04:00',
    app_slug: 'github-actions'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.apps.getInstallation({ installation_id })
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
  response = await octokit.apps.getInstallation({ installation_id })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`getOrgInstallation(options)`](https://docs.github.com/v3/apps/#get-an-organization-installation-for-the-authenticated-app)

Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.getOrgInstallation({ org })
```

**Options**

- `org` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    account: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      avatar_url: 'https://github.com/images/error/hubot_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/github',
      html_url: 'https://github.com/github',
      followers_url: 'https://api.github.com/users/github/followers',
      following_url:
        'https://api.github.com/users/github/following{/other_user}',
      gists_url: 'https://api.github.com/users/github/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/github/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/github/subscriptions',
      organizations_url: 'https://api.github.com/users/github/orgs',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      received_events_url:
        'https://api.github.com/users/github/received_events',
      type: 'Organization',
      site_admin: false
    },
    repository_selection: 'all',
    access_tokens_url: 'https://api.github.com/installations/1/access_tokens',
    repositories_url: 'https://api.github.com/installation/repositories',
    html_url:
      'https://github.com/organizations/github/settings/installations/1',
    app_id: 1,
    target_id: 1,
    target_type: 'Organization',
    permissions: {
      checks: 'write',
      metadata: 'read',
      contents: 'read'
    },
    events: ['push', 'pull_request'],
    created_at: '2018-02-09T20:51:14Z',
    updated_at: '2018-02-09T20:51:14Z',
    single_file_name: 'config.yml',
    has_multiple_single_files: true,
    single_file_paths: ['config.yml', '.github/issue_TEMPLATE.md'],
    app_slug: 'github-actions'
  }
}
```

</details>

## [`getRepoInstallation(options)`](https://docs.github.com/v3/apps/#get-a-repository-installation-for-the-authenticated-app)

Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.getRepoInstallation({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    account: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      avatar_url: 'https://github.com/images/error/hubot_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/github',
      html_url: 'https://github.com/github',
      followers_url: 'https://api.github.com/users/github/followers',
      following_url:
        'https://api.github.com/users/github/following{/other_user}',
      gists_url: 'https://api.github.com/users/github/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/github/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/github/subscriptions',
      organizations_url: 'https://api.github.com/users/github/orgs',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      received_events_url:
        'https://api.github.com/users/github/received_events',
      type: 'Organization',
      site_admin: false
    },
    repository_selection: 'all',
    access_tokens_url: 'https://api.github.com/installations/1/access_tokens',
    repositories_url: 'https://api.github.com/installation/repositories',
    html_url:
      'https://github.com/organizations/github/settings/installations/1',
    app_id: 1,
    target_id: 1,
    target_type: 'Organization',
    permissions: {
      checks: 'write',
      metadata: 'read',
      contents: 'read'
    },
    events: ['push', 'pull_request'],
    created_at: '2018-02-09T20:51:14Z',
    updated_at: '2018-02-09T20:51:14Z',
    single_file_name: 'config.yml',
    has_multiple_single_files: true,
    single_file_paths: ['config.yml', '.github/issue_TEMPLATE.md'],
    app_slug: 'github-actions'
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
  response = await octokit.apps.getRepoInstallation({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getSubscriptionPlanForAccount(options)`](https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account)

Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

**Usage**

```js
const response = await octokit.apps.getSubscriptionPlanForAccount({
  account_id
})
```

**Options**

- `account_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/orgs/github',
    type: 'Organization',
    id: 4,
    login: 'github',
    organization_billing_email: 'billing@github.com',
    marketplace_pending_change: {
      effective_date: '2017-11-11T00:00:00Z',
      unit_count: null,
      id: 77,
      plan: {
        url: 'https://api.github.com/marketplace_listing/plans/1111',
        accounts_url:
          'https://api.github.com/marketplace_listing/plans/1111/accounts',
        id: 1111,
        number: 2,
        name: 'Startup',
        description: 'A professional-grade CI solution',
        monthly_price_in_cents: 699,
        yearly_price_in_cents: 7870,
        price_model: 'flat-rate',
        has_free_trial: true,
        state: 'published',
        unit_name: null,
        bullets: ['Up to 10 private repositories', '3 concurrent builds']
      }
    },
    marketplace_purchase: {
      billing_cycle: 'monthly',
      next_billing_date: '2017-11-11T00:00:00Z',
      unit_count: null,
      on_free_trial: true,
      free_trial_ends_on: '2017-11-11T00:00:00Z',
      updated_at: '2017-11-02T01:12:12Z',
      plan: {
        url: 'https://api.github.com/marketplace_listing/plans/1313',
        accounts_url:
          'https://api.github.com/marketplace_listing/plans/1313/accounts',
        id: 1313,
        number: 3,
        name: 'Pro',
        description: 'A professional-grade CI solution',
        monthly_price_in_cents: 1099,
        yearly_price_in_cents: 11870,
        price_model: 'flat-rate',
        has_free_trial: true,
        unit_name: null,
        state: 'published',
        bullets: ['Up to 25 private repositories', '11 concurrent builds']
      }
    }
  }
}
```

</details>

**Error when the account has not purchased the listing (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.apps.getSubscriptionPlanForAccount({ account_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getSubscriptionPlanForAccountStubbed(options)`](https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account-stubbed)

Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

**Usage**

```js
const response = await octokit.apps.getSubscriptionPlanForAccountStubbed({
  account_id
})
```

**Options**

- `account_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/orgs/github',
    type: 'Organization',
    id: 4,
    login: 'github',
    organization_billing_email: 'billing@github.com',
    marketplace_pending_change: {
      effective_date: '2017-11-11T00:00:00Z',
      unit_count: null,
      id: 77,
      plan: {
        url: 'https://api.github.com/marketplace_listing/plans/1111',
        accounts_url:
          'https://api.github.com/marketplace_listing/plans/1111/accounts',
        id: 1111,
        number: 2,
        name: 'Startup',
        description: 'A professional-grade CI solution',
        monthly_price_in_cents: 699,
        yearly_price_in_cents: 7870,
        price_model: 'flat-rate',
        has_free_trial: true,
        state: 'published',
        unit_name: null,
        bullets: ['Up to 10 private repositories', '3 concurrent builds']
      }
    },
    marketplace_purchase: {
      billing_cycle: 'monthly',
      next_billing_date: '2017-11-11T00:00:00Z',
      unit_count: null,
      on_free_trial: true,
      free_trial_ends_on: '2017-11-11T00:00:00Z',
      updated_at: '2017-11-02T01:12:12Z',
      plan: {
        url: 'https://api.github.com/marketplace_listing/plans/1313',
        accounts_url:
          'https://api.github.com/marketplace_listing/plans/1313/accounts',
        id: 1313,
        number: 3,
        name: 'Pro',
        description: 'A professional-grade CI solution',
        monthly_price_in_cents: 1099,
        yearly_price_in_cents: 11870,
        price_model: 'flat-rate',
        has_free_trial: true,
        unit_name: null,
        state: 'published',
        bullets: ['Up to 25 private repositories', '11 concurrent builds']
      }
    }
  }
}
```

</details>

**Error when the account has not purchased the listing (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.apps.getSubscriptionPlanForAccountStubbed({
    account_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getUserInstallation(options)`](https://docs.github.com/v3/apps/#get-a-user-installation-for-the-authenticated-app)

Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.getUserInstallation({ username })
```

**Options**

- `username` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    account: {
      login: 'github',
      id: 1,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
      avatar_url: 'https://github.com/images/error/hubot_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/github',
      html_url: 'https://github.com/github',
      followers_url: 'https://api.github.com/users/github/followers',
      following_url:
        'https://api.github.com/users/github/following{/other_user}',
      gists_url: 'https://api.github.com/users/github/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/github/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/github/subscriptions',
      organizations_url: 'https://api.github.com/users/github/orgs',
      repos_url: 'https://api.github.com/orgs/github/repos',
      events_url: 'https://api.github.com/orgs/github/events',
      received_events_url:
        'https://api.github.com/users/github/received_events',
      type: 'Organization',
      site_admin: false
    },
    repository_selection: 'all',
    access_tokens_url: 'https://api.github.com/installations/1/access_tokens',
    repositories_url: 'https://api.github.com/installation/repositories',
    html_url:
      'https://github.com/organizations/github/settings/installations/1',
    app_id: 1,
    target_id: 1,
    target_type: 'Organization',
    permissions: {
      checks: 'write',
      metadata: 'read',
      contents: 'read'
    },
    events: ['push', 'pull_request'],
    created_at: '2018-02-09T20:51:14Z',
    updated_at: '2018-02-09T20:51:14Z',
    single_file_name: 'config.yml',
    has_multiple_single_files: true,
    single_file_paths: ['config.yml', '.github/issue_TEMPLATE.md'],
    app_slug: 'github-actions'
  }
}
```

</details>

## [`getWebhookConfigForApp()`](https://docs.github.com/v3/apps#get-a-webhook-configuration-for-an-app)

Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see [Creating a GitHub App](/developers/apps/creating-a-github-app).

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.getWebhookConfigForApp()
```

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

## [`listAccountsForPlan(options)`](https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan)

Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

**Usage**

```js
const response = await octokit.apps.listAccountsForPlan({ plan_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.apps.listAccountsForPlan.all({
  plan_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `plan_id` (required, integer)
- `sort` (string): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
- `direction` (string): To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/orgs/github',
      type: 'Organization',
      id: 4,
      login: 'github',
      organization_billing_email: 'billing@github.com',
      marketplace_pending_change: {
        effective_date: '2017-11-11T00:00:00Z',
        unit_count: null,
        id: 77,
        plan: {
          url: 'https://api.github.com/marketplace_listing/plans/1111',
          accounts_url:
            'https://api.github.com/marketplace_listing/plans/1111/accounts',
          id: 1111,
          number: 2,
          name: 'Startup',
          description: 'A professional-grade CI solution',
          monthly_price_in_cents: 699,
          yearly_price_in_cents: 7870,
          price_model: 'flat-rate',
          has_free_trial: true,
          state: 'published',
          unit_name: null,
          bullets: ['Up to 10 private repositories', '3 concurrent builds']
        }
      },
      marketplace_purchase: {
        billing_cycle: 'monthly',
        next_billing_date: '2017-11-11T00:00:00Z',
        unit_count: null,
        on_free_trial: true,
        free_trial_ends_on: '2017-11-11T00:00:00Z',
        updated_at: '2017-11-02T01:12:12Z',
        plan: {
          url: 'https://api.github.com/marketplace_listing/plans/1313',
          accounts_url:
            'https://api.github.com/marketplace_listing/plans/1313/accounts',
          id: 1313,
          number: 3,
          name: 'Pro',
          description: 'A professional-grade CI solution',
          monthly_price_in_cents: 1099,
          yearly_price_in_cents: 11870,
          price_model: 'flat-rate',
          has_free_trial: true,
          unit_name: null,
          state: 'published',
          bullets: ['Up to 25 private repositories', '11 concurrent builds']
        }
      }
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.apps.listAccountsForPlan({ plan_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listAccountsForPlanStubbed(options)`](https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan-stubbed)

Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

**Usage**

```js
const response = await octokit.apps.listAccountsForPlanStubbed({ plan_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.apps.listAccountsForPlanStubbed.all({
  plan_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `plan_id` (required, integer)
- `sort` (string): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
- `direction` (string): To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/orgs/github',
      type: 'Organization',
      id: 4,
      login: 'github',
      organization_billing_email: 'billing@github.com',
      marketplace_pending_change: {
        effective_date: '2017-11-11T00:00:00Z',
        unit_count: null,
        id: 77,
        plan: {
          url: 'https://api.github.com/marketplace_listing/plans/1111',
          accounts_url:
            'https://api.github.com/marketplace_listing/plans/1111/accounts',
          id: 1111,
          number: 2,
          name: 'Startup',
          description: 'A professional-grade CI solution',
          monthly_price_in_cents: 699,
          yearly_price_in_cents: 7870,
          price_model: 'flat-rate',
          has_free_trial: true,
          state: 'published',
          unit_name: null,
          bullets: ['Up to 10 private repositories', '3 concurrent builds']
        }
      },
      marketplace_purchase: {
        billing_cycle: 'monthly',
        next_billing_date: '2017-11-11T00:00:00Z',
        unit_count: null,
        on_free_trial: true,
        free_trial_ends_on: '2017-11-11T00:00:00Z',
        updated_at: '2017-11-02T01:12:12Z',
        plan: {
          url: 'https://api.github.com/marketplace_listing/plans/1313',
          accounts_url:
            'https://api.github.com/marketplace_listing/plans/1313/accounts',
          id: 1313,
          number: 3,
          name: 'Pro',
          description: 'A professional-grade CI solution',
          monthly_price_in_cents: 1099,
          yearly_price_in_cents: 11870,
          price_model: 'flat-rate',
          has_free_trial: true,
          unit_name: null,
          state: 'published',
          bullets: ['Up to 25 private repositories', '11 concurrent builds']
        }
      }
    }
  ]
}
```

</details>

## [`listInstallationReposForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-user-access-token)

List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

**Usage**

```js
const response = await octokit.apps.listInstallationReposForAuthenticatedUser({
  installation_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.apps.listInstallationReposForAuthenticatedUser.all(
  { installation_id }
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `installation_id` (required, integer)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**The access the user has to each repository is included in the hash under the `permissions` key. (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_count: 1,
    repositories: [
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
  response = await octokit.apps.listInstallationReposForAuthenticatedUser({
    installation_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listInstallations([options])`](https://docs.github.com/v3/apps/#list-installations-for-the-authenticated-app)

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

**Usage**

```js
const response = await octokit.apps.listInstallations()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.apps.listInstallations.all(options)) {
  console.log(response.data)
}
```

</details>

**Options**

- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.
- `since` (string): Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `outdated` (string)

**The permissions the installation has are included under the `permissions` key. (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 1,
      account: {
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
      access_tokens_url: 'https://api.github.com/installations/1/access_tokens',
      repositories_url: 'https://api.github.com/installation/repositories',
      html_url:
        'https://github.com/organizations/github/settings/installations/1',
      app_id: 1,
      target_id: 1,
      target_type: 'Organization',
      permissions: {
        checks: 'write',
        metadata: 'read',
        contents: 'read'
      },
      events: ['push', 'pull_request'],
      single_file_name: 'config.yaml',
      has_multiple_single_files: true,
      single_file_paths: ['config.yml', '.github/issue_TEMPLATE.md'],
      repository_selection: 'selected',
      created_at: '2017-07-08T16:18:44-04:00',
      updated_at: '2017-07-08T16:18:44-04:00',
      app_slug: 'github-actions'
    }
  ]
}
```

</details>

## [`listInstallationsForAuthenticatedUser([options])`](https://docs.github.com/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token)

Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

**Usage**

```js
const response = await octokit.apps.listInstallationsForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.apps.listInstallationsForAuthenticatedUser.all(
  options
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**You can find the permissions for the installation under the `permissions` key. (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_count: 2,
    installations: [
      {
        id: 1,
        account: {
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
        access_tokens_url:
          'https://api.github.com/installations/1/access_tokens',
        repositories_url: 'https://api.github.com/installation/repositories',
        html_url:
          'https://github.com/organizations/github/settings/installations/1',
        app_id: 1,
        target_id: 1,
        target_type: 'Organization',
        permissions: {
          checks: 'write',
          metadata: 'read',
          contents: 'read'
        },
        events: ['push', 'pull_request'],
        single_file_name: 'config.yaml',
        has_multiple_single_files: true,
        single_file_paths: ['config.yml', '.github/issue_TEMPLATE.md'],
        repository_selection: 'all',
        created_at: '2017-07-08T16:18:44-04:00',
        updated_at: '2017-07-08T16:18:44-04:00',
        app_slug: 'github-actions'
      },
      {
        id: 3,
        account: {
          login: 'octocat',
          id: 2,
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
        access_tokens_url:
          'https://api.github.com/installations/1/access_tokens',
        repositories_url: 'https://api.github.com/installation/repositories',
        html_url:
          'https://github.com/organizations/github/settings/installations/1',
        app_id: 1,
        target_id: 1,
        target_type: 'Organization',
        permissions: {
          checks: 'write',
          metadata: 'read',
          contents: 'read'
        },
        events: ['push', 'pull_request'],
        single_file_name: 'config.yaml',
        has_multiple_single_files: true,
        single_file_paths: ['config.yml', '.github/issue_TEMPLATE.md'],
        repository_selection: 'all',
        created_at: '2017-07-08T16:18:44-04:00',
        updated_at: '2017-07-08T16:18:44-04:00',
        app_slug: 'github-actions'
      }
    ]
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.apps.listInstallationsForAuthenticatedUser()
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listPlans([options])`](https://docs.github.com/rest/reference/apps#list-plans)

Lists all plans that are part of your GitHub Marketplace listing.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

**Usage**

```js
const response = await octokit.apps.listPlans()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.apps.listPlans.all(options)) {
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
      url: 'https://api.github.com/marketplace_listing/plans/1313',
      accounts_url:
        'https://api.github.com/marketplace_listing/plans/1313/accounts',
      id: 1313,
      number: 3,
      name: 'Pro',
      description: 'A professional-grade CI solution',
      monthly_price_in_cents: 1099,
      yearly_price_in_cents: 11870,
      price_model: 'flat-rate',
      has_free_trial: true,
      unit_name: null,
      state: 'published',
      bullets: ['Up to 25 private repositories', '11 concurrent builds']
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.apps.listPlans()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listPlansStubbed([options])`](https://docs.github.com/rest/reference/apps#list-plans-stubbed)

Lists all plans that are part of your GitHub Marketplace listing.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

**Usage**

```js
const response = await octokit.apps.listPlansStubbed()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.apps.listPlansStubbed.all(options)) {
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
      url: 'https://api.github.com/marketplace_listing/plans/1313',
      accounts_url:
        'https://api.github.com/marketplace_listing/plans/1313/accounts',
      id: 1313,
      number: 3,
      name: 'Pro',
      description: 'A professional-grade CI solution',
      monthly_price_in_cents: 1099,
      yearly_price_in_cents: 11870,
      price_model: 'flat-rate',
      has_free_trial: true,
      unit_name: null,
      state: 'published',
      bullets: ['Up to 25 private repositories', '11 concurrent builds']
    }
  ]
}
```

</details>

## [`listReposAccessibleToInstallation([options])`](https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-app-installation)

List repositories that an app installation can access.

You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.listReposAccessibleToInstallation()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.apps.listReposAccessibleToInstallation.all(
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
  data: {
    total_count: 1,
    repositories: [
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
}
```

</details>

## [`listSubscriptionsForAuthenticatedUser([options])`](https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user)

Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).

**Usage**

```js
const response = await octokit.apps.listSubscriptionsForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.apps.listSubscriptionsForAuthenticatedUser.all(
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
      billing_cycle: 'monthly',
      next_billing_date: '2017-11-11T00:00:00Z',
      unit_count: null,
      on_free_trial: true,
      free_trial_ends_on: '2017-11-11T00:00:00Z',
      updated_at: '2017-11-02T01:12:12Z',
      account: {
        login: 'github',
        id: 4,
        url: 'https://api.github.com/orgs/github',
        email: null,
        organization_billing_email: 'billing@github.com',
        type: 'Organization'
      },
      plan: {
        url: 'https://api.github.com/marketplace_listing/plans/1313',
        accounts_url:
          'https://api.github.com/marketplace_listing/plans/1313/accounts',
        id: 1313,
        number: 3,
        name: 'Pro',
        description: 'A professional-grade CI solution',
        monthly_price_in_cents: 1099,
        yearly_price_in_cents: 11870,
        price_model: 'flat-rate',
        has_free_trial: true,
        unit_name: null,
        state: 'published',
        bullets: ['Up to 25 private repositories', '11 concurrent builds']
      }
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.apps.listSubscriptionsForAuthenticatedUser()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listSubscriptionsForAuthenticatedUserStubbed([options])`](https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user-stubbed)

Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).

**Usage**

```js
const response = await octokit.apps.listSubscriptionsForAuthenticatedUserStubbed()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.apps.listSubscriptionsForAuthenticatedUserStubbed.all(
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
      billing_cycle: 'monthly',
      next_billing_date: '2017-11-11T00:00:00Z',
      unit_count: null,
      on_free_trial: true,
      free_trial_ends_on: '2017-11-11T00:00:00Z',
      updated_at: '2017-11-02T01:12:12Z',
      account: {
        login: 'github',
        id: 4,
        url: 'https://api.github.com/orgs/github',
        email: null,
        organization_billing_email: 'billing@github.com',
        type: 'Organization'
      },
      plan: {
        url: 'https://api.github.com/marketplace_listing/plans/1313',
        accounts_url:
          'https://api.github.com/marketplace_listing/plans/1313/accounts',
        id: 1313,
        number: 3,
        name: 'Pro',
        description: 'A professional-grade CI solution',
        monthly_price_in_cents: 1099,
        yearly_price_in_cents: 11870,
        price_model: 'flat-rate',
        has_free_trial: true,
        unit_name: null,
        state: 'published',
        bullets: ['Up to 25 private repositories', '11 concurrent builds']
      }
    }
  ]
}
```

</details>

## [`removeRepoFromInstallation(options)`](https://docs.github.com/rest/reference/apps#remove-a-repository-from-an-app-installation)

Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations#create-a-new-authorization) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.removeRepoFromInstallation({
  installation_id,
  repository_id
})
```

**Options**

- `installation_id` (required, integer)
- `repository_id` (required, integer)

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
  response = await octokit.apps.removeRepoFromInstallation({
    installation_id,
    repository_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`resetToken(options)`](https://docs.github.com/rest/reference/apps#reset-a-token)

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

**Usage**

```js
const response = await octokit.apps.resetToken({ client_id, access_token })
```

**Options**

- `client_id` (required, string)
- `access_token` (required, string): The access_token of the OAuth application.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    url: 'https://api.github.com/authorizations/1',
    scopes: ['public_repo'],
    token: 'abcdefgh12345678',
    token_last_eight: '12345678',
    hashed_token:
      '25f94a2a5c7fbaf499c665bc73d67c1c87e496da8985131633ee0a95819db2e8',
    app: {
      url: 'http://my-github-app.com',
      name: 'my github app',
      client_id: 'abcde12345fghij67890'
    },
    note: 'optional note',
    note_url: 'http://optional/note/url',
    updated_at: '2011-09-06T20:39:23Z',
    created_at: '2011-09-06T17:26:27Z',
    fingerprint: 'jklmnop12345678',
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

## [`revokeInstallationAccessToken()`](https://docs.github.com/rest/reference/apps#revoke-an-installation-access-token)

Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the [Create an installation access token for an app](https://docs.github.com/rest/reference/apps#create-an-installation-access-token-for-an-app) endpoint.

You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.revokeInstallationAccessToken()
```

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`suspendInstallation(options)`](https://docs.github.com/v3/apps/#suspend-an-app-installation)

**Note:** Suspending a GitHub App installation is currently in beta and subject to change. Before you can suspend a GitHub App, the app owner must enable suspending installations for the app by opting-in to the beta. For more information, see [Suspending a GitHub App installation](https://docs.github.com/apps/managing-github-apps/suspending-a-github-app-installation/).

Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.

To suspend a GitHub App, you must be an account owner or have admin permissions in the repository or organization where the app is installed.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.suspendInstallation({ installation_id })
```

**Options**

- `installation_id` (required, integer)

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
  response = await octokit.apps.suspendInstallation({ installation_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`unsuspendInstallation(options)`](https://docs.github.com/v3/apps/#unsuspend-an-app-installation)

**Note:** Suspending a GitHub App installation is currently in beta and subject to change. Before you can suspend a GitHub App, the app owner must enable suspending installations for the app by opting-in to the beta. For more information, see [Suspending a GitHub App installation](https://docs.github.com/apps/managing-github-apps/suspending-a-github-app-installation/).

Removes a GitHub App installation suspension.

To unsuspend a GitHub App, you must be an account owner or have admin permissions in the repository or organization where the app is installed and suspended.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.unsuspendInstallation({ installation_id })
```

**Options**

- `installation_id` (required, integer)

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
  response = await octokit.apps.unsuspendInstallation({ installation_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateWebhookConfigForApp([options])`](https://docs.github.com/v3/apps#update-a-webhook-configuration-for-an-app)

Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see [Creating a GitHub App](/developers/apps/creating-a-github-app).

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

**Usage**

```js
const response = await octokit.apps.updateWebhookConfigForApp()
```

**Options**

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
