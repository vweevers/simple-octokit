# `octokit.interactions`

[Previous: gitignore](gitignore.md) \| [Index](README.md) \| [Next: issues](issues.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`getRestrictionsForOrg(options)`](#getrestrictionsfororgoptions)
- [`getRestrictionsForRepo(options)`](#getrestrictionsforrepooptions)
- [`getRestrictionsForYourPublicRepos()`](#getrestrictionsforyourpublicrepos)
- [`removeRestrictionsForOrg(options)`](#removerestrictionsfororgoptions)
- [`removeRestrictionsForRepo(options)`](#removerestrictionsforrepooptions)
- [`removeRestrictionsForYourPublicRepos()`](#removerestrictionsforyourpublicrepos)
- [`setRestrictionsForOrg(options)`](#setrestrictionsfororgoptions)
- [`setRestrictionsForRepo(options)`](#setrestrictionsforrepooptions)
- [`setRestrictionsForYourPublicRepos(options)`](#setrestrictionsforyourpublicreposoptions)

</details>

## [`getRestrictionsForOrg(options)`](https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization)

Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.

**Usage**

```js
const response = await octokit.interactions.getRestrictionsForOrg({ org })
```

**Options**

- `org` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    limit: 'collaborators_only',
    origin: 'organization',
    expires_at: '2018-08-17T04:18:39Z'
  }
}
```

</details>

## [`getRestrictionsForRepo(options)`](https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository)

Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.

**Usage**

```js
const response = await octokit.interactions.getRestrictionsForRepo({
  owner,
  repo
})
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
    limit: 'collaborators_only',
    origin: 'repository',
    expires_at: '2018-08-17T04:18:39Z'
  }
}
```

</details>

## [`getRestrictionsForYourPublicRepos()`](https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories)

Shows which type of GitHub user can interact with your public repositories and when the restriction expires. If there are no restrictions, you will see an empty response.

**Usage**

```js
const response = await octokit.interactions.getRestrictionsForYourPublicRepos()
```

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    limit: 'collaborators_only',
    origin: 'user',
    expires_at: '2018-08-17T04:18:39Z'
  }
}
```

</details>

## [`removeRestrictionsForOrg(options)`](https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization)

Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.

**Usage**

```js
const response = await octokit.interactions.removeRestrictionsForOrg({ org })
```

**Options**

- `org` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`removeRestrictionsForRepo(options)`](https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository)

Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.

**Usage**

```js
const response = await octokit.interactions.removeRestrictionsForRepo({
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

**Error upon conflict (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.interactions.removeRestrictionsForRepo({
    owner,
    repo
  })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`removeRestrictionsForYourPublicRepos()`](https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories)

Removes any interaction restrictions from your public repositories.

**Usage**

```js
const response = await octokit.interactions.removeRestrictionsForYourPublicRepos()
```

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`setRestrictionsForOrg(options)`](https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization)

Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.

**Usage**

```js
const response = await octokit.interactions.setRestrictionsForOrg({
  org,
  limit
})
```

**Options**

- `org` (required, string)
- `limit` (required, string): The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. Can be one of: `existing_users`, `contributors_only`, `collaborators_only`.
- `expiry` (string): The duration of the interaction restriction. Can be one of: `one_day`, `three_days`, `one_week`, `one_month`, `six_months`. Default: `one_day`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    limit: 'collaborators_only',
    origin: 'organization',
    expires_at: '2018-08-17T04:18:39Z'
  }
}
```

</details>

## [`setRestrictionsForRepo(options)`](https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository)

Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.

**Usage**

```js
const response = await octokit.interactions.setRestrictionsForRepo({
  owner,
  repo,
  limit
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `limit` (required, string): The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. Can be one of: `existing_users`, `contributors_only`, `collaborators_only`.
- `expiry` (string): The duration of the interaction restriction. Can be one of: `one_day`, `three_days`, `one_week`, `one_month`, `six_months`. Default: `one_day`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    limit: 'collaborators_only',
    origin: 'repository',
    expires_at: '2018-08-17T04:18:39Z'
  }
}
```

</details>

**Error upon conflict (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.interactions.setRestrictionsForRepo({
    owner,
    repo,
    limit
  })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`setRestrictionsForYourPublicRepos(options)`](https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories)

Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.

**Usage**

```js
const response = await octokit.interactions.setRestrictionsForYourPublicRepos({
  limit
})
```

**Options**

- `limit` (required, string): The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. Can be one of: `existing_users`, `contributors_only`, `collaborators_only`.
- `expiry` (string): The duration of the interaction restriction. Can be one of: `one_day`, `three_days`, `one_week`, `one_month`, `six_months`. Default: `one_day`.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    limit: 'collaborators_only',
    origin: 'user',
    expires_at: '2018-08-17T04:18:39Z'
  }
}
```

</details>
