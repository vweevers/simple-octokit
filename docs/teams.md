# `octokit.teams`

[Previous: secretScanning](secretScanning.md) \| [Index](README.md) \| [Next: users](users.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`addOrUpdateMembershipForUserInOrg(options)`](#addorupdatemembershipforuserinorgoptions)
- [`addOrUpdateProjectPermissionsInOrg(options)`](#addorupdateprojectpermissionsinorgoptions)
- [`addOrUpdateRepoPermissionsInOrg(options)`](#addorupdaterepopermissionsinorgoptions)
- [`checkPermissionsForProjectInOrg(options)`](#checkpermissionsforprojectinorgoptions)
- [`checkPermissionsForRepoInOrg(options)`](#checkpermissionsforrepoinorgoptions)
- [`create(options)`](#createoptions)
- [`createDiscussionCommentInOrg(options)`](#creatediscussioncommentinorgoptions)
- [`createDiscussionInOrg(options)`](#creatediscussioninorgoptions)
- [`deleteDiscussionCommentInOrg(options)`](#deletediscussioncommentinorgoptions)
- [`deleteDiscussionInOrg(options)`](#deletediscussioninorgoptions)
- [`deleteInOrg(options)`](#deleteinorgoptions)
- [`getByName(options)`](#getbynameoptions)
- [`getDiscussionCommentInOrg(options)`](#getdiscussioncommentinorgoptions)
- [`getDiscussionInOrg(options)`](#getdiscussioninorgoptions)
- [`getMembershipForUserInOrg(options)`](#getmembershipforuserinorgoptions)
- [`list(options)`](#listoptions)
- [`listChildInOrg(options)`](#listchildinorgoptions)
- [`listDiscussionCommentsInOrg(options)`](#listdiscussioncommentsinorgoptions)
- [`listDiscussionsInOrg(options)`](#listdiscussionsinorgoptions)
- [`listForAuthenticatedUser([options])`](#listforauthenticateduseroptions)
- [`listMembersInOrg(options)`](#listmembersinorgoptions)
- [`listPendingInvitationsInOrg(options)`](#listpendinginvitationsinorgoptions)
- [`listProjectsInOrg(options)`](#listprojectsinorgoptions)
- [`listReposInOrg(options)`](#listreposinorgoptions)
- [`removeMembershipForUserInOrg(options)`](#removemembershipforuserinorgoptions)
- [`removeProjectInOrg(options)`](#removeprojectinorgoptions)
- [`removeRepoInOrg(options)`](#removerepoinorgoptions)
- [`updateDiscussionCommentInOrg(options)`](#updatediscussioncommentinorgoptions)
- [`updateDiscussionInOrg(options)`](#updatediscussioninorgoptions)
- [`updateInOrg(options)`](#updateinorgoptions)

</details>

## [`addOrUpdateMembershipForUserInOrg(options)`](https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user)

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see [Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).

An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.

**Usage**

```js
const response = await octokit.teams.addOrUpdateMembershipForUserInOrg({
  org,
  team_slug,
  username
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `username` (required, string)
- `role` (string): The role that this user should have in the team. Can be one of:  
  \* `member` - a normal member of the team.  
  \* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/teams/1/memberships/octocat',
    role: 'member',
    state: 'active'
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/teams/1/memberships/octocat',
    role: 'member',
    state: 'pending'
  }
}
```

</details>

## [`addOrUpdateProjectPermissionsInOrg(options)`](https://docs.github.com/v3/teams/#add-or-update-team-project-permissions)

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

**Usage**

```js
const response = await octokit.teams.addOrUpdateProjectPermissionsInOrg({
  org,
  team_slug,
  project_id
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `project_id` (required, integer)
- `permission` (string): The permission to grant to the team for this project. Can be one of:  
  \* `read` - team members can read, but not write to or administer this project.  
  \* `write` - team members can read and write, but not administer this project.  
  \* `admin` - team members can read, write and administer this project.  
  Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`addOrUpdateRepoPermissionsInOrg(options)`](https://docs.github.com/v3/teams/#add-or-update-team-repository-permissions)

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see [HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

For more information about the permission levels, see [Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization).

**Usage**

```js
const response = await octokit.teams.addOrUpdateRepoPermissionsInOrg({
  org,
  team_slug,
  owner,
  repo
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `owner` (required, string)
- `repo` (required, string)
- `permission` (string): The permission to grant the team on this repository. Can be one of:  
  \* `pull` - team members can pull, but not push to or administer this repository.  
  \* `push` - team members can pull and push, but not administer this repository.  
  \* `admin` - team members can pull, push and administer this repository.  
  \* `maintain` - team members can manage the repository without access to sensitive or destructive actions. Recommended for project managers. Only applies to repositories owned by organizations.  
  \* `triage` - team members can proactively manage issues and pull requests without write access. Recommended for contributors who triage a repository. Only applies to repositories owned by organizations.  

If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`checkPermissionsForProjectInOrg(options)`](https://docs.github.com/v3/teams/#check-team-permissions-for-a-project)

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

**Usage**

```js
const response = await octokit.teams.checkPermissionsForProjectInOrg({
  org,
  team_slug,
  project_id
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `project_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
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
    updated_at: '2014-03-04T18:58:10Z',
    organization_permission: 'write',
    private: false,
    permissions: {
      read: true,
      write: true,
      admin: false
    }
  }
}
```

</details>

**Error if project is not managed by this team (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.teams.checkPermissionsForProjectInOrg({
    org,
    team_slug,
    project_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`checkPermissionsForRepoInOrg(options)`](https://docs.github.com/v3/teams/#check-team-permissions-for-a-repository)

Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.

If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

**Usage**

```js
const response = await octokit.teams.checkPermissionsForRepoInOrg({
  org,
  team_slug,
  owner,
  repo
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `owner` (required, string)
- `repo` (required, string)

**Alternative response with repository permissions (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
    downloads_url: 'https://api.github.com/repos/octocat/Hello-World/downloads',
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
    keys_url: 'https://api.github.com/repos/octocat/Hello-World/keys{/key_id}',
    labels_url:
      'https://api.github.com/repos/octocat/Hello-World/labels{/name}',
    languages_url: 'https://api.github.com/repos/octocat/Hello-World/languages',
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
}
```

</details>

**Response if team has permission for the repository (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error if team does not have permission for the repository (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.teams.checkPermissionsForRepoInOrg({
    org,
    team_slug,
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

## [`create(options)`](https://docs.github.com/v3/teams/#create-a-team)

To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see [Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization).

When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see [About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams).

**Usage**

```js
const response = await octokit.teams.create({ org, name })
```

**Options**

- `org` (required, string)
- `name` (required, string): The name of the team.
- `description` (string): The description of the team.
- `maintainers` (string\[]): List GitHub IDs for organization members who will become team maintainers.
- `repo_names` (string\[]): The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
- `privacy` (string): The level of privacy this team should have. The options are:  
  **For a non-nested team:**  
  \* `secret` - only visible to organization owners and members of this team.  
  \* `closed` - visible to all members of this organization.  
  Default: `secret`  
  **For a parent or child team:**  
  \* `closed` - visible to all members of this organization.  
  Default for child team: `closed`
- `permission` (string): **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:  
  \* `pull` - team members can pull, but not push to or administer newly-added repositories.  
  \* `push` - team members can pull and push, but not administer newly-added repositories.  
  \* `admin` - team members can pull, push and administer newly-added repositories.
- `parent_team_id` (integer): The ID of a team to set as the parent team.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
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
    parent: null,
    members_count: 3,
    repos_count: 10,
    created_at: '2017-07-14T16:53:42Z',
    updated_at: '2017-08-17T12:37:15Z',
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
      description: 'A great organization',
      name: 'github',
      company: 'GitHub',
      blog: 'https://github.com/blog',
      location: 'San Francisco',
      email: 'octocat@github.com',
      is_verified: true,
      has_organization_projects: true,
      has_repository_projects: true,
      public_repos: 2,
      public_gists: 1,
      followers: 20,
      following: 0,
      html_url: 'https://github.com/octocat',
      created_at: '2008-01-14T04:33:35Z',
      updated_at: '2017-08-17T12:37:15Z',
      type: 'Organization'
    }
  }
}
```

</details>

## [`createDiscussionCommentInOrg(options)`](https://docs.github.com/rest/reference/teams#create-a-discussion-comment)

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits) for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

**Usage**

```js
const response = await octokit.teams.createDiscussionCommentInOrg({
  org,
  team_slug,
  discussion_number,
  body
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `body` (required, string): The discussion comment's body text.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
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
    body: 'Do you like apples?',
    body_html: '<p>Do you like apples?</p>',
    body_version: '5eb32b219cdc6a5a9b29ba5d6caa9c51',
    created_at: '2018-01-15T23:53:58Z',
    last_edited_at: null,
    discussion_url: 'https://api.github.com/teams/2403582/discussions/1',
    html_url:
      'https://github.com/orgs/github/teams/justice-league/discussions/1/comments/1',
    node_id: 'MDIxOlRlYW1EaXNjdXNzaW9uQ29tbWVudDE=',
    number: 1,
    updated_at: '2018-01-15T23:53:58Z',
    url: 'https://api.github.com/teams/2403582/discussions/1/comments/1',
    reactions: {
      url: 'https://api.github.com/teams/2403582/discussions/1/reactions',
      total_count: 5,
      '+1': 3,
      '-1': 1,
      laugh: 0,
      confused: 0,
      heart: 1,
      hooray: 0,
      eyes: 1,
      rocket: 1
    }
  }
}
```

</details>

## [`createDiscussionInOrg(options)`](https://docs.github.com/rest/reference/teams#create-a-discussion)

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits) for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.

**Usage**

```js
const response = await octokit.teams.createDiscussionInOrg({
  org,
  team_slug,
  title,
  body
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `title` (required, string): The discussion post's title.
- `body` (required, string): The discussion post's body text.
- `private` (boolean): Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
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
    body: 'Hi! This is an area for us to collaborate as a team.',
    body_html: '<p>Hi! This is an area for us to collaborate as a team</p>',
    body_version: '0d495416a700fb06133c612575d92bfb',
    comments_count: 0,
    comments_url: 'https://api.github.com/teams/2343027/discussions/1/comments',
    created_at: '2018-01-25T18:56:31Z',
    last_edited_at: null,
    html_url:
      'https://github.com/orgs/github/teams/justice-league/discussions/1',
    node_id: 'MDE0OlRlYW1EaXNjdXNzaW9uMQ==',
    number: 1,
    pinned: false,
    private: false,
    team_url: 'https://api.github.com/teams/2343027',
    title: 'Our first team post',
    updated_at: '2018-01-25T18:56:31Z',
    url: 'https://api.github.com/teams/2343027/discussions/1',
    reactions: {
      url: 'https://api.github.com/teams/2343027/discussions/1/reactions',
      total_count: 5,
      '+1': 3,
      '-1': 1,
      laugh: 0,
      confused: 0,
      heart: 1,
      hooray: 0,
      eyes: 1,
      rocket: 1
    }
  }
}
```

</details>

## [`deleteDiscussionCommentInOrg(options)`](https://docs.github.com/rest/reference/teams#delete-a-discussion-comment)

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

**Usage**

```js
const response = await octokit.teams.deleteDiscussionCommentInOrg({
  org,
  team_slug,
  discussion_number,
  comment_number
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `comment_number` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteDiscussionInOrg(options)`](https://docs.github.com/rest/reference/teams#delete-a-discussion)

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

**Usage**

```js
const response = await octokit.teams.deleteDiscussionInOrg({
  org,
  team_slug,
  discussion_number
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteInOrg(options)`](https://docs.github.com/v3/teams/#delete-a-team)

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.

**Usage**

```js
const response = await octokit.teams.deleteInOrg({ org, team_slug })
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`getByName(options)`](https://docs.github.com/v3/teams/#get-a-team-by-name)

Gets a team using the team's `slug`. GitHub generates the `slug` from the team `name`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.

**Usage**

```js
const response = await octokit.teams.getByName({ org, team_slug })
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
    parent: null,
    members_count: 3,
    repos_count: 10,
    created_at: '2017-07-14T16:53:42Z',
    updated_at: '2017-08-17T12:37:15Z',
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
      description: 'A great organization',
      name: 'github',
      company: 'GitHub',
      blog: 'https://github.com/blog',
      location: 'San Francisco',
      email: 'octocat@github.com',
      is_verified: true,
      has_organization_projects: true,
      has_repository_projects: true,
      public_repos: 2,
      public_gists: 1,
      followers: 20,
      following: 0,
      html_url: 'https://github.com/octocat',
      created_at: '2008-01-14T04:33:35Z',
      updated_at: '2017-08-17T12:37:15Z',
      type: 'Organization'
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.teams.getByName({ org, team_slug })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getDiscussionCommentInOrg(options)`](https://docs.github.com/rest/reference/teams#get-a-discussion-comment)

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

**Usage**

```js
const response = await octokit.teams.getDiscussionCommentInOrg({
  org,
  team_slug,
  discussion_number,
  comment_number
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `comment_number` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
    body: 'Do you like apples?',
    body_html: '<p>Do you like apples?</p>',
    body_version: '5eb32b219cdc6a5a9b29ba5d6caa9c51',
    created_at: '2018-01-15T23:53:58Z',
    last_edited_at: null,
    discussion_url: 'https://api.github.com/teams/2403582/discussions/1',
    html_url:
      'https://github.com/orgs/github/teams/justice-league/discussions/1/comments/1',
    node_id: 'MDIxOlRlYW1EaXNjdXNzaW9uQ29tbWVudDE=',
    number: 1,
    updated_at: '2018-01-15T23:53:58Z',
    url: 'https://api.github.com/teams/2403582/discussions/1/comments/1',
    reactions: {
      url: 'https://api.github.com/teams/2403582/discussions/1/reactions',
      total_count: 5,
      '+1': 3,
      '-1': 1,
      laugh: 0,
      confused: 0,
      heart: 1,
      hooray: 0,
      eyes: 1,
      rocket: 1
    }
  }
}
```

</details>

## [`getDiscussionInOrg(options)`](https://docs.github.com/rest/reference/teams#get-a-discussion)

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

**Usage**

```js
const response = await octokit.teams.getDiscussionInOrg({
  org,
  team_slug,
  discussion_number
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
    body: 'Hi! This is an area for us to collaborate as a team.',
    body_html: '<p>Hi! This is an area for us to collaborate as a team</p>',
    body_version: '0d495416a700fb06133c612575d92bfb',
    comments_count: 0,
    comments_url: 'https://api.github.com/teams/2343027/discussions/1/comments',
    created_at: '2018-01-25T18:56:31Z',
    last_edited_at: null,
    html_url:
      'https://github.com/orgs/github/teams/justice-league/discussions/1',
    node_id: 'MDE0OlRlYW1EaXNjdXNzaW9uMQ==',
    number: 1,
    pinned: false,
    private: false,
    team_url: 'https://api.github.com/teams/2343027',
    title: 'Our first team post',
    updated_at: '2018-01-25T18:56:31Z',
    url: 'https://api.github.com/teams/2343027/discussions/1',
    reactions: {
      url: 'https://api.github.com/teams/2343027/discussions/1/reactions',
      total_count: 5,
      '+1': 3,
      '-1': 1,
      laugh: 0,
      confused: 0,
      heart: 1,
      hooray: 0,
      eyes: 1,
      rocket: 1
    }
  }
}
```

</details>

## [`getMembershipForUserInOrg(options)`](https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user)

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.

**Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/reference/teams#create-a-team).

**Usage**

```js
const response = await octokit.teams.getMembershipForUserInOrg({
  org,
  team_slug,
  username
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `username` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/teams/1/memberships/octocat',
    role: 'member',
    state: 'active'
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/teams/1/memberships/octocat',
    role: 'maintainer',
    state: 'active'
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/teams/1/memberships/octocat',
    role: 'member',
    state: 'pending'
  }
}
```

</details>

**Error if user has no team membership (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.teams.getMembershipForUserInOrg({
    org,
    team_slug,
    username
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`list(options)`](https://docs.github.com/v3/teams/#list-teams)

Lists all teams in an organization that are visible to the authenticated user.

**Usage**

```js
const response = await octokit.teams.list({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.teams.list.all({ org })) {
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

## [`listChildInOrg(options)`](https://docs.github.com/v3/teams/#list-child-teams)

Lists the child teams of the team specified by `{team_slug}`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.

**Usage**

```js
const response = await octokit.teams.listChildInOrg({ org, team_slug })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.teams.listChildInOrg.all({
  org,
  team_slug
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response if child teams exist (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      id: 2,
      node_id: 'MDQ6VGVhbTI=',
      url: 'https://api.github.com/teams/2',
      name: 'Original Roster',
      slug: 'original-roster',
      description: 'Started it all.',
      privacy: 'closed',
      permission: 'admin',
      members_url: 'https://api.github.com/teams/2/members{/member}',
      repositories_url: 'https://api.github.com/teams/2/repos',
      parent: {
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
      },
      html_url: 'https://github.com/orgs/rails/teams/core'
    }
  ]
}
```

</details>

## [`listDiscussionCommentsInOrg(options)`](https://docs.github.com/rest/reference/teams#list-discussion-comments)

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.

**Usage**

```js
const response = await octokit.teams.listDiscussionCommentsInOrg({
  org,
  team_slug,
  discussion_number
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.teams.listDiscussionCommentsInOrg.all({
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
      body: 'Do you like apples?',
      body_html: '<p>Do you like apples?</p>',
      body_version: '5eb32b219cdc6a5a9b29ba5d6caa9c51',
      created_at: '2018-01-15T23:53:58Z',
      last_edited_at: null,
      discussion_url: 'https://api.github.com/teams/2403582/discussions/1',
      html_url:
        'https://github.com/orgs/github/teams/justice-league/discussions/1/comments/1',
      node_id: 'MDIxOlRlYW1EaXNjdXNzaW9uQ29tbWVudDE=',
      number: 1,
      updated_at: '2018-01-15T23:53:58Z',
      url: 'https://api.github.com/teams/2403582/discussions/1/comments/1',
      reactions: {
        url: 'https://api.github.com/teams/2403582/discussions/1/reactions',
        total_count: 5,
        '+1': 3,
        '-1': 1,
        laugh: 0,
        confused: 0,
        heart: 1,
        hooray: 0,
        eyes: 1,
        rocket: 1
      }
    }
  ]
}
```

</details>

## [`listDiscussionsInOrg(options)`](https://docs.github.com/rest/reference/teams#list-discussions)

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.

**Usage**

```js
const response = await octokit.teams.listDiscussionsInOrg({ org, team_slug })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.teams.listDiscussionsInOrg.all({
  org,
  team_slug
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `team_slug` (required, string)
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
      body: 'Hi! This is an area for us to collaborate as a team.',
      body_html: '<p>Hi! This is an area for us to collaborate as a team</p>',
      body_version: '0d495416a700fb06133c612575d92bfb',
      comments_count: 0,
      comments_url:
        'https://api.github.com/teams/2343027/discussions/1/comments',
      created_at: '2018-01-25T18:56:31Z',
      last_edited_at: null,
      html_url:
        'https://github.com/orgs/github/teams/justice-league/discussions/1',
      node_id: 'MDE0OlRlYW1EaXNjdXNzaW9uMQ==',
      number: 1,
      pinned: false,
      private: false,
      team_url: 'https://api.github.com/teams/2343027',
      title: 'Our first team post',
      updated_at: '2018-01-25T18:56:31Z',
      url: 'https://api.github.com/teams/2343027/discussions/1',
      reactions: {
        url: 'https://api.github.com/teams/2343027/discussions/1/reactions',
        total_count: 5,
        '+1': 3,
        '-1': 1,
        laugh: 0,
        confused: 0,
        heart: 1,
        hooray: 0,
        eyes: 1,
        rocket: 1
      }
    }
  ]
}
```

</details>

## [`listForAuthenticatedUser([options])`](https://docs.github.com/v3/teams/#list-teams-for-the-authenticated-user)

List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/apps/building-oauth-apps/).

**Usage**

```js
const response = await octokit.teams.listForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.teams.listForAuthenticatedUser.all(
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
      parent: null,
      members_count: 3,
      repos_count: 10,
      created_at: '2017-07-14T16:53:42Z',
      updated_at: '2017-08-17T12:37:15Z',
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
        description: 'A great organization',
        name: 'github',
        company: 'GitHub',
        blog: 'https://github.com/blog',
        location: 'San Francisco',
        email: 'octocat@github.com',
        is_verified: true,
        has_organization_projects: true,
        has_repository_projects: true,
        public_repos: 2,
        public_gists: 1,
        followers: 20,
        following: 0,
        html_url: 'https://github.com/octocat',
        created_at: '2008-01-14T04:33:35Z',
        updated_at: '2017-08-17T12:37:15Z',
        type: 'Organization'
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
  response = await octokit.teams.listForAuthenticatedUser()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listMembersInOrg(options)`](https://docs.github.com/rest/reference/teams#list-team-members)

Team members will include the members of child teams.

To list members in a team, the team must be visible to the authenticated user.

**Usage**

```js
const response = await octokit.teams.listMembersInOrg({ org, team_slug })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.teams.listMembersInOrg.all({
  org,
  team_slug
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `role` (string): Filters members returned by their role in the team. Can be one of:  
  \* `member` - normal members of the team.  
  \* `maintainer` - team maintainers.  
  \* `all` - all members of the team.
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

## [`listPendingInvitationsInOrg(options)`](https://docs.github.com/rest/reference/teams#list-pending-team-invitations)

The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/invitations`.

**Usage**

```js
const response = await octokit.teams.listPendingInvitationsInOrg({
  org,
  team_slug
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.teams.listPendingInvitationsInOrg.all({
  org,
  team_slug
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `team_slug` (required, string)
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

## [`listProjectsInOrg(options)`](https://docs.github.com/v3/teams/#list-team-projects)

Lists the organization projects for a team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.

**Usage**

```js
const response = await octokit.teams.listProjectsInOrg({ org, team_slug })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.teams.listProjectsInOrg.all({
  org,
  team_slug
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `team_slug` (required, string)
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
      updated_at: '2014-03-04T18:58:10Z',
      organization_permission: 'write',
      private: false,
      permissions: {
        read: true,
        write: true,
        admin: false
      }
    }
  ]
}
```

</details>

## [`listReposInOrg(options)`](https://docs.github.com/v3/teams/#list-team-repositories)

Lists a team's repositories visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.

**Usage**

```js
const response = await octokit.teams.listReposInOrg({ org, team_slug })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.teams.listReposInOrg.all({
  org,
  team_slug
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `team_slug` (required, string)
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

## [`removeMembershipForUserInOrg(options)`](https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user)

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see [Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.

**Usage**

```js
const response = await octokit.teams.removeMembershipForUserInOrg({
  org,
  team_slug,
  username
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `username` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`removeProjectInOrg(options)`](https://docs.github.com/v3/teams/#remove-a-project-from-a-team)

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.

**Usage**

```js
const response = await octokit.teams.removeProjectInOrg({
  org,
  team_slug,
  project_id
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `project_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`removeRepoInOrg(options)`](https://docs.github.com/v3/teams/#remove-a-repository-from-a-team)

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

**Usage**

```js
const response = await octokit.teams.removeRepoInOrg({
  org,
  team_slug,
  owner,
  repo
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `owner` (required, string)
- `repo` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`updateDiscussionCommentInOrg(options)`](https://docs.github.com/rest/reference/teams#update-a-discussion-comment)

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.

**Usage**

```js
const response = await octokit.teams.updateDiscussionCommentInOrg({
  org,
  team_slug,
  discussion_number,
  comment_number,
  body
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `comment_number` (required, integer)
- `body` (required, string): The discussion comment's body text.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
    body: 'Do you like pineapples?',
    body_html: '<p>Do you like pineapples?</p>',
    body_version: 'e6907b24d9c93cc0c5024a7af5888116',
    created_at: '2018-01-15T23:53:58Z',
    last_edited_at: '2018-01-26T18:22:20Z',
    discussion_url: 'https://api.github.com/teams/2403582/discussions/1',
    html_url:
      'https://github.com/orgs/github/teams/justice-league/discussions/1/comments/1',
    node_id: 'MDIxOlRlYW1EaXNjdXNzaW9uQ29tbWVudDE=',
    number: 1,
    updated_at: '2018-01-26T18:22:20Z',
    url: 'https://api.github.com/teams/2403582/discussions/1/comments/1',
    reactions: {
      url: 'https://api.github.com/teams/2403582/discussions/1/reactions',
      total_count: 5,
      '+1': 3,
      '-1': 1,
      laugh: 0,
      confused: 0,
      heart: 1,
      hooray: 0,
      eyes: 1,
      rocket: 1
    }
  }
}
```

</details>

## [`updateDiscussionInOrg(options)`](https://docs.github.com/rest/reference/teams#update-a-discussion)

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.

**Usage**

```js
const response = await octokit.teams.updateDiscussionInOrg({
  org,
  team_slug,
  discussion_number
})
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `discussion_number` (required, integer)
- `title` (string): The discussion post's title.
- `body` (string): The discussion post's body text.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
    body: 'Hi! This is an area for us to collaborate as a team.',
    body_html: '<p>Hi! This is an area for us to collaborate as a team</p>',
    body_version: '0d495416a700fb06133c612575d92bfb',
    comments_count: 1,
    comments_url: 'https://api.github.com/teams/2343027/discussions/1/comments',
    created_at: '2018-01-25T18:56:31Z',
    last_edited_at: '2018-01-26T18:22:20Z',
    html_url:
      'https://github.com/orgs/github/teams/justice-league/discussions/1',
    node_id: 'MDE0OlRlYW1EaXNjdXNzaW9uMQ==',
    number: 1,
    pinned: false,
    private: false,
    team_url: 'https://api.github.com/teams/2343027',
    title: 'Welcome to our first team post',
    updated_at: '2018-01-26T18:22:20Z',
    url: 'https://api.github.com/teams/2343027/discussions/1',
    reactions: {
      url: 'https://api.github.com/teams/2343027/discussions/1/reactions',
      total_count: 5,
      '+1': 3,
      '-1': 1,
      laugh: 0,
      confused: 0,
      heart: 1,
      hooray: 0,
      eyes: 1,
      rocket: 1
    }
  }
}
```

</details>

## [`updateInOrg(options)`](https://docs.github.com/v3/teams/#update-a-team)

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.

**Usage**

```js
const response = await octokit.teams.updateInOrg({ org, team_slug, name })
```

**Options**

- `org` (required, string)
- `team_slug` (required, string)
- `name` (required, string): The name of the team.
- `description` (string): The description of the team.
- `privacy` (string): The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:  
  **For a non-nested team:**  
  \* `secret` - only visible to organization owners and members of this team.  
  \* `closed` - visible to all members of this organization.  
  **For a parent or child team:**  
  \* `closed` - visible to all members of this organization.
- `permission` (string): **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:  
  \* `pull` - team members can pull, but not push to or administer newly-added repositories.  
  \* `push` - team members can pull and push, but not administer newly-added repositories.  
  \* `admin` - team members can pull, push and administer newly-added repositories.
- `parent_team_id` (integer): The ID of a team to set as the parent team.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
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
    parent: null,
    members_count: 3,
    repos_count: 10,
    created_at: '2017-07-14T16:53:42Z',
    updated_at: '2017-08-17T12:37:15Z',
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
      description: 'A great organization',
      name: 'github',
      company: 'GitHub',
      blog: 'https://github.com/blog',
      location: 'San Francisco',
      email: 'octocat@github.com',
      is_verified: true,
      has_organization_projects: true,
      has_repository_projects: true,
      public_repos: 2,
      public_gists: 1,
      followers: 20,
      following: 0,
      html_url: 'https://github.com/octocat',
      created_at: '2008-01-14T04:33:35Z',
      updated_at: '2017-08-17T12:37:15Z',
      type: 'Organization'
    }
  }
}
```

</details>
