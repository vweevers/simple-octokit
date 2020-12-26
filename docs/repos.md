# `octokit.repos`

[Previous: reactions](reactions.md) \| [Index](README.md) \| [Next: search](search.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`acceptInvitation(options)`](#acceptinvitationoptions)
- [`addAppAccessRestrictions(options)`](#addappaccessrestrictionsoptions)
- [`addCollaborator(options)`](#addcollaboratoroptions)
- [`addStatusCheckContexts(options)`](#addstatuscheckcontextsoptions)
- [`addTeamAccessRestrictions(options)`](#addteamaccessrestrictionsoptions)
- [`addUserAccessRestrictions(options)`](#adduseraccessrestrictionsoptions)
- [`checkCollaborator(options)`](#checkcollaboratoroptions)
- [`checkVulnerabilityAlerts(options)`](#checkvulnerabilityalertsoptions)
- [`compareCommits(options)`](#comparecommitsoptions)
- [`createCommitComment(options)`](#createcommitcommentoptions)
- [`createCommitSignatureProtection(options)`](#createcommitsignatureprotectionoptions)
- [`createCommitStatus(options)`](#createcommitstatusoptions)
- [`createDeployKey(options)`](#createdeploykeyoptions)
- [`createDeployment(options)`](#createdeploymentoptions)
- [`createDeploymentStatus(options)`](#createdeploymentstatusoptions)
- [`createDispatchEvent(options)`](#createdispatcheventoptions)
- [`createForAuthenticatedUser(options)`](#createforauthenticateduseroptions)
- [`createFork(options)`](#createforkoptions)
- [`createInOrg(options)`](#createinorgoptions)
- [`createOrUpdateFileContents(options)`](#createorupdatefilecontentsoptions)
- [`createPagesSite(options)`](#createpagessiteoptions)
- [`createRelease(options)`](#createreleaseoptions)
- [`createUsingTemplate(options)`](#createusingtemplateoptions)
- [`createWebhook(options)`](#createwebhookoptions)
- [`declineInvitation(options)`](#declineinvitationoptions)
- [`delete(options)`](#deleteoptions)
- [`deleteAccessRestrictions(options)`](#deleteaccessrestrictionsoptions)
- [`deleteAdminBranchProtection(options)`](#deleteadminbranchprotectionoptions)
- [`deleteBranchProtection(options)`](#deletebranchprotectionoptions)
- [`deleteCommitComment(options)`](#deletecommitcommentoptions)
- [`deleteCommitSignatureProtection(options)`](#deletecommitsignatureprotectionoptions)
- [`deleteDeployKey(options)`](#deletedeploykeyoptions)
- [`deleteDeployment(options)`](#deletedeploymentoptions)
- [`deleteFile(options)`](#deletefileoptions)
- [`deleteInvitation(options)`](#deleteinvitationoptions)
- [`deletePagesSite(options)`](#deletepagessiteoptions)
- [`deletePullRequestReviewProtection(options)`](#deletepullrequestreviewprotectionoptions)
- [`deleteRelease(options)`](#deletereleaseoptions)
- [`deleteReleaseAsset(options)`](#deletereleaseassetoptions)
- [`deleteWebhook(options)`](#deletewebhookoptions)
- [`disableAutomatedSecurityFixes(options)`](#disableautomatedsecurityfixesoptions)
- [`disableVulnerabilityAlerts(options)`](#disablevulnerabilityalertsoptions)
- [`downloadArchive(options)`](#downloadarchiveoptions)
- [`downloadArchive(options)`](#downloadarchiveoptions-1)
- [`downloadTarballArchive(options)`](#downloadtarballarchiveoptions)
- [`downloadZipballArchive(options)`](#downloadzipballarchiveoptions)
- [`enableAutomatedSecurityFixes(options)`](#enableautomatedsecurityfixesoptions)
- [`enableVulnerabilityAlerts(options)`](#enablevulnerabilityalertsoptions)
- [`get(options)`](#getoptions)
- [`getAccessRestrictions(options)`](#getaccessrestrictionsoptions)
- [`getAdminBranchProtection(options)`](#getadminbranchprotectionoptions)
- [`getAllStatusCheckContexts(options)`](#getallstatuscheckcontextsoptions)
- [`getAllTopics(options)`](#getalltopicsoptions)
- [`getAppsWithAccessToProtectedBranch(options)`](#getappswithaccesstoprotectedbranchoptions)
- [`getBranch(options)`](#getbranchoptions)
- [`getBranchProtection(options)`](#getbranchprotectionoptions)
- [`getClones(options)`](#getclonesoptions)
- [`getCodeFrequencyStats(options)`](#getcodefrequencystatsoptions)
- [`getCollaboratorPermissionLevel(options)`](#getcollaboratorpermissionleveloptions)
- [`getCombinedStatusForRef(options)`](#getcombinedstatusforrefoptions)
- [`getCommit(options)`](#getcommitoptions)
- [`getCommitActivityStats(options)`](#getcommitactivitystatsoptions)
- [`getCommitComment(options)`](#getcommitcommentoptions)
- [`getCommitSignatureProtection(options)`](#getcommitsignatureprotectionoptions)
- [`getCommunityProfileMetrics(options)`](#getcommunityprofilemetricsoptions)
- [`getContent(options)`](#getcontentoptions)
- [`getContributorsStats(options)`](#getcontributorsstatsoptions)
- [`getDeployKey(options)`](#getdeploykeyoptions)
- [`getDeployment(options)`](#getdeploymentoptions)
- [`getDeploymentStatus(options)`](#getdeploymentstatusoptions)
- [`getLatestPagesBuild(options)`](#getlatestpagesbuildoptions)
- [`getLatestRelease(options)`](#getlatestreleaseoptions)
- [`getPages(options)`](#getpagesoptions)
- [`getPagesBuild(options)`](#getpagesbuildoptions)
- [`getParticipationStats(options)`](#getparticipationstatsoptions)
- [`getPullRequestReviewProtection(options)`](#getpullrequestreviewprotectionoptions)
- [`getPunchCardStats(options)`](#getpunchcardstatsoptions)
- [`getReadme(options)`](#getreadmeoptions)
- [`getRelease(options)`](#getreleaseoptions)
- [`getReleaseAsset(options)`](#getreleaseassetoptions)
- [`getReleaseByTag(options)`](#getreleasebytagoptions)
- [`getStatusChecksProtection(options)`](#getstatuschecksprotectionoptions)
- [`getTeamsWithAccessToProtectedBranch(options)`](#getteamswithaccesstoprotectedbranchoptions)
- [`getTopPaths(options)`](#gettoppathsoptions)
- [`getTopReferrers(options)`](#gettopreferrersoptions)
- [`getUsersWithAccessToProtectedBranch(options)`](#getuserswithaccesstoprotectedbranchoptions)
- [`getViews(options)`](#getviewsoptions)
- [`getWebhook(options)`](#getwebhookoptions)
- [`getWebhookConfigForRepo(options)`](#getwebhookconfigforrepooptions)
- [`listBranches(options)`](#listbranchesoptions)
- [`listBranchesForHeadCommit(options)`](#listbranchesforheadcommitoptions)
- [`listCollaborators(options)`](#listcollaboratorsoptions)
- [`listCommentsForCommit(options)`](#listcommentsforcommitoptions)
- [`listCommitCommentsForRepo(options)`](#listcommitcommentsforrepooptions)
- [`listCommitStatusesForRef(options)`](#listcommitstatusesforrefoptions)
- [`listCommits(options)`](#listcommitsoptions)
- [`listContributors(options)`](#listcontributorsoptions)
- [`listDeployKeys(options)`](#listdeploykeysoptions)
- [`listDeploymentStatuses(options)`](#listdeploymentstatusesoptions)
- [`listDeployments(options)`](#listdeploymentsoptions)
- [`listForAuthenticatedUser([options])`](#listforauthenticateduseroptions)
- [`listForOrg(options)`](#listfororgoptions)
- [`listForUser(options)`](#listforuseroptions)
- [`listForks(options)`](#listforksoptions)
- [`listInvitations(options)`](#listinvitationsoptions)
- [`listInvitationsForAuthenticatedUser([options])`](#listinvitationsforauthenticateduseroptions)
- [`listLanguages(options)`](#listlanguagesoptions)
- [`listPagesBuilds(options)`](#listpagesbuildsoptions)
- [`listPublic([options])`](#listpublicoptions)
- [`listPullRequestsAssociatedWithCommit(options)`](#listpullrequestsassociatedwithcommitoptions)
- [`listReleaseAssets(options)`](#listreleaseassetsoptions)
- [`listReleases(options)`](#listreleasesoptions)
- [`listTags(options)`](#listtagsoptions)
- [`listTeams(options)`](#listteamsoptions)
- [`listWebhooks(options)`](#listwebhooksoptions)
- [`merge(options)`](#mergeoptions)
- [`pingWebhook(options)`](#pingwebhookoptions)
- [`removeAppAccessRestrictions(options)`](#removeappaccessrestrictionsoptions)
- [`removeCollaborator(options)`](#removecollaboratoroptions)
- [`removeStatusCheckContexts(options)`](#removestatuscheckcontextsoptions)
- [`removeStatusCheckProtection(options)`](#removestatuscheckprotectionoptions)
- [`removeTeamAccessRestrictions(options)`](#removeteamaccessrestrictionsoptions)
- [`removeUserAccessRestrictions(options)`](#removeuseraccessrestrictionsoptions)
- [`replaceAllTopics(options)`](#replacealltopicsoptions)
- [`requestPagesBuild(options)`](#requestpagesbuildoptions)
- [`setAdminBranchProtection(options)`](#setadminbranchprotectionoptions)
- [`setAppAccessRestrictions(options)`](#setappaccessrestrictionsoptions)
- [`setStatusCheckContexts(options)`](#setstatuscheckcontextsoptions)
- [`setTeamAccessRestrictions(options)`](#setteamaccessrestrictionsoptions)
- [`setUserAccessRestrictions(options)`](#setuseraccessrestrictionsoptions)
- [`testPushWebhook(options)`](#testpushwebhookoptions)
- [`transfer(options)`](#transferoptions)
- [`update(options)`](#updateoptions)
- [`updateBranchProtection(options)`](#updatebranchprotectionoptions)
- [`updateCommitComment(options)`](#updatecommitcommentoptions)
- [`updateInformationAboutPagesSite(options)`](#updateinformationaboutpagessiteoptions)
- [`updateInvitation(options)`](#updateinvitationoptions)
- [`updatePullRequestReviewProtection(options)`](#updatepullrequestreviewprotectionoptions)
- [`updateRelease(options)`](#updatereleaseoptions)
- [`updateReleaseAsset(options)`](#updatereleaseassetoptions)
- [`updateStatusCheckPotection(options)`](#updatestatuscheckpotectionoptions)
- [`updateStatusCheckProtection(options)`](#updatestatuscheckprotectionoptions)
- [`updateWebhook(options)`](#updatewebhookoptions)
- [`updateWebhookConfigForRepo(options)`](#updatewebhookconfigforrepooptions)
- [`uploadReleaseAsset(options)`](#uploadreleaseassetoptions)

</details>

## [`acceptInvitation(options)`](https://docs.github.com/rest/reference/repos#accept-a-repository-invitation)

**Usage**

```js
const response = await octokit.repos.acceptInvitation({ invitation_id })
```

**Options**

- `invitation_id` (required, integer)

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
  response = await octokit.repos.acceptInvitation({ invitation_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error upon conflict (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.acceptInvitation({ invitation_id })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`addAppAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#add-app-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

**Usage**

```js
const response = await octokit.repos.addAppAccessRestrictions({
  owner,
  repo,
  branch,
  apps
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `apps` (required, object)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
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
  ]
}
```

</details>

## [`addCollaborator(options)`](https://docs.github.com/rest/reference/repos#add-a-repository-collaborator)

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits) for details.

For more information the permission levels, see [Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization).

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see [HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs).

The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/rest/reference/repos#invitations).

**Rate limits**

To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.

**Usage**

```js
const response = await octokit.repos.addCollaborator({ owner, repo, username })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `username` (required, string)
- `permission` (string): The permission to grant the collaborator. **Only valid on organization-owned repositories.** Can be one of:  
  \* `pull` - can pull, but not push to or administer this repository.  
  \* `push` - can pull and push, but not administer this repository.  
  \* `admin` - can pull, push and administer this repository.  
  \* `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.  
  \* `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access.
- `permissions` (string)

**Response when a new invitation is created (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
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
    invitee: {
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
    inviter: {
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
    permissions: 'write',
    created_at: '2016-06-13T14:52:50-05:00',
    url: 'https://api.github.com/user/repository_invitations/1296269',
    html_url: 'https://github.com/octocat/Hello-World/invitations'
  }
}
```

</details>

**Response when person is already a collaborator (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`addStatusCheckContexts(options)`](https://docs.github.com/rest/reference/repos#add-status-check-contexts)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.addStatusCheckContexts({
  owner,
  repo,
  branch,
  contexts
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `contexts` (required, object)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: ['continuous-integration/travis-ci', 'continuous-integration/jenkins']
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.addStatusCheckContexts({
    owner,
    repo,
    branch,
    contexts
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`addTeamAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#add-team-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified teams push access for this branch. You can also give push access to child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

**Usage**

```js
const response = await octokit.repos.addTeamAccessRestrictions({
  owner,
  repo,
  branch,
  teams
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `teams` (required, object)

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

## [`addUserAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#add-user-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified people push access for this branch.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

**Usage**

```js
const response = await octokit.repos.addUserAccessRestrictions({
  owner,
  repo,
  branch,
  users
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `users` (required, object)

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

## [`checkCollaborator(options)`](https://docs.github.com/rest/reference/repos#check-if-a-user-is-a-repository-collaborator)

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

**Usage**

```js
const response = await octokit.repos.checkCollaborator({
  owner,
  repo,
  username
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `username` (required, string)

**Response if user is a collaborator (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error if user is not a collaborator (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.checkCollaborator({ owner, repo, username })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`checkVulnerabilityAlerts(options)`](https://docs.github.com/v3/repos/#check-if-vulnerability-alerts-are-enabled-for-a-repository)

Shows whether dependency alerts are enabled or disabled for a repository. The authenticated user must have admin access to the repository. For more information, see [About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies).

**Usage**

```js
const response = await octokit.repos.checkVulnerabilityAlerts({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

**Response if repository is enabled with vulnerability alerts (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error if repository is not enabled with vulnerability alerts (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.checkVulnerabilityAlerts({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`compareCommits(options)`](https://docs.github.com/rest/reference/repos#compare-two-commits)

Both `:base` and `:head` must be branch names in `:repo`. To compare branches across other repositories in the same network as `:repo`, use the format `<USERNAME>:branch`.

The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.

**Working with large comparisons**

The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [List commits](https://docs.github.com/rest/reference/repos#list-commits) to enumerate all commits in the range.

For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long to generate. You can typically resolve this error by using a smaller commit range.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name        | Type      | Description                                                                                      |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| `verified`  | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified.                  |
| `reason`    | `string`  | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string`  | The signature that was extracted from the commit.                                                |
| `payload`   | `string`  | The value that was signed.                                                                       |

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

**Usage**

```js
const response = await octokit.repos.compareCommits({ owner, repo, base, head })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `base` (required, string)
- `head` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/compare/master...topic',
    html_url: 'https://github.com/octocat/Hello-World/compare/master...topic',
    permalink_url:
      'https://github.com/octocat/Hello-World/compare/octocat:bbcd538c8e72b8c175046e27cc8f907076331401...octocat:0328041d1152db8ae77652d1618a02e57f745f17',
    diff_url:
      'https://github.com/octocat/Hello-World/compare/master...topic.diff',
    patch_url:
      'https://github.com/octocat/Hello-World/compare/master...topic.patch',
    base_commit: {
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
          email: 'mona@github.com',
          date: '2011-04-14T16:00:49Z'
        },
        committer: {
          name: 'Monalisa Octocat',
          email: 'mona@github.com',
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
    },
    merge_base_commit: {
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
          email: 'mona@github.com',
          date: '2011-04-14T16:00:49Z'
        },
        committer: {
          name: 'Monalisa Octocat',
          email: 'mona@github.com',
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
    },
    status: 'behind',
    ahead_by: 1,
    behind_by: 2,
    total_commits: 1,
    commits: [
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
            email: 'mona@github.com',
            date: '2011-04-14T16:00:49Z'
          },
          committer: {
            name: 'Monalisa Octocat',
            email: 'mona@github.com',
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
        parents: [
          {
            url:
              'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
            sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e'
          }
        ]
      }
    ],
    files: [
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
        patch:
          '@@ -132,7 +132,7 @@ module Test @@ -1000,7 +1000,7 @@ module Test'
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
  response = await octokit.repos.compareCommits({ owner, repo, base, head })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createCommitComment(options)`](https://docs.github.com/rest/reference/repos#create-a-commit-comment)

Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits) for details.

**Usage**

```js
const response = await octokit.repos.createCommitComment({
  owner,
  repo,
  commit_sha,
  body
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `commit_sha` (required, string)
- `body` (required, string): The contents of the comment.
- `path` (string): Relative path of the file to comment on.
- `position` (integer): Line index in the diff to comment on.
- `line` (integer): **Deprecated**. Use **position** parameter instead. Line number in the file to comment on.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    html_url:
      'https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e#commitcomment-1',
    url: 'https://api.github.com/repos/octocat/Hello-World/comments/1',
    id: 1,
    node_id: 'MDEzOkNvbW1pdENvbW1lbnQx',
    body: 'Great stuff',
    path: 'file1.txt',
    position: 4,
    line: 14,
    commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    author_association: 'collaborator',
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
    updated_at: '2011-04-14T16:00:49Z'
  }
}
```

</details>

## [`createCommitSignatureProtection(options)`](https://docs.github.com/rest/reference/repos#create-commit-signature-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.

**Usage**

```js
const response = await octokit.repos.createCommitSignatureProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_signatures',
    enabled: true
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.createCommitSignatureProtection({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createCommitStatus(options)`](https://docs.github.com/rest/reference/repos#create-a-commit-status)

Users with push access in a repository can create commit statuses for a given SHA.

Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.

**Usage**

```js
const response = await octokit.repos.createCommitStatus({
  owner,
  repo,
  sha,
  state
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `sha` (required, string)
- `state` (required, string): The state of the status. Can be one of `error`, `failure`, `pending`, or `success`.
- `target_url` (string): The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.  
  For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:  
  `http://ci.example.com/user/repo/build/sha`
- `description` (string): A short description of the status.
- `context` (string): A string label to differentiate this status from the status of other systems.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e',
    avatar_url: 'https://github.com/images/error/hubot_happy.gif',
    id: 1,
    node_id: 'MDY6U3RhdHVzMQ==',
    state: 'success',
    description: 'Build has completed successfully',
    target_url: 'https://ci.example.com/1000/output',
    context: 'continuous-integration/jenkins',
    created_at: '2012-07-20T01:19:13Z',
    updated_at: '2012-07-20T01:19:13Z',
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
    }
  }
}
```

</details>

## [`createDeployKey(options)`](https://docs.github.com/rest/reference/repos#create-a-deploy-key)

You can create a read-only deploy key.

**Usage**

```js
const response = await octokit.repos.createDeployKey({ owner, repo, key })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `title` (string): A name for the key.
- `key` (required, string): The contents of the key.
- `read_only` (boolean): If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.

Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see "[Repository permission levels for an organization](https://help.github.com/articles/repository-permission-levels-for-an-organization/)" and "[Permission levels for a user account repository](https://help.github.com/articles/permission-levels-for-a-user-account-repository/)."

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    id: 1,
    key: 'ssh-rsa AAA...',
    url: 'https://api.github.com/repos/octocat/Hello-World/keys/1',
    title: 'octocat@octomac',
    verified: true,
    created_at: '2014-12-10T15:53:42Z',
    read_only: true
  }
}
```

</details>

## [`createDeployment(options)`](https://docs.github.com/rest/reference/repos#create-a-deployment)

Deployments offer a few configurable parameters with certain defaults.

The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them before we merge a pull request.

The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter makes it easier to track which environments have requested deployments. The default environment is `production`.

The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds, the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will return a failure response.

By default, [commit statuses](https://docs.github.com/rest/reference/repos#statuses) for every submitted context must be in a `success` state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do not require any contexts or create any commit statuses, the deployment will always succeed.

The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text field that will be passed on when a deployment event is dispatched.

The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an application with debugging enabled.

Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.

**Merged branch response**

You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating a deployment. This auto-merge happens when:

- Auto-merge option is enabled in the repository
- Topic branch does not include the latest changes on the base branch, which is `master` in the response example
- There are no merge conflicts

If there are no new commits in the base branch, a new request to create a deployment should give a successful response.

**Merge conflict response**

This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.

**Failed commit status checks**

This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success` status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.

**Usage**

```js
const response = await octokit.repos.createDeployment({ owner, repo, ref })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string): The ref to deploy. This can be a branch, tag, or SHA.
- `task` (string): Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).
- `auto_merge` (boolean): Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
- `required_contexts` (string\[]): The [status](https://docs.github.com/rest/reference/repos#statuses) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
- `payload` (string): JSON payload with extra information about the deployment.
- `environment` (string): Name for the target deployment environment (e.g., `production`, `staging`, `qa`).
- `description` (string): Short description of the deployment.
- `transient_environment` (boolean): Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`  
  **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type.
- `production_environment` (boolean): Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.  
  **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type.
- `created_at` (string)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/repos/octocat/example/deployments/1',
    id: 1,
    node_id: 'MDEwOkRlcGxveW1lbnQx',
    sha: 'a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d',
    ref: 'topic-branch',
    task: 'deploy',
    payload: {},
    original_environment: 'staging',
    environment: 'production',
    description: 'Deploy request from hubot',
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
    created_at: '2012-07-20T01:19:13Z',
    updated_at: '2012-07-20T01:19:13Z',
    statuses_url:
      'https://api.github.com/repos/octocat/example/deployments/1/statuses',
    repository_url: 'https://api.github.com/repos/octocat/example',
    transient_environment: false,
    production_environment: true
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/repos/octocat/example/deployments/1',
    id: 1,
    node_id: 'MDEwOkRlcGxveW1lbnQx',
    sha: 'a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d',
    ref: 'topic-branch',
    task: 'deploy',
    payload: {},
    original_environment: 'staging',
    environment: 'production',
    description: 'Deploy request from hubot',
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
    created_at: '2012-07-20T01:19:13Z',
    updated_at: '2012-07-20T01:19:13Z',
    statuses_url:
      'https://api.github.com/repos/octocat/example/deployments/1/statuses',
    repository_url: 'https://api.github.com/repos/octocat/example',
    transient_environment: false,
    production_environment: true
  }
}
```

</details>

**Merged branch response (HTTP 202)**

<details><summary>Example</summary>

```js
const response = {
  status: 202,
  data: {
    message: 'Auto-merged master into topic-branch on deployment.'
  }
}
```

</details>

**Error (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.createDeployment({ owner, repo, ref })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`createDeploymentStatus(options)`](https://docs.github.com/rest/reference/repos#create-a-deployment-status)

Users with `push` access can create deployment statuses for a given deployment.

GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.

**Usage**

```js
const response = await octokit.repos.createDeploymentStatus({
  owner,
  repo,
  deployment_id,
  state
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `deployment_id` (required, integer)
- `state` (required, string): The state of the status. Can be one of `error`, `failure`, `inactive`, `in_progress`, `queued` `pending`, or `success`. **Note:** To use the `inactive` state, you must provide the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type. To use the `in_progress` and `queued` states, you must provide the [`application/vnd.github.flash-preview+json`](https://docs.github.com/rest/overview/api-previews#deployment-statuses) custom media type. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub.
- `target_url` (string): The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. **Note:** It's recommended to use the `log_url` parameter, which replaces `target_url`.
- `log_url` (string): The full URL of the deployment's output. This parameter replaces `target_url`. We will continue to accept `target_url` to support legacy uses, but we recommend replacing `target_url` with `log_url`. Setting `log_url` will automatically set `target_url` to the same value. Default: `""`  
  **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type.
- `description` (string): A short description of the status. The maximum description length is 140 characters.
- `environment` (string): Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`. **Note:** This parameter requires you to use the [`application/vnd.github.flash-preview+json`](https://docs.github.com/rest/overview/api-previews#deployment-statuses) custom media type.
- `environment_url` (string): Sets the URL for accessing your environment. Default: `""`  
  **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type.
- `auto_inactive` (boolean): Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. An `inactive` status is only added to deployments that had a `success` state. Default: `true`  
  **Note:** To add an `inactive` status to `production` environments, you must use the [`application/vnd.github.flash-preview+json`](https://docs.github.com/rest/overview/api-previews#deployment-statuses) custom media type.  
  **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url:
      'https://api.github.com/repos/octocat/example/deployments/42/statuses/1',
    id: 1,
    node_id: 'MDE2OkRlcGxveW1lbnRTdGF0dXMx',
    state: 'success',
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
    description: 'Deployment finished successfully.',
    environment: 'production',
    target_url: 'https://example.com/deployment/42/output',
    created_at: '2012-07-20T01:19:13Z',
    updated_at: '2012-07-20T01:19:13Z',
    deployment_url:
      'https://api.github.com/repos/octocat/example/deployments/42',
    repository_url: 'https://api.github.com/repos/octocat/example',
    environment_url: 'https://test-branch.lab.acme.com',
    log_url: 'https://example.com/deployment/42/output'
  }
}
```

</details>

## [`createDispatchEvent(options)`](https://docs.github.com/v3/repos/#create-a-repository-dispatch-event)

You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see [RepositoryDispatchEvent](https://docs.github.com/webhooks/event-payloads/#repository_dispatch).

The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.

To give you write access to the repository, you must use a personal access token with the `repo` scope. For more information, see [Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line) in the GitHub Help documentation.

This input example shows how you can use the `client_payload` as a test to debug your workflow.

**Usage**

```js
const response = await octokit.repos.createDispatchEvent({
  owner,
  repo,
  event_type
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `event_type` (required, string): A custom webhook event name.
- `client_payload` (object): JSON payload with extra information about the webhook event that your action or worklow may use.
- `client_payload.*` (object)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`createForAuthenticatedUser(options)`](https://docs.github.com/v3/repos/#create-a-repository-for-the-authenticated-user)

Creates a new repository for the authenticated user.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

- `public_repo` scope or `repo` scope to create a public repository
- `repo` scope to create a private repository

**Usage**

```js
const response = await octokit.repos.createForAuthenticatedUser({ name })
```

**Options**

- `name` (required, string): The name of the repository.
- `description` (string): A short description of the repository.
- `homepage` (string): A URL with more information about the repository.
- `private` (boolean): Whether the repository is private or public.
- `has_issues` (boolean): Whether issues are enabled.
- `has_projects` (boolean): Whether projects are enabled.
- `has_wiki` (boolean): Whether the wiki is enabled.
- `team_id` (integer): The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
- `auto_init` (boolean): Whether the repository is initialized with a minimal README.
- `gitignore_template` (string): The desired language or platform to apply to the .gitignore.
- `license_template` (string): The license keyword of the open source license for this repository.
- `allow_squash_merge` (boolean): Whether to allow squash merges for pull requests.
- `allow_merge_commit` (boolean): Whether to allow merge commits for pull requests.
- `allow_rebase_merge` (boolean): Whether to allow rebase merges for pull requests.
- `delete_branch_on_merge` (boolean): Whether to delete head branches when pull requests are merged
- `has_downloads` (boolean): Whether downloads are enabled.
- `is_template` (boolean): Whether this repository acts as a template that can be used to generate new repositories.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
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
    forks: 9,
    forks_count: 9,
    stargazers_count: 80,
    watchers_count: 80,
    watchers: 80,
    size: 108,
    default_branch: 'master',
    open_issues: 0,
    open_issues_count: 0,
    is_template: true,
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://api.github.com/licenses/mit'
    },
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
    network_count: 0
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.createForAuthenticatedUser({ name })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createFork(options)`](https://docs.github.com/rest/reference/repos#create-a-fork)

Create a fork for the authenticated user.

**Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com).

**Usage**

```js
const response = await octokit.repos.createFork({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `organization` (string): Optional parameter to specify the organization name if forking into an organization.

**Response (HTTP 202)**

<details><summary>Example</summary>

```js
const response = {
  status: 202,
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
    forks: 9,
    forks_count: 9,
    stargazers_count: 80,
    watchers_count: 80,
    watchers: 80,
    size: 108,
    default_branch: 'master',
    open_issues: 0,
    open_issues_count: 0,
    is_template: true,
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://api.github.com/licenses/mit'
    },
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
    network_count: 0
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.createFork({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createInOrg(options)`](https://docs.github.com/v3/repos/#create-an-organization-repository)

Creates a new repository in the specified organization. The authenticated user must be a member of the organization.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

- `public_repo` scope or `repo` scope to create a public repository
- `repo` scope to create a private repository

**Usage**

```js
const response = await octokit.repos.createInOrg({ org, name })
```

**Options**

- `org` (required, string)
- `name` (required, string): The name of the repository.
- `description` (string): A short description of the repository.
- `homepage` (string): A URL with more information about the repository.
- `private` (boolean): Either `true` to create a private repository or `false` to create a public one.
- `visibility` (string): Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. For more information, see "[Creating an internal repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.  
  The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.
- `has_issues` (boolean): Either `true` to enable issues for this repository or `false` to disable them.
- `has_projects` (boolean): Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
- `has_wiki` (boolean): Either `true` to enable the wiki for this repository or `false` to disable it.
- `is_template` (boolean): Either `true` to make this repo available as a template repository or `false` to prevent it.
- `team_id` (integer): The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
- `auto_init` (boolean): Pass `true` to create an initial commit with empty README.
- `gitignore_template` (string): Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
- `license_template` (string): Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
- `allow_squash_merge` (boolean): Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
- `allow_merge_commit` (boolean): Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
- `allow_rebase_merge` (boolean): Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
- `delete_branch_on_merge` (boolean): Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
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
    forks: 9,
    forks_count: 9,
    stargazers_count: 80,
    watchers_count: 80,
    watchers: 80,
    size: 108,
    default_branch: 'master',
    open_issues: 0,
    open_issues_count: 0,
    is_template: true,
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://api.github.com/licenses/mit'
    },
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
    network_count: 0
  }
}
```

</details>

## [`createOrUpdateFileContents(options)`](https://docs.github.com/rest/reference/repos#create-or-update-file-contents)

Creates a new file or replaces an existing file in a repository.

**Usage**

```js
const response = await octokit.repos.createOrUpdateFileContents({
  owner,
  repo,
  path,
  message,
  content,
  committer,
  author
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `path` (required, string)
- `message` (required, string): The commit message.
- `content` (required, string): The new file content, using Base64 encoding.
- `sha` (string): **Required if you are updating a file**. The blob SHA of the file being replaced.
- `branch` (string): The branch name. Default: the repository’s default branch (usually `master`)
- `committer` (object): The person that committed the file. Default: the authenticated user.
- `committer.name` (required, string): The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
- `committer.email` (required, string): The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
- `committer.date` (string)
- `author` (object): The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
- `author.name` (required, string): The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
- `author.email` (required, string): The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
- `author.date` (string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    content: {
      name: 'hello.txt',
      path: 'notes/hello.txt',
      sha: 'a56507ed892d05a37c6d6128c260937ea4d287bd',
      size: 9,
      url:
        'https://api.github.com/repos/octocat/Hello-World/contents/notes/hello.txt',
      html_url:
        'https://github.com/octocat/Hello-World/blob/master/notes/hello.txt',
      git_url:
        'https://api.github.com/repos/octocat/Hello-World/git/blobs/a56507ed892d05a37c6d6128c260937ea4d287bd',
      download_url:
        'https://raw.githubusercontent.com/octocat/HelloWorld/master/notes/hello.txt',
      type: 'file',
      _links: {
        self:
          'https://api.github.com/repos/octocat/Hello-World/contents/notes/hello.txt',
        git:
          'https://api.github.com/repos/octocat/Hello-World/git/blobs/a56507ed892d05a37c6d6128c260937ea4d287bd',
        html:
          'https://github.com/octocat/Hello-World/blob/master/notes/hello.txt'
      }
    },
    commit: {
      sha: '18a43cd8e1e3a79c786e3d808a73d23b6d212b16',
      node_id:
        'MDY6Q29tbWl0MThhNDNjZDhlMWUzYTc5Yzc4NmUzZDgwOGE3M2QyM2I2ZDIxMmIxNg==',
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/commits/18a43cd8e1e3a79c786e3d808a73d23b6d212b16',
      html_url:
        'https://github.com/octocat/Hello-World/git/commit/18a43cd8e1e3a79c786e3d808a73d23b6d212b16',
      author: {
        date: '2014-11-07T22:01:45Z',
        name: 'Monalisa Octocat',
        email: 'octocat@github.com'
      },
      committer: {
        date: '2014-11-07T22:01:45Z',
        name: 'Monalisa Octocat',
        email: 'octocat@github.com'
      },
      message: 'my commit message',
      tree: {
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/trees/9a21f8e2018f42ffcf369b24d2cd20bc25c9e66f',
        sha: '9a21f8e2018f42ffcf369b24d2cd20bc25c9e66f'
      },
      parents: [
        {
          url:
            'https://api.github.com/repos/octocat/Hello-World/git/commits/da5a433788da5c255edad7979b328b67d79f53f6',
          html_url:
            'https://github.com/octocat/Hello-World/git/commit/da5a433788da5c255edad7979b328b67d79f53f6',
          sha: 'da5a433788da5c255edad7979b328b67d79f53f6'
        }
      ],
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null
      }
    }
  }
}
```

</details>

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    content: {
      name: 'hello.txt',
      path: 'notes/hello.txt',
      sha: '95b966ae1c166bd92f8ae7d1c313e738c731dfc3',
      size: 9,
      url:
        'https://api.github.com/repos/octocat/Hello-World/contents/notes/hello.txt',
      html_url:
        'https://github.com/octocat/Hello-World/blob/master/notes/hello.txt',
      git_url:
        'https://api.github.com/repos/octocat/Hello-World/git/blobs/95b966ae1c166bd92f8ae7d1c313e738c731dfc3',
      download_url:
        'https://raw.githubusercontent.com/octocat/HelloWorld/master/notes/hello.txt',
      type: 'file',
      _links: {
        self:
          'https://api.github.com/repos/octocat/Hello-World/contents/notes/hello.txt',
        git:
          'https://api.github.com/repos/octocat/Hello-World/git/blobs/95b966ae1c166bd92f8ae7d1c313e738c731dfc3',
        html:
          'https://github.com/octocat/Hello-World/blob/master/notes/hello.txt'
      }
    },
    commit: {
      sha: '7638417db6d59f3c431d3e1f261cc637155684cd',
      node_id:
        'MDY6Q29tbWl0NzYzODQxN2RiNmQ1OWYzYzQzMWQzZTFmMjYxY2M2MzcxNTU2ODRjZA==',
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/commits/7638417db6d59f3c431d3e1f261cc637155684cd',
      html_url:
        'https://github.com/octocat/Hello-World/git/commit/7638417db6d59f3c431d3e1f261cc637155684cd',
      author: {
        date: '2014-11-07T22:01:45Z',
        name: 'Monalisa Octocat',
        email: 'octocat@github.com'
      },
      committer: {
        date: '2014-11-07T22:01:45Z',
        name: 'Monalisa Octocat',
        email: 'octocat@github.com'
      },
      message: 'my commit message',
      tree: {
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/trees/691272480426f78a0138979dd3ce63b77f706feb',
        sha: '691272480426f78a0138979dd3ce63b77f706feb'
      },
      parents: [
        {
          url:
            'https://api.github.com/repos/octocat/Hello-World/git/commits/1acc419d4d6a9ce985db7be48c6349a0475975b5',
          html_url:
            'https://github.com/octocat/Hello-World/git/commit/1acc419d4d6a9ce985db7be48c6349a0475975b5',
          sha: '1acc419d4d6a9ce985db7be48c6349a0475975b5'
        }
      ],
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null
      }
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path,
    message,
    content,
    committer,
    author
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error upon conflict (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path,
    message,
    content,
    committer,
    author
  })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`createPagesSite(options)`](https://docs.github.com/rest/reference/repos#create-a-github-pages-site)

Configures a GitHub Pages site. For more information, see [About GitHub Pages](/github/working-with-github-pages/about-github-pages).

**Usage**

```js
const response = await octokit.repos.createPagesSite({ owner, repo, source })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `source` (required, object): The source branch and directory used to publish your Pages site.
- `source.branch` (required, string): The repository branch used to publish your site's source files.
- `source.path` (string): The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/repos/github/developer.github.com/pages',
    status: 'built',
    cname: 'developer.github.com',
    custom_404: false,
    html_url: 'https://developer.github.com',
    source: {
      branch: 'master',
      path: '/'
    }
  }
}
```

</details>

**Error upon conflict (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.createPagesSite({ owner, repo, source })
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
  response = await octokit.repos.createPagesSite({ owner, repo, source })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`createRelease(options)`](https://docs.github.com/rest/reference/repos#create-a-release)

Users with push access to the repository can create a release.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See [Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits) and [Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits) for details.

**Usage**

```js
const response = await octokit.repos.createRelease({ owner, repo, tag_name })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `tag_name` (required, string): The name of the tag.
- `target_commitish` (string): Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
- `name` (string): The name of the release.
- `body` (string): Text describing the contents of the tag.
- `draft` (boolean): `true` to create a draft (unpublished) release, `false` to create a published one.
- `prerelease` (boolean): `true` to identify the release as a prerelease. `false` to identify the release as a full release.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/releases/1',
    html_url: 'https://github.com/octocat/Hello-World/releases/v1.0.0',
    assets_url:
      'https://api.github.com/repos/octocat/Hello-World/releases/1/assets',
    upload_url:
      'https://uploads.github.com/repos/octocat/Hello-World/releases/1/assets{?name,label}',
    tarball_url:
      'https://api.github.com/repos/octocat/Hello-World/tarball/v1.0.0',
    zipball_url:
      'https://api.github.com/repos/octocat/Hello-World/zipball/v1.0.0',
    id: 1,
    node_id: 'MDc6UmVsZWFzZTE=',
    tag_name: 'v1.0.0',
    target_commitish: 'master',
    name: 'v1.0.0',
    body: 'Description of the release',
    draft: false,
    prerelease: false,
    created_at: '2013-02-27T19:35:32Z',
    published_at: '2013-02-27T19:35:32Z',
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
    assets: [
      {
        url:
          'https://api.github.com/repos/octocat/Hello-World/releases/assets/1',
        browser_download_url:
          'https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip',
        id: 1,
        node_id: 'MDEyOlJlbGVhc2VBc3NldDE=',
        name: 'example.zip',
        label: 'short description',
        state: 'uploaded',
        content_type: 'application/zip',
        size: 1024,
        download_count: 42,
        created_at: '2013-02-27T19:35:32Z',
        updated_at: '2013-02-27T19:35:32Z',
        uploader: {
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
      }
    ]
  }
}
```

</details>

## [`createUsingTemplate(options)`](https://docs.github.com/v3/repos/#create-a-repository-using-a-template)

Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

- `public_repo` scope or `repo` scope to create a public repository
- `repo` scope to create a private repository

**Usage**

```js
const response = await octokit.repos.createUsingTemplate({
  template_owner,
  template_repo,
  name
})
```

**Options**

- `template_owner` (required, string)
- `template_repo` (required, string)
- `owner` (string): The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
- `name` (required, string): The name of the new repository.
- `description` (string): A short description of the new repository.
- `include_all_branches` (boolean): Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. Default: `false`.
- `private` (boolean): Either `true` to create a new private repository or `false` to create a new public one.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
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
    forks: 9,
    stargazers_count: 80,
    watchers_count: 80,
    watchers: 80,
    size: 108,
    default_branch: 'master',
    open_issues_count: 0,
    open_issues: 0,
    is_template: false,
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
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://github.com/licenses/mit'
    }
  }
}
```

</details>

## [`createWebhook(options)`](https://docs.github.com/rest/reference/repos#create-a-repository-webhook)

Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can share the same `config` as long as those webhooks do not have any `events` that overlap.

**Usage**

```js
const response = await octokit.repos.createWebhook({ owner, repo, config })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `name` (string): Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`.
- `config` (required, object): Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
- `config.url` (required, string): The URL to which the payloads will be delivered.
- `config.content_type` (string): The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
- `config.secret` (string): If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
- `config.insecure_ssl` (string): Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
- `config.token` (string)
- `config.digest` (string)
- `events` (string\[]): Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
- `active` (boolean): Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    type: 'Repository',
    id: 12345678,
    name: 'web',
    active: true,
    events: ['push', 'pull_request'],
    config: {
      content_type: 'json',
      insecure_ssl: '0',
      url: 'https://example.com/webhook'
    },
    updated_at: '2019-06-03T00:57:16Z',
    created_at: '2019-06-03T00:57:16Z',
    url: 'https://api.github.com/repos/octocat/Hello-World/hooks/12345678',
    test_url:
      'https://api.github.com/repos/octocat/Hello-World/hooks/12345678/test',
    ping_url:
      'https://api.github.com/repos/octocat/Hello-World/hooks/12345678/pings',
    last_response: {
      code: null,
      status: 'unused',
      message: null
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.createWebhook({ owner, repo, config })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`declineInvitation(options)`](https://docs.github.com/rest/reference/repos#decline-a-repository-invitation)

**Usage**

```js
const response = await octokit.repos.declineInvitation({ invitation_id })
```

**Options**

- `invitation_id` (required, integer)

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
  response = await octokit.repos.declineInvitation({ invitation_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error upon conflict (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.declineInvitation({ invitation_id })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`delete(options)`](https://docs.github.com/v3/repos/#delete-a-repository)

Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.

If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, you will get a `403 Forbidden` response.

**Usage**

```js
const response = await octokit.repos.delete({ owner, repo })
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
  response = await octokit.repos.delete({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#delete-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Disables the ability to restrict who can push to this branch.

**Usage**

```js
const response = await octokit.repos.deleteAccessRestrictions({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**No Content (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteAdminBranchProtection(options)`](https://docs.github.com/rest/reference/repos#delete-admin-branch-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Usage**

```js
const response = await octokit.repos.deleteAdminBranchProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**No Content (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.deleteAdminBranchProtection({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteBranchProtection(options)`](https://docs.github.com/rest/reference/repos#delete-branch-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.deleteBranchProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteCommitComment(options)`](https://docs.github.com/rest/reference/repos#delete-a-commit-comment)

**Usage**

```js
const response = await octokit.repos.deleteCommitComment({
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
  response = await octokit.repos.deleteCommitComment({
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

## [`deleteCommitSignatureProtection(options)`](https://docs.github.com/rest/reference/repos#delete-commit-signature-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.

**Usage**

```js
const response = await octokit.repos.deleteCommitSignatureProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**No Content (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.deleteCommitSignatureProtection({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteDeployKey(options)`](https://docs.github.com/rest/reference/repos#delete-a-deploy-key)

Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.

**Usage**

```js
const response = await octokit.repos.deleteDeployKey({ owner, repo, key_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `key_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteDeployment(options)`](https://docs.github.com/rest/reference/repos#delete-a-deployment)

To ensure there can always be an active deployment, you can only delete an _inactive_ deployment. Anyone with `repo` or `repo_deployment` scopes can delete an inactive deployment.

To set a deployment as inactive, you must:

- Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
- Mark the active deployment as inactive by adding any non-successful deployment status.

For more information, see [Create a deployment](https://docs.github.com/rest/reference/repos/deployments/#create-a-deployment) and [Create a deployment status](https://docs.github.com/rest/reference/repos#create-a-deployment-status).

**Usage**

```js
const response = await octokit.repos.deleteDeployment({
  owner,
  repo,
  deployment_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `deployment_id` (required, integer)

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
  response = await octokit.repos.deleteDeployment({
    owner,
    repo,
    deployment_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteFile(options)`](https://docs.github.com/rest/reference/repos#delete-a-file)

Deletes a file in a repository.

You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.

The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.

You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.

**Usage**

```js
const response = await octokit.repos.deleteFile({
  owner,
  repo,
  path,
  message,
  sha
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `path` (required, string)
- `message` (required, string): The commit message.
- `sha` (required, string): The blob SHA of the file being replaced.
- `branch` (string): The branch name. Default: the repository’s default branch (usually `master`)
- `committer` (object): object containing information about the committer.
- `committer.name` (string): The name of the author (or committer) of the commit
- `committer.email` (string): The email of the author (or committer) of the commit
- `author` (object): object containing information about the author.
- `author.name` (string): The name of the author (or committer) of the commit
- `author.email` (string): The email of the author (or committer) of the commit

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    content: null,
    commit: {
      sha: '7638417db6d59f3c431d3e1f261cc637155684cd',
      node_id:
        'MDY6Q29tbWl0NzYzODQxN2RiNmQ1OWYzYzQzMWQzZTFmMjYxY2M2MzcxNTU2ODRjZA==',
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/commits/7638417db6d59f3c431d3e1f261cc637155684cd',
      html_url:
        'https://github.com/octocat/Hello-World/git/commit/7638417db6d59f3c431d3e1f261cc637155684cd',
      author: {
        date: '2014-11-07T22:01:45Z',
        name: 'Monalisa Octocat',
        email: 'octocat@github.com'
      },
      committer: {
        date: '2014-11-07T22:01:45Z',
        name: 'Monalisa Octocat',
        email: 'octocat@github.com'
      },
      message: 'my commit message',
      tree: {
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/trees/691272480426f78a0138979dd3ce63b77f706feb',
        sha: '691272480426f78a0138979dd3ce63b77f706feb'
      },
      parents: [
        {
          url:
            'https://api.github.com/repos/octocat/Hello-World/git/commits/1acc419d4d6a9ce985db7be48c6349a0475975b5',
          html_url:
            'https://github.com/octocat/Hello-World/git/commit/1acc419d4d6a9ce985db7be48c6349a0475975b5',
          sha: '1acc419d4d6a9ce985db7be48c6349a0475975b5'
        }
      ],
      verification: {
        verified: false,
        reason: 'unsigned',
        signature: null,
        payload: null
      }
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.deleteFile({ owner, repo, path, message, sha })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error upon conflict (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.deleteFile({ owner, repo, path, message, sha })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`deleteInvitation(options)`](https://docs.github.com/rest/reference/repos#delete-a-repository-invitation)

**Usage**

```js
const response = await octokit.repos.deleteInvitation({
  owner,
  repo,
  invitation_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `invitation_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deletePagesSite(options)`](https://docs.github.com/rest/reference/repos#delete-a-github-pages-site)

**Usage**

```js
const response = await octokit.repos.deletePagesSite({ owner, repo })
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
  response = await octokit.repos.deletePagesSite({ owner, repo })
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
  response = await octokit.repos.deletePagesSite({ owner, repo })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`deletePullRequestReviewProtection(options)`](https://docs.github.com/rest/reference/repos#delete-pull-request-review-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.deletePullRequestReviewProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**No Content (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.deletePullRequestReviewProtection({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteRelease(options)`](https://docs.github.com/rest/reference/repos#delete-a-release)

Users with push access to the repository can delete a release.

**Usage**

```js
const response = await octokit.repos.deleteRelease({ owner, repo, release_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `release_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteReleaseAsset(options)`](https://docs.github.com/rest/reference/repos#delete-a-release-asset)

**Usage**

```js
const response = await octokit.repos.deleteReleaseAsset({
  owner,
  repo,
  asset_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `asset_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteWebhook(options)`](https://docs.github.com/rest/reference/repos#delete-a-repository-webhook)

**Usage**

```js
const response = await octokit.repos.deleteWebhook({ owner, repo, hook_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
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
  response = await octokit.repos.deleteWebhook({ owner, repo, hook_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`disableAutomatedSecurityFixes(options)`](https://docs.github.com/v3/repos/#disable-automated-security-fixes)

Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see [Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes).

**Usage**

```js
const response = await octokit.repos.disableAutomatedSecurityFixes({
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

## [`disableVulnerabilityAlerts(options)`](https://docs.github.com/v3/repos/#disable-vulnerability-alerts)

Disables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see [About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies).

**Usage**

```js
const response = await octokit.repos.disableVulnerabilityAlerts({ owner, repo })
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

## [`downloadArchive(options)`](https://docs.github.com/rest/reference/repos#download-a-repository-archive)

**Deprecated:** This method has been renamed to repos.downloadTarballArchive

Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request. **Note**: For private repositories, these links are temporary and expire after five minutes.

**Usage**

```js
const response = await octokit.repos.downloadArchive({ owner, repo, ref })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string)

**Response (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

## [`downloadArchive(options)`](https://docs.github.com/rest/reference/repos#download-a-repository-archive)

**Deprecated:** This method has been renamed to repos.downloadZipballArchive

Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request. **Note**: For private repositories, these links are temporary and expire after five minutes.

**Usage**

```js
const response = await octokit.repos.downloadArchive({ owner, repo, ref })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string)

**Response (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

## [`downloadTarballArchive(options)`](https://docs.github.com/rest/reference/repos#download-a-repository-archive)

Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request. **Note**: For private repositories, these links are temporary and expire after five minutes.

**Usage**

```js
const response = await octokit.repos.downloadTarballArchive({
  owner,
  repo,
  ref
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string)

**Response (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

## [`downloadZipballArchive(options)`](https://docs.github.com/rest/reference/repos#download-a-repository-archive)

Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request. **Note**: For private repositories, these links are temporary and expire after five minutes.

**Usage**

```js
const response = await octokit.repos.downloadZipballArchive({
  owner,
  repo,
  ref
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string)

**Response (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

## [`enableAutomatedSecurityFixes(options)`](https://docs.github.com/v3/repos/#enable-automated-security-fixes)

Enables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see [Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes).

**Usage**

```js
const response = await octokit.repos.enableAutomatedSecurityFixes({
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

## [`enableVulnerabilityAlerts(options)`](https://docs.github.com/v3/repos/#enable-vulnerability-alerts)

Enables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see [About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies).

**Usage**

```js
const response = await octokit.repos.enableVulnerabilityAlerts({ owner, repo })
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

## [`get(options)`](https://docs.github.com/v3/repos/#get-a-repository)

When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.

The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.

**Usage**

```js
const response = await octokit.repos.get({ owner, repo })
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
    forks: 9,
    stargazers_count: 80,
    watchers_count: 80,
    watchers: 80,
    size: 108,
    default_branch: 'master',
    open_issues_count: 0,
    open_issues: 0,
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
      pull: true,
      push: false,
      admin: false
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
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZW1pdA=='
    },
    organization: {
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
      type: 'Organization',
      site_admin: false
    },
    parent: {
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
        html_url: 'https://api.github.com/licenses/mit'
      },
      forks: 1,
      open_issues: 1,
      watchers: 1
    },
    source: {
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
        html_url: 'https://api.github.com/licenses/mit'
      },
      forks: 1,
      open_issues: 1,
      watchers: 1
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
    id: 88760408,
    node_id: 'MDEwOlJlcG9zaXRvcnk4ODc2MDQwOA==',
    name: 'cosee',
    full_name: 'LindseyB/cosee',
    disabled: false,
    archived: false,
    owner: {
      login: 'LindseyB',
      id: 33750,
      node_id: 'MDQ6VXNlcjMzNzUw',
      avatar_url: 'https://avatars2.githubusercontent.com/u/33750?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/LindseyB',
      html_url: 'https://github.com/LindseyB',
      followers_url: 'https://api.github.com/users/LindseyB/followers',
      following_url:
        'https://api.github.com/users/LindseyB/following{/other_user}',
      gists_url: 'https://api.github.com/users/LindseyB/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/LindseyB/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/LindseyB/subscriptions',
      organizations_url: 'https://api.github.com/users/LindseyB/orgs',
      repos_url: 'https://api.github.com/users/LindseyB/repos',
      events_url: 'https://api.github.com/users/LindseyB/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/LindseyB/received_events',
      type: 'User',
      site_admin: true
    },
    private: false,
    html_url: 'https://github.com/LindseyB/cosee',
    description: null,
    fork: false,
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://github.com/licenses/mit'
    },
    url: 'https://api.github.com/repos/LindseyB/cosee',
    forks_url: 'https://api.github.com/repos/LindseyB/cosee/forks',
    keys_url: 'https://api.github.com/repos/LindseyB/cosee/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/LindseyB/cosee/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/LindseyB/cosee/teams',
    hooks_url: 'https://api.github.com/repos/LindseyB/cosee/hooks',
    issue_events_url:
      'https://api.github.com/repos/LindseyB/cosee/issues/events{/number}',
    events_url: 'https://api.github.com/repos/LindseyB/cosee/events',
    assignees_url:
      'https://api.github.com/repos/LindseyB/cosee/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/LindseyB/cosee/branches{/branch}',
    tags_url: 'https://api.github.com/repos/LindseyB/cosee/tags',
    blobs_url: 'https://api.github.com/repos/LindseyB/cosee/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/LindseyB/cosee/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/LindseyB/cosee/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/LindseyB/cosee/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/LindseyB/cosee/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/LindseyB/cosee/languages',
    stargazers_url: 'https://api.github.com/repos/LindseyB/cosee/stargazers',
    contributors_url:
      'https://api.github.com/repos/LindseyB/cosee/contributors',
    subscribers_url: 'https://api.github.com/repos/LindseyB/cosee/subscribers',
    subscription_url:
      'https://api.github.com/repos/LindseyB/cosee/subscription',
    commits_url: 'https://api.github.com/repos/LindseyB/cosee/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/LindseyB/cosee/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/LindseyB/cosee/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/LindseyB/cosee/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/LindseyB/cosee/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/LindseyB/cosee/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/LindseyB/cosee/merges',
    archive_url:
      'https://api.github.com/repos/LindseyB/cosee/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/LindseyB/cosee/downloads',
    issues_url: 'https://api.github.com/repos/LindseyB/cosee/issues{/number}',
    pulls_url: 'https://api.github.com/repos/LindseyB/cosee/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/LindseyB/cosee/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/LindseyB/cosee/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/LindseyB/cosee/labels{/name}',
    releases_url: 'https://api.github.com/repos/LindseyB/cosee/releases{/id}',
    deployments_url: 'https://api.github.com/repos/LindseyB/cosee/deployments',
    pushed_at: '2011-01-26T19:06:43Z',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:14:43Z',
    git_url: 'git://github.com/LindseyB/cosee.git',
    ssh_url: 'git@github.com=>LindseyB/cosee.git',
    clone_url: 'https://github.com/LindseyB/cosee.git',
    svn_url: 'https://github.com/LindseyB/cosee',
    homepage: null,
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    open_issues_count: 0,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
    network_count: 0,
    subscribers_count: 0
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
  response = await octokit.repos.get({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#get-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists who has access to this protected branch.

**Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.

**Usage**

```js
const response = await octokit.repos.getAccessRestrictions({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/restrictions',
    users_url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/restrictions/users',
    teams_url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/restrictions/teams',
    apps_url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/restrictions/teams',
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
    ],
    apps: [
      {
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
          hooks_url: 'https://api.github.com/orgs/github/hooks',
          issues_url: 'https://api.github.com/orgs/github/issues',
          members_url: 'https://api.github.com/orgs/github/members{/member}',
          public_members_url:
            'https://api.github.com/orgs/github/public_members{/member}',
          avatar_url: 'https://github.com/images/error/octocat_happy.gif',
          description: 'A great organization'
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
    ]
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getAccessRestrictions({ owner, repo, branch })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getAdminBranchProtection(options)`](https://docs.github.com/rest/reference/repos#get-admin-branch-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.getAdminBranchProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/enforce_admins',
    enabled: true
  }
}
```

</details>

## [`getAllStatusCheckContexts(options)`](https://docs.github.com/rest/reference/repos#get-all-status-check-contexts)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.getAllStatusCheckContexts({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: ['continuous-integration/travis-ci']
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getAllStatusCheckContexts({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getAllTopics(options)`](https://docs.github.com/v3/repos/#get-all-repository-topics)

**Usage**

```js
const response = await octokit.repos.getAllTopics({ owner, repo })
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
    names: ['octocat', 'atom', 'electron', 'api']
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getAllTopics({ owner, repo })
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
  response = await octokit.repos.getAllTopics({ owner, repo })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`getAppsWithAccessToProtectedBranch(options)`](https://docs.github.com/rest/reference/repos#list-apps-with-access-to-the-protected-branch)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

**Usage**

```js
const response = await octokit.repos.getAppsWithAccessToProtectedBranch({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
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
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getAppsWithAccessToProtectedBranch({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getBranch(options)`](https://docs.github.com/rest/reference/repos#get-a-branch)

**Usage**

```js
const response = await octokit.repos.getBranch({ owner, repo, branch })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    name: 'master',
    commit: {
      sha: '7fd1a60b01f91b314f59955a4e4d4e80d8edf11d',
      node_id:
        'MDY6Q29tbWl0N2ZkMWE2MGIwMWY5MWIzMTRmNTk5NTVhNGU0ZDRlODBkOGVkZjExZA==',
      commit: {
        author: {
          name: 'The Octocat',
          date: '2012-03-06T15:06:50-08:00',
          email: 'octocat@nowhere.com'
        },
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/commits/7fd1a60b01f91b314f59955a4e4d4e80d8edf11d',
        message:
          'Merge pull request #6 from Spaceghost/patch-1\n\nNew line at end of file.',
        tree: {
          sha: 'b4eecafa9be2f2006ce1b709d6857b07069b4608',
          url:
            'https://api.github.com/repos/octocat/Hello-World/git/trees/b4eecafa9be2f2006ce1b709d6857b07069b4608'
        },
        committer: {
          name: 'The Octocat',
          date: '2012-03-06T15:06:50-08:00',
          email: 'octocat@nowhere.com'
        },
        verification: {
          verified: false,
          reason: 'unsigned',
          signature: null,
          payload: null
        },
        comment_count: 0
      },
      author: {
        gravatar_id: '',
        avatar_url:
          'https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png',
        url: 'https://api.github.com/users/octocat',
        id: 583231,
        login: 'octocat',
        node_id: 'MDQ6VXNlcjE=',
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
        site_admin: true
      },
      parents: [
        {
          sha: '553c2077f0edc3d5dc5d17262f6aa498e69d6f8e',
          url:
            'https://api.github.com/repos/octocat/Hello-World/commits/553c2077f0edc3d5dc5d17262f6aa498e69d6f8e'
        },
        {
          sha: '762941318ee16e59dabbacb1b4049eec22f0d303',
          url:
            'https://api.github.com/repos/octocat/Hello-World/commits/762941318ee16e59dabbacb1b4049eec22f0d303'
        }
      ],
      url:
        'https://api.github.com/repos/octocat/Hello-World/commits/7fd1a60b01f91b314f59955a4e4d4e80d8edf11d',
      committer: {
        gravatar_id: '',
        avatar_url:
          'https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png',
        url: 'https://api.github.com/users/octocat',
        id: 583231,
        login: 'octocat',
        node_id: 'MDQ6VXNlcjE=',
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
        site_admin: true
      },
      html_url:
        'https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e',
      comments_url:
        'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments'
    },
    _links: {
      html: 'https://github.com/octocat/Hello-World/tree/master',
      self: 'https://api.github.com/repos/octocat/Hello-World/branches/master'
    },
    protected: true,
    protection: {
      enabled: true,
      required_status_checks: {
        enforcement_level: 'non_admins',
        contexts: ['ci-test', 'linter']
      }
    },
    protection_url:
      'https://api.github.com/repos/octocat/hello-world/branches/master/protection'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getBranch({ owner, repo, branch })
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
  response = await octokit.repos.getBranch({ owner, repo, branch })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`getBranchProtection(options)`](https://docs.github.com/rest/reference/repos#get-branch-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.getBranchProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection',
    enabled: true,
    required_status_checks: {
      url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks',
      contexts: ['continuous-integration/travis-ci'],
      contexts_url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks/contexts',
      enforcement_level: 'non_admins'
    },
    enforce_admins: {
      url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/enforce_admins',
      enabled: true
    },
    required_pull_request_reviews: {
      url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_pull_request_reviews',
      dismissal_restrictions: {
        url:
          'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions',
        users_url:
          'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions/users',
        teams_url:
          'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions/teams',
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
      },
      dismiss_stale_reviews: true,
      require_code_owner_reviews: true,
      required_approving_review_count: 2
    },
    restrictions: {
      url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/restrictions',
      users_url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/restrictions/users',
      teams_url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/restrictions/teams',
      apps_url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/restrictions/teams',
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
      ],
      apps: [
        {
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
            hooks_url: 'https://api.github.com/orgs/github/hooks',
            issues_url: 'https://api.github.com/orgs/github/issues',
            members_url: 'https://api.github.com/orgs/github/members{/member}',
            public_members_url:
              'https://api.github.com/orgs/github/public_members{/member}',
            avatar_url: 'https://github.com/images/error/octocat_happy.gif',
            description: 'A great organization'
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
      ]
    },
    required_linear_history: {
      enabled: true
    },
    allow_force_pushes: {
      enabled: true
    },
    allow_deletions: {
      enabled: true
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getBranchProtection({ owner, repo, branch })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getClones(options)`](https://docs.github.com/rest/reference/repos#get-repository-clones)

Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.

**Usage**

```js
const response = await octokit.repos.getClones({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `per` (string): Must be one of: `day`, `week`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    count: 173,
    uniques: 128,
    clones: [
      {
        timestamp: '2016-10-10T00:00:00Z',
        count: 2,
        uniques: 1
      },
      {
        timestamp: '2016-10-11T00:00:00Z',
        count: 17,
        uniques: 16
      },
      {
        timestamp: '2016-10-12T00:00:00Z',
        count: 21,
        uniques: 15
      },
      {
        timestamp: '2016-10-13T00:00:00Z',
        count: 8,
        uniques: 7
      },
      {
        timestamp: '2016-10-14T00:00:00Z',
        count: 5,
        uniques: 5
      },
      {
        timestamp: '2016-10-15T00:00:00Z',
        count: 2,
        uniques: 2
      },
      {
        timestamp: '2016-10-16T00:00:00Z',
        count: 8,
        uniques: 7
      },
      {
        timestamp: '2016-10-17T00:00:00Z',
        count: 26,
        uniques: 15
      },
      {
        timestamp: '2016-10-18T00:00:00Z',
        count: 19,
        uniques: 17
      },
      {
        timestamp: '2016-10-19T00:00:00Z',
        count: 19,
        uniques: 14
      },
      {
        timestamp: '2016-10-20T00:00:00Z',
        count: 19,
        uniques: 15
      },
      {
        timestamp: '2016-10-21T00:00:00Z',
        count: 9,
        uniques: 7
      },
      {
        timestamp: '2016-10-22T00:00:00Z',
        count: 5,
        uniques: 5
      },
      {
        timestamp: '2016-10-23T00:00:00Z',
        count: 6,
        uniques: 5
      },
      {
        timestamp: '2016-10-24T00:00:00Z',
        count: 7,
        uniques: 5
      }
    ]
  }
}
```

</details>

## [`getCodeFrequencyStats(options)`](https://docs.github.com/rest/reference/repos#get-the-weekly-commit-activity)

Returns a weekly aggregate of the number of additions and deletions pushed to a repository.

**Usage**

```js
const response = await octokit.repos.getCodeFrequencyStats({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

**Returns a weekly aggregate of the number of additions and deletions pushed to a repository. (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [[1302998400, 1124, -435]]
}
```

</details>

## [`getCollaboratorPermissionLevel(options)`](https://docs.github.com/rest/reference/repos#get-repository-permissions-for-a-user)

Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.

**Usage**

```js
const response = await octokit.repos.getCollaboratorPermissionLevel({
  owner,
  repo,
  username
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `username` (required, string)

**Response if user has admin permissions (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    permission: 'admin',
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
  response = await octokit.repos.getCollaboratorPermissionLevel({
    owner,
    repo,
    username
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getCombinedStatusForRef(options)`](https://docs.github.com/rest/reference/repos#get-the-combined-status-for-a-specific-reference)

Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.

The most recent status for each context is returned, up to 100. This field [paginates](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination) if there are over 100 contexts.

Additionally, a combined `state` is returned. The `state` is one of:

- **failure** if any of the contexts report as `error` or `failure`
- **pending** if there are no statuses or a context is `pending`
- **success** if the latest status for all contexts is `success`

**Usage**

```js
const response = await octokit.repos.getCombinedStatusForRef({
  owner,
  repo,
  ref
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    state: 'success',
    statuses: [
      {
        url:
          'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e',
        avatar_url: 'https://github.com/images/error/hubot_happy.gif',
        id: 1,
        node_id: 'MDY6U3RhdHVzMQ==',
        state: 'success',
        description: 'Build has completed successfully',
        target_url: 'https://ci.example.com/1000/output',
        context: 'continuous-integration/jenkins',
        created_at: '2012-07-20T01:19:13Z',
        updated_at: '2012-07-20T01:19:13Z'
      },
      {
        url:
          'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e',
        avatar_url: 'https://github.com/images/error/other_user_happy.gif',
        id: 2,
        node_id: 'MDY6U3RhdHVzMg==',
        state: 'success',
        description: 'Testing has completed successfully',
        target_url: 'https://ci.example.com/2000/output',
        context: 'security/brakeman',
        created_at: '2012-08-20T01:19:13Z',
        updated_at: '2012-08-20T01:19:13Z'
      }
    ],
    sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    total_count: 2,
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
    commit_url:
      'https://api.github.com/repos/octocat/Hello-World/6dcb09b5b57875f334f61aebed695e2e4193db5e',
    url:
      'https://api.github.com/repos/octocat/Hello-World/6dcb09b5b57875f334f61aebed695e2e4193db5e/status'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getCombinedStatusForRef({ owner, repo, ref })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getCommit(options)`](https://docs.github.com/rest/reference/repos#get-a-commit)

Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.

**Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.

You can pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.

To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name        | Type      | Description                                                                                      |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| `verified`  | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified.                  |
| `reason`    | `string`  | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string`  | The signature that was extracted from the commit.                                                |
| `payload`   | `string`  | The value that was signed.                                                                       |

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

**Usage**

```js
const response = await octokit.repos.getCommit({ owner, repo, ref })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
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
        email: 'mona@github.com',
        date: '2011-04-14T16:00:49Z'
      },
      committer: {
        name: 'Monalisa Octocat',
        email: 'mona@github.com',
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
    ],
    stats: {
      additions: 104,
      deletions: 4,
      total: 108
    },
    files: [
      {
        filename: 'file1.txt',
        additions: 10,
        deletions: 2,
        changes: 12,
        status: 'modified',
        raw_url:
          'https://github.com/octocat/Hello-World/raw/7ca483543807a51b6079e54ac4cc392bc29ae284/file1.txt',
        blob_url:
          'https://github.com/octocat/Hello-World/blob/7ca483543807a51b6079e54ac4cc392bc29ae284/file1.txt',
        patch: '@@ -29,7 +29,7 @@\n.....'
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
  response = await octokit.repos.getCommit({ owner, repo, ref })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getCommitActivityStats(options)`](https://docs.github.com/rest/reference/repos#get-the-last-year-of-commit-activity)

Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.

**Usage**

```js
const response = await octokit.repos.getCommitActivityStats({ owner, repo })
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
      days: [0, 3, 26, 20, 39, 1, 0],
      total: 89,
      week: 1336280400
    }
  ]
}
```

</details>

## [`getCommitComment(options)`](https://docs.github.com/rest/reference/repos#get-a-commit-comment)

**Usage**

```js
const response = await octokit.repos.getCommitComment({
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
    html_url:
      'https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e#commitcomment-1',
    url: 'https://api.github.com/repos/octocat/Hello-World/comments/1',
    id: 1,
    node_id: 'MDEzOkNvbW1pdENvbW1lbnQx',
    body: 'Great stuff',
    path: 'file1.txt',
    position: 4,
    line: 14,
    commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    author_association: 'collaborator',
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
    updated_at: '2011-04-14T16:00:49Z'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getCommitComment({ owner, repo, comment_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getCommitSignatureProtection(options)`](https://docs.github.com/rest/reference/repos#get-commit-signature-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.

**Note**: You must enable branch protection to require signed commits.

**Usage**

```js
const response = await octokit.repos.getCommitSignatureProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_signatures',
    enabled: true
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getCommitSignatureProtection({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getCommunityProfileMetrics(options)`](https://docs.github.com/rest/reference/repos#get-community-profile-metrics)

This endpoint will return all community profile metrics, including an overall health score, repository description, the presence of documentation, detected code of conduct, detected license, and the presence of ISSUE_TEMPLATE, PULL_REQUEST_TEMPLATE, README, and CONTRIBUTING files.

`content_reports_enabled` is only returned for organization-owned repositories.

**Usage**

```js
const response = await octokit.repos.getCommunityProfileMetrics({ owner, repo })
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
    health_percentage: 100,
    description: 'My first repository on GitHub!',
    documentation: null,
    files: {
      code_of_conduct: {
        name: 'Contributor Covenant',
        key: 'contributor_covenant',
        url: 'https://api.github.com/codes_of_conduct/contributor_covenant',
        html_url:
          'https://github.com/octocat/Hello-World/blob/master/CODE_OF_CONDUCT.md'
      },
      contributing: {
        url:
          'https://api.github.com/repos/octocat/Hello-World/contents/CONTRIBUTING',
        html_url:
          'https://github.com/octocat/Hello-World/blob/master/CONTRIBUTING'
      },
      issue_template: {
        url:
          'https://api.github.com/repos/octocat/Hello-World/contents/ISSUE_TEMPLATE',
        html_url:
          'https://github.com/octocat/Hello-World/blob/master/ISSUE_TEMPLATE'
      },
      pull_request_template: {
        url:
          'https://api.github.com/repos/octocat/Hello-World/contents/PULL_REQUEST_TEMPLATE',
        html_url:
          'https://github.com/octocat/Hello-World/blob/master/PULL_REQUEST_TEMPLATE'
      },
      license: {
        name: 'MIT License',
        key: 'mit',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        html_url: 'https://github.com/octocat/Hello-World/blob/master/LICENSE',
        node_id: 'MDc6TGljZW5zZW1pdA=='
      },
      readme: {
        url:
          'https://api.github.com/repos/octocat/Hello-World/contents/README.md',
        html_url: 'https://github.com/octocat/Hello-World/blob/master/README.md'
      }
    },
    updated_at: '2017-02-28T19:09:29Z',
    content_reports_enabled: true
  }
}
```

</details>

## [`getContent(options)`](https://docs.github.com/rest/reference/repos#get-repository-content)

Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit `:path`, you will receive the contents of all files in the repository.

Files and symlinks support [a custom media type](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML (when supported). All content types support [a custom media type](https://docs.github.com/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent object format.

**Note**:

- To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/rest/reference/git#trees).
- This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees API](https://docs.github.com/rest/reference/git#get-a-tree).
- This API supports files up to 1 megabyte in size.

**If the content is a directory**

The response will be an array of objects, one object for each item in the directory. When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW). In the next major version of the API, the type will be returned as "submodule".

**If the content is a symlink**

If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object describing the symlink itself.

**If the content is a submodule**

The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out the submodule at that specific commit.

If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the github.com URLs (`html_url` and `_links["html"]`) will have null values.

**Usage**

```js
const response = await octokit.repos.getContent({ owner, repo, path })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `path` (required, string)
- `ref` (string): The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    type: 'file',
    encoding: 'base64',
    size: 5362,
    name: 'README.md',
    path: 'README.md',
    content: 'encoded content ...',
    sha: '3d21ec53a331a6f037a91c368710b99387d012c1',
    url: 'https://api.github.com/repos/octokit/octokit.rb/contents/README.md',
    git_url:
      'https://api.github.com/repos/octokit/octokit.rb/git/blobs/3d21ec53a331a6f037a91c368710b99387d012c1',
    html_url: 'https://github.com/octokit/octokit.rb/blob/master/README.md',
    download_url:
      'https://raw.githubusercontent.com/octokit/octokit.rb/master/README.md',
    _links: {
      git:
        'https://api.github.com/repos/octokit/octokit.rb/git/blobs/3d21ec53a331a6f037a91c368710b99387d012c1',
      self:
        'https://api.github.com/repos/octokit/octokit.rb/contents/README.md',
      html: 'https://github.com/octokit/octokit.rb/blob/master/README.md'
    }
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      type: 'file',
      size: 625,
      name: 'octokit.rb',
      path: 'lib/octokit.rb',
      sha: 'fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b',
      url:
        'https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit.rb',
      git_url:
        'https://api.github.com/repos/octokit/octokit.rb/git/blobs/fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b',
      html_url:
        'https://github.com/octokit/octokit.rb/blob/master/lib/octokit.rb',
      download_url:
        'https://raw.githubusercontent.com/octokit/octokit.rb/master/lib/octokit.rb',
      _links: {
        self:
          'https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit.rb',
        git:
          'https://api.github.com/repos/octokit/octokit.rb/git/blobs/fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b',
        html: 'https://github.com/octokit/octokit.rb/blob/master/lib/octokit.rb'
      }
    },
    {
      type: 'dir',
      size: 0,
      name: 'octokit',
      path: 'lib/octokit',
      sha: 'a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d',
      url:
        'https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit',
      git_url:
        'https://api.github.com/repos/octokit/octokit.rb/git/trees/a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d',
      html_url: 'https://github.com/octokit/octokit.rb/tree/master/lib/octokit',
      download_url: null,
      _links: {
        self:
          'https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit',
        git:
          'https://api.github.com/repos/octokit/octokit.rb/git/trees/a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d',
        html: 'https://github.com/octokit/octokit.rb/tree/master/lib/octokit'
      }
    }
  ]
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    type: 'symlink',
    target: '/path/to/symlink/target',
    size: 23,
    name: 'some-symlink',
    path: 'bin/some-symlink',
    sha: '452a98979c88e093d682cab404a3ec82babebb48',
    url:
      'https://api.github.com/repos/octokit/octokit.rb/contents/bin/some-symlink',
    git_url:
      'https://api.github.com/repos/octokit/octokit.rb/git/blobs/452a98979c88e093d682cab404a3ec82babebb48',
    html_url:
      'https://github.com/octokit/octokit.rb/blob/master/bin/some-symlink',
    download_url:
      'https://raw.githubusercontent.com/octokit/octokit.rb/master/bin/some-symlink',
    _links: {
      git:
        'https://api.github.com/repos/octokit/octokit.rb/git/blobs/452a98979c88e093d682cab404a3ec82babebb48',
      self:
        'https://api.github.com/repos/octokit/octokit.rb/contents/bin/some-symlink',
      html: 'https://github.com/octokit/octokit.rb/blob/master/bin/some-symlink'
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
    type: 'submodule',
    submodule_git_url: 'git://github.com/jquery/qunit.git',
    size: 0,
    name: 'qunit',
    path: 'test/qunit',
    sha: '6ca3721222109997540bd6d9ccd396902e0ad2f9',
    url:
      'https://api.github.com/repos/jquery/jquery/contents/test/qunit?ref=master',
    git_url:
      'https://api.github.com/repos/jquery/qunit/git/trees/6ca3721222109997540bd6d9ccd396902e0ad2f9',
    html_url:
      'https://github.com/jquery/qunit/tree/6ca3721222109997540bd6d9ccd396902e0ad2f9',
    download_url: null,
    _links: {
      git:
        'https://api.github.com/repos/jquery/qunit/git/trees/6ca3721222109997540bd6d9ccd396902e0ad2f9',
      self:
        'https://api.github.com/repos/jquery/jquery/contents/test/qunit?ref=master',
      html:
        'https://github.com/jquery/qunit/tree/6ca3721222109997540bd6d9ccd396902e0ad2f9'
    }
  }
}
```

</details>

## [`getContributorsStats(options)`](https://docs.github.com/rest/reference/repos#get-all-contributor-commit-activity)

Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:

- `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
- `a` - Number of additions
- `d` - Number of deletions
- `c` - Number of commits

**Usage**

```js
const response = await octokit.repos.getContributorsStats({ owner, repo })
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
      total: 135,
      weeks: [
        {
          w: '1367712000',
          a: 6898,
          d: 77,
          c: 10
        }
      ]
    }
  ]
}
```

</details>

## [`getDeployKey(options)`](https://docs.github.com/rest/reference/repos#get-a-deploy-key)

**Usage**

```js
const response = await octokit.repos.getDeployKey({ owner, repo, key_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `key_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    key: 'ssh-rsa AAA...',
    url: 'https://api.github.com/repos/octocat/Hello-World/keys/1',
    title: 'octocat@octomac',
    verified: true,
    created_at: '2014-12-10T15:53:42Z',
    read_only: true
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getDeployKey({ owner, repo, key_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getDeployment(options)`](https://docs.github.com/rest/reference/repos#get-a-deployment)

**Usage**

```js
const response = await octokit.repos.getDeployment({
  owner,
  repo,
  deployment_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `deployment_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/example/deployments/1',
    id: 1,
    node_id: 'MDEwOkRlcGxveW1lbnQx',
    sha: 'a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d',
    ref: 'topic-branch',
    task: 'deploy',
    payload: {},
    original_environment: 'staging',
    environment: 'production',
    description: 'Deploy request from hubot',
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
    created_at: '2012-07-20T01:19:13Z',
    updated_at: '2012-07-20T01:19:13Z',
    statuses_url:
      'https://api.github.com/repos/octocat/example/deployments/1/statuses',
    repository_url: 'https://api.github.com/repos/octocat/example',
    transient_environment: false,
    production_environment: true
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getDeployment({ owner, repo, deployment_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getDeploymentStatus(options)`](https://docs.github.com/rest/reference/repos#get-a-deployment-status)

Users with pull access can view a deployment status for a deployment:

**Usage**

```js
const response = await octokit.repos.getDeploymentStatus({
  owner,
  repo,
  deployment_id,
  status_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `deployment_id` (required, integer)
- `status_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/example/deployments/42/statuses/1',
    id: 1,
    node_id: 'MDE2OkRlcGxveW1lbnRTdGF0dXMx',
    state: 'success',
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
    description: 'Deployment finished successfully.',
    environment: 'production',
    target_url: 'https://example.com/deployment/42/output',
    created_at: '2012-07-20T01:19:13Z',
    updated_at: '2012-07-20T01:19:13Z',
    deployment_url:
      'https://api.github.com/repos/octocat/example/deployments/42',
    repository_url: 'https://api.github.com/repos/octocat/example',
    environment_url: 'https://test-branch.lab.acme.com',
    log_url: 'https://example.com/deployment/42/output'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getDeploymentStatus({
    owner,
    repo,
    deployment_id,
    status_id
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
  response = await octokit.repos.getDeploymentStatus({
    owner,
    repo,
    deployment_id,
    status_id
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`getLatestPagesBuild(options)`](https://docs.github.com/rest/reference/repos#get-latest-pages-build)

**Usage**

```js
const response = await octokit.repos.getLatestPagesBuild({ owner, repo })
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
    url:
      'https://api.github.com/repos/github/developer.github.com/pages/builds/5472601',
    status: 'built',
    error: {
      message: null
    },
    pusher: {
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
    commit: '351391cdcb88ffae71ec3028c91f375a8036a26b',
    duration: 2104,
    created_at: '2014-02-10T19:00:49Z',
    updated_at: '2014-02-10T19:00:51Z'
  }
}
```

</details>

## [`getLatestRelease(options)`](https://docs.github.com/rest/reference/repos#get-the-latest-release)

View the latest published full release for the repository.

The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.

**Usage**

```js
const response = await octokit.repos.getLatestRelease({ owner, repo })
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
    url: 'https://api.github.com/repos/octocat/Hello-World/releases/1',
    html_url: 'https://github.com/octocat/Hello-World/releases/v1.0.0',
    assets_url:
      'https://api.github.com/repos/octocat/Hello-World/releases/1/assets',
    upload_url:
      'https://uploads.github.com/repos/octocat/Hello-World/releases/1/assets{?name,label}',
    tarball_url:
      'https://api.github.com/repos/octocat/Hello-World/tarball/v1.0.0',
    zipball_url:
      'https://api.github.com/repos/octocat/Hello-World/zipball/v1.0.0',
    id: 1,
    node_id: 'MDc6UmVsZWFzZTE=',
    tag_name: 'v1.0.0',
    target_commitish: 'master',
    name: 'v1.0.0',
    body: 'Description of the release',
    draft: false,
    prerelease: false,
    created_at: '2013-02-27T19:35:32Z',
    published_at: '2013-02-27T19:35:32Z',
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
    assets: [
      {
        url:
          'https://api.github.com/repos/octocat/Hello-World/releases/assets/1',
        browser_download_url:
          'https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip',
        id: 1,
        node_id: 'MDEyOlJlbGVhc2VBc3NldDE=',
        name: 'example.zip',
        label: 'short description',
        state: 'uploaded',
        content_type: 'application/zip',
        size: 1024,
        download_count: 42,
        created_at: '2013-02-27T19:35:32Z',
        updated_at: '2013-02-27T19:35:32Z',
        uploader: {
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
      }
    ]
  }
}
```

</details>

## [`getPages(options)`](https://docs.github.com/rest/reference/repos#get-a-github-pages-site)

**Usage**

```js
const response = await octokit.repos.getPages({ owner, repo })
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
    url: 'https://api.github.com/repos/github/developer.github.com/pages',
    status: 'built',
    cname: 'developer.github.com',
    custom_404: false,
    html_url: 'https://developer.github.com',
    source: {
      branch: 'master',
      path: '/'
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getPages({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getPagesBuild(options)`](https://docs.github.com/rest/reference/repos#get-github-pages-build)

**Usage**

```js
const response = await octokit.repos.getPagesBuild({ owner, repo, build_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `build_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/github/developer.github.com/pages/builds/5472601',
    status: 'built',
    error: {
      message: null
    },
    pusher: {
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
    commit: '351391cdcb88ffae71ec3028c91f375a8036a26b',
    duration: 2104,
    created_at: '2014-02-10T19:00:49Z',
    updated_at: '2014-02-10T19:00:51Z'
  }
}
```

</details>

## [`getParticipationStats(options)`](https://docs.github.com/rest/reference/repos#get-the-weekly-commit-count)

Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.

The array order is oldest week (index 0) to most recent week.

**Usage**

```js
const response = await octokit.repos.getParticipationStats({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

**The array order is oldest week (index 0) to most recent week. (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    all: [
      11,
      21,
      15,
      2,
      8,
      1,
      8,
      23,
      17,
      21,
      11,
      10,
      33,
      91,
      38,
      34,
      22,
      23,
      32,
      3,
      43,
      87,
      71,
      18,
      13,
      5,
      13,
      16,
      66,
      27,
      12,
      45,
      110,
      117,
      13,
      8,
      18,
      9,
      19,
      26,
      39,
      12,
      20,
      31,
      46,
      91,
      45,
      10,
      24,
      9,
      29,
      7
    ],
    owner: [
      3,
      2,
      3,
      0,
      2,
      0,
      5,
      14,
      7,
      9,
      1,
      5,
      0,
      48,
      19,
      2,
      0,
      1,
      10,
      2,
      23,
      40,
      35,
      8,
      8,
      2,
      10,
      6,
      30,
      0,
      2,
      9,
      53,
      104,
      3,
      3,
      10,
      4,
      7,
      11,
      21,
      4,
      4,
      22,
      26,
      63,
      11,
      2,
      14,
      1,
      10,
      3
    ]
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getParticipationStats({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getPullRequestReviewProtection(options)`](https://docs.github.com/rest/reference/repos#get-pull-request-review-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.getPullRequestReviewProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_pull_request_reviews',
    dismissal_restrictions: {
      url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions',
      users_url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions/users',
      teams_url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions/teams',
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
    },
    dismiss_stale_reviews: true,
    require_code_owner_reviews: true,
    required_approving_review_count: 2
  }
}
```

</details>

## [`getPunchCardStats(options)`](https://docs.github.com/rest/reference/repos#get-the-hourly-commit-count-for-each-day)

Each array contains the day number, hour number, and number of commits:

- `0-6`: Sunday - Saturday
- `0-23`: Hour of day
- Number of commits

For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.

**Usage**

```js
const response = await octokit.repos.getPunchCardStats({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

**For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits. (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    [0, 0, 5],
    [0, 1, 43],
    [0, 2, 21]
  ]
}
```

</details>

## [`getReadme(options)`](https://docs.github.com/rest/reference/repos#get-a-repository-readme)

Gets the preferred README for a repository.

READMEs support [custom media types](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.

**Usage**

```js
const response = await octokit.repos.getReadme({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (string): The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    type: 'file',
    encoding: 'base64',
    size: 5362,
    name: 'README.md',
    path: 'README.md',
    content: 'encoded content ...',
    sha: '3d21ec53a331a6f037a91c368710b99387d012c1',
    url: 'https://api.github.com/repos/octokit/octokit.rb/contents/README.md',
    git_url:
      'https://api.github.com/repos/octokit/octokit.rb/git/blobs/3d21ec53a331a6f037a91c368710b99387d012c1',
    html_url: 'https://github.com/octokit/octokit.rb/blob/master/README.md',
    download_url:
      'https://raw.githubusercontent.com/octokit/octokit.rb/master/README.md',
    _links: {
      git:
        'https://api.github.com/repos/octokit/octokit.rb/git/blobs/3d21ec53a331a6f037a91c368710b99387d012c1',
      self:
        'https://api.github.com/repos/octokit/octokit.rb/contents/README.md',
      html: 'https://github.com/octokit/octokit.rb/blob/master/README.md'
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getReadme({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getRelease(options)`](https://docs.github.com/rest/reference/repos#get-a-release)

**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia).

**Usage**

```js
const response = await octokit.repos.getRelease({ owner, repo, release_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `release_id` (required, integer)

**Note: This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia). (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/releases/1',
    html_url: 'https://github.com/octocat/Hello-World/releases/v1.0.0',
    assets_url:
      'https://api.github.com/repos/octocat/Hello-World/releases/1/assets',
    upload_url:
      'https://uploads.github.com/repos/octocat/Hello-World/releases/1/assets{?name,label}',
    tarball_url:
      'https://api.github.com/repos/octocat/Hello-World/tarball/v1.0.0',
    zipball_url:
      'https://api.github.com/repos/octocat/Hello-World/zipball/v1.0.0',
    id: 1,
    node_id: 'MDc6UmVsZWFzZTE=',
    tag_name: 'v1.0.0',
    target_commitish: 'master',
    name: 'v1.0.0',
    body: 'Description of the release',
    draft: false,
    prerelease: false,
    created_at: '2013-02-27T19:35:32Z',
    published_at: '2013-02-27T19:35:32Z',
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
    assets: [
      {
        url:
          'https://api.github.com/repos/octocat/Hello-World/releases/assets/1',
        browser_download_url:
          'https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip',
        id: 1,
        node_id: 'MDEyOlJlbGVhc2VBc3NldDE=',
        name: 'example.zip',
        label: 'short description',
        state: 'uploaded',
        content_type: 'application/zip',
        size: 1024,
        download_count: 42,
        created_at: '2013-02-27T19:35:32Z',
        updated_at: '2013-02-27T19:35:32Z',
        uploader: {
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
  response = await octokit.repos.getRelease({ owner, repo, release_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getReleaseAsset(options)`](https://docs.github.com/rest/reference/repos#get-a-release-asset)

To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.

**Usage**

```js
const response = await octokit.repos.getReleaseAsset({ owner, repo, asset_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `asset_id` (required, integer)

**To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response. (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/releases/assets/1',
    browser_download_url:
      'https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip',
    id: 1,
    node_id: 'MDEyOlJlbGVhc2VBc3NldDE=',
    name: 'example.zip',
    label: 'short description',
    state: 'uploaded',
    content_type: 'application/zip',
    size: 1024,
    download_count: 42,
    created_at: '2013-02-27T19:35:32Z',
    updated_at: '2013-02-27T19:35:32Z',
    uploader: {
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

**Found (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getReleaseAsset({ owner, repo, asset_id })
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
  response = await octokit.repos.getReleaseAsset({ owner, repo, asset_id })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`getReleaseByTag(options)`](https://docs.github.com/rest/reference/repos#get-a-release-by-tag-name)

Get a published release with the specified tag.

**Usage**

```js
const response = await octokit.repos.getReleaseByTag({ owner, repo, tag })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `tag` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/releases/1',
    html_url: 'https://github.com/octocat/Hello-World/releases/v1.0.0',
    assets_url:
      'https://api.github.com/repos/octocat/Hello-World/releases/1/assets',
    upload_url:
      'https://uploads.github.com/repos/octocat/Hello-World/releases/1/assets{?name,label}',
    tarball_url:
      'https://api.github.com/repos/octocat/Hello-World/tarball/v1.0.0',
    zipball_url:
      'https://api.github.com/repos/octocat/Hello-World/zipball/v1.0.0',
    id: 1,
    node_id: 'MDc6UmVsZWFzZTE=',
    tag_name: 'v1.0.0',
    target_commitish: 'master',
    name: 'v1.0.0',
    body: 'Description of the release',
    draft: false,
    prerelease: false,
    created_at: '2013-02-27T19:35:32Z',
    published_at: '2013-02-27T19:35:32Z',
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
    assets: [
      {
        url:
          'https://api.github.com/repos/octocat/Hello-World/releases/assets/1',
        browser_download_url:
          'https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip',
        id: 1,
        node_id: 'MDEyOlJlbGVhc2VBc3NldDE=',
        name: 'example.zip',
        label: 'short description',
        state: 'uploaded',
        content_type: 'application/zip',
        size: 1024,
        download_count: 42,
        created_at: '2013-02-27T19:35:32Z',
        updated_at: '2013-02-27T19:35:32Z',
        uploader: {
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
  response = await octokit.repos.getReleaseByTag({ owner, repo, tag })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getStatusChecksProtection(options)`](https://docs.github.com/rest/reference/repos#get-status-checks-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.getStatusChecksProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks',
    strict: true,
    contexts: ['continuous-integration/travis-ci'],
    contexts_url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks/contexts'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getStatusChecksProtection({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getTeamsWithAccessToProtectedBranch(options)`](https://docs.github.com/rest/reference/repos#list-teams-with-access-to-the-protected-branch)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the teams who have push access to this branch. The list includes child teams.

**Usage**

```js
const response = await octokit.repos.getTeamsWithAccessToProtectedBranch({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

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
  response = await octokit.repos.getTeamsWithAccessToProtectedBranch({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getTopPaths(options)`](https://docs.github.com/rest/reference/repos#get-top-referral-paths)

Get the top 10 popular contents over the last 14 days.

**Usage**

```js
const response = await octokit.repos.getTopPaths({ owner, repo })
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
      path: '/github/hubot',
      title: 'github/hubot: A customizable life embetterment robot.',
      count: 3542,
      uniques: 2225
    },
    {
      path: '/github/hubot/blob/master/docs/scripting.md',
      title: 'hubot/scripting.md at master · github/hubot · GitHub',
      count: 1707,
      uniques: 804
    },
    {
      path: '/github/hubot/tree/master/docs',
      title: 'hubot/docs at master · github/hubot · GitHub',
      count: 685,
      uniques: 435
    },
    {
      path: '/github/hubot/tree/master/src',
      title: 'hubot/src at master · github/hubot · GitHub',
      count: 577,
      uniques: 347
    },
    {
      path: '/github/hubot/blob/master/docs/index.md',
      title: 'hubot/index.md at master · github/hubot · GitHub',
      count: 379,
      uniques: 259
    },
    {
      path: '/github/hubot/blob/master/docs/adapters.md',
      title: 'hubot/adapters.md at master · github/hubot · GitHub',
      count: 354,
      uniques: 201
    },
    {
      path: '/github/hubot/tree/master/examples',
      title: 'hubot/examples at master · github/hubot · GitHub',
      count: 340,
      uniques: 260
    },
    {
      path: '/github/hubot/blob/master/docs/deploying/heroku.md',
      title: 'hubot/heroku.md at master · github/hubot · GitHub',
      count: 324,
      uniques: 217
    },
    {
      path: '/github/hubot/blob/master/src/robot.coffee',
      title: 'hubot/robot.coffee at master · github/hubot · GitHub',
      count: 293,
      uniques: 191
    },
    {
      path: '/github/hubot/blob/master/LICENSE.md',
      title: 'hubot/LICENSE.md at master · github/hubot · GitHub',
      count: 281,
      uniques: 222
    }
  ]
}
```

</details>

## [`getTopReferrers(options)`](https://docs.github.com/rest/reference/repos#get-top-referral-sources)

Get the top 10 referrers over the last 14 days.

**Usage**

```js
const response = await octokit.repos.getTopReferrers({ owner, repo })
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
      referrer: 'Google',
      count: 4,
      uniques: 3
    },
    {
      referrer: 'stackoverflow.com',
      count: 2,
      uniques: 2
    },
    {
      referrer: 'eggsonbread.com',
      count: 1,
      uniques: 1
    },
    {
      referrer: 'yandex.ru',
      count: 1,
      uniques: 1
    }
  ]
}
```

</details>

## [`getUsersWithAccessToProtectedBranch(options)`](https://docs.github.com/rest/reference/repos#list-users-with-access-to-the-protected-branch)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the people who have push access to this branch.

**Usage**

```js
const response = await octokit.repos.getUsersWithAccessToProtectedBranch({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

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
  response = await octokit.repos.getUsersWithAccessToProtectedBranch({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getViews(options)`](https://docs.github.com/rest/reference/repos#get-page-views)

Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.

**Usage**

```js
const response = await octokit.repos.getViews({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `per` (string): Must be one of: `day`, `week`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    count: 14850,
    uniques: 3782,
    views: [
      {
        timestamp: '2016-10-10T00:00:00Z',
        count: 440,
        uniques: 143
      },
      {
        timestamp: '2016-10-11T00:00:00Z',
        count: 1308,
        uniques: 414
      },
      {
        timestamp: '2016-10-12T00:00:00Z',
        count: 1486,
        uniques: 452
      },
      {
        timestamp: '2016-10-13T00:00:00Z',
        count: 1170,
        uniques: 401
      },
      {
        timestamp: '2016-10-14T00:00:00Z',
        count: 868,
        uniques: 266
      },
      {
        timestamp: '2016-10-15T00:00:00Z',
        count: 495,
        uniques: 157
      },
      {
        timestamp: '2016-10-16T00:00:00Z',
        count: 524,
        uniques: 175
      },
      {
        timestamp: '2016-10-17T00:00:00Z',
        count: 1263,
        uniques: 412
      },
      {
        timestamp: '2016-10-18T00:00:00Z',
        count: 1402,
        uniques: 417
      },
      {
        timestamp: '2016-10-19T00:00:00Z',
        count: 1394,
        uniques: 424
      },
      {
        timestamp: '2016-10-20T00:00:00Z',
        count: 1492,
        uniques: 448
      },
      {
        timestamp: '2016-10-21T00:00:00Z',
        count: 1153,
        uniques: 332
      },
      {
        timestamp: '2016-10-22T00:00:00Z',
        count: 566,
        uniques: 168
      },
      {
        timestamp: '2016-10-23T00:00:00Z',
        count: 675,
        uniques: 184
      },
      {
        timestamp: '2016-10-24T00:00:00Z',
        count: 614,
        uniques: 237
      }
    ]
  }
}
```

</details>

## [`getWebhook(options)`](https://docs.github.com/rest/reference/repos#get-a-repository-webhook)

Returns a webhook configured in a repository. To get only the webhook `config` properties, see [Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository).

**Usage**

```js
const response = await octokit.repos.getWebhook({ owner, repo, hook_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `hook_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    type: 'Repository',
    id: 12345678,
    name: 'web',
    active: true,
    events: ['push', 'pull_request'],
    config: {
      content_type: 'json',
      insecure_ssl: '0',
      url: 'https://example.com/webhook'
    },
    updated_at: '2019-06-03T00:57:16Z',
    created_at: '2019-06-03T00:57:16Z',
    url: 'https://api.github.com/repos/octocat/Hello-World/hooks/12345678',
    test_url:
      'https://api.github.com/repos/octocat/Hello-World/hooks/12345678/test',
    ping_url:
      'https://api.github.com/repos/octocat/Hello-World/hooks/12345678/pings',
    last_response: {
      code: null,
      status: 'unused',
      message: null
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.getWebhook({ owner, repo, hook_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getWebhookConfigForRepo(options)`](https://docs.github.com/v3/repos#get-a-webhook-configuration-for-a-repository)

Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use [Get a repository webhook](/rest/reference/orgs#get-a-repository-webhook).

Access tokens must have the `read:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:read` permission.

**Usage**

```js
const response = await octokit.repos.getWebhookConfigForRepo({
  owner,
  repo,
  hook_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
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

## [`listBranches(options)`](https://docs.github.com/rest/reference/repos#list-branches)

**Usage**

```js
const response = await octokit.repos.listBranches({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listBranches.all({ owner, repo })) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `protected` (boolean): Setting to `true` returns only protected branches. When set to `false`, only unprotected branches are returned. Omitting this parameter returns all branches.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      name: 'master',
      commit: {
        sha: 'c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc',
        url:
          'https://api.github.com/repos/octocat/Hello-World/commits/c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc'
      },
      protected: true
    }
  ]
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      name: 'master',
      commit: {
        sha: 'c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc',
        url:
          'https://api.github.com/repos/octocat/Hello-World/commits/c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc'
      },
      protected: true,
      protection: {
        enabled: true,
        required_status_checks: {
          enforcement_level: 'non_admins',
          contexts: ['ci-test', 'linter']
        }
      },
      protection_url:
        'https://api.github.com/repos/octocat/hello-world/branches/master/protection'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.listBranches({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listBranchesForHeadCommit(options)`](https://docs.github.com/rest/reference/repos#list-branches-for-head-commit)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.

**Usage**

```js
const response = await octokit.repos.listBranchesForHeadCommit({
  owner,
  repo,
  commit_sha
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `commit_sha` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      name: 'branch_5',
      commit: {
        sha: 'c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc',
        url:
          'https://api.github.com/repos/octocat/Hello-World/commits/c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc'
      },
      protected: false
    }
  ]
}
```

</details>

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.listBranchesForHeadCommit({
    owner,
    repo,
    commit_sha
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listCollaborators(options)`](https://docs.github.com/rest/reference/repos#list-repository-collaborators)

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

**Usage**

```js
const response = await octokit.repos.listCollaborators({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listCollaborators.all({
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
- `affiliation` (string): Filter collaborators returned by their affiliation. Can be one of:  
  \* `outside`: All outside collaborators of an organization-owned repository.  
  \* `direct`: All collaborators with permissions to an organization-owned repository, regardless of organization membership status.  
  \* `all`: All collaborators the authenticated user can see.
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
      site_admin: false,
      permissions: {
        pull: true,
        push: true,
        admin: false
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
  response = await octokit.repos.listCollaborators({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listCommentsForCommit(options)`](https://docs.github.com/rest/reference/repos#list-commit-comments)

Use the `:commit_sha` to specify the commit that will have its comments listed.

**Usage**

```js
const response = await octokit.repos.listCommentsForCommit({
  owner,
  repo,
  commit_sha
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listCommentsForCommit.all({
  owner,
  repo,
  commit_sha
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `commit_sha` (required, string)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      html_url:
        'https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e#commitcomment-1',
      url: 'https://api.github.com/repos/octocat/Hello-World/comments/1',
      id: 1,
      node_id: 'MDEzOkNvbW1pdENvbW1lbnQx',
      body: 'Great stuff',
      path: 'file1.txt',
      position: 4,
      line: 14,
      commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
      author_association: 'collaborator'
    }
  ]
}
```

</details>

## [`listCommitCommentsForRepo(options)`](https://docs.github.com/rest/reference/repos#list-commit-comments-for-a-repository)

Commit Comments use [these custom media types](https://docs.github.com/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/rest/overview/media-types/).

Comments are ordered by ascending ID.

**Usage**

```js
const response = await octokit.repos.listCommitCommentsForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listCommitCommentsForRepo.all({
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
      html_url:
        'https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e#commitcomment-1',
      url: 'https://api.github.com/repos/octocat/Hello-World/comments/1',
      id: 1,
      node_id: 'MDEzOkNvbW1pdENvbW1lbnQx',
      body: 'Great stuff',
      path: 'file1.txt',
      position: 4,
      line: 14,
      commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
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
      author_association: 'collaborator'
    }
  ]
}
```

</details>

## [`listCommitStatusesForRef(options)`](https://docs.github.com/rest/reference/repos#list-commit-statuses-for-a-reference)

Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.

This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.

**Usage**

```js
const response = await octokit.repos.listCommitStatusesForRef({
  owner,
  repo,
  ref
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listCommitStatusesForRef.all({
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
        'https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e',
      avatar_url: 'https://github.com/images/error/hubot_happy.gif',
      id: 1,
      node_id: 'MDY6U3RhdHVzMQ==',
      state: 'success',
      description: 'Build has completed successfully',
      target_url: 'https://ci.example.com/1000/output',
      context: 'continuous-integration/jenkins',
      created_at: '2012-07-20T01:19:13Z',
      updated_at: '2012-07-20T01:19:13Z',
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
      }
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

## [`listCommits(options)`](https://docs.github.com/rest/reference/repos#list-commits)

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name        | Type      | Description                                                                                      |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| `verified`  | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified.                  |
| `reason`    | `string`  | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string`  | The signature that was extracted from the commit.                                                |
| `payload`   | `string`  | The value that was signed.                                                                       |

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

**Usage**

```js
const response = await octokit.repos.listCommits({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listCommits.all({ owner, repo })) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `sha` (string): SHA or branch to start listing commits from. Default: the repository’s default branch (usually `master`).
- `path` (string): Only commits containing this file path will be returned.
- `author` (string): GitHub login or email address by which to filter by commit author.
- `since` (string): Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `until` (string): Only commits before this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
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

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.listCommits({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error upon conflict (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.listCommits({ owner, repo })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`listContributors(options)`](https://docs.github.com/v3/repos/#list-repository-contributors)

Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.

GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.

**Usage**

```js
const response = await octokit.repos.listContributors({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listContributors.all({
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
- `anon` (string): Set to `1` or `true` to include anonymous contributors in results.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response if repository contains content (HTTP 200)**

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
      site_admin: false,
      contributions: 32
    }
  ]
}
```

</details>

**Response if repository is empty (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.listContributors({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listDeployKeys(options)`](https://docs.github.com/rest/reference/repos#list-deploy-keys)

**Usage**

```js
const response = await octokit.repos.listDeployKeys({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listDeployKeys.all({
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
      key: 'ssh-rsa AAA...',
      url: 'https://api.github.com/repos/octocat/Hello-World/keys/1',
      title: 'octocat@octomac',
      verified: true,
      created_at: '2014-12-10T15:53:42Z',
      read_only: true
    }
  ]
}
```

</details>

## [`listDeploymentStatuses(options)`](https://docs.github.com/rest/reference/repos#list-deployment-statuses)

Users with pull access can view deployment statuses for a deployment:

**Usage**

```js
const response = await octokit.repos.listDeploymentStatuses({
  owner,
  repo,
  deployment_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listDeploymentStatuses.all({
  owner,
  repo,
  deployment_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `deployment_id` (required, integer)
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
        'https://api.github.com/repos/octocat/example/deployments/42/statuses/1',
      id: 1,
      node_id: 'MDE2OkRlcGxveW1lbnRTdGF0dXMx',
      state: 'success',
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
      description: 'Deployment finished successfully.',
      environment: 'production',
      target_url: 'https://example.com/deployment/42/output',
      created_at: '2012-07-20T01:19:13Z',
      updated_at: '2012-07-20T01:19:13Z',
      deployment_url:
        'https://api.github.com/repos/octocat/example/deployments/42',
      repository_url: 'https://api.github.com/repos/octocat/example',
      environment_url: 'https://test-branch.lab.acme.com',
      log_url: 'https://example.com/deployment/42/output'
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.listDeploymentStatuses({
    owner,
    repo,
    deployment_id
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listDeployments(options)`](https://docs.github.com/rest/reference/repos#list-deployments)

Simple filtering of deployments is available via query parameters:

**Usage**

```js
const response = await octokit.repos.listDeployments({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listDeployments.all({
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
- `sha` (string): The SHA recorded at creation time.
- `ref` (string): The name of the ref. This can be a branch, tag, or SHA.
- `task` (string): The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).
- `environment` (string): The name of the environment that was deployed to (e.g., `staging` or `production`).
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/repos/octocat/example/deployments/1',
      id: 1,
      node_id: 'MDEwOkRlcGxveW1lbnQx',
      sha: 'a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d',
      ref: 'topic-branch',
      task: 'deploy',
      payload: {},
      original_environment: 'staging',
      environment: 'production',
      description: 'Deploy request from hubot',
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
      created_at: '2012-07-20T01:19:13Z',
      updated_at: '2012-07-20T01:19:13Z',
      statuses_url:
        'https://api.github.com/repos/octocat/example/deployments/1/statuses',
      repository_url: 'https://api.github.com/repos/octocat/example',
      transient_environment: false,
      production_environment: true
    }
  ]
}
```

</details>

## [`listForAuthenticatedUser([options])`](https://docs.github.com/v3/repos/#list-repositories-for-the-authenticated-user)

Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

**Usage**

```js
const response = await octokit.repos.listForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listForAuthenticatedUser.all(
  options
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `visibility` (string): Can be one of `all`, `public`, or `private`.
- `affiliation` (string): Comma-separated list of values. Can include:  
  \* `owner`: Repositories that are owned by the authenticated user.  
  \* `collaborator`: Repositories that the user has been added to as a collaborator.  
  \* `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
- `type` (string): Can be one of `all`, `owner`, `public`, `private`, `member`. Default: `all`

Will cause a `422` error if used in the same request as **visibility** or **affiliation**. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.

- `sort` (string): Can be one of `created`, `updated`, `pushed`, `full_name`.
- `direction` (string): Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.
- `since` (string): Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `before` (string): Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

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

**Error definition missing (HTTP 418)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.listForAuthenticatedUser()
} catch (err) {
  if (err.status === 418) {
    // ..
  }
}
```

</details>

## [`listForOrg(options)`](https://docs.github.com/v3/repos/#list-organization-repositories)

Lists repositories for the specified organization.

**Usage**

```js
const response = await octokit.repos.listForOrg({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listForOrg.all({ org })) {
  console.log(response.data)
}
```

</details>

**Options**

- `org` (required, string)
- `type` (string): Specifies the types of repositories you want returned. Can be one of `all`, `public`, `private`, `forks`, `sources`, `member`, `internal`. Default: `all`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `type` can also be `internal`.
- `sort` (string): Can be one of `created`, `updated`, `pushed`, `full_name`.
- `direction` (string): Can be one of `asc` or `desc`. Default: when using `full_name`: `asc`, otherwise `desc`
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

## [`listForUser(options)`](https://docs.github.com/v3/repos/#list-repositories-for-a-user)

Lists public repositories for the specified user.

**Usage**

```js
const response = await octokit.repos.listForUser({ username })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listForUser.all({ username })) {
  console.log(response.data)
}
```

</details>

**Options**

- `username` (required, string)
- `type` (string): Can be one of `all`, `owner`, `member`.
- `sort` (string): Can be one of `created`, `updated`, `pushed`, `full_name`.
- `direction` (string): Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
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

## [`listForks(options)`](https://docs.github.com/rest/reference/repos#list-forks)

**Usage**

```js
const response = await octokit.repos.listForks({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listForks.all({ owner, repo })) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `sort` (string): The sort order. Can be either `newest`, `oldest`, or `stargazers`.
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
      fork: true,
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

## [`listInvitations(options)`](https://docs.github.com/rest/reference/repos#list-repository-invitations)

When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.

**Usage**

```js
const response = await octokit.repos.listInvitations({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listInvitations.all({
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
      invitee: {
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
      inviter: {
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
      permissions: 'write',
      created_at: '2016-06-13T14:52:50-05:00',
      url: 'https://api.github.com/user/repository_invitations/1296269',
      html_url: 'https://github.com/octocat/Hello-World/invitations',
      node_id: 'MDQ6VXNlcjE='
    }
  ]
}
```

</details>

## [`listInvitationsForAuthenticatedUser([options])`](https://docs.github.com/rest/reference/repos#list-repository-invitations-for-the-authenticated-user)

When authenticating as a user, this endpoint will list all currently open repository invitations for that user.

**Usage**

```js
const response = await octokit.repos.listInvitationsForAuthenticatedUser()
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listInvitationsForAuthenticatedUser.all(
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
      invitee: {
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
      inviter: {
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
      permissions: 'write',
      created_at: '2016-06-13T14:52:50-05:00',
      url: 'https://api.github.com/user/repository_invitations/1296269',
      html_url: 'https://github.com/octocat/Hello-World/invitations',
      node_id: 'MDQ6VXNlcjE='
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.listInvitationsForAuthenticatedUser()
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listLanguages(options)`](https://docs.github.com/v3/repos/#list-repository-languages)

Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.

**Usage**

```js
const response = await octokit.repos.listLanguages({ owner, repo })
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
    C: 78769,
    Python: 7769
  }
}
```

</details>

## [`listPagesBuilds(options)`](https://docs.github.com/rest/reference/repos#list-github-pages-builds)

**Usage**

```js
const response = await octokit.repos.listPagesBuilds({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listPagesBuilds.all({
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
      url:
        'https://api.github.com/repos/github/developer.github.com/pages/builds/5472601',
      status: 'built',
      error: {
        message: null
      },
      pusher: {
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
      commit: '351391cdcb88ffae71ec3028c91f375a8036a26b',
      duration: 2104,
      created_at: '2014-02-10T19:00:49Z',
      updated_at: '2014-02-10T19:00:51Z'
    }
  ]
}
```

</details>

## [`listPublic([options])`](https://docs.github.com/v3/repos/#list-public-repositories)

Lists all public repositories in the order that they were created.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.

**Usage**

```js
const response = await octokit.repos.listPublic()
```

**Options**

- `since` (integer): A repository ID. Only return repositories with an ID greater than this ID.

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
      hooks_url: 'http://api.github.com/repos/octocat/Hello-World/hooks'
    }
  ]
}
```

</details>

## [`listPullRequestsAssociatedWithCommit(options)`](https://docs.github.com/rest/reference/repos#list-pull-requests-associated-with-a-commit)

Lists all pull requests containing the provided commit SHA, which can be from any point in the commit history. The results will include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests) endpoint.

**Usage**

```js
const response = await octokit.repos.listPullRequestsAssociatedWithCommit({
  owner,
  repo,
  commit_sha
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listPullRequestsAssociatedWithCommit.all(
  { owner, repo, commit_sha }
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `commit_sha` (required, string)
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

**Error when preview header is missing (HTTP 415)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.listPullRequestsAssociatedWithCommit({
    owner,
    repo,
    commit_sha
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`listReleaseAssets(options)`](https://docs.github.com/rest/reference/repos#list-release-assets)

**Usage**

```js
const response = await octokit.repos.listReleaseAssets({
  owner,
  repo,
  release_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listReleaseAssets.all({
  owner,
  repo,
  release_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `release_id` (required, integer)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
      url: 'https://api.github.com/repos/octocat/Hello-World/releases/assets/1',
      browser_download_url:
        'https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip',
      id: 1,
      node_id: 'MDEyOlJlbGVhc2VBc3NldDE=',
      name: 'example.zip',
      label: 'short description',
      state: 'uploaded',
      content_type: 'application/zip',
      size: 1024,
      download_count: 42,
      created_at: '2013-02-27T19:35:32Z',
      updated_at: '2013-02-27T19:35:32Z',
      uploader: {
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

## [`listReleases(options)`](https://docs.github.com/rest/reference/repos#list-releases)

This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/rest/reference/repos#list-repository-tags).

Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.

**Usage**

```js
const response = await octokit.repos.listReleases({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listReleases.all({ owner, repo })) {
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
      url: 'https://api.github.com/repos/octocat/Hello-World/releases/1',
      html_url: 'https://github.com/octocat/Hello-World/releases/v1.0.0',
      assets_url:
        'https://api.github.com/repos/octocat/Hello-World/releases/1/assets',
      upload_url:
        'https://uploads.github.com/repos/octocat/Hello-World/releases/1/assets{?name,label}',
      tarball_url:
        'https://api.github.com/repos/octocat/Hello-World/tarball/v1.0.0',
      zipball_url:
        'https://api.github.com/repos/octocat/Hello-World/zipball/v1.0.0',
      id: 1,
      node_id: 'MDc6UmVsZWFzZTE=',
      tag_name: 'v1.0.0',
      target_commitish: 'master',
      name: 'v1.0.0',
      body: 'Description of the release',
      draft: false,
      prerelease: false,
      created_at: '2013-02-27T19:35:32Z',
      published_at: '2013-02-27T19:35:32Z',
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
      assets: [
        {
          url:
            'https://api.github.com/repos/octocat/Hello-World/releases/assets/1',
          browser_download_url:
            'https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip',
          id: 1,
          node_id: 'MDEyOlJlbGVhc2VBc3NldDE=',
          name: 'example.zip',
          label: 'short description',
          state: 'uploaded',
          content_type: 'application/zip',
          size: 1024,
          download_count: 42,
          created_at: '2013-02-27T19:35:32Z',
          updated_at: '2013-02-27T19:35:32Z',
          uploader: {
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
        }
      ]
    }
  ]
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.listReleases({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listTags(options)`](https://docs.github.com/v3/repos/#list-repository-tags)

**Usage**

```js
const response = await octokit.repos.listTags({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listTags.all({ owner, repo })) {
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
      name: 'v0.1',
      commit: {
        sha: 'c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc',
        url:
          'https://api.github.com/repos/octocat/Hello-World/commits/c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc'
      },
      zipball_url: 'https://github.com/octocat/Hello-World/zipball/v0.1',
      tarball_url: 'https://github.com/octocat/Hello-World/tarball/v0.1',
      node_id: 'MDQ6VXNlcjE='
    }
  ]
}
```

</details>

## [`listTeams(options)`](https://docs.github.com/v3/repos/#list-repository-teams)

**Usage**

```js
const response = await octokit.repos.listTeams({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listTeams.all({ owner, repo })) {
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

## [`listWebhooks(options)`](https://docs.github.com/rest/reference/repos#list-repository-webhooks)

**Usage**

```js
const response = await octokit.repos.listWebhooks({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.repos.listWebhooks.all({ owner, repo })) {
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
      type: 'Repository',
      id: 12345678,
      name: 'web',
      active: true,
      events: ['push', 'pull_request'],
      config: {
        content_type: 'json',
        insecure_ssl: '0',
        url: 'https://example.com/webhook'
      },
      updated_at: '2019-06-03T00:57:16Z',
      created_at: '2019-06-03T00:57:16Z',
      url: 'https://api.github.com/repos/octocat/Hello-World/hooks/12345678',
      test_url:
        'https://api.github.com/repos/octocat/Hello-World/hooks/12345678/test',
      ping_url:
        'https://api.github.com/repos/octocat/Hello-World/hooks/12345678/pings',
      last_response: {
        code: null,
        status: 'unused',
        message: null
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
  response = await octokit.repos.listWebhooks({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`merge(options)`](https://docs.github.com/rest/reference/repos#merge-a-branch)

**Usage**

```js
const response = await octokit.repos.merge({ owner, repo, base, head })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `base` (required, string): The name of the base branch that the head will be merged into.
- `head` (required, string): The head to merge. This can be a branch name or a commit SHA1.
- `commit_message` (string): Commit message to use for the merge commit. If omitted, a default message will be used.

**Successful Response (The resulting merge commit) (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
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
        email: 'mona@github.com',
        date: '2011-04-14T16:00:49Z'
      },
      committer: {
        name: 'Monalisa Octocat',
        email: 'mona@github.com',
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
    ],
    stats: {
      additions: 104,
      deletions: 4,
      total: 108
    },
    files: [
      {
        filename: 'file1.txt',
        additions: 10,
        deletions: 2,
        changes: 12,
        status: 'modified',
        raw_url:
          'https://github.com/octocat/Hello-World/raw/7ca483543807a51b6079e54ac4cc392bc29ae284/file1.txt',
        blob_url:
          'https://github.com/octocat/Hello-World/blob/7ca483543807a51b6079e54ac4cc392bc29ae284/file1.txt',
        patch: '@@ -29,7 +29,7 @@\n.....'
      }
    ]
  }
}
```

</details>

**Error (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.merge({ owner, repo, base, head })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

**Error upon merge conflict response (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.merge({ owner, repo, base, head })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`pingWebhook(options)`](https://docs.github.com/rest/reference/repos#ping-a-repository-webhook)

This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.

**Usage**

```js
const response = await octokit.repos.pingWebhook({ owner, repo, hook_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
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
  response = await octokit.repos.pingWebhook({ owner, repo, hook_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`removeAppAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#remove-app-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

**Usage**

```js
const response = await octokit.repos.removeAppAccessRestrictions({
  owner,
  repo,
  branch,
  apps
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `apps` (required, object)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
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
  ]
}
```

</details>

## [`removeCollaborator(options)`](https://docs.github.com/rest/reference/repos#remove-a-repository-collaborator)

**Usage**

```js
const response = await octokit.repos.removeCollaborator({
  owner,
  repo,
  username
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `username` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`removeStatusCheckContexts(options)`](https://docs.github.com/rest/reference/repos#remove-status-check-contexts)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.removeStatusCheckContexts({
  owner,
  repo,
  branch,
  contexts
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `contexts` (required, object)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: ['continuous-integration/travis-ci']
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.removeStatusCheckContexts({
    owner,
    repo,
    branch,
    contexts
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`removeStatusCheckProtection(options)`](https://docs.github.com/rest/reference/repos#remove-status-check-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.removeStatusCheckProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**No Content (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`removeTeamAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#remove-team-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a team to push to this branch. You can also remove push access for child teams.

| Type    | Description                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

**Usage**

```js
const response = await octokit.repos.removeTeamAccessRestrictions({
  owner,
  repo,
  branch,
  teams
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `teams` (required, object)

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

## [`removeUserAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#remove-user-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a user to push to this branch.

| Type    | Description                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

**Usage**

```js
const response = await octokit.repos.removeUserAccessRestrictions({
  owner,
  repo,
  branch,
  users
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `users` (required, object)

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

## [`replaceAllTopics(options)`](https://docs.github.com/v3/repos/#replace-all-repository-topics)

**Usage**

```js
const response = await octokit.repos.replaceAllTopics({ owner, repo, names })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `names` (required, string\[]): An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    names: ['octocat', 'atom', 'electron', 'api']
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.replaceAllTopics({ owner, repo, names })
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
  response = await octokit.repos.replaceAllTopics({ owner, repo, names })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`requestPagesBuild(options)`](https://docs.github.com/rest/reference/repos#request-a-github-pages-build)

You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.

Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.

**Usage**

```js
const response = await octokit.repos.requestPagesBuild({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url:
      'https://api.github.com/repos/github/developer.github.com/pages/builds/latest',
    status: 'queued'
  }
}
```

</details>

## [`setAdminBranchProtection(options)`](https://docs.github.com/rest/reference/repos#set-admin-branch-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Usage**

```js
const response = await octokit.repos.setAdminBranchProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/enforce_admins',
    enabled: true
  }
}
```

</details>

## [`setAppAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#set-app-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

**Usage**

```js
const response = await octokit.repos.setAppAccessRestrictions({
  owner,
  repo,
  branch,
  apps
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `apps` (required, object)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    {
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
  ]
}
```

</details>

## [`setStatusCheckContexts(options)`](https://docs.github.com/rest/reference/repos#set-status-check-contexts)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

**Usage**

```js
const response = await octokit.repos.setStatusCheckContexts({
  owner,
  repo,
  branch,
  contexts
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `contexts` (required, object)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: ['continuous-integration/travis-ci']
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.setStatusCheckContexts({
    owner,
    repo,
    branch,
    contexts
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`setTeamAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#set-team-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

**Usage**

```js
const response = await octokit.repos.setTeamAccessRestrictions({
  owner,
  repo,
  branch,
  teams
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `teams` (required, object)

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

## [`setUserAccessRestrictions(options)`](https://docs.github.com/rest/reference/repos#set-user-access-restrictions)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

**Usage**

```js
const response = await octokit.repos.setUserAccessRestrictions({
  owner,
  repo,
  branch,
  users
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `users` (required, object)

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

## [`testPushWebhook(options)`](https://docs.github.com/rest/reference/repos#test-the-push-repository-webhook)

This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.

**Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`

**Usage**

```js
const response = await octokit.repos.testPushWebhook({ owner, repo, hook_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
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
  response = await octokit.repos.testPushWebhook({ owner, repo, hook_id })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`transfer(options)`](https://docs.github.com/v3/repos/#transfer-a-repository)

A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).

**Usage**

```js
const response = await octokit.repos.transfer({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `new_owner` (string): **Required:** The username or organization name the repository will be transferred to.
- `team_ids` (integer\[]): ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.

**Response (HTTP 202)**

<details><summary>Example</summary>

```js
const response = {
  status: 202,
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
    forks: 9,
    forks_count: 9,
    stargazers_count: 80,
    watchers_count: 80,
    watchers: 80,
    size: 108,
    default_branch: 'master',
    open_issues: 0,
    open_issues_count: 0,
    is_template: true,
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://api.github.com/licenses/mit'
    },
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
    network_count: 0
  }
}
```

</details>

## [`update(options)`](https://docs.github.com/v3/repos/#update-a-repository)

**Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/rest/reference/repos#replace-all-repository-topics) endpoint.

**Usage**

```js
const response = await octokit.repos.update({ owner, repo })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `name` (string): The name of the repository.
- `description` (string): A short description of the repository.
- `homepage` (string): A URL with more information about the repository.
- `private` (boolean): Either `true` to make the repository private or `false` to make it public. Default: `false`.  
  **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private. **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
- `visibility` (string): Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. The `visibility` parameter overrides the `private` parameter when you use both along with the `nebula-preview` preview header.
- `has_issues` (boolean): Either `true` to enable issues for this repository or `false` to disable them.
- `has_projects` (boolean): Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
- `has_wiki` (boolean): Either `true` to enable the wiki for this repository or `false` to disable it.
- `is_template` (boolean): Either `true` to make this repo available as a template repository or `false` to prevent it.
- `default_branch` (string): Updates the default branch for this repository.
- `allow_squash_merge` (boolean): Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
- `allow_merge_commit` (boolean): Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
- `allow_rebase_merge` (boolean): Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
- `delete_branch_on_merge` (boolean): Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
- `archived` (boolean): `true` to archive this repository. **Note**: You cannot unarchive repositories through the API.

**Response (HTTP 200)**

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
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://github.com/licenses/mit'
    },
    language: null,
    forks_count: 9,
    forks: 9,
    stargazers_count: 80,
    watchers_count: 80,
    watchers: 80,
    size: 108,
    default_branch: 'master',
    open_issues_count: 0,
    open_issues: 0,
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
      pull: true,
      push: false,
      admin: false
    },
    allow_rebase_merge: true,
    template_repository: null,
    temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
    allow_squash_merge: true,
    delete_branch_on_merge: true,
    allow_merge_commit: true,
    subscribers_count: 42,
    network_count: 0,
    organization: {
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
      type: 'Organization',
      site_admin: false
    },
    parent: {
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
        html_url: 'https://api.github.com/licenses/mit'
      },
      forks: 1,
      open_issues: 1,
      watchers: 1
    },
    source: {
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
        html_url: 'https://api.github.com/licenses/mit'
      },
      forks: 1,
      open_issues: 1,
      watchers: 1
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.update({ owner, repo })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateBranchProtection(options)`](https://docs.github.com/rest/reference/repos#update-branch-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Protecting a branch requires admin or owner permissions to the repository.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

**Note**: The list of users, apps, and teams in total is limited to 100 items.

**Usage**

```js
const response = await octokit.repos.updateBranchProtection({
  owner,
  repo,
  branch,
  required_status_checks,
  enforce_admins,
  required_pull_request_reviews,
  restrictions
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `required_status_checks` (required, object): Require status checks to pass before merging. Set to `null` to disable.
- `required_status_checks.strict` (required, boolean): Require branches to be up to date before merging.
- `required_status_checks.contexts` (required, string\[]): The list of status checks to require in order to merge into this branch
- `enforce_admins` (required, boolean): Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
- `required_pull_request_reviews` (required, object): Require at least one approving review on a pull request, before merging. Set to `null` to disable.
- `required_pull_request_reviews.dismissal_restrictions` (object): Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
- `required_pull_request_reviews.dismissal_restrictions.users` (string\[]): The list of user `login`s with dismissal access
- `required_pull_request_reviews.dismissal_restrictions.teams` (string\[]): The list of team `slug`s with dismissal access
- `required_pull_request_reviews.dismiss_stale_reviews` (boolean): Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
- `required_pull_request_reviews.require_code_owner_reviews` (boolean): Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) review them.
- `required_pull_request_reviews.required_approving_review_count` (integer): Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6.
- `restrictions` (required, object): Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
- `restrictions.users` (required, string\[]): The list of user `login`s with push access
- `restrictions.teams` (required, string\[]): The list of team `slug`s with push access
- `restrictions.apps` (string\[]): The list of app `slug`s with push access
- `required_linear_history` (boolean): Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see "[Requiring a linear commit history](https://help.github.com/github/administering-a-repository/requiring-a-linear-commit-history)" in the GitHub Help documentation.
- `allow_force_pushes` (boolean): Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation."
- `allow_deletions` (boolean): Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.updateBranchProtection({
    owner,
    repo,
    branch,
    required_status_checks,
    enforce_admins,
    required_pull_request_reviews,
    restrictions
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
  response = await octokit.repos.updateBranchProtection({
    owner,
    repo,
    branch,
    required_status_checks,
    enforce_admins,
    required_pull_request_reviews,
    restrictions
  })
} catch (err) {
  if (err.status === 415) {
    // ..
  }
}
```

</details>

## [`updateCommitComment(options)`](https://docs.github.com/rest/reference/repos#update-a-commit-comment)

**Usage**

```js
const response = await octokit.repos.updateCommitComment({
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
- `body` (required, string): The contents of the comment

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    html_url:
      'https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e#commitcomment-1',
    url: 'https://api.github.com/repos/octocat/Hello-World/comments/1',
    id: 1,
    node_id: 'MDEzOkNvbW1pdENvbW1lbnQx',
    body: 'Nice change',
    path: 'file1.txt',
    position: 4,
    line: 14,
    commit_id: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    author_association: 'collaborator',
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
    updated_at: '2011-04-14T16:00:49Z'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.updateCommitComment({
    owner,
    repo,
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

## [`updateInformationAboutPagesSite(options)`](https://docs.github.com/rest/reference/repos#update-information-about-a-github-pages-site)

Updates information for a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).

**Usage**

```js
const response = await octokit.repos.updateInformationAboutPagesSite({
  owner,
  repo,
  source
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `cname` (string): Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)."
- `source` (required)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`updateInvitation(options)`](https://docs.github.com/rest/reference/repos#update-a-repository-invitation)

**Usage**

```js
const response = await octokit.repos.updateInvitation({
  owner,
  repo,
  invitation_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `invitation_id` (required, integer)
- `permissions` (string): The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 1,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
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
    invitee: {
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
    inviter: {
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
    permissions: 'write',
    created_at: '2016-06-13T14:52:50-05:00',
    url: 'https://api.github.com/user/repository_invitations/1296269',
    html_url: 'https://github.com/octocat/Hello-World/invitations'
  }
}
```

</details>

## [`updatePullRequestReviewProtection(options)`](https://docs.github.com/rest/reference/repos#update-pull-request-review-protection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

**Usage**

```js
const response = await octokit.repos.updatePullRequestReviewProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `dismissal_restrictions` (object): Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
- `dismissal_restrictions.users` (string\[]): The list of user `login`s with dismissal access
- `dismissal_restrictions.teams` (string\[]): The list of team `slug`s with dismissal access
- `dismiss_stale_reviews` (boolean): Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
- `require_code_owner_reviews` (boolean): Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) have reviewed.
- `required_approving_review_count` (integer): Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_pull_request_reviews',
    dismissal_restrictions: {
      url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions',
      users_url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions/users',
      teams_url:
        'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions/teams',
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
    },
    dismiss_stale_reviews: true,
    require_code_owner_reviews: true,
    required_approving_review_count: 2
  }
}
```

</details>

## [`updateRelease(options)`](https://docs.github.com/rest/reference/repos#update-a-release)

Users with push access to the repository can edit a release.

**Usage**

```js
const response = await octokit.repos.updateRelease({ owner, repo, release_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `release_id` (required, integer)
- `tag_name` (string): The name of the tag.
- `target_commitish` (string): Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
- `name` (string): The name of the release.
- `body` (string): Text describing the contents of the tag.
- `draft` (boolean): `true` makes the release a draft, and `false` publishes the release.
- `prerelease` (boolean): `true` to identify the release as a prerelease, `false` to identify the release as a full release.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/releases/1',
    html_url: 'https://github.com/octocat/Hello-World/releases/v1.0.0',
    assets_url:
      'https://api.github.com/repos/octocat/Hello-World/releases/1/assets',
    upload_url:
      'https://uploads.github.com/repos/octocat/Hello-World/releases/1/assets{?name,label}',
    tarball_url:
      'https://api.github.com/repos/octocat/Hello-World/tarball/v1.0.0',
    zipball_url:
      'https://api.github.com/repos/octocat/Hello-World/zipball/v1.0.0',
    id: 1,
    node_id: 'MDc6UmVsZWFzZTE=',
    tag_name: 'v1.0.0',
    target_commitish: 'master',
    name: 'v1.0.0',
    body: 'Description of the release',
    draft: false,
    prerelease: false,
    created_at: '2013-02-27T19:35:32Z',
    published_at: '2013-02-27T19:35:32Z',
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
    assets: [
      {
        url:
          'https://api.github.com/repos/octocat/Hello-World/releases/assets/1',
        browser_download_url:
          'https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip',
        id: 1,
        node_id: 'MDEyOlJlbGVhc2VBc3NldDE=',
        name: 'example.zip',
        label: 'short description',
        state: 'uploaded',
        content_type: 'application/zip',
        size: 1024,
        download_count: 42,
        created_at: '2013-02-27T19:35:32Z',
        updated_at: '2013-02-27T19:35:32Z',
        uploader: {
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
      }
    ]
  }
}
```

</details>

## [`updateReleaseAsset(options)`](https://docs.github.com/rest/reference/repos#update-a-release-asset)

Users with push access to the repository can edit a release asset.

**Usage**

```js
const response = await octokit.repos.updateReleaseAsset({
  owner,
  repo,
  asset_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `asset_id` (required, integer)
- `name` (string): The file name of the asset.
- `label` (string): An alternate short description of the asset. Used in place of the filename.
- `state` (string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/releases/assets/1',
    browser_download_url:
      'https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip',
    id: 1,
    node_id: 'MDEyOlJlbGVhc2VBc3NldDE=',
    name: 'example.zip',
    label: 'short description',
    state: 'uploaded',
    content_type: 'application/zip',
    size: 1024,
    download_count: 42,
    created_at: '2013-02-27T19:35:32Z',
    updated_at: '2013-02-27T19:35:32Z',
    uploader: {
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

## [`updateStatusCheckPotection(options)`](https://docs.github.com/rest/reference/repos#update-status-check-potection)

**Deprecated:** This method has been renamed to repos.updateStatusCheckProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

**Usage**

```js
const response = await octokit.repos.updateStatusCheckPotection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `strict` (boolean): Require branches to be up to date before merging.
- `contexts` (string\[]): The list of status checks to require in order to merge into this branch

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks',
    strict: true,
    contexts: ['continuous-integration/travis-ci'],
    contexts_url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks/contexts'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.updateStatusCheckPotection({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateStatusCheckProtection(options)`](https://docs.github.com/rest/reference/repos#update-status-check-potection)

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

**Usage**

```js
const response = await octokit.repos.updateStatusCheckProtection({
  owner,
  repo,
  branch
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `branch` (required, string)
- `strict` (boolean): Require branches to be up to date before merging.
- `contexts` (string\[]): The list of status checks to require in order to merge into this branch

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks',
    strict: true,
    contexts: ['continuous-integration/travis-ci'],
    contexts_url:
      'https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks/contexts'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.updateStatusCheckProtection({
    owner,
    repo,
    branch
  })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateWebhook(options)`](https://docs.github.com/rest/reference/repos#update-a-repository-webhook)

Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use [Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository).

**Usage**

```js
const response = await octokit.repos.updateWebhook({
  owner,
  repo,
  hook_id,
  config
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `hook_id` (required, integer)
- `config` (object): Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
- `config.url` (required, string): The URL to which the payloads will be delivered.
- `config.content_type` (string): The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
- `config.secret` (string): If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
- `config.insecure_ssl` (string): Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
- `config.address` (string)
- `config.room` (string)
- `events` (string\[]): Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events.
- `add_events` (string\[]): Determines a list of events to be added to the list of events that the Hook triggers for.
- `remove_events` (string\[]): Determines a list of events to be removed from the list of events that the Hook triggers for.
- `active` (boolean): Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    type: 'Repository',
    id: 12345678,
    name: 'web',
    active: true,
    events: ['push', 'pull_request'],
    config: {
      content_type: 'json',
      insecure_ssl: '0',
      url: 'https://example.com/webhook'
    },
    updated_at: '2019-06-03T00:57:16Z',
    created_at: '2019-06-03T00:57:16Z',
    url: 'https://api.github.com/repos/octocat/Hello-World/hooks/12345678',
    test_url:
      'https://api.github.com/repos/octocat/Hello-World/hooks/12345678/test',
    ping_url:
      'https://api.github.com/repos/octocat/Hello-World/hooks/12345678/pings',
    last_response: {
      code: null,
      status: 'unused',
      message: null
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.repos.updateWebhook({ owner, repo, hook_id, config })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`updateWebhookConfigForRepo(options)`](https://docs.github.com/v3/repos#update-a-webhook-configuration-for-a-repository)

Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use [Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook).

Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.

**Usage**

```js
const response = await octokit.repos.updateWebhookConfigForRepo({
  owner,
  repo,
  hook_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
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

## [`uploadReleaseAsset(options)`](https://docs.github.com/rest/reference/repos#upload-a-release-asset)

This endpoint makes use of [a Hypermedia relation](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in the response of the [Create a release endpoint](https://docs.github.com/rest/reference/repos#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:

`application/zip`

GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example, you'll still need to pass your authentication to be able to upload an asset.

When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.

**Notes:**

- GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The [List assets for a release](https://docs.github.com/rest/reference/repos#list-assets-for-a-release) endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://github.com/contact).
- If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.

**Usage**

```js
const response = await octokit.repos.uploadReleaseAsset({
  owner,
  repo,
  release_id,
  data
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `release_id` (required, integer)
- `name` (string)
- `label` (string)
- `data` (required, string): The raw file data
- `origin` (string): The URL origin (protocol + host name + port) is included in `upload_url` returned in the response of the "Create a release" endpoint

**Response for successful upload (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url: 'https://api.github.com/repos/octocat/Hello-World/releases/assets/1',
    browser_download_url:
      'https://github.com/octocat/Hello-World/releases/download/v1.0.0/example.zip',
    id: 1,
    node_id: 'MDEyOlJlbGVhc2VBc3NldDE=',
    name: 'example.zip',
    label: 'short description',
    state: 'uploaded',
    content_type: 'application/zip',
    size: 1024,
    download_count: 42,
    created_at: '2013-02-27T19:35:32Z',
    updated_at: '2013-02-27T19:35:32Z',
    uploader: {
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
