# `octokit.checks`

[Previous: billing](billing.md) \| [Index](README.md) \| [Next: codeScanning](codeScanning.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`create(options)`](#createoptions)
- [`createSuite(options)`](#createsuiteoptions)
- [`get(options)`](#getoptions)
- [`getSuite(options)`](#getsuiteoptions)
- [`listAnnotations(options)`](#listannotationsoptions)
- [`listForRef(options)`](#listforrefoptions)
- [`listForSuite(options)`](#listforsuiteoptions)
- [`listSuitesForRef(options)`](#listsuitesforrefoptions)
- [`rerequestSuite(options)`](#rerequestsuiteoptions)
- [`setSuitesPreferences(options)`](#setsuitespreferencesoptions)
- [`update(options)`](#updateoptions)

</details>

## [`create(options)`](https://docs.github.com/rest/reference/checks#create-a-check-run)

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.

In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.

**Usage**

```js
const response = await octokit.checks.create({
  owner,
  repo,
  name,
  head_sha,
  output,
  actions
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `name` (required, string): The name of the check. For example, "code-coverage".
- `head_sha` (required, string): The SHA of the commit.
- `details_url` (string): The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.
- `external_id` (string): A reference for the run on the integrator's system.
- `status` (string): The current status. Can be one of `queued`, `in_progress`, or `completed`.
- `started_at` (string): The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `conclusion` (string): **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`. When the conclusion is `action_required`, additional details should be provided on the site specified by `details_url`.  
  **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. Only GitHub can change a check run conclusion to `stale`.
- `completed_at` (string): The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `output` (object): Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/rest/reference/checks#output-object) description.
- `output.title` (required, string): The title of the check run.
- `output.summary` (required, string): The summary of the check run. This parameter supports Markdown.
- `output.text` (string): The details of the check run. This parameter supports Markdown.
- `output.annotations` (object\[]): Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/reference/checks#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see "[About status checks](https://help.github.com/articles/about-status-checks#checks)". See the [`annotations` object](https://docs.github.com/rest/reference/checks#annotations-object) description for details about how to use this parameter.
- `output.annotations[].path` (required, string): The path of the file to add an annotation to. For example, `assets/css/main.css`.
- `output.annotations[].start_line` (required, integer): The start line of the annotation.
- `output.annotations[].end_line` (required, integer): The end line of the annotation.
- `output.annotations[].start_column` (integer): The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
- `output.annotations[].end_column` (integer): The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
- `output.annotations[].annotation_level` (required, string): The level of the annotation. Can be one of `notice`, `warning`, or `failure`.
- `output.annotations[].message` (required, string): A short description of the feedback for these lines of code. The maximum size is 64 KB.
- `output.annotations[].title` (string): The title that represents the annotation. The maximum size is 255 characters.
- `output.annotations[].raw_details` (string): Details about this annotation. The maximum size is 64 KB.
- `output.images` (object\[]): Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://docs.github.com/rest/reference/checks#images-object) description for details.
- `output.images[].alt` (required, string): The alternative text for the image.
- `output.images[].image_url` (required, string): The full URL of the image.
- `output.images[].caption` (string): A short image description.
- `actions` (object\[]): Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://docs.github.com/rest/reference/checks#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)." To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)."
- `actions[].label` (required, string): The text to be displayed on a button in the web UI. The maximum size is 20 characters.
- `actions[].description` (required, string): A short explanation of what this action would do. The maximum size is 40 characters.
- `actions[].identifier` (required, string): A reference for the action on the integrator's system. The maximum size is 20 characters.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 4,
    head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
    node_id: 'MDg6Q2hlY2tSdW40',
    external_id: '42',
    url: 'https://api.github.com/repos/github/hello-world/check-runs/4',
    html_url: 'https://github.com/github/hello-world/runs/4',
    details_url: 'https://example.com',
    status: 'in_progress',
    conclusion: null,
    started_at: '2018-05-04T01:14:52Z',
    completed_at: null,
    output: {
      title: 'Mighty Readme Report',
      summary: '',
      text: '',
      annotations_count: 1,
      annotations_url:
        'https://api.github.com/repos/github/hello-world/check-runs/4/annotations'
    },
    name: 'mighty_readme',
    check_suite: {
      id: 5
    },
    app: {
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
    },
    pull_requests: [
      {
        url: 'https://api.github.com/repos/github/hello-world/pulls/1',
        id: 1934,
        number: 3956,
        head: {
          ref: 'say-hello',
          sha: '3dca65fa3e8d4b3da3f3d056c59aee1c50f41390',
          repo: {
            id: 526,
            url: 'https://api.github.com/repos/github/hello-world',
            name: 'hello-world'
          }
        },
        base: {
          ref: 'master',
          sha: 'e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f',
          repo: {
            id: 526,
            url: 'https://api.github.com/repos/github/hello-world',
            name: 'hello-world'
          }
        }
      }
    ]
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 4,
    head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
    node_id: 'MDg6Q2hlY2tSdW40',
    external_id: '',
    url: 'https://api.github.com/repos/github/hello-world/check-runs/4',
    html_url: 'https://github.com/github/hello-world/runs/4',
    details_url: 'https://example.com',
    status: 'completed',
    conclusion: 'neutral',
    started_at: '2018-05-04T01:14:52Z',
    completed_at: '2018-05-04T01:14:52Z',
    output: {
      title: 'Mighty Readme report',
      summary: 'There are 0 failures, 2 warnings, and 1 notice.',
      text:
        'You may have some misspelled words on lines 2 and 4. You also may want to add a section in your README about how to install your app.',
      annotations_count: 2,
      annotations_url:
        'https://api.github.com/repos/github/hello-world/check-runs/4/annotations'
    },
    name: 'mighty_readme',
    check_suite: {
      id: 5
    },
    app: {
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
    },
    pull_requests: [
      {
        url: 'https://api.github.com/repos/github/hello-world/pulls/1',
        id: 1934,
        number: 3956,
        head: {
          ref: 'say-hello',
          sha: '3dca65fa3e8d4b3da3f3d056c59aee1c50f41390',
          repo: {
            id: 526,
            url: 'https://api.github.com/repos/github/hello-world',
            name: 'hello-world'
          }
        },
        base: {
          ref: 'master',
          sha: 'e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f',
          repo: {
            id: 526,
            url: 'https://api.github.com/repos/github/hello-world',
            name: 'hello-world'
          }
        }
      }
    ]
  }
}
```

</details>

## [`createSuite(options)`](https://docs.github.com/rest/reference/checks#create-a-check-suite)

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

By default, check suites are automatically created when you create a [check run](https://docs.github.com/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using [Update repository preferences for check suites](https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites). Your GitHub App must have the `checks:write` permission to create check suites.

**Usage**

```js
const response = await octokit.checks.createSuite({ owner, repo, head_sha })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `head_sha` (required, string): The sha of the head commit.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 5,
    node_id: 'MDEwOkNoZWNrU3VpdGU1',
    head_branch: 'master',
    head_sha: 'd6fde92930d4715a2b49857d24b940956b26d2d3',
    status: 'completed',
    conclusion: 'neutral',
    url: 'https://api.github.com/repos/github/hello-world/check-suites/5',
    before: '146e867f55c26428e5f9fade55a9bbf5e95a7912',
    after: 'd6fde92930d4715a2b49857d24b940956b26d2d3',
    pull_requests: [],
    created_at: '2017-07-08T16:18:44-04:00',
    updated_at: '2017-07-08T16:18:44-04:00',
    app: {
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
    },
    repository: {
      id: 1296269,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
      name: 'Hello-World',
      full_name: 'octocat/Hello-World',
      template_repository: 'octocat/template-repo',
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
      temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
      delete_branch_on_merge: true,
      subscribers_count: 42,
      network_count: 0
    },
    head_commit: {
      id: '7fd1a60b01f91b314f59955a4e4d4e80d8edf11d',
      tree_id: '7fd1a60b01f91b314f59955a4e4d4e80d8edf11d',
      message:
        'Merge pull request #6 from Spaceghost/patch-1\n\nNew line at end of file.',
      timestamp: '2016-10-10T00:00:00Z',
      author: {
        name: 'The Octocat',
        email: 'octocat@nowhere.com'
      },
      committer: {
        name: 'The Octocat',
        email: 'octocat@nowhere.com'
      }
    },
    latest_check_runs_count: 1,
    check_runs_url:
      'https://api.github.com/repos/octocat/Hello-World/check-suites/5/check-runs'
  }
}
```

</details>

## [`get(options)`](https://docs.github.com/rest/reference/checks#get-a-check-run)

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

**Usage**

```js
const response = await octokit.checks.get({ owner, repo, check_run_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `check_run_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 4,
    head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
    node_id: 'MDg6Q2hlY2tSdW40',
    external_id: '',
    url: 'https://api.github.com/repos/github/hello-world/check-runs/4',
    html_url: 'https://github.com/github/hello-world/runs/4',
    details_url: 'https://example.com',
    status: 'completed',
    conclusion: 'neutral',
    started_at: '2018-05-04T01:14:52Z',
    completed_at: '2018-05-04T01:14:52Z',
    output: {
      title: 'Mighty Readme report',
      summary: 'There are 0 failures, 2 warnings, and 1 notice.',
      text:
        'You may have some misspelled words on lines 2 and 4. You also may want to add a section in your README about how to install your app.',
      annotations_count: 2,
      annotations_url:
        'https://api.github.com/repos/github/hello-world/check-runs/4/annotations'
    },
    name: 'mighty_readme',
    check_suite: {
      id: 5
    },
    app: {
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
    },
    pull_requests: [
      {
        url: 'https://api.github.com/repos/github/hello-world/pulls/1',
        id: 1934,
        number: 3956,
        head: {
          ref: 'say-hello',
          sha: '3dca65fa3e8d4b3da3f3d056c59aee1c50f41390',
          repo: {
            id: 526,
            url: 'https://api.github.com/repos/github/hello-world',
            name: 'hello-world'
          }
        },
        base: {
          ref: 'master',
          sha: 'e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f',
          repo: {
            id: 526,
            url: 'https://api.github.com/repos/github/hello-world',
            name: 'hello-world'
          }
        }
      }
    ]
  }
}
```

</details>

## [`getSuite(options)`](https://docs.github.com/rest/reference/checks#get-a-check-suite)

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

**Usage**

```js
const response = await octokit.checks.getSuite({ owner, repo, check_suite_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `check_suite_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 5,
    node_id: 'MDEwOkNoZWNrU3VpdGU1',
    head_branch: 'master',
    head_sha: 'd6fde92930d4715a2b49857d24b940956b26d2d3',
    status: 'completed',
    conclusion: 'neutral',
    url: 'https://api.github.com/repos/github/hello-world/check-suites/5',
    before: '146e867f55c26428e5f9fade55a9bbf5e95a7912',
    after: 'd6fde92930d4715a2b49857d24b940956b26d2d3',
    pull_requests: [],
    created_at: '2017-07-08T16:18:44-04:00',
    updated_at: '2017-07-08T16:18:44-04:00',
    app: {
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
    },
    repository: {
      id: 1296269,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
      name: 'Hello-World',
      full_name: 'octocat/Hello-World',
      template_repository: 'octocat/template-repo',
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
      temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
      delete_branch_on_merge: true,
      subscribers_count: 42,
      network_count: 0
    },
    head_commit: {
      id: '7fd1a60b01f91b314f59955a4e4d4e80d8edf11d',
      tree_id: '7fd1a60b01f91b314f59955a4e4d4e80d8edf11d',
      message:
        'Merge pull request #6 from Spaceghost/patch-1\n\nNew line at end of file.',
      timestamp: '2016-10-10T00:00:00Z',
      author: {
        name: 'The Octocat',
        email: 'octocat@nowhere.com'
      },
      committer: {
        name: 'The Octocat',
        email: 'octocat@nowhere.com'
      }
    },
    latest_check_runs_count: 1,
    check_runs_url:
      'https://api.github.com/repos/octocat/Hello-World/check-suites/5/check-runs'
  }
}
```

</details>

## [`listAnnotations(options)`](https://docs.github.com/rest/reference/checks#list-check-run-annotations)

Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.

**Usage**

```js
const response = await octokit.checks.listAnnotations({
  owner,
  repo,
  check_run_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.checks.listAnnotations.all({
  owner,
  repo,
  check_run_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `check_run_id` (required, integer)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      path: 'README.md',
      start_line: 2,
      end_line: 2,
      start_column: 5,
      end_column: 10,
      annotation_level: 'warning',
      title: 'Spell Checker',
      message: "Check your spelling for 'banaas'.",
      raw_details: "Do you mean 'bananas' or 'banana'?",
      blob_href:
        'https://api.github.com/repos/github/rest-api-description/git/blobs/abc'
    }
  ]
}
```

</details>

## [`listForRef(options)`](https://docs.github.com/rest/reference/checks#list-check-runs-for-a-git-reference)

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

**Usage**

```js
const response = await octokit.checks.listForRef({ owner, repo, ref })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.checks.listForRef.all({
  owner,
  repo,
  ref
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string)
- `check_name` (string): Returns check runs with the specified `name`.
- `status` (string): Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
- `filter` (string): Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_count: 1,
    check_runs: [
      {
        id: 4,
        head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
        node_id: 'MDg6Q2hlY2tSdW40',
        external_id: '',
        url: 'https://api.github.com/repos/github/hello-world/check-runs/4',
        html_url: 'https://github.com/github/hello-world/runs/4',
        details_url: 'https://example.com',
        status: 'completed',
        conclusion: 'neutral',
        started_at: '2018-05-04T01:14:52Z',
        completed_at: '2018-05-04T01:14:52Z',
        output: {
          title: 'Mighty Readme report',
          summary: 'There are 0 failures, 2 warnings, and 1 notice.',
          text:
            'You may have some misspelled words on lines 2 and 4. You also may want to add a section in your README about how to install your app.',
          annotations_count: 2,
          annotations_url:
            'https://api.github.com/repos/github/hello-world/check-runs/4/annotations'
        },
        name: 'mighty_readme',
        check_suite: {
          id: 5
        },
        app: {
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
            subscriptions_url:
              'https://api.github.com/users/octocat/subscriptions',
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
        },
        pull_requests: [
          {
            url: 'https://api.github.com/repos/github/hello-world/pulls/1',
            id: 1934,
            number: 3956,
            head: {
              ref: 'say-hello',
              sha: '3dca65fa3e8d4b3da3f3d056c59aee1c50f41390',
              repo: {
                id: 526,
                url: 'https://api.github.com/repos/github/hello-world',
                name: 'hello-world'
              }
            },
            base: {
              ref: 'master',
              sha: 'e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f',
              repo: {
                id: 526,
                url: 'https://api.github.com/repos/github/hello-world',
                name: 'hello-world'
              }
            }
          }
        ]
      }
    ]
  }
}
```

</details>

## [`listForSuite(options)`](https://docs.github.com/rest/reference/checks#list-check-runs-in-a-check-suite)

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

**Usage**

```js
const response = await octokit.checks.listForSuite({
  owner,
  repo,
  check_suite_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.checks.listForSuite.all({
  owner,
  repo,
  check_suite_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `check_suite_id` (required, integer)
- `check_name` (string): Returns check runs with the specified `name`.
- `status` (string): Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
- `filter` (string): Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_count: 1,
    check_runs: [
      {
        id: 4,
        head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
        node_id: 'MDg6Q2hlY2tSdW40',
        external_id: '',
        url: 'https://api.github.com/repos/github/hello-world/check-runs/4',
        html_url: 'https://github.com/github/hello-world/runs/4',
        details_url: 'https://example.com',
        status: 'completed',
        conclusion: 'neutral',
        started_at: '2018-05-04T01:14:52Z',
        completed_at: '2018-05-04T01:14:52Z',
        output: {
          title: 'Mighty Readme report',
          summary: 'There are 0 failures, 2 warnings, and 1 notice.',
          text:
            'You may have some misspelled words on lines 2 and 4. You also may want to add a section in your README about how to install your app.',
          annotations_count: 2,
          annotations_url:
            'https://api.github.com/repos/github/hello-world/check-runs/4/annotations'
        },
        name: 'mighty_readme',
        check_suite: {
          id: 5
        },
        app: {
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
            subscriptions_url:
              'https://api.github.com/users/octocat/subscriptions',
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
        },
        pull_requests: [
          {
            url: 'https://api.github.com/repos/github/hello-world/pulls/1',
            id: 1934,
            number: 3956,
            head: {
              ref: 'say-hello',
              sha: '3dca65fa3e8d4b3da3f3d056c59aee1c50f41390',
              repo: {
                id: 526,
                url: 'https://api.github.com/repos/github/hello-world',
                name: 'hello-world'
              }
            },
            base: {
              ref: 'master',
              sha: 'e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f',
              repo: {
                id: 526,
                url: 'https://api.github.com/repos/github/hello-world',
                name: 'hello-world'
              }
            }
          }
        ]
      }
    ]
  }
}
```

</details>

## [`listSuitesForRef(options)`](https://docs.github.com/rest/reference/checks#list-check-suites-for-a-git-reference)

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

**Usage**

```js
const response = await octokit.checks.listSuitesForRef({ owner, repo, ref })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.checks.listSuitesForRef.all({
  owner,
  repo,
  ref
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string)
- `app_id` (integer): Filters check suites by GitHub App `id`.
- `check_name` (string): Returns check runs with the specified `name`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_count: 1,
    check_suites: [
      {
        id: 5,
        node_id: 'MDEwOkNoZWNrU3VpdGU1',
        head_branch: 'master',
        head_sha: 'd6fde92930d4715a2b49857d24b940956b26d2d3',
        status: 'completed',
        conclusion: 'neutral',
        url: 'https://api.github.com/repos/github/hello-world/check-suites/5',
        before: '146e867f55c26428e5f9fade55a9bbf5e95a7912',
        after: 'd6fde92930d4715a2b49857d24b940956b26d2d3',
        pull_requests: [],
        app: {
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
            subscriptions_url:
              'https://api.github.com/users/octocat/subscriptions',
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
        },
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
          temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
          delete_branch_on_merge: true,
          subscribers_count: 42,
          network_count: 0
        },
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        head_commit: {
          id: '7fd1a60b01f91b314f59955a4e4d4e80d8edf11d',
          tree_id: '7fd1a60b01f91b314f59955a4e4d4e80d8edf11d',
          message:
            'Merge pull request #6 from Spaceghost/patch-1\n\nNew line at end of file.',
          timestamp: '2016-10-10T00:00:00Z',
          author: {
            name: 'The Octocat',
            email: 'octocat@nowhere.com'
          },
          committer: {
            name: 'The Octocat',
            email: 'octocat@nowhere.com'
          }
        },
        latest_check_runs_count: 1,
        check_runs_url:
          'https://api.github.com/repos/octocat/Hello-World/check-suites/5/check-runs'
      }
    ]
  }
}
```

</details>

## [`rerequestSuite(options)`](https://docs.github.com/rest/reference/checks#rerequest-a-check-suite)

Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.

To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.

**Usage**

```js
const response = await octokit.checks.rerequestSuite({
  owner,
  repo,
  check_suite_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `check_suite_id` (required, integer)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = { status: 201 }
```

</details>

## [`setSuitesPreferences(options)`](https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites)

Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.

**Usage**

```js
const response = await octokit.checks.setSuitesPreferences({
  owner,
  repo,
  auto_trigger_checks
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `auto_trigger_checks` (object\[]): Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://docs.github.com/rest/reference/checks#auto_trigger_checks-object) description for details.
- `auto_trigger_checks[].app_id` (required, integer): The `id` of the GitHub App.
- `auto_trigger_checks[].setting` (required, boolean): Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    preferences: {
      auto_trigger_checks: [
        {
          app_id: 2,
          setting: true
        },
        {
          app_id: 4,
          setting: false
        }
      ]
    },
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
        html_url: 'http://choosealicense.com/licenses/mit/'
      },
      forks: 1,
      open_issues: 1,
      watchers: 1
    }
  }
}
```

</details>

## [`update(options)`](https://docs.github.com/rest/reference/checks#update-a-check-run)

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.

**Usage**

```js
const response = await octokit.checks.update({
  owner,
  repo,
  check_run_id,
  output,
  actions
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `check_run_id` (required, integer)
- `name` (string): The name of the check. For example, "code-coverage".
- `details_url` (string): The URL of the integrator's site that has the full details of the check.
- `external_id` (string): A reference for the run on the integrator's system.
- `started_at` (string): This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `status` (string): The current status. Can be one of `queued`, `in_progress`, or `completed`.
- `conclusion` (string): **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`.  
  **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. Only GitHub can change a check run conclusion to `stale`.
- `completed_at` (string): The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `output` (object): Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/rest/reference/checks#output-object-1) description.
- `output.title` (string): **Required**.
- `output.summary` (required, string): Can contain Markdown.
- `output.text` (string): Can contain Markdown.
- `output.annotations` (object\[]): Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. Annotations are visible in GitHub's pull request UI. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/reference/checks#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about annotations in the UI, see "[About status checks](https://help.github.com/articles/about-status-checks#checks)". See the [`annotations` object](https://docs.github.com/rest/reference/checks#annotations-object-1) description for details.
- `output.annotations[].path` (required, string): The path of the file to add an annotation to. For example, `assets/css/main.css`.
- `output.annotations[].start_line` (required, integer): The start line of the annotation.
- `output.annotations[].end_line` (required, integer): The end line of the annotation.
- `output.annotations[].start_column` (integer): The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
- `output.annotations[].end_column` (integer): The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
- `output.annotations[].annotation_level` (required, string): The level of the annotation. Can be one of `notice`, `warning`, or `failure`.
- `output.annotations[].message` (required, string): A short description of the feedback for these lines of code. The maximum size is 64 KB.
- `output.annotations[].title` (string): The title that represents the annotation. The maximum size is 255 characters.
- `output.annotations[].raw_details` (string): Details about this annotation. The maximum size is 64 KB.
- `output.images` (object\[]): Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://docs.github.com/rest/reference/checks#annotations-object-1) description for details.
- `output.images[].alt` (required, string): The alternative text for the image.
- `output.images[].image_url` (required, string): The full URL of the image.
- `output.images[].caption` (string): A short image description.
- `actions` (object\[]): Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://docs.github.com/rest/reference/checks#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)."
- `actions[].label` (required, string): The text to be displayed on a button in the web UI. The maximum size is 20 characters.
- `actions[].description` (required, string): A short explanation of what this action would do. The maximum size is 40 characters.
- `actions[].identifier` (required, string): A reference for the action on the integrator's system. The maximum size is 20 characters.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 4,
    head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
    node_id: 'MDg6Q2hlY2tSdW40',
    external_id: '',
    url: 'https://api.github.com/repos/github/hello-world/check-runs/4',
    html_url: 'https://github.com/github/hello-world/runs/4',
    details_url: 'https://example.com',
    status: 'completed',
    conclusion: 'neutral',
    started_at: '2018-05-04T01:14:52Z',
    completed_at: '2018-05-04T01:14:52Z',
    output: {
      title: 'Mighty Readme report',
      summary: 'There are 0 failures, 2 warnings, and 1 notice.',
      text:
        'You may have some misspelled words on lines 2 and 4. You also may want to add a section in your README about how to install your app.',
      annotations_count: 2,
      annotations_url:
        'https://api.github.com/repos/github/hello-world/check-runs/4/annotations'
    },
    name: 'mighty_readme',
    check_suite: {
      id: 5
    },
    app: {
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
    },
    pull_requests: [
      {
        url: 'https://api.github.com/repos/github/hello-world/pulls/1',
        id: 1934,
        number: 3956,
        head: {
          ref: 'say-hello',
          sha: '3dca65fa3e8d4b3da3f3d056c59aee1c50f41390',
          repo: {
            id: 526,
            url: 'https://api.github.com/repos/github/hello-world',
            name: 'hello-world'
          }
        },
        base: {
          ref: 'master',
          sha: 'e7fdf7640066d71ad16a86fbcbb9c6a10a18af4f',
          repo: {
            id: 526,
            url: 'https://api.github.com/repos/github/hello-world',
            name: 'hello-world'
          }
        }
      }
    ]
  }
}
```

</details>
