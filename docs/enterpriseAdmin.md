# `octokit.enterpriseAdmin`

[Previous: emojis](emojis.md) \| [Index](README.md) \| [Next: gists](gists.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`disableSelectedOrganizationGithubActionsEnterprise(options)`](#disableselectedorganizationgithubactionsenterpriseoptions)
- [`enableSelectedOrganizationGithubActionsEnterprise(options)`](#enableselectedorganizationgithubactionsenterpriseoptions)
- [`getAllowedActionsEnterprise(options)`](#getallowedactionsenterpriseoptions)
- [`getGithubActionsPermissionsEnterprise(options)`](#getgithubactionspermissionsenterpriseoptions)
- [`listSelectedOrganizationsEnabledGithubActionsEnterprise(options)`](#listselectedorganizationsenabledgithubactionsenterpriseoptions)
- [`setAllowedActionsEnterprise(options)`](#setallowedactionsenterpriseoptions)
- [`setGithubActionsPermissionsEnterprise(options)`](#setgithubactionspermissionsenterpriseoptions)
- [`setSelectedOrganizationsEnabledGithubActionsEnterprise(options)`](#setselectedorganizationsenabledgithubactionsenterpriseoptions)

</details>

## [`disableSelectedOrganizationGithubActionsEnterprise(options)`](https://docs.github.com/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise)

Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an enterprise](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-enterprise).

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

**Usage**

```js
const response = await octokit.enterpriseAdmin.disableSelectedOrganizationGithubActionsEnterprise(
  { enterprise, org_id }
)
```

**Options**

- `enterprise` (required, string): The slug version of the enterprise name. You can also substitute this value with the enterprise id.
- `org_id` (required, integer): Unique identifier of an organization.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`enableSelectedOrganizationGithubActionsEnterprise(options)`](https://docs.github.com/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise)

Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an enterprise](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-enterprise).

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

**Usage**

```js
const response = await octokit.enterpriseAdmin.enableSelectedOrganizationGithubActionsEnterprise(
  { enterprise, org_id }
)
```

**Options**

- `enterprise` (required, string): The slug version of the enterprise name. You can also substitute this value with the enterprise id.
- `org_id` (required, integer): Unique identifier of an organization.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`getAllowedActionsEnterprise(options)`](https://docs.github.com/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise)

Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an enterprise](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-enterprise).

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

**Usage**

```js
const response = await octokit.enterpriseAdmin.getAllowedActionsEnterprise({
  enterprise
})
```

**Options**

- `enterprise` (required, string): The slug version of the enterprise name. You can also substitute this value with the enterprise id.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    github_owned_allowed: true,
    verified_allowed: false,
    patterns_allowed: ['monalisa/octocat@*', 'docker/*']
  }
}
```

</details>

## [`getGithubActionsPermissionsEnterprise(options)`](https://docs.github.com/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise)

Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

**Usage**

```js
const response = await octokit.enterpriseAdmin.getGithubActionsPermissionsEnterprise(
  { enterprise }
)
```

**Options**

- `enterprise` (required, string): The slug version of the enterprise name. You can also substitute this value with the enterprise id.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    enabled_organizations: 'all',
    allowed_actions: 'selected',
    selected_actions_url:
      'https://api.github.com/enterprises/2/actions/permissions/selected-actions'
  }
}
```

</details>

## [`listSelectedOrganizationsEnabledGithubActionsEnterprise(options)`](https://docs.github.com/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise)

Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an enterprise](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-enterprise).

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

**Usage**

```js
const response = await octokit.enterpriseAdmin.listSelectedOrganizationsEnabledGithubActionsEnterprise(
  { enterprise }
)
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.enterpriseAdmin.listSelectedOrganizationsEnabledGithubActionsEnterprise.all(
  { enterprise }
)) {
  console.log(response.data)
}
```

</details>

**Options**

- `enterprise` (required, string): The slug version of the enterprise name. You can also substitute this value with the enterprise id.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_count: 1,
    organizations: [
      {
        login: 'octocat',
        id: 161335,
        node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
        url: 'https://api.github.com/orgs/octo-org',
        repos_url: 'https://api.github.com/orgs/octo-org/repos',
        events_url: 'https://api.github.com/orgs/octo-org/events',
        hooks_url: 'https://api.github.com/orgs/octo-org/hooks',
        issues_url: 'https://api.github.com/orgs/octo-org/issues',
        members_url: 'https://api.github.com/orgs/octo-org/members{/member}',
        public_members_url:
          'https://api.github.com/orgs/octo-org/public_members{/member}',
        avatar_url: 'https://github.com/images/error/octocat_happy.gif',
        description: 'A great organization'
      }
    ]
  }
}
```

</details>

## [`setAllowedActionsEnterprise(options)`](https://docs.github.com/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise)

Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an enterprise](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-enterprise).

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

**Usage**

```js
const response = await octokit.enterpriseAdmin.setAllowedActionsEnterprise({
  enterprise
})
```

**Options**

- `enterprise` (required, string): The slug version of the enterprise name. You can also substitute this value with the enterprise id.
- `github_owned_allowed` (boolean): Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.
- `verified_allowed` (boolean): Whether actions in GitHub Marketplace from verified creators are allowed. Set to `true` to allow all GitHub Marketplace actions by verified creators.
- `patterns_allowed` (string\[]): Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`."

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`setGithubActionsPermissionsEnterprise(options)`](https://docs.github.com/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise)

Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

**Usage**

```js
const response = await octokit.enterpriseAdmin.setGithubActionsPermissionsEnterprise(
  { enterprise, enabled_organizations }
)
```

**Options**

- `enterprise` (required, string): The slug version of the enterprise name. You can also substitute this value with the enterprise id.
- `enabled_organizations` (required, string): The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. Can be one of: `all`, `none`, or `selected`.
- `allowed_actions` (string): The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`setSelectedOrganizationsEnabledGithubActionsEnterprise(options)`](https://docs.github.com/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise)

Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an enterprise](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-enterprise).

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

**Usage**

```js
const response = await octokit.enterpriseAdmin.setSelectedOrganizationsEnabledGithubActionsEnterprise(
  { enterprise, selected_organization_ids }
)
```

**Options**

- `enterprise` (required, string): The slug version of the enterprise name. You can also substitute this value with the enterprise id.
- `selected_organization_ids` (required, integer\[]): List of organization IDs to enable for GitHub Actions.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>
