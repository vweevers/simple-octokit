# `octokit.migrations`

[Previous: meta](meta.md) \| [Index](README.md) \| [Next: orgs](orgs.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`cancelImport(options)`](#cancelimportoptions)
- [`deleteArchiveForAuthenticatedUser(options)`](#deletearchiveforauthenticateduseroptions)
- [`deleteArchiveForOrg(options)`](#deletearchivefororgoptions)
- [`downloadArchiveForOrg(options)`](#downloadarchivefororgoptions)
- [`getArchiveForAuthenticatedUser(options)`](#getarchiveforauthenticateduseroptions)
- [`getCommitAuthors(options)`](#getcommitauthorsoptions)
- [`getImportStatus(options)`](#getimportstatusoptions)
- [`getLargeFiles(options)`](#getlargefilesoptions)
- [`getStatusForAuthenticatedUser(options)`](#getstatusforauthenticateduseroptions)
- [`getStatusForOrg(options)`](#getstatusfororgoptions)
- [`listForAuthenticatedUser([options])`](#listforauthenticateduseroptions)
- [`listForOrg(options)`](#listfororgoptions)
- [`listReposForOrg(options)`](#listreposfororgoptions)
- [`listReposForUser(options)`](#listreposforuseroptions)
- [`mapCommitAuthor(options)`](#mapcommitauthoroptions)
- [`setLfsPreference(options)`](#setlfspreferenceoptions)
- [`startForAuthenticatedUser(options)`](#startforauthenticateduseroptions)
- [`startForOrg(options)`](#startfororgoptions)
- [`startImport(options)`](#startimportoptions)
- [`unlockRepoForAuthenticatedUser(options)`](#unlockrepoforauthenticateduseroptions)
- [`unlockRepoForOrg(options)`](#unlockrepofororgoptions)
- [`updateImport(options)`](#updateimportoptions)

</details>

## [`cancelImport(options)`](https://docs.github.com/rest/reference/migrations#cancel-an-import)

Stop an import for a repository.

**Usage**

```js
const response = await octokit.migrations.cancelImport({ owner, repo })
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

## [`deleteArchiveForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/migrations#delete-a-user-migration-archive)

Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://docs.github.com/rest/reference/migrations#list-user-migrations) and [Get a user migration status](https://docs.github.com/rest/reference/migrations#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.

**Usage**

```js
const response = await octokit.migrations.deleteArchiveForAuthenticatedUser({
  migration_id
})
```

**Options**

- `migration_id` (required, integer)

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
  response = await octokit.migrations.deleteArchiveForAuthenticatedUser({
    migration_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteArchiveForOrg(options)`](https://docs.github.com/rest/reference/migrations#delete-an-organization-migration-archive)

Deletes a previous migration archive. Migration archives are automatically deleted after seven days.

**Usage**

```js
const response = await octokit.migrations.deleteArchiveForOrg({
  org,
  migration_id
})
```

**Options**

- `org` (required, string)
- `migration_id` (required, integer)

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
  response = await octokit.migrations.deleteArchiveForOrg({ org, migration_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`downloadArchiveForOrg(options)`](https://docs.github.com/rest/reference/migrations#download-an-organization-migration-archive)

Fetches the URL to a migration archive.

**Usage**

```js
const response = await octokit.migrations.downloadArchiveForOrg({
  org,
  migration_id
})
```

**Options**

- `org` (required, string)
- `migration_id` (required, integer)

**Response (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.migrations.downloadArchiveForOrg({
    org,
    migration_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getArchiveForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive)

Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:

- attachments
- bases
- commit_comments
- issue_comments
- issue_events
- issues
- milestones
- organizations
- projects
- protected_branches
- pull_request_reviews
- pull_requests
- releases
- repositories
- review_comments
- schema
- users

The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.

**Usage**

```js
const response = await octokit.migrations.getArchiveForAuthenticatedUser({
  migration_id
})
```

**Options**

- `migration_id` (required, integer)

**Response (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

## [`getCommitAuthors(options)`](https://docs.github.com/rest/reference/migrations#get-commit-authors)

Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.

This endpoint and the [Map a commit author](https://docs.github.com/rest/reference/migrations#map-a-commit-author) endpoint allow you to provide correct Git author information.

**Usage**

```js
const response = await octokit.migrations.getCommitAuthors({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `since` (integer): A user ID. Only return users with an ID greater than this ID.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 2268557,
      remote_id: 'nobody@fc7da526-431c-80fe-3c8c-c148ff18d7ef',
      remote_name: 'nobody',
      email: 'hubot@github.com',
      name: 'Hubot',
      url: 'https://api.github.com/repos/octocat/socm/import/authors/2268557',
      import_url: 'https://api.github.com/repos/octocat/socm/import'
    },
    {
      id: 2268558,
      remote_id: 'svner@fc7da526-431c-80fe-3c8c-c148ff18d7ef',
      remote_name: 'svner',
      email: 'svner@fc7da526-431c-80fe-3c8c-c148ff18d7ef',
      name: 'svner',
      url: 'https://api.github.com/repos/octocat/socm/import/authors/2268558',
      import_url: 'https://api.github.com/repos/octocat/socm/import'
    },
    {
      id: 2268559,
      remote_id: 'svner@example.com@fc7da526-431c-80fe-3c8c-c148ff18d7ef',
      remote_name: 'svner@example.com',
      email: 'svner@example.com@fc7da526-431c-80fe-3c8c-c148ff18d7ef',
      name: 'svner@example.com',
      url: 'https://api.github.com/repos/octocat/socm/import/authors/2268559',
      import_url: 'https://api.github.com/repos/octocat/socm/import'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.migrations.getCommitAuthors({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getImportStatus(options)`](https://docs.github.com/rest/reference/migrations#get-an-import-status)

View the progress of an import.

**Import status**

This section includes details about the possible values of the `status` field of the Import Progress response.

An import that does not have errors will progress through these steps:

- `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
- `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
- `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
- `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
- `complete` - the import is complete, and the repository is ready on GitHub.

If there are problems, you will see one of these in the `status` field:

- `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
- `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information.
- `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
- `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/reference/migrations#cancel-an-import) and [retry](https://docs.github.com/rest/reference/migrations#start-an-import) with the correct URL.
- `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.

**The project_choices field**

When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.

**Git LFS related fields**

This section includes details about Git LFS related fields that may be present in the Import Progress response.

- `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
- `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
- `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
- `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.

**Usage**

```js
const response = await octokit.migrations.getImportStatus({ owner, repo })
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
    vcs: 'subversion',
    use_lfs: 'opt_in',
    vcs_url: 'http://svn.mycompany.com/svn/myproject',
    status: 'complete',
    status_text: 'Done',
    has_large_files: true,
    large_files_size: 132331036,
    large_files_count: 1,
    authors_count: 4,
    url: 'https://api.github.com/repos/octocat/socm/import',
    html_url: 'https://import.github.com/octocat/socm/import',
    authors_url: 'https://api.github.com/repos/octocat/socm/import/authors',
    repository_url: 'https://api.github.com/repos/octocat/socm'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.migrations.getImportStatus({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getLargeFiles(options)`](https://docs.github.com/rest/reference/migrations#get-large-files)

List files larger than 100MB found during the import

**Usage**

```js
const response = await octokit.migrations.getLargeFiles({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      ref_name: 'refs/heads/master',
      path: 'foo/bar/1',
      oid: 'd3d9446802a44259755d38e6d163e820',
      size: 10485760
    },
    {
      ref_name: 'refs/heads/master',
      path: 'foo/bar/2',
      oid: '6512bd43d9caa6e02c990b0a82652dca',
      size: 11534336
    },
    {
      ref_name: 'refs/heads/master',
      path: 'foo/bar/3',
      oid: 'c20ad4d76fe97759aa27a0c99bff6710',
      size: 12582912
    }
  ]
}
```

</details>

## [`getStatusForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/migrations#get-a-user-migration-status)

Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:

- `pending` - the migration hasn't started yet.
- `exporting` - the migration is in progress.
- `exported` - the migration finished successfully.
- `failed` - the migration failed.

Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive).

**Usage**

```js
const response = await octokit.migrations.getStatusForAuthenticatedUser({
  migration_id
})
```

**Options**

- `migration_id` (required, integer)
- `exclude` (array)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 79,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
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
    guid: '0b989ba4-242f-11e5-81e1-c7b6966d2516',
    state: 'exported',
    lock_repositories: true,
    exclude_attachments: false,
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
          html_url: 'https://api.github.com/licenses/mit'
        },
        forks: 1,
        open_issues: 1,
        watchers: 1
      }
    ],
    url: 'https://api.github.com/orgs/octo-org/migrations/79',
    created_at: '2015-07-06T15:33:38-07:00',
    updated_at: '2015-07-06T15:33:38-07:00'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.migrations.getStatusForAuthenticatedUser({
    migration_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getStatusForOrg(options)`](https://docs.github.com/rest/reference/migrations#get-an-organization-migration-status)

Fetches the status of a migration.

The `state` of a migration can be one of the following values:

- `pending`, which means the migration hasn't started yet.
- `exporting`, which means the migration is in progress.
- `exported`, which means the migration finished successfully.
- `failed`, which means the migration failed.

**Usage**

```js
const response = await octokit.migrations.getStatusForOrg({ org, migration_id })
```

**Options**

- `org` (required, string)
- `migration_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 79,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
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
    guid: '0b989ba4-242f-11e5-81e1-c7b6966d2516',
    state: 'exported',
    lock_repositories: true,
    exclude_attachments: false,
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
          html_url: 'https://api.github.com/licenses/mit'
        },
        forks: 1,
        open_issues: 1,
        watchers: 1
      }
    ],
    url: 'https://api.github.com/orgs/octo-org/migrations/79',
    created_at: '2015-07-06T15:33:38-07:00',
    updated_at: '2015-07-06T15:33:38-07:00'
  }
}
```

</details>

**Error (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.migrations.getStatusForOrg({ org, migration_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listForAuthenticatedUser([options])`](https://docs.github.com/rest/reference/migrations#list-user-migrations)

Lists all migrations a user has started.

**Usage**

```js
const response = await octokit.migrations.listForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.migrations.listForAuthenticatedUser.all(
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
      id: 79,
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
      guid: '0b989ba4-242f-11e5-81e1-c7b6966d2516',
      state: 'pending',
      lock_repositories: true,
      exclude_attachments: false,
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
            html_url: 'https://api.github.com/licenses/mit'
          },
          forks: 1,
          open_issues: 1,
          watchers: 1
        }
      ],
      url: 'https://api.github.com/orgs/octo-org/migrations/79',
      created_at: '2015-07-06T15:33:38-07:00',
      updated_at: '2015-07-06T15:33:38-07:00',
      node_id: 'MDQ6VXNlcjE='
    }
  ]
}
```

</details>

## [`listForOrg(options)`](https://docs.github.com/rest/reference/migrations#list-organization-migrations)

Lists the most recent migrations.

**Usage**

```js
const response = await octokit.migrations.listForOrg({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.migrations.listForOrg.all({ org })) {
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
      id: 79,
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
      guid: '0b989ba4-242f-11e5-81e1-c7b6966d2516',
      state: 'pending',
      lock_repositories: true,
      exclude_attachments: false,
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
            html_url: 'https://api.github.com/licenses/mit'
          },
          forks: 1,
          open_issues: 1,
          watchers: 1
        }
      ],
      url: 'https://api.github.com/orgs/octo-org/migrations/79',
      created_at: '2015-07-06T15:33:38-07:00',
      updated_at: '2015-07-06T15:33:38-07:00',
      node_id: 'MDQ6VXNlcjE='
    }
  ]
}
```

</details>

## [`listReposForOrg(options)`](https://docs.github.com/rest/reference/migrations#list-repositories-in-an-organization-migration)

List all the repositories for this organization migration.

**Usage**

```js
const response = await octokit.migrations.listReposForOrg({ org, migration_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.migrations.listReposForOrg.all({
  org,
  migration_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `migration_id` (required, integer)
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

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.migrations.listReposForOrg({ org, migration_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listReposForUser(options)`](https://docs.github.com/rest/reference/migrations#list-repositories-for-a-user-migration)

Lists all the repositories for this user migration.

**Usage**

```js
const response = await octokit.migrations.listReposForUser({ migration_id })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.migrations.listReposForUser.all({
  migration_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `migration_id` (required, integer)
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

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.migrations.listReposForUser({ migration_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`mapCommitAuthor(options)`](https://docs.github.com/rest/reference/migrations#map-a-commit-author)

Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.

**Usage**

```js
const response = await octokit.migrations.mapCommitAuthor({
  owner,
  repo,
  author_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `author_id` (required, integer)
- `email` (string): The new Git author email.
- `name` (string): The new Git author name.
- `remote_id` (string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 2268557,
    remote_id: 'nobody@fc7da526-431c-80fe-3c8c-c148ff18d7ef',
    remote_name: 'nobody',
    email: 'hubot@github.com',
    name: 'Hubot',
    url: 'https://api.github.com/repos/octocat/socm/import/authors/2268557',
    import_url: 'https://api.github.com/repos/octocat/socm/import'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.migrations.mapCommitAuthor({
    owner,
    repo,
    author_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`setLfsPreference(options)`](https://docs.github.com/rest/reference/migrations#update-git-lfs-preference)

You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).

**Usage**

```js
const response = await octokit.migrations.setLfsPreference({
  owner,
  repo,
  use_lfs
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `use_lfs` (required, string): Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    vcs: 'subversion',
    use_lfs: 'opt_in',
    vcs_url: 'http://svn.mycompany.com/svn/myproject',
    status: 'complete',
    status_text: 'Done',
    has_large_files: true,
    large_files_size: 132331036,
    large_files_count: 1,
    authors_count: 4,
    url: 'https://api.github.com/repos/octocat/socm/import',
    html_url: 'https://import.github.com/octocat/socm/import',
    authors_url: 'https://api.github.com/repos/octocat/socm/import/authors',
    repository_url: 'https://api.github.com/repos/octocat/socm'
  }
}
```

</details>

## [`startForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/migrations#start-a-user-migration)

Initiates the generation of a user migration archive.

**Usage**

```js
const response = await octokit.migrations.startForAuthenticatedUser({
  repositories
})
```

**Options**

- `lock_repositories` (boolean): Lock the repositories being migrated at the start of the migration
- `exclude_attachments` (boolean): Do not include attachments in the migration
- `exclude` (string\[]): Exclude attributes from the API response to improve performance
- `repositories` (required, string\[])

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 79,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
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
    guid: '0b989ba4-242f-11e5-81e1-c7b6966d2516',
    state: 'pending',
    lock_repositories: true,
    exclude_attachments: false,
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
          html_url: 'https://api.github.com/licenses/mit'
        },
        forks: 1,
        open_issues: 1,
        watchers: 1
      }
    ],
    url: 'https://api.github.com/orgs/octo-org/migrations/79',
    created_at: '2015-07-06T15:33:38-07:00',
    updated_at: '2015-07-06T15:33:38-07:00'
  }
}
```

</details>

## [`startForOrg(options)`](https://docs.github.com/rest/reference/migrations#start-an-organization-migration)

Initiates the generation of a migration archive.

**Usage**

```js
const response = await octokit.migrations.startForOrg({ org, repositories })
```

**Options**

- `org` (required, string)
- `repositories` (required, string\[]): A list of arrays indicating which repositories should be migrated.
- `lock_repositories` (boolean): Indicates whether repositories should be locked (to prevent manipulation) while migrating data.
- `exclude_attachments` (boolean): Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).
- `exclude` (string\[])

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 79,
    node_id: 'MDEyOk9yZ2FuaXphdGlvbjE=',
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
    guid: '0b989ba4-242f-11e5-81e1-c7b6966d2516',
    state: 'pending',
    lock_repositories: true,
    exclude_attachments: false,
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
          html_url: 'https://api.github.com/licenses/mit'
        },
        forks: 1,
        open_issues: 1,
        watchers: 1
      }
    ],
    url: 'https://api.github.com/orgs/octo-org/migrations/79',
    created_at: '2015-07-06T15:33:38-07:00',
    updated_at: '2015-07-06T15:33:38-07:00'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.migrations.startForOrg({ org, repositories })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`startImport(options)`](https://docs.github.com/rest/reference/migrations#start-an-import)

Start a source import to a GitHub repository using GitHub Importer.

**Usage**

```js
const response = await octokit.migrations.startImport({ owner, repo, vcs_url })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `vcs_url` (required, string): The URL of the originating repository.
- `vcs` (string): The originating VCS type. Can be one of `subversion`, `git`, `mercurial`, or `tfvc`. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
- `vcs_username` (string): If authentication is required, the username to provide to `vcs_url`.
- `vcs_password` (string): If authentication is required, the password to provide to `vcs_url`.
- `tfvc_project` (string): For a tfvc import, the name of the project that is being imported.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    vcs: 'subversion',
    use_lfs: 'undecided',
    vcs_url: 'http://svn.mycompany.com/svn/myproject',
    status: 'importing',
    status_text: 'Importing...',
    has_large_files: false,
    large_files_size: 0,
    large_files_count: 0,
    authors_count: 0,
    commit_count: 1042,
    url: 'https://api.github.com/repos/octocat/socm/import',
    html_url: 'https://import.github.com/octocat/socm/import',
    authors_url: 'https://api.github.com/repos/octocat/socm/import/authors',
    repository_url: 'https://api.github.com/repos/octocat/socm'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.migrations.startImport({ owner, repo, vcs_url })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`unlockRepoForAuthenticatedUser(options)`](https://docs.github.com/rest/reference/migrations#unlock-a-user-repository)

Unlocks a repository. You can lock repositories when you [start a user migration](https://docs.github.com/rest/reference/migrations#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://docs.github.com/rest/reference/repos#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.

**Usage**

```js
const response = await octokit.migrations.unlockRepoForAuthenticatedUser({
  migration_id,
  repo_name
})
```

**Options**

- `migration_id` (required, integer)
- `repo_name` (required, string)

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
  response = await octokit.migrations.unlockRepoForAuthenticatedUser({
    migration_id,
    repo_name
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`unlockRepoForOrg(options)`](https://docs.github.com/rest/reference/migrations#unlock-an-organization-repository)

Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/reference/repos#delete-a-repository) when the migration is complete and you no longer need the source data.

**Usage**

```js
const response = await octokit.migrations.unlockRepoForOrg({
  org,
  migration_id,
  repo_name
})
```

**Options**

- `org` (required, string)
- `migration_id` (required, integer)
- `repo_name` (required, string)

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
  response = await octokit.migrations.unlockRepoForOrg({
    org,
    migration_id,
    repo_name
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateImport(options)`](https://docs.github.com/rest/reference/migrations#update-an-import)

An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API request. If no parameters are provided, the import will be restarted.

**Usage**

```js
const response = await octokit.migrations.updateImport({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `vcs_username` (string): The username to provide to the originating repository.
- `vcs_password` (string): The password to provide to the originating repository.
- `vcs` (string)
- `tfvc_project` (string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    vcs: 'subversion',
    use_lfs: 'undecided',
    vcs_url: 'http://svn.mycompany.com/svn/myproject',
    status: 'detecting',
    url: 'https://api.github.com/repos/octocat/socm/import',
    html_url: 'https://import.github.com/octocat/socm/import',
    authors_url: 'https://api.github.com/repos/octocat/socm/import/authors',
    repository_url: 'https://api.github.com/repos/octocat/socm'
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    vcs: 'tfvc',
    use_lfs: 'undecided',
    vcs_url: 'http://tfs.mycompany.com/tfs/myproject',
    tfvc_project: 'project1',
    status: 'importing',
    status_text: 'Importing...',
    has_large_files: false,
    large_files_size: 0,
    large_files_count: 0,
    authors_count: 0,
    commit_count: 1042,
    url: 'https://api.github.com/repos/octocat/socm/import',
    html_url: 'https://import.github.com/octocat/socm/import',
    authors_url: 'https://api.github.com/repos/octocat/socm/import/authors',
    repository_url: 'https://api.github.com/repos/octocat/socm'
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    vcs: 'subversion',
    use_lfs: 'undecided',
    vcs_url: 'http://svn.mycompany.com/svn/myproject',
    status: 'importing',
    status_text: 'Importing...',
    has_large_files: false,
    large_files_size: 0,
    large_files_count: 0,
    authors_count: 0,
    commit_count: 1042,
    url: 'https://api.github.com/repos/octocat/socm/import',
    html_url: 'https://import.github.com/octocat/socm/import',
    authors_url: 'https://api.github.com/repos/octocat/socm/import/authors',
    repository_url: 'https://api.github.com/repos/octocat/socm'
  }
}
```

</details>
