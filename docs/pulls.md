# `octokit.pulls`

[Previous: projects](projects.md) \| [Index](README.md) \| [Next: rateLimit](rateLimit.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`checkIfMerged(options)`](#checkifmergedoptions)
- [`create(options)`](#createoptions)
- [`createReplyForReviewComment(options)`](#createreplyforreviewcommentoptions)
- [`createReview(options)`](#createreviewoptions)
- [`createReviewComment(options)`](#createreviewcommentoptions)
- [`deletePendingReview(options)`](#deletependingreviewoptions)
- [`deleteReviewComment(options)`](#deletereviewcommentoptions)
- [`dismissReview(options)`](#dismissreviewoptions)
- [`get(options)`](#getoptions)
- [`getReview(options)`](#getreviewoptions)
- [`getReviewComment(options)`](#getreviewcommentoptions)
- [`list(options)`](#listoptions)
- [`listCommentsForReview(options)`](#listcommentsforreviewoptions)
- [`listCommits(options)`](#listcommitsoptions)
- [`listFiles(options)`](#listfilesoptions)
- [`listRequestedReviewers(options)`](#listrequestedreviewersoptions)
- [`listReviewComments(options)`](#listreviewcommentsoptions)
- [`listReviewCommentsForRepo(options)`](#listreviewcommentsforrepooptions)
- [`listReviews(options)`](#listreviewsoptions)
- [`merge(options)`](#mergeoptions)
- [`removeRequestedReviewers(options)`](#removerequestedreviewersoptions)
- [`requestReviewers(options)`](#requestreviewersoptions)
- [`submitReview(options)`](#submitreviewoptions)
- [`update(options)`](#updateoptions)
- [`updateBranch(options)`](#updatebranchoptions)
- [`updateReview(options)`](#updatereviewoptions)
- [`updateReviewComment(options)`](#updatereviewcommentoptions)

</details>

## [`checkIfMerged(options)`](https://docs.github.com/v3/pulls/#check-if-a-pull-request-has-been-merged)

**Usage**

```js
const response = await octokit.pulls.checkIfMerged({ owner, repo, pull_number })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)

**Response if pull request has been merged (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error if pull request has not been merged (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.checkIfMerged({ owner, repo, pull_number })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`create(options)`](https://docs.github.com/v3/pulls/#create-a-pull-request)

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

You can create a new pull request.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits) for details.

**Usage**

```js
const response = await octokit.pulls.create({ owner, repo, head, base })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `title` (string): The title of the new pull request.
- `head` (required, string): The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
- `base` (required, string): The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
- `body` (string): The contents of the pull request.
- `maintainer_can_modify` (boolean): Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
- `draft` (boolean): Indicates whether the pull request is a draft. See "[Draft Pull Requests](https://help.github.com/en/articles/about-pull-requests#draft-pull-requests)" in the GitHub Help documentation to learn more.
- `issue` (integer)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
    id: 1,
    node_id: 'MDExOlB1bGxSZXF1ZXN0MQ==',
    html_url: 'https://github.com/octocat/Hello-World/pull/1347',
    diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
    patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch',
    issue_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    commits_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits',
    review_comments_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments',
    review_comment_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}',
    comments_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
    statuses_url:
      'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e',
    number: 1347,
    state: 'open',
    locked: true,
    title: 'Amazing new feature',
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
    body: 'Please pull these awesome changes in!',
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
    active_lock_reason: 'too heated',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:01:12Z',
    closed_at: '2011-01-26T19:01:12Z',
    merged_at: '2011-01-26T19:01:12Z',
    merge_commit_sha: 'e5bd3914e2e596debea16f433f57875b5b90bcd6',
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
      }
    ],
    requested_reviewers: [
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
    requested_teams: [
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
        repositories_url: 'https://api.github.com/teams/1/repos'
      }
    ],
    head: {
      label: 'octocat:new-topic',
      ref: 'new-topic',
      sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
      repo: {
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
        topics: ['octocat', 'atom', 'electron', 'api'],
        has_issues: true,
        has_projects: true,
        has_wiki: true,
        has_pages: false,
        has_downloads: true,
        archived: false,
        disabled: false,
        pushed_at: '2011-01-26T19:06:43Z',
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        permissions: {
          admin: false,
          push: false,
          pull: true
        },
        allow_rebase_merge: true,
        temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
        allow_squash_merge: true,
        allow_merge_commit: true,
        forks: 123,
        open_issues: 123,
        license: {
          key: 'mit',
          name: 'MIT License',
          url: 'https://api.github.com/licenses/mit',
          spdx_id: 'MIT',
          node_id: 'MDc6TGljZW5zZW1pdA=='
        },
        watchers: 123
      }
    },
    base: {
      label: 'octocat:master',
      ref: 'master',
      sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
      repo: {
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
        topics: ['octocat', 'atom', 'electron', 'api'],
        has_issues: true,
        has_projects: true,
        has_wiki: true,
        has_pages: false,
        has_downloads: true,
        archived: false,
        disabled: false,
        pushed_at: '2011-01-26T19:06:43Z',
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        permissions: {
          admin: false,
          push: false,
          pull: true
        },
        allow_rebase_merge: true,
        temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
        allow_squash_merge: true,
        allow_merge_commit: true,
        forks: 123,
        open_issues: 123,
        license: {
          key: 'mit',
          name: 'MIT License',
          url: 'https://api.github.com/licenses/mit',
          spdx_id: 'MIT',
          node_id: 'MDc6TGljZW5zZW1pdA=='
        },
        watchers: 123
      }
    },
    _links: {
      self: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347'
      },
      html: {
        href: 'https://github.com/octocat/Hello-World/pull/1347'
      },
      issue: {
        href: 'https://api.github.com/repos/octocat/Hello-World/issues/1347'
      },
      comments: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments'
      },
      review_comments: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments'
      },
      review_comment: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}'
      },
      commits: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits'
      },
      statuses: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e'
      }
    },
    author_association: 'OWNER',
    draft: false,
    merged: false,
    mergeable: true,
    rebaseable: true,
    mergeable_state: 'clean',
    merged_by: {
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
    comments: 10,
    review_comments: 0,
    maintainer_can_modify: true,
    commits: 3,
    additions: 100,
    deletions: 3,
    changed_files: 5
  }
}
```

</details>

## [`createReplyForReviewComment(options)`](https://docs.github.com/rest/reference/pulls#create-a-reply-for-a-review-comment)

Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits) for details.

**Usage**

```js
const response = await octokit.pulls.createReplyForReviewComment({
  owner,
  repo,
  pull_number,
  comment_id,
  body
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `comment_id` (required, integer)
- `body` (required, string): The text of the review comment.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1',
    pull_request_review_id: 42,
    id: 10,
    node_id: 'MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw',
    diff_hunk: '@@ -16,33 +16,40 @@ public class Connection : IConnection...',
    path: 'file1.txt',
    position: 1,
    original_position: 4,
    commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    original_commit_id: '9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840',
    in_reply_to_id: 426899381,
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
    body: 'Great stuff!',
    created_at: '2011-04-14T16:00:49Z',
    updated_at: '2011-04-14T16:00:49Z',
    html_url: 'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1',
    pull_request_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1',
    author_association: 'NONE',
    _links: {
      self: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1'
      },
      html: {
        href: 'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1'
      },
      pull_request: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1'
      }
    },
    start_line: 1,
    original_start_line: 1,
    start_side: 'RIGHT',
    line: 2,
    original_line: 2,
    side: 'RIGHT'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.createReplyForReviewComment({
    owner,
    repo,
    pull_number,
    comment_id,
    body
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createReview(options)`](https://docs.github.com/rest/reference/pulls#create-a-review-for-a-pull-request)

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits) for details.

Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/rest/reference/media/#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

**Usage**

```js
const response = await octokit.pulls.createReview({
  owner,
  repo,
  pull_number,
  comments
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `commit_id` (string): The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.
- `body` (string): **Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.
- `event` (string): The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://docs.github.com/rest/reference/pulls#submit-a-review-for-a-pull-request) when you are ready.
- `comments` (object\[]): Use the following table to specify the location, destination, and contents of the draft review comment.
- `comments[].path` (required, string): The relative path to the file that necessitates a review comment.
- `comments[].position` (integer): The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.
- `comments[].body` (required, string): Text of the review comment.
- `comments[].line` (integer)
- `comments[].side` (string)
- `comments[].start_line` (integer)
- `comments[].start_side` (string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 80,
    node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA=',
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
    body:
      'This is close to perfect! Please address the suggested inline change.',
    state: 'CHANGES_REQUESTED',
    html_url:
      'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80',
    pull_request_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/12',
    _links: {
      html: {
        href:
          'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80'
      },
      pull_request: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/12'
      }
    },
    submitted_at: '2019-11-17T17:43:43Z',
    commit_id: 'ecdd80bb57125d7ba9641ffaa4d7d2c19d3f3091',
    author_association: 'collaborator'
  }
}
```

</details>

## [`createReviewComment(options)`](https://docs.github.com/rest/reference/pulls#create-a-review-comment-for-a-pull-request)

**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see [Create an issue comment](https://docs.github.com/rest/reference/issues#create-an-issue-comment). We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.

You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see [Multi-line comment summary](https://docs.github.com/rest/reference/pulls#multi-line-comment-summary-3).

**Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits) for details.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

- For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
- For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

- For multi-line comments, the last line of the comment range for the `position` attribute.
- For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://docs.github.com/rest/reference/pulls#parameters-2) table.

**Usage**

```js
const response = await octokit.pulls.createReviewComment({
  owner,
  repo,
  pull_number,
  body,
  path
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `body` (required, string): The text of the review comment.
- `commit_id` (string): The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`.
- `path` (required, string): The relative path to the file that necessitates a comment.
- `position` (integer): **Required without `comfort-fade` preview**. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note above.
- `side` (string): **Required with `comfort-fade` preview**. In a split diff view, the side of the diff that the pull request's changes appear on. Can be `LEFT` or `RIGHT`. Use `LEFT` for deletions that appear in red. Use `RIGHT` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see "[Diff view options](https://help.github.com/en/articles/about-comparing-branches-in-pull-requests#diff-view-options)" in the GitHub Help documentation.
- `line` (integer): **Required with `comfort-fade` preview**. The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to.
- `start_line` (integer): **Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_line` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see "[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation.
- `start_side` (string): **Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_side` is the starting side of the diff that the comment applies to. Can be `LEFT` or `RIGHT`. To learn more about multi-line comments, see "[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation. See `side` in this table for additional context.
- `in_reply_to` (integer)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1',
    pull_request_review_id: 42,
    id: 10,
    node_id: 'MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw',
    diff_hunk: '@@ -16,33 +16,40 @@ public class Connection : IConnection...',
    path: 'file1.txt',
    position: 1,
    original_position: 4,
    commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    original_commit_id: '9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840',
    in_reply_to_id: 8,
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
    body: 'Great stuff!',
    created_at: '2011-04-14T16:00:49Z',
    updated_at: '2011-04-14T16:00:49Z',
    html_url: 'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1',
    pull_request_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1',
    author_association: 'NONE',
    _links: {
      self: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1'
      },
      html: {
        href: 'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1'
      },
      pull_request: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1'
      }
    },
    start_line: 1,
    original_start_line: 1,
    start_side: 'RIGHT',
    line: 2,
    original_line: 2,
    side: 'RIGHT'
  }
}
```

</details>

## [`deletePendingReview(options)`](https://docs.github.com/rest/reference/pulls#delete-a-pending-review-for-a-pull-request)

**Usage**

```js
const response = await octokit.pulls.deletePendingReview({
  owner,
  repo,
  pull_number,
  review_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `review_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 80,
    node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA=',
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
    body:
      'This is close to perfect! Please address the suggested inline change.',
    state: 'CHANGES_REQUESTED',
    html_url:
      'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80',
    pull_request_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/12',
    _links: {
      html: {
        href:
          'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80'
      },
      pull_request: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/12'
      }
    },
    submitted_at: '2019-11-17T17:43:43Z',
    commit_id: 'ecdd80bb57125d7ba9641ffaa4d7d2c19d3f3091',
    author_association: 'collaborator'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.deletePendingReview({
    owner,
    repo,
    pull_number,
    review_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteReviewComment(options)`](https://docs.github.com/rest/reference/pulls#delete-a-review-comment-for-a-pull-request)

Deletes a review comment.

**Usage**

```js
const response = await octokit.pulls.deleteReviewComment({
  owner,
  repo,
  comment_id
})
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

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.deleteReviewComment({
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

## [`dismissReview(options)`](https://docs.github.com/rest/reference/pulls#dismiss-a-review-for-a-pull-request)

**Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

**Usage**

```js
const response = await octokit.pulls.dismissReview({
  owner,
  repo,
  pull_number,
  review_id,
  message
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `review_id` (required, integer)
- `message` (required, string): The message for the pull request review dismissal
- `event` (string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 80,
    node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA=',
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
    body: 'Here is the body for the review.',
    state: 'DISMISSED',
    html_url:
      'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80',
    pull_request_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/12',
    _links: {
      html: {
        href:
          'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80'
      },
      pull_request: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/12'
      }
    },
    submitted_at: '2019-11-17T17:43:43Z',
    commit_id: 'ecdd80bb57125d7ba9641ffaa4d7d2c19d3f3091',
    author_association: 'collaborator'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.dismissReview({
    owner,
    repo,
    pull_number,
    review_id,
    message
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`get(options)`](https://docs.github.com/v3/pulls/#get-a-pull-request)

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists details of a pull request by providing its number.

When you get, [create](https://docs.github.com/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/rest/reference/pulls#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see [Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests).

The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.

The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:

- If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
- If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
- If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.

Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

**Usage**

```js
const response = await octokit.pulls.get({ owner, repo, pull_number })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)

**Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats. (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
    id: 1,
    node_id: 'MDExOlB1bGxSZXF1ZXN0MQ==',
    html_url: 'https://github.com/octocat/Hello-World/pull/1347',
    diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
    patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch',
    issue_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    commits_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits',
    review_comments_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments',
    review_comment_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}',
    comments_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
    statuses_url:
      'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e',
    number: 1347,
    state: 'open',
    locked: true,
    title: 'Amazing new feature',
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
    body: 'Please pull these awesome changes in!',
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
    active_lock_reason: 'too heated',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:01:12Z',
    closed_at: '2011-01-26T19:01:12Z',
    merged_at: '2011-01-26T19:01:12Z',
    merge_commit_sha: 'e5bd3914e2e596debea16f433f57875b5b90bcd6',
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
      }
    ],
    requested_reviewers: [
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
    requested_teams: [
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
        repositories_url: 'https://api.github.com/teams/1/repos'
      }
    ],
    head: {
      label: 'octocat:new-topic',
      ref: 'new-topic',
      sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
      repo: {
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
        topics: ['octocat', 'atom', 'electron', 'api'],
        has_issues: true,
        has_projects: true,
        has_wiki: true,
        has_pages: false,
        has_downloads: true,
        archived: false,
        disabled: false,
        pushed_at: '2011-01-26T19:06:43Z',
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        permissions: {
          admin: false,
          push: false,
          pull: true
        },
        allow_rebase_merge: true,
        temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
        allow_squash_merge: true,
        allow_merge_commit: true,
        forks: 123,
        open_issues: 123,
        license: {
          key: 'mit',
          name: 'MIT License',
          url: 'https://api.github.com/licenses/mit',
          spdx_id: 'MIT',
          node_id: 'MDc6TGljZW5zZW1pdA=='
        },
        watchers: 123
      }
    },
    base: {
      label: 'octocat:master',
      ref: 'master',
      sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
      repo: {
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
        topics: ['octocat', 'atom', 'electron', 'api'],
        has_issues: true,
        has_projects: true,
        has_wiki: true,
        has_pages: false,
        has_downloads: true,
        archived: false,
        disabled: false,
        pushed_at: '2011-01-26T19:06:43Z',
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        permissions: {
          admin: false,
          push: false,
          pull: true
        },
        allow_rebase_merge: true,
        temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
        allow_squash_merge: true,
        allow_merge_commit: true,
        forks: 123,
        open_issues: 123,
        license: {
          key: 'mit',
          name: 'MIT License',
          url: 'https://api.github.com/licenses/mit',
          spdx_id: 'MIT',
          node_id: 'MDc6TGljZW5zZW1pdA=='
        },
        watchers: 123
      }
    },
    _links: {
      self: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347'
      },
      html: {
        href: 'https://github.com/octocat/Hello-World/pull/1347'
      },
      issue: {
        href: 'https://api.github.com/repos/octocat/Hello-World/issues/1347'
      },
      comments: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments'
      },
      review_comments: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments'
      },
      review_comment: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}'
      },
      commits: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits'
      },
      statuses: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e'
      }
    },
    author_association: 'OWNER',
    draft: false,
    merged: false,
    mergeable: true,
    rebaseable: true,
    mergeable_state: 'clean',
    merged_by: {
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
    comments: 10,
    review_comments: 0,
    maintainer_can_modify: true,
    commits: 3,
    additions: 100,
    deletions: 3,
    changed_files: 5
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.get({ owner, repo, pull_number })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getReview(options)`](https://docs.github.com/rest/reference/pulls#get-a-review-for-a-pull-request)

**Usage**

```js
const response = await octokit.pulls.getReview({
  owner,
  repo,
  pull_number,
  review_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `review_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 80,
    node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA=',
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
    body: 'Here is the body for the review.',
    state: 'APPROVED',
    html_url:
      'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80',
    pull_request_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/12',
    _links: {
      html: {
        href:
          'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80'
      },
      pull_request: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/12'
      }
    },
    submitted_at: '2019-11-17T17:43:43Z',
    commit_id: 'ecdd80bb57125d7ba9641ffaa4d7d2c19d3f3091',
    author_association: 'collaborator'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.getReview({
    owner,
    repo,
    pull_number,
    review_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getReviewComment(options)`](https://docs.github.com/rest/reference/pulls#get-a-review-comment-for-a-pull-request)

**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Provides details for a review comment.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

- For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
- For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

- For multi-line comments, the last line of the comment range for the `position` attribute.
- For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://docs.github.com/rest/reference/pulls#parameters-2) table.

The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://docs.github.com/rest/reference/reactions) reactions.

**Usage**

```js
const response = await octokit.pulls.getReviewComment({
  owner,
  repo,
  comment_id
})
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
    url: 'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1',
    pull_request_review_id: 42,
    id: 10,
    node_id: 'MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw',
    diff_hunk: '@@ -16,33 +16,40 @@ public class Connection : IConnection...',
    path: 'file1.txt',
    position: 1,
    original_position: 4,
    commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    original_commit_id: '9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840',
    in_reply_to_id: 8,
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
    body: 'Great stuff!',
    created_at: '2011-04-14T16:00:49Z',
    updated_at: '2011-04-14T16:00:49Z',
    html_url: 'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1',
    pull_request_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1',
    author_association: 'NONE',
    _links: {
      self: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1'
      },
      html: {
        href: 'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1'
      },
      pull_request: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1'
      }
    },
    start_line: 1,
    original_start_line: 1,
    start_side: 'RIGHT',
    line: 2,
    original_line: 2,
    side: 'RIGHT'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.getReviewComment({ owner, repo, comment_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`list(options)`](https://docs.github.com/v3/pulls/#list-pull-requests)

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.pulls.list({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.pulls.list.all({ owner, repo })) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `state` (string): Either `open`, `closed`, or `all` to filter by state.
- `head` (string): Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.
- `base` (string): Filter pulls by base branch name. Example: `gh-pages`.
- `sort` (string): What to sort results by. Can be either `created`, `updated`, `popularity` (comment count) or `long-running` (age, filtering by pulls updated in the last month).
- `direction` (string): The direction of the sort. Can be either `asc` or `desc`. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
      id: 1,
      node_id: 'MDExOlB1bGxSZXF1ZXN0MQ==',
      html_url: 'https://github.com/octocat/Hello-World/pull/1347',
      diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
      patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch',
      issue_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
      commits_url:
        'https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits',
      review_comments_url:
        'https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments',
      review_comment_url:
        'https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}',
      comments_url:
        'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
      statuses_url:
        'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e',
      number: 1347,
      state: 'open',
      locked: true,
      title: 'Amazing new feature',
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
      body: 'Please pull these awesome changes in!',
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
      active_lock_reason: 'too heated',
      created_at: '2011-01-26T19:01:12Z',
      updated_at: '2011-01-26T19:01:12Z',
      closed_at: '2011-01-26T19:01:12Z',
      merged_at: '2011-01-26T19:01:12Z',
      merge_commit_sha: 'e5bd3914e2e596debea16f433f57875b5b90bcd6',
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
        }
      ],
      requested_reviewers: [
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
          events_url:
            'https://api.github.com/users/other_user/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/other_user/received_events',
          type: 'User',
          site_admin: false
        }
      ],
      requested_teams: [
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
          repositories_url: 'https://api.github.com/teams/1/repos'
        }
      ],
      head: {
        label: 'octocat:new-topic',
        ref: 'new-topic',
        sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
        repo: {
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
      },
      base: {
        label: 'octocat:master',
        ref: 'master',
        sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
        repo: {
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
      },
      _links: {
        self: {
          href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347'
        },
        html: {
          href: 'https://github.com/octocat/Hello-World/pull/1347'
        },
        issue: {
          href: 'https://api.github.com/repos/octocat/Hello-World/issues/1347'
        },
        comments: {
          href:
            'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments'
        },
        review_comments: {
          href:
            'https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments'
        },
        review_comment: {
          href:
            'https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}'
        },
        commits: {
          href:
            'https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits'
        },
        statuses: {
          href:
            'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e'
        }
      },
      author_association: 'OWNER',
      draft: false
    }
  ]
}
```

</details>

## [`listCommentsForReview(options)`](https://docs.github.com/rest/reference/pulls#list-comments-for-a-pull-request-review)

List comments for a specific pull request review.

**Usage**

```js
const response = await octokit.pulls.listCommentsForReview({
  owner,
  repo,
  pull_number,
  review_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.pulls.listCommentsForReview.all({
  owner,
  repo,
  pull_number,
  review_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `review_id` (required, integer)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1',
      pull_request_review_id: 42,
      id: 10,
      node_id: 'MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw',
      diff_hunk: '@@ -16,33 +16,40 @@ public class Connection : IConnection...',
      path: 'file1.txt',
      position: 1,
      original_position: 4,
      commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
      original_commit_id: '9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840',
      in_reply_to_id: 8,
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
      body: 'Great stuff!',
      created_at: '2011-04-14T16:00:49Z',
      updated_at: '2011-04-14T16:00:49Z',
      html_url:
        'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1',
      pull_request_url:
        'https://api.github.com/repos/octocat/Hello-World/pulls/1',
      author_association: 'NONE',
      _links: {
        self: {
          href:
            'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1'
        },
        html: {
          href:
            'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1'
        },
        pull_request: {
          href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1'
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
  response = await octokit.pulls.listCommentsForReview({
    owner,
    repo,
    pull_number,
    review_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listCommits(options)`](https://docs.github.com/v3/pulls/#list-commits-on-a-pull-request)

Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/rest/reference/repos#list-commits) endpoint.

**Usage**

```js
const response = await octokit.pulls.listCommits({ owner, repo, pull_number })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.pulls.listCommits.all({
  owner,
  repo,
  pull_number
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
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
        'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
      sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
      node_id:
        'MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==',
      html_url:
        'https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e',
      comments_url:
        'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments',
      commit: {
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
        author: {
          name: 'Monalisa Octocat',
          email: 'support@github.com',
          date: '2011-04-14T16:00:49Z'
        },
        committer: {
          name: 'Monalisa Octocat',
          email: 'support@github.com',
          date: '2011-04-14T16:00:49Z'
        },
        message: 'Fix all the bugs',
        tree: {
          url:
            'https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e',
          sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e'
        },
        comment_count: 0,
        verification: {
          verified: false,
          reason: 'unsigned',
          signature: null,
          payload: null
        }
      },
      author: {
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
      committer: {
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
      parents: [
        {
          url:
            'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
          sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e'
        }
      ]
    }
  ]
}
```

</details>

## [`listFiles(options)`](https://docs.github.com/v3/pulls/#list-pull-requests-files)

**Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.

**Usage**

```js
const response = await octokit.pulls.listFiles({ owner, repo, pull_number })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.pulls.listFiles.all({
  owner,
  repo,
  pull_number
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      sha: 'bbcd538c8e72b8c175046e27cc8f907076331401',
      filename: 'file1.txt',
      status: 'added',
      additions: 103,
      deletions: 21,
      changes: 124,
      blob_url:
        'https://github.com/octocat/Hello-World/blob/6dcb09b5b57875f334f61aebed695e2e4193db5e/file1.txt',
      raw_url:
        'https://github.com/octocat/Hello-World/raw/6dcb09b5b57875f334f61aebed695e2e4193db5e/file1.txt',
      contents_url:
        'https://api.github.com/repos/octocat/Hello-World/contents/file1.txt?ref=6dcb09b5b57875f334f61aebed695e2e4193db5e',
      patch: '@@ -132,7 +132,7 @@ module Test @@ -1000,7 +1000,7 @@ module Test'
    }
  ]
}
```

</details>

## [`listRequestedReviewers(options)`](https://docs.github.com/rest/reference/pulls#list-requested-reviewers-for-a-pull-request)

**Usage**

```js
const response = await octokit.pulls.listRequestedReviewers({
  owner,
  repo,
  pull_number
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.pulls.listRequestedReviewers.all({
  owner,
  repo,
  pull_number
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    users: [
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
    teams: [
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
}
```

</details>

## [`listReviewComments(options)`](https://docs.github.com/rest/reference/pulls#list-review-comments-on-a-pull-request)

**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Lists all review comments for a pull request. By default, review comments are in ascending order by ID.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

- For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
- For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

- For multi-line comments, the last line of the comment range for the `position` attribute.
- For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://docs.github.com/rest/reference/pulls#parameters-2) table.

The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://docs.github.com/rest/reference/reactions) reactions.

**Usage**

```js
const response = await octokit.pulls.listReviewComments({
  owner,
  repo,
  pull_number
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.pulls.listReviewComments.all({
  owner,
  repo,
  pull_number
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `sort` (string): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
- `direction` (string): Can be either `asc` or `desc`. Ignored without `sort` parameter.
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
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1',
      pull_request_review_id: 42,
      id: 10,
      node_id: 'MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw',
      diff_hunk: '@@ -16,33 +16,40 @@ public class Connection : IConnection...',
      path: 'file1.txt',
      position: 1,
      original_position: 4,
      commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
      original_commit_id: '9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840',
      in_reply_to_id: 8,
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
      body: 'Great stuff!',
      created_at: '2011-04-14T16:00:49Z',
      updated_at: '2011-04-14T16:00:49Z',
      html_url:
        'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1',
      pull_request_url:
        'https://api.github.com/repos/octocat/Hello-World/pulls/1',
      author_association: 'NONE',
      _links: {
        self: {
          href:
            'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1'
        },
        html: {
          href:
            'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1'
        },
        pull_request: {
          href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1'
        }
      },
      start_line: 1,
      original_start_line: 1,
      start_side: 'RIGHT',
      line: 2,
      original_line: 2,
      side: 'RIGHT'
    }
  ]
}
```

</details>

## [`listReviewCommentsForRepo(options)`](https://docs.github.com/rest/reference/pulls#list-review-comments-in-a-repository)

**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

- For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
- For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

- For multi-line comments, the last line of the comment range for the `position` attribute.
- For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://docs.github.com/rest/reference/pulls#parameters-2) table.

The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://docs.github.com/rest/reference/reactions) reactions.

**Usage**

```js
const response = await octokit.pulls.listReviewCommentsForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.pulls.listReviewCommentsForRepo.all({
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
- `direction` (string): Can be either `asc` or `desc`. Ignored without `sort` parameter.
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
      url: 'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1',
      pull_request_review_id: 42,
      id: 10,
      node_id: 'MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw',
      diff_hunk: '@@ -16,33 +16,40 @@ public class Connection : IConnection...',
      path: 'file1.txt',
      position: 1,
      original_position: 4,
      commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
      original_commit_id: '9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840',
      in_reply_to_id: 8,
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
      body: 'Great stuff!',
      created_at: '2011-04-14T16:00:49Z',
      updated_at: '2011-04-14T16:00:49Z',
      html_url:
        'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1',
      pull_request_url:
        'https://api.github.com/repos/octocat/Hello-World/pulls/1',
      author_association: 'NONE',
      _links: {
        self: {
          href:
            'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1'
        },
        html: {
          href:
            'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1'
        },
        pull_request: {
          href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1'
        }
      },
      start_line: 1,
      original_start_line: 1,
      start_side: 'RIGHT',
      line: 2,
      original_line: 2,
      side: 'RIGHT'
    }
  ]
}
```

</details>

## [`listReviews(options)`](https://docs.github.com/rest/reference/pulls#list-reviews-for-a-pull-request)

The list of reviews returns in chronological order.

**Usage**

```js
const response = await octokit.pulls.listReviews({ owner, repo, pull_number })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.pulls.listReviews.all({
  owner,
  repo,
  pull_number
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**The list of reviews returns in chronological order. (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 80,
      node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA=',
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
      body: 'Here is the body for the review.',
      state: 'APPROVED',
      html_url:
        'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80',
      pull_request_url:
        'https://api.github.com/repos/octocat/Hello-World/pulls/12',
      _links: {
        html: {
          href:
            'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80'
        },
        pull_request: {
          href: 'https://api.github.com/repos/octocat/Hello-World/pulls/12'
        }
      },
      submitted_at: '2019-11-17T17:43:43Z',
      commit_id: 'ecdd80bb57125d7ba9641ffaa4d7d2c19d3f3091',
      author_association: 'collaborator'
    }
  ]
}
```

</details>

## [`merge(options)`](https://docs.github.com/v3/pulls/#merge-a-pull-request)

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/reference/guides#dealing-with-abuse-rate-limits) for details.

**Usage**

```js
const response = await octokit.pulls.merge({ owner, repo, pull_number })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `commit_title` (string): Title for the automatic commit message.
- `commit_message` (string): Extra detail to append to automatic commit message.
- `sha` (string): SHA that pull request head must match to allow merge.
- `merge_method` (string): Merge method to use. Possible values are `merge`, `squash` or `rebase`. Default is `merge`.

**Response if merge was successful (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    merged: true,
    message: 'Pull Request successfully merged'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.merge({ owner, repo, pull_number })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error if merge cannot be performed (HTTP 405)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.merge({ owner, repo, pull_number })
} catch (err) {
  if (err.status === 405) {
    // ..
  }
}
```

</details>

**Error if sha was provided and pull request head did not match (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.merge({ owner, repo, pull_number })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`removeRequestedReviewers(options)`](https://docs.github.com/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request)

**Usage**

```js
const response = await octokit.pulls.removeRequestedReviewers({
  owner,
  repo,
  pull_number
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `reviewers` (string\[]): An array of user `login`s that will be removed.
- `team_reviewers` (string\[]): An array of team `slug`s that will be removed.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`requestReviewers(options)`](https://docs.github.com/rest/reference/pulls#request-reviewers-for-a-pull-request)

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/reference/guides#dealing-with-abuse-rate-limits) for details.

**Usage**

```js
const response = await octokit.pulls.requestReviewers({
  owner,
  repo,
  pull_number
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `reviewers` (string\[]): An array of user `login`s that will be requested.
- `team_reviewers` (string\[]): An array of team `slug`s that will be requested.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
    id: 1,
    node_id: 'MDExOlB1bGxSZXF1ZXN0MQ==',
    html_url: 'https://github.com/octocat/Hello-World/pull/1347',
    diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
    patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch',
    issue_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    commits_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits',
    review_comments_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments',
    review_comment_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}',
    comments_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
    statuses_url:
      'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e',
    number: 1347,
    state: 'open',
    locked: true,
    title: 'Amazing new feature',
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
    body: 'Please pull these awesome changes in!',
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
    active_lock_reason: 'too heated',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:01:12Z',
    closed_at: '2011-01-26T19:01:12Z',
    merged_at: '2011-01-26T19:01:12Z',
    merge_commit_sha: 'e5bd3914e2e596debea16f433f57875b5b90bcd6',
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
      }
    ],
    requested_reviewers: [
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
    requested_teams: [
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
        repositories_url: 'https://api.github.com/teams/1/repos'
      }
    ],
    head: {
      label: 'octocat:new-topic',
      ref: 'new-topic',
      sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
      repo: {
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
    },
    base: {
      label: 'octocat:master',
      ref: 'master',
      sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
      repo: {
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
    },
    _links: {
      self: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347'
      },
      html: {
        href: 'https://github.com/octocat/Hello-World/pull/1347'
      },
      issue: {
        href: 'https://api.github.com/repos/octocat/Hello-World/issues/1347'
      },
      comments: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments'
      },
      review_comments: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments'
      },
      review_comment: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}'
      },
      commits: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits'
      },
      statuses: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e'
      }
    },
    author_association: 'OWNER',
    draft: false
  }
}
```

</details>

## [`submitReview(options)`](https://docs.github.com/rest/reference/pulls#submit-a-review-for-a-pull-request)

**Usage**

```js
const response = await octokit.pulls.submitReview({
  owner,
  repo,
  pull_number,
  review_id,
  event
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `review_id` (required, integer)
- `body` (string): The body text of the pull request review
- `event` (required, string): The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 80,
    node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA=',
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
    body: 'Here is the body for the review.',
    state: 'APPROVED',
    html_url:
      'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80',
    pull_request_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/12',
    _links: {
      html: {
        href:
          'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80'
      },
      pull_request: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/12'
      }
    },
    submitted_at: '2019-11-17T17:43:43Z',
    commit_id: 'ecdd80bb57125d7ba9641ffaa4d7d2c19d3f3091',
    author_association: 'collaborator'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.submitReview({
    owner,
    repo,
    pull_number,
    review_id,
    event
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`update(options)`](https://docs.github.com/v3/pulls/#update-a-pull-request)

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

**Usage**

```js
const response = await octokit.pulls.update({ owner, repo, pull_number })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `title` (string): The title of the pull request.
- `body` (string): The contents of the pull request.
- `state` (string): State of this Pull Request. Either `open` or `closed`.
- `base` (string): The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.
- `maintainer_can_modify` (boolean): Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
    id: 1,
    node_id: 'MDExOlB1bGxSZXF1ZXN0MQ==',
    html_url: 'https://github.com/octocat/Hello-World/pull/1347',
    diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
    patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch',
    issue_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347',
    commits_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits',
    review_comments_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments',
    review_comment_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}',
    comments_url:
      'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
    statuses_url:
      'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e',
    number: 1347,
    state: 'open',
    locked: true,
    title: 'Amazing new feature',
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
    body: 'Please pull these awesome changes in!',
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
    active_lock_reason: 'too heated',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:01:12Z',
    closed_at: '2011-01-26T19:01:12Z',
    merged_at: '2011-01-26T19:01:12Z',
    merge_commit_sha: 'e5bd3914e2e596debea16f433f57875b5b90bcd6',
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
      }
    ],
    requested_reviewers: [
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
    requested_teams: [
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
        repositories_url: 'https://api.github.com/teams/1/repos'
      }
    ],
    head: {
      label: 'octocat:new-topic',
      ref: 'new-topic',
      sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
      repo: {
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
        topics: ['octocat', 'atom', 'electron', 'api'],
        has_issues: true,
        has_projects: true,
        has_wiki: true,
        has_pages: false,
        has_downloads: true,
        archived: false,
        disabled: false,
        pushed_at: '2011-01-26T19:06:43Z',
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        permissions: {
          admin: false,
          push: false,
          pull: true
        },
        allow_rebase_merge: true,
        temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
        allow_squash_merge: true,
        allow_merge_commit: true,
        forks: 123,
        open_issues: 123,
        license: {
          key: 'mit',
          name: 'MIT License',
          url: 'https://api.github.com/licenses/mit',
          spdx_id: 'MIT',
          node_id: 'MDc6TGljZW5zZW1pdA=='
        },
        watchers: 123
      }
    },
    base: {
      label: 'octocat:master',
      ref: 'master',
      sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
      repo: {
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
        topics: ['octocat', 'atom', 'electron', 'api'],
        has_issues: true,
        has_projects: true,
        has_wiki: true,
        has_pages: false,
        has_downloads: true,
        archived: false,
        disabled: false,
        pushed_at: '2011-01-26T19:06:43Z',
        created_at: '2011-01-26T19:01:12Z',
        updated_at: '2011-01-26T19:14:43Z',
        permissions: {
          admin: false,
          push: false,
          pull: true
        },
        allow_rebase_merge: true,
        temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
        allow_squash_merge: true,
        allow_merge_commit: true,
        forks: 123,
        open_issues: 123,
        license: {
          key: 'mit',
          name: 'MIT License',
          url: 'https://api.github.com/licenses/mit',
          spdx_id: 'MIT',
          node_id: 'MDc6TGljZW5zZW1pdA=='
        },
        watchers: 123
      }
    },
    _links: {
      self: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347'
      },
      html: {
        href: 'https://github.com/octocat/Hello-World/pull/1347'
      },
      issue: {
        href: 'https://api.github.com/repos/octocat/Hello-World/issues/1347'
      },
      comments: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments'
      },
      review_comments: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments'
      },
      review_comment: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}'
      },
      commits: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits'
      },
      statuses: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e'
      }
    },
    author_association: 'OWNER',
    draft: false,
    merged: false,
    mergeable: true,
    rebaseable: true,
    mergeable_state: 'clean',
    merged_by: {
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
    comments: 10,
    review_comments: 0,
    maintainer_can_modify: true,
    commits: 3,
    additions: 100,
    deletions: 3,
    changed_files: 5
  }
}
```

</details>

## [`updateBranch(options)`](https://docs.github.com/v3/pulls/#update-a-pull-request-branch)

Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.

**Usage**

```js
const response = await octokit.pulls.updateBranch({ owner, repo, pull_number })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `expected_head_sha` (string): The expected SHA of the pull request's HEAD ref. This is the most recent commit on the pull request's branch. If the expected SHA does not match the pull request's HEAD, you will receive a `422 Unprocessable Entity` status. You can use the "[List commits](https://docs.github.com/rest/reference/repos#list-commits)" endpoint to find the most recent commit SHA. Default: SHA of the pull request's current HEAD ref.

**Response (HTTP 202)**

<details><summary>Example</summary>

```js
const response = {
  status: 202,
  data: {
    message: 'Updating pull request branch.',
    url: 'https://github.com/repos/octocat/Hello-World/pulls/53'
  }
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.pulls.updateBranch({ owner, repo, pull_number })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`updateReview(options)`](https://docs.github.com/rest/reference/pulls#update-a-review-for-a-pull-request)

Update the review summary comment with new text.

**Usage**

```js
const response = await octokit.pulls.updateReview({
  owner,
  repo,
  pull_number,
  review_id,
  body
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `pull_number` (required, integer)
- `review_id` (required, integer)
- `body` (required, string): The body text of the pull request review.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 80,
    node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA=',
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
    body:
      'This is close to perfect! Please address the suggested inline change. And add more about this.',
    state: 'CHANGES_REQUESTED',
    html_url:
      'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80',
    pull_request_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/12',
    _links: {
      html: {
        href:
          'https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80'
      },
      pull_request: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/12'
      }
    },
    submitted_at: '2019-11-17T17:43:43Z',
    commit_id: 'ecdd80bb57125d7ba9641ffaa4d7d2c19d3f3091',
    author_association: 'collaborator'
  }
}
```

</details>

## [`updateReviewComment(options)`](https://docs.github.com/rest/reference/pulls#update-a-review-comment-for-a-pull-request)

**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Enables you to edit a review comment.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

- For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
- For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

- For multi-line comments, the last line of the comment range for the `position` attribute.
- For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://docs.github.com/rest/reference/pulls#parameters-2) table.

**Usage**

```js
const response = await octokit.pulls.updateReviewComment({
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
- `body` (required, string): The text of the reply to the review comment.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1',
    pull_request_review_id: 42,
    id: 10,
    node_id: 'MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw',
    diff_hunk: '@@ -16,33 +16,40 @@ public class Connection : IConnection...',
    path: 'file1.txt',
    position: 1,
    original_position: 4,
    commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    original_commit_id: '9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840',
    in_reply_to_id: 8,
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
    body: 'Great stuff!',
    created_at: '2011-04-14T16:00:49Z',
    updated_at: '2011-04-14T16:00:49Z',
    html_url: 'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1',
    pull_request_url:
      'https://api.github.com/repos/octocat/Hello-World/pulls/1',
    author_association: 'NONE',
    _links: {
      self: {
        href:
          'https://api.github.com/repos/octocat/Hello-World/pulls/comments/1'
      },
      html: {
        href: 'https://github.com/octocat/Hello-World/pull/1#discussion-diff-1'
      },
      pull_request: {
        href: 'https://api.github.com/repos/octocat/Hello-World/pulls/1'
      }
    },
    start_line: 1,
    original_start_line: 1,
    start_side: 'RIGHT',
    line: 2,
    original_line: 2,
    side: 'RIGHT'
  }
}
```

</details>
