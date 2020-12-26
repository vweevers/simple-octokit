# `octokit.actions`

[Previous: users](users.md) \| [Index](README.md) \| [Next: activity](activity.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`addSelectedRepoToOrgSecret(options)`](#addselectedrepotoorgsecretoptions)
- [`cancelWorkflowRun(options)`](#cancelworkflowrunoptions)
- [`createOrUpdateOrgSecret(options)`](#createorupdateorgsecretoptions)
- [`createOrUpdateRepoSecret(options)`](#createorupdatereposecretoptions)
- [`createRegistrationTokenForOrg(options)`](#createregistrationtokenfororgoptions)
- [`createRegistrationTokenForRepo(options)`](#createregistrationtokenforrepooptions)
- [`createRemoveTokenForOrg(options)`](#createremovetokenfororgoptions)
- [`createRemoveTokenForRepo(options)`](#createremovetokenforrepooptions)
- [`createWorkflowDispatch(options)`](#createworkflowdispatchoptions)
- [`deleteArtifact(options)`](#deleteartifactoptions)
- [`deleteOrgSecret(options)`](#deleteorgsecretoptions)
- [`deleteRepoSecret(options)`](#deletereposecretoptions)
- [`deleteSelfHostedRunnerFromOrg(options)`](#deleteselfhostedrunnerfromorgoptions)
- [`deleteSelfHostedRunnerFromRepo(options)`](#deleteselfhostedrunnerfromrepooptions)
- [`deleteWorkflowRun(options)`](#deleteworkflowrunoptions)
- [`deleteWorkflowRunLogs(options)`](#deleteworkflowrunlogsoptions)
- [`disableSelectedRepositoryGithubActionsOrganization(options)`](#disableselectedrepositorygithubactionsorganizationoptions)
- [`disableWorkflow(options)`](#disableworkflowoptions)
- [`downloadArtifact(options)`](#downloadartifactoptions)
- [`downloadJobLogsForWorkflowRun(options)`](#downloadjoblogsforworkflowrunoptions)
- [`downloadWorkflowRunLogs(options)`](#downloadworkflowrunlogsoptions)
- [`enableSelectedRepositoryGithubActionsOrganization(options)`](#enableselectedrepositorygithubactionsorganizationoptions)
- [`enableWorkflow(options)`](#enableworkflowoptions)
- [`getAllowedActionsOrganization(options)`](#getallowedactionsorganizationoptions)
- [`getAllowedActionsRepository(options)`](#getallowedactionsrepositoryoptions)
- [`getArtifact(options)`](#getartifactoptions)
- [`getGithubActionsPermissionsOrganization(options)`](#getgithubactionspermissionsorganizationoptions)
- [`getGithubActionsPermissionsRepository(options)`](#getgithubactionspermissionsrepositoryoptions)
- [`getJobForWorkflowRun(options)`](#getjobforworkflowrunoptions)
- [`getOrgPublicKey(options)`](#getorgpublickeyoptions)
- [`getOrgSecret(options)`](#getorgsecretoptions)
- [`getRepoPermissions(options)`](#getrepopermissionsoptions)
- [`getRepoPublicKey(options)`](#getrepopublickeyoptions)
- [`getRepoSecret(options)`](#getreposecretoptions)
- [`getSelfHostedRunnerForOrg(options)`](#getselfhostedrunnerfororgoptions)
- [`getSelfHostedRunnerForRepo(options)`](#getselfhostedrunnerforrepooptions)
- [`getWorkflow(options)`](#getworkflowoptions)
- [`getWorkflowRun(options)`](#getworkflowrunoptions)
- [`getWorkflowRunUsage(options)`](#getworkflowrunusageoptions)
- [`getWorkflowUsage(options)`](#getworkflowusageoptions)
- [`listArtifactsForRepo(options)`](#listartifactsforrepooptions)
- [`listJobsForWorkflowRun(options)`](#listjobsforworkflowrunoptions)
- [`listOrgSecrets(options)`](#listorgsecretsoptions)
- [`listRepoSecrets(options)`](#listreposecretsoptions)
- [`listRepoWorkflows(options)`](#listrepoworkflowsoptions)
- [`listRunnerApplicationsForOrg(options)`](#listrunnerapplicationsfororgoptions)
- [`listRunnerApplicationsForRepo(options)`](#listrunnerapplicationsforrepooptions)
- [`listSelectedReposForOrgSecret(options)`](#listselectedreposfororgsecretoptions)
- [`listSelectedRepositoriesEnabledGithubActionsOrganization(options)`](#listselectedrepositoriesenabledgithubactionsorganizationoptions)
- [`listSelfHostedRunnersForOrg(options)`](#listselfhostedrunnersfororgoptions)
- [`listSelfHostedRunnersForRepo(options)`](#listselfhostedrunnersforrepooptions)
- [`listWorkflowRunArtifacts(options)`](#listworkflowrunartifactsoptions)
- [`listWorkflowRuns(options)`](#listworkflowrunsoptions)
- [`listWorkflowRunsForRepo(options)`](#listworkflowrunsforrepooptions)
- [`reRunWorkflow(options)`](#rerunworkflowoptions)
- [`removeSelectedRepoFromOrgSecret(options)`](#removeselectedrepofromorgsecretoptions)
- [`setAllowedActionsOrganization(options)`](#setallowedactionsorganizationoptions)
- [`setAllowedActionsRepository(options)`](#setallowedactionsrepositoryoptions)
- [`setGithubActionsPermissionsOrganization(options)`](#setgithubactionspermissionsorganizationoptions)
- [`setGithubActionsPermissionsRepository(options)`](#setgithubactionspermissionsrepositoryoptions)
- [`setSelectedReposForOrgSecret(options)`](#setselectedreposfororgsecretoptions)
- [`setSelectedRepositoriesEnabledGithubActionsOrganization(options)`](#setselectedrepositoriesenabledgithubactionsorganizationoptions)

</details>

## [`addSelectedRepoToOrgSecret(options)`](https://docs.github.com/rest/reference/actions#add-selected-repository-to-an-organization-secret)

Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.addSelectedRepoToOrgSecret({
  org,
  secret_name,
  repository_id
})
```

**Options**

- `org` (required, string)
- `secret_name` (required, string)
- `repository_id` (required, integer)

**Response when repository was added to the selected list (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when visibility type is not set to selected (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.actions.addSelectedRepoToOrgSecret({
    org,
    secret_name,
    repository_id
  })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`cancelWorkflowRun(options)`](https://docs.github.com/rest/reference/actions#cancel-a-workflow-run)

Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.cancelWorkflowRun({
  owner,
  repo,
  run_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `run_id` (required, integer)

**Response (HTTP 202)**

<details><summary>Example</summary>

```js
const response = { status: 202 }
```

</details>

## [`createOrUpdateOrgSecret(options)`](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret)

Creates or updates an organization secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

**Example encrypting a secret using Node.js**

Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.

```
const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);
```

**Example encrypting a secret using Python**

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

**Example encrypting a secret using C#**

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

**Example encrypting a secret using Ruby**

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

**Usage**

```js
const response = await octokit.actions.createOrUpdateOrgSecret({
  org,
  secret_name
})
```

**Options**

- `org` (required, string)
- `secret_name` (required, string)
- `encrypted_value` (string): Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/reference/actions#get-an-organization-public-key) endpoint.
- `key_id` (string): ID of the key you used to encrypt the secret.
- `visibility` (string): Configures the access that repositories have to the organization secret. Can be one of:  
  - `all` - All repositories in an organization can access the secret.  
  - `private` - Private repositories in an organization can access the secret.  
  - `selected` - Only specific repositories can access the secret.
- `selected_repository_ids` (string\[]): An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret) endpoints.

**Response when creating a secret (HTTP 201)**

<details><summary>Example</summary>

```js
const response = { status: 201 }
```

</details>

**Response when updating a secret (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`createOrUpdateRepoSecret(options)`](https://docs.github.com/rest/reference/actions#create-or-update-a-repository-secret)

Creates or updates a repository secret with an encrypted value. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

**Example encrypting a secret using Node.js**

Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.

```
const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);
```

**Example encrypting a secret using Python**

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

**Example encrypting a secret using C#**

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

**Example encrypting a secret using Ruby**

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```

**Usage**

```js
const response = await octokit.actions.createOrUpdateRepoSecret({
  owner,
  repo,
  secret_name
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `secret_name` (required, string)
- `encrypted_value` (string): Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/reference/actions#get-a-repository-public-key) endpoint.
- `key_id` (string): ID of the key you used to encrypt the secret.

**Response when creating a secret (HTTP 201)**

<details><summary>Example</summary>

```js
const response = { status: 201 }
```

</details>

**Response when updating a secret (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`createRegistrationTokenForOrg(options)`](https://docs.github.com/rest/reference/actions#create-a-registration-token-for-an-organization)

Returns a token that you can pass to the `config` script. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

**Example using registration token**

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org --token TOKEN
```

**Usage**

```js
const response = await octokit.actions.createRegistrationTokenForOrg({ org })
```

**Options**

- `org` (required, string)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    token: 'LLBF3JGZDX3P5PMEXLND6TS6FCWO6',
    expires_at: '2020-01-22T12:13:35.123-08:00'
  }
}
```

</details>

## [`createRegistrationTokenForRepo(options)`](https://docs.github.com/rest/reference/actions#create-a-registration-token-for-a-repository)

Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate using an access token with the `repo` scope to use this endpoint.

**Example using registration token**

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
```

**Usage**

```js
const response = await octokit.actions.createRegistrationTokenForRepo({
  owner,
  repo
})
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
    token: 'LLBF3JGZDX3P5PMEXLND6TS6FCWO6',
    expires_at: '2020-01-22T12:13:35.123-08:00'
  }
}
```

</details>

## [`createRemoveTokenForOrg(options)`](https://docs.github.com/rest/reference/actions#create-a-remove-token-for-an-organization)

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

**Example using remove token**

To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this endpoint.

```
./config.sh remove --token TOKEN
```

**Usage**

```js
const response = await octokit.actions.createRemoveTokenForOrg({ org })
```

**Options**

- `org` (required, string)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    token: 'AABF3JGZDX3P5PMEXLND6TS6FCWO6',
    expires_at: '2020-01-29T12:13:35.123-08:00'
  }
}
```

</details>

## [`createRemoveTokenForRepo(options)`](https://docs.github.com/rest/reference/actions#create-a-remove-token-for-a-repository)

Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour. You must authenticate using an access token with the `repo` scope to use this endpoint.

**Example using remove token**

To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.

```
./config.sh remove --token TOKEN
```

**Usage**

```js
const response = await octokit.actions.createRemoveTokenForRepo({ owner, repo })
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
    token: 'AABF3JGZDX3P5PMEXLND6TS6FCWO6',
    expires_at: '2020-01-29T12:13:35.123-08:00'
  }
}
```

</details>

## [`createWorkflowDispatch(options)`](https://docs.github.com/rest/reference/actions#create-a-workflow-dispatch-event)

You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see [Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch).

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see [Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line).

**Usage**

```js
const response = await octokit.actions.createWorkflowDispatch({
  owner,
  repo,
  workflow_id,
  ref
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `workflow_id` (required): The ID of the workflow. You can also pass the workflow file name as a string.
- `ref` (required, string): The git reference for the workflow. The reference can be a branch or tag name.
- `inputs` (object): Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted.
- `inputs.*` (object)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteArtifact(options)`](https://docs.github.com/rest/reference/actions#delete-an-artifact)

Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.deleteArtifact({
  owner,
  repo,
  artifact_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `artifact_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteOrgSecret(options)`](https://docs.github.com/rest/reference/actions#delete-an-organization-secret)

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.deleteOrgSecret({ org, secret_name })
```

**Options**

- `org` (required, string)
- `secret_name` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteRepoSecret(options)`](https://docs.github.com/rest/reference/actions#delete-a-repository-secret)

Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.deleteRepoSecret({
  owner,
  repo,
  secret_name
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `secret_name` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteSelfHostedRunnerFromOrg(options)`](https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization)

Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

**Usage**

```js
const response = await octokit.actions.deleteSelfHostedRunnerFromOrg({
  org,
  runner_id
})
```

**Options**

- `org` (required, string)
- `runner_id` (required, integer): Unique identifier of the self-hosted runner.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteSelfHostedRunnerFromRepo(options)`](https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository)

Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.

You must authenticate using an access token with the `repo` scope to use this endpoint.

**Usage**

```js
const response = await octokit.actions.deleteSelfHostedRunnerFromRepo({
  owner,
  repo,
  runner_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `runner_id` (required, integer): Unique identifier of the self-hosted runner.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteWorkflowRun(options)`](https://docs.github.com/rest/reference/actions#delete-a-workflow-run)

Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.deleteWorkflowRun({
  owner,
  repo,
  run_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `run_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`deleteWorkflowRunLogs(options)`](https://docs.github.com/rest/reference/actions#delete-workflow-run-logs)

Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.deleteWorkflowRunLogs({
  owner,
  repo,
  run_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `run_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`disableSelectedRepositoryGithubActionsOrganization(options)`](https://docs.github.com/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization)

Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an organization](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization).

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

**Usage**

```js
const response = await octokit.actions.disableSelectedRepositoryGithubActionsOrganization(
  { org, repository_id }
)
```

**Options**

- `org` (required, string)
- `repository_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`disableWorkflow(options)`](https://docs.github.com/rest/reference/actions#disable-a-workflow)

Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.disableWorkflow({
  owner,
  repo,
  workflow_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `workflow_id` (required): The ID of the workflow. You can also pass the workflow file name as a string.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`downloadArtifact(options)`](https://docs.github.com/rest/reference/actions#download-an-artifact)

Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.downloadArtifact({
  owner,
  repo,
  artifact_id,
  archive_format
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `artifact_id` (required, integer)
- `archive_format` (required, string)

**Response (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

## [`downloadJobLogsForWorkflowRun(options)`](https://docs.github.com/rest/reference/actions#download-job-logs-for-a-workflow-run)

Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.downloadJobLogsForWorkflowRun({
  owner,
  repo,
  job_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `job_id` (required, integer)

**Response (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

## [`downloadWorkflowRunLogs(options)`](https://docs.github.com/rest/reference/actions#download-workflow-run-logs)

Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.downloadWorkflowRunLogs({
  owner,
  repo,
  run_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `run_id` (required, integer)

**Response (HTTP 302)**

<details><summary>Example</summary>

```js
const response = { status: 302 }
```

</details>

## [`enableSelectedRepositoryGithubActionsOrganization(options)`](https://docs.github.com/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization)

Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an organization](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization).

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

**Usage**

```js
const response = await octokit.actions.enableSelectedRepositoryGithubActionsOrganization(
  { org, repository_id }
)
```

**Options**

- `org` (required, string)
- `repository_id` (required, integer)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`enableWorkflow(options)`](https://docs.github.com/rest/reference/actions#enable-a-workflow)

Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.enableWorkflow({
  owner,
  repo,
  workflow_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `workflow_id` (required): The ID of the workflow. You can also pass the workflow file name as a string.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`getAllowedActionsOrganization(options)`](https://docs.github.com/rest/reference/actions#get-allowed-actions-for-an-organization)

Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an organization](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

**Usage**

```js
const response = await octokit.actions.getAllowedActionsOrganization({ org })
```

**Options**

- `org` (required, string)

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

## [`getAllowedActionsRepository(options)`](https://docs.github.com/rest/reference/actions#get-allowed-actions-for-a-repository)

Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for a repository](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository).

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

**Usage**

```js
const response = await octokit.actions.getAllowedActionsRepository({
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
    github_owned_allowed: true,
    verified_allowed: false,
    patterns_allowed: ['monalisa/octocat@*', 'docker/*']
  }
}
```

</details>

## [`getArtifact(options)`](https://docs.github.com/rest/reference/actions#get-an-artifact)

Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getArtifact({ owner, repo, artifact_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `artifact_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 11,
    node_id: 'MDg6QXJ0aWZhY3QxMQ==',
    name: 'Rails',
    size_in_bytes: 556,
    url: 'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11',
    archive_download_url:
      'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11/zip',
    expired: false,
    created_at: '2020-01-10T14:59:22Z',
    expires_at: '2020-01-21T14:59:22Z',
    updated_at: '2020-01-21T14:59:22Z'
  }
}
```

</details>

## [`getGithubActionsPermissionsOrganization(options)`](https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-an-organization)

Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

**Usage**

```js
const response = await octokit.actions.getGithubActionsPermissionsOrganization({
  org
})
```

**Options**

- `org` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    enabled_repositories: 'all',
    allowed_actions: 'selected',
    selected_actions_url:
      'https://api.github.com/organizations/42/actions/permissions/selected-actions'
  }
}
```

</details>

## [`getGithubActionsPermissionsRepository(options)`](https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-a-repository)

Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

**Usage**

```js
const response = await octokit.actions.getGithubActionsPermissionsRepository({
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
    enabled: true,
    allowed_actions: 'selected',
    selected_actions_url:
      'https://api.github.com/repositories/42/actions/permissions/selected-actions'
  }
}
```

</details>

## [`getJobForWorkflowRun(options)`](https://docs.github.com/rest/reference/actions#get-a-job-for-a-workflow-run)

Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getJobForWorkflowRun({
  owner,
  repo,
  job_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `job_id` (required, integer)

**Response (HTTP 202)**

<details><summary>Example</summary>

```js
const response = {
  status: 202,
  data: {
    id: 399444496,
    run_id: 29679449,
    run_url:
      'https://api.github.com/repos/octo-org/octo-repo/actions/runs/29679449',
    node_id: 'MDEyOldvcmtmbG93IEpvYjM5OTQ0NDQ5Ng==',
    head_sha: 'f83a356604ae3c5d03e1b46ef4d1ca77d64a90b0',
    url:
      'https://api.github.com/repos/octo-org/octo-repo/actions/jobs/399444496',
    html_url: 'https://github.com/octo-org/octo-repo/runs/399444496',
    status: 'completed',
    conclusion: 'success',
    started_at: '2020-01-20T17:42:40Z',
    completed_at: '2020-01-20T17:44:39Z',
    name: 'build',
    steps: [
      {
        name: 'Set up job',
        status: 'completed',
        conclusion: 'success',
        number: 1,
        started_at: '2020-01-20T09:42:40.000-08:00',
        completed_at: '2020-01-20T09:42:41.000-08:00'
      },
      {
        name: 'Run actions/checkout@v2',
        status: 'completed',
        conclusion: 'success',
        number: 2,
        started_at: '2020-01-20T09:42:41.000-08:00',
        completed_at: '2020-01-20T09:42:45.000-08:00'
      },
      {
        name: 'Set up Ruby',
        status: 'completed',
        conclusion: 'success',
        number: 3,
        started_at: '2020-01-20T09:42:45.000-08:00',
        completed_at: '2020-01-20T09:42:45.000-08:00'
      },
      {
        name: 'Run actions/cache@v2',
        status: 'completed',
        conclusion: 'success',
        number: 4,
        started_at: '2020-01-20T09:42:45.000-08:00',
        completed_at: '2020-01-20T09:42:48.000-08:00'
      },
      {
        name: 'Install Bundler',
        status: 'completed',
        conclusion: 'success',
        number: 5,
        started_at: '2020-01-20T09:42:48.000-08:00',
        completed_at: '2020-01-20T09:42:52.000-08:00'
      },
      {
        name: 'Install Gems',
        status: 'completed',
        conclusion: 'success',
        number: 6,
        started_at: '2020-01-20T09:42:52.000-08:00',
        completed_at: '2020-01-20T09:42:53.000-08:00'
      },
      {
        name: 'Run Tests',
        status: 'completed',
        conclusion: 'success',
        number: 7,
        started_at: '2020-01-20T09:42:53.000-08:00',
        completed_at: '2020-01-20T09:42:59.000-08:00'
      },
      {
        name: 'Deploy to Heroku',
        status: 'completed',
        conclusion: 'success',
        number: 8,
        started_at: '2020-01-20T09:42:59.000-08:00',
        completed_at: '2020-01-20T09:44:39.000-08:00'
      },
      {
        name: 'Post actions/cache@v2',
        status: 'completed',
        conclusion: 'success',
        number: 16,
        started_at: '2020-01-20T09:44:39.000-08:00',
        completed_at: '2020-01-20T09:44:39.000-08:00'
      },
      {
        name: 'Complete job',
        status: 'completed',
        conclusion: 'success',
        number: 17,
        started_at: '2020-01-20T09:44:39.000-08:00',
        completed_at: '2020-01-20T09:44:39.000-08:00'
      }
    ],
    check_run_url:
      'https://api.github.com/repos/octo-org/octo-repo/check-runs/399444496'
  }
}
```

</details>

## [`getOrgPublicKey(options)`](https://docs.github.com/rest/reference/actions#get-an-organization-public-key)

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getOrgPublicKey({ org })
```

**Options**

- `org` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    key_id: '012345678912345678',
    key: '2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv1234'
  }
}
```

</details>

## [`getOrgSecret(options)`](https://docs.github.com/rest/reference/actions#get-an-organization-secret)

Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getOrgSecret({ org, secret_name })
```

**Options**

- `org` (required, string)
- `secret_name` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    name: 'GH_TOKEN',
    created_at: '2019-08-10T14:59:22Z',
    updated_at: '2020-01-10T14:59:22Z',
    visibility: 'selected',
    selected_repositories_url:
      'https://api.github.com/orgs/octo-org/actions/secrets/SUPER_SECRET/repositories'
  }
}
```

</details>

## [`getRepoPermissions(options)`](https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-a-repository)

**Deprecated:** This method has been renamed to actions.getGithubActionsPermissionsRepository

Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

**Usage**

```js
const response = await octokit.actions.getRepoPermissions({ owner, repo })
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
    enabled: true,
    allowed_actions: 'selected',
    selected_actions_url:
      'https://api.github.com/repositories/42/actions/permissions/selected-actions'
  }
}
```

</details>

## [`getRepoPublicKey(options)`](https://docs.github.com/rest/reference/actions#get-a-repository-public-key)

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getRepoPublicKey({ owner, repo })
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
    key_id: '012345678912345678',
    key: '2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv1234'
  }
}
```

</details>

## [`getRepoSecret(options)`](https://docs.github.com/rest/reference/actions#get-a-repository-secret)

Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getRepoSecret({
  owner,
  repo,
  secret_name
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `secret_name` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    name: 'GH_TOKEN',
    created_at: '2019-08-10T14:59:22Z',
    updated_at: '2020-01-10T14:59:22Z'
  }
}
```

</details>

## [`getSelfHostedRunnerForOrg(options)`](https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-an-organization)

Gets a specific self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getSelfHostedRunnerForOrg({
  org,
  runner_id
})
```

**Options**

- `org` (required, string)
- `runner_id` (required, integer): Unique identifier of the self-hosted runner.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 23,
    name: 'MBP',
    os: 'macos',
    status: 'online',
    busy: true,
    labels: [
      {
        id: 5,
        name: 'self-hosted',
        type: 'read-only'
      },
      {
        id: 7,
        name: 'X64',
        type: 'read-only'
      },
      {
        id: 20,
        name: 'macOS',
        type: 'read-only'
      },
      {
        id: 21,
        name: 'no-gpu',
        type: 'custom'
      }
    ]
  }
}
```

</details>

## [`getSelfHostedRunnerForRepo(options)`](https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-a-repository)

Gets a specific self-hosted runner configured in a repository.

You must authenticate using an access token with the `repo` scope to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getSelfHostedRunnerForRepo({
  owner,
  repo,
  runner_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `runner_id` (required, integer): Unique identifier of the self-hosted runner.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 23,
    name: 'MBP',
    os: 'macos',
    status: 'online',
    busy: true,
    labels: [
      {
        id: 5,
        name: 'self-hosted',
        type: 'read-only'
      },
      {
        id: 7,
        name: 'X64',
        type: 'read-only'
      },
      {
        id: 20,
        name: 'macOS',
        type: 'read-only'
      },
      {
        id: 21,
        name: 'no-gpu',
        type: 'custom'
      }
    ]
  }
}
```

</details>

## [`getWorkflow(options)`](https://docs.github.com/rest/reference/actions#get-a-workflow)

Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getWorkflow({ owner, repo, workflow_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `workflow_id` (required): The ID of the workflow. You can also pass the workflow file name as a string.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 161335,
    node_id: 'MDg6V29ya2Zsb3cxNjEzMzU=',
    name: 'CI',
    path: '.github/workflows/blank.yaml',
    state: 'active',
    created_at: '2020-01-08T23:48:37.000-08:00',
    updated_at: '2020-01-08T23:50:21.000-08:00',
    url:
      'https://api.github.com/repos/octo-org/octo-repo/actions/workflows/161335',
    html_url:
      'https://github.com/octo-org/octo-repo/blob/master/.github/workflows/161335',
    badge_url: 'https://github.com/octo-org/octo-repo/workflows/CI/badge.svg'
  }
}
```

</details>

## [`getWorkflowRun(options)`](https://docs.github.com/rest/reference/actions#get-a-workflow-run)

Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getWorkflowRun({ owner, repo, run_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `run_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    id: 30433642,
    name: 'Build',
    node_id: 'MDEyOldvcmtmbG93IFJ1bjI2OTI4OQ==',
    head_branch: 'master',
    head_sha: 'acb5820ced9479c074f688cc328bf03f341a511d',
    run_number: 562,
    event: 'push',
    status: 'queued',
    conclusion: null,
    workflow_id: 159038,
    url:
      'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642',
    html_url: 'https://github.com/octo-org/octo-repo/actions/runs/30433642',
    pull_requests: [],
    created_at: '2020-01-22T19:33:08Z',
    updated_at: '2020-01-22T19:33:08Z',
    jobs_url:
      'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/jobs',
    logs_url:
      'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/logs',
    check_suite_url:
      'https://api.github.com/repos/octo-org/octo-repo/check-suites/414944374',
    artifacts_url:
      'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/artifacts',
    cancel_url:
      'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/cancel',
    rerun_url:
      'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/rerun',
    workflow_url:
      'https://api.github.com/repos/octo-org/octo-repo/actions/workflows/159038',
    head_commit: {
      id: 'acb5820ced9479c074f688cc328bf03f341a511d',
      tree_id: 'd23f6eedb1e1b9610bbc754ddb5197bfe7271223',
      message: 'Create linter.yaml',
      timestamp: '2020-01-22T19:33:05Z',
      author: {
        name: 'Octo Cat',
        email: 'octocat@github.com'
      },
      committer: {
        name: 'GitHub',
        email: 'noreply@github.com'
      }
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
      hooks_url: 'http://api.github.com/repos/octocat/Hello-World/hooks'
    },
    head_repository: {
      id: 217723378,
      node_id: 'MDEwOlJlcG9zaXRvcnkyMTc3MjMzNzg=',
      name: 'octo-repo',
      full_name: 'octo-org/octo-repo',
      private: true,
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
      html_url: 'https://github.com/octo-org/octo-repo',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/octo-org/octo-repo',
      forks_url: 'https://api.github.com/repos/octo-org/octo-repo/forks',
      keys_url: 'https://api.github.com/repos/octo-org/octo-repo/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/octo-org/octo-repo/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/octo-org/octo-repo/teams',
      hooks_url: 'https://api.github.com/repos/octo-org/octo-repo/hooks',
      issue_events_url:
        'https://api.github.com/repos/octo-org/octo-repo/issues/events{/number}',
      events_url: 'https://api.github.com/repos/octo-org/octo-repo/events',
      assignees_url:
        'https://api.github.com/repos/octo-org/octo-repo/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/octo-org/octo-repo/branches{/branch}',
      tags_url: 'https://api.github.com/repos/octo-org/octo-repo/tags',
      blobs_url:
        'https://api.github.com/repos/octo-org/octo-repo/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/octo-org/octo-repo/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/octo-org/octo-repo/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/octo-org/octo-repo/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/octo-org/octo-repo/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/octo-org/octo-repo/languages',
      stargazers_url:
        'https://api.github.com/repos/octo-org/octo-repo/stargazers',
      contributors_url:
        'https://api.github.com/repos/octo-org/octo-repo/contributors',
      subscribers_url:
        'https://api.github.com/repos/octo-org/octo-repo/subscribers',
      subscription_url:
        'https://api.github.com/repos/octo-org/octo-repo/subscription',
      commits_url:
        'https://api.github.com/repos/octo-org/octo-repo/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/octo-org/octo-repo/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/octo-org/octo-repo/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/octo-org/octo-repo/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/octo-org/octo-repo/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/octo-org/octo-repo/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/octo-org/octo-repo/merges',
      archive_url:
        'https://api.github.com/repos/octo-org/octo-repo/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/octo-org/octo-repo/downloads',
      issues_url:
        'https://api.github.com/repos/octo-org/octo-repo/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/octo-org/octo-repo/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/octo-org/octo-repo/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/octo-org/octo-repo/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/octo-org/octo-repo/labels{/name}',
      releases_url:
        'https://api.github.com/repos/octo-org/octo-repo/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/octo-org/octo-repo/deployments'
    }
  }
}
```

</details>

## [`getWorkflowRunUsage(options)`](https://docs.github.com/rest/reference/actions#get-workflow-run-usage)

Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see [Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getWorkflowRunUsage({
  owner,
  repo,
  run_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `run_id` (required, integer)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    billable: {
      UBUNTU: {
        total_ms: 180000,
        jobs: 1
      },
      MACOS: {
        total_ms: 240000,
        jobs: 4
      },
      WINDOWS: {
        total_ms: 300000,
        jobs: 2
      }
    },
    run_duration_ms: 500000
  }
}
```

</details>

## [`getWorkflowUsage(options)`](https://docs.github.com/rest/reference/actions#get-workflow-usage)

Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see [Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions).

You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.getWorkflowUsage({
  owner,
  repo,
  workflow_id
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `workflow_id` (required): The ID of the workflow. You can also pass the workflow file name as a string.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    billable: {
      UBUNTU: {
        total_ms: 180000
      },
      MACOS: {
        total_ms: 240000
      },
      WINDOWS: {
        total_ms: 300000
      }
    }
  }
}
```

</details>

## [`listArtifactsForRepo(options)`](https://docs.github.com/rest/reference/actions#list-artifacts-for-a-repository)

Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listArtifactsForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listArtifactsForRepo.all({
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
  data: {
    total_count: 2,
    artifacts: [
      {
        id: 11,
        node_id: 'MDg6QXJ0aWZhY3QxMQ==',
        name: 'Rails',
        size_in_bytes: 556,
        url:
          'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11',
        archive_download_url:
          'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11/zip',
        expired: false,
        created_at: '2020-01-10T14:59:22Z',
        expires_at: '2020-03-21T14:59:22Z',
        updated_at: '2020-02-21T14:59:22Z'
      },
      {
        id: 13,
        node_id: 'MDg6QXJ0aWZhY3QxMw==',
        name: '',
        size_in_bytes: 453,
        url:
          'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/13',
        archive_download_url:
          'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/13/zip',
        expired: false,
        created_at: '2020-01-10T14:59:22Z',
        expires_at: '2020-03-21T14:59:22Z',
        updated_at: '2020-02-21T14:59:22Z'
      }
    ]
  }
}
```

</details>

## [`listJobsForWorkflowRun(options)`](https://docs.github.com/rest/reference/actions#list-jobs-for-a-workflow-run)

Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).

**Usage**

```js
const response = await octokit.actions.listJobsForWorkflowRun({
  owner,
  repo,
  run_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listJobsForWorkflowRun.all({
  owner,
  repo,
  run_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `run_id` (required, integer)
- `filter` (string): Filters jobs by their `completed_at` timestamp. Can be one of:  
  \* `latest`: Returns jobs from the most recent execution of the workflow run.  
  \* `all`: Returns all jobs for a workflow run, including from old executions of the workflow run.
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_count: 1,
    jobs: [
      {
        id: 399444496,
        run_id: 29679449,
        run_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/29679449',
        node_id: 'MDEyOldvcmtmbG93IEpvYjM5OTQ0NDQ5Ng==',
        head_sha: 'f83a356604ae3c5d03e1b46ef4d1ca77d64a90b0',
        url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/jobs/399444496',
        html_url: 'https://github.com/octo-org/octo-repo/runs/399444496',
        status: 'completed',
        conclusion: 'success',
        started_at: '2020-01-20T17:42:40Z',
        completed_at: '2020-01-20T17:44:39Z',
        name: 'build',
        steps: [
          {
            name: 'Set up job',
            status: 'completed',
            conclusion: 'success',
            number: 1,
            started_at: '2020-01-20T09:42:40.000-08:00',
            completed_at: '2020-01-20T09:42:41.000-08:00'
          },
          {
            name: 'Run actions/checkout@v2',
            status: 'completed',
            conclusion: 'success',
            number: 2,
            started_at: '2020-01-20T09:42:41.000-08:00',
            completed_at: '2020-01-20T09:42:45.000-08:00'
          },
          {
            name: 'Set up Ruby',
            status: 'completed',
            conclusion: 'success',
            number: 3,
            started_at: '2020-01-20T09:42:45.000-08:00',
            completed_at: '2020-01-20T09:42:45.000-08:00'
          },
          {
            name: 'Run actions/cache@v2',
            status: 'completed',
            conclusion: 'success',
            number: 4,
            started_at: '2020-01-20T09:42:45.000-08:00',
            completed_at: '2020-01-20T09:42:48.000-08:00'
          },
          {
            name: 'Install Bundler',
            status: 'completed',
            conclusion: 'success',
            number: 5,
            started_at: '2020-01-20T09:42:48.000-08:00',
            completed_at: '2020-01-20T09:42:52.000-08:00'
          },
          {
            name: 'Install Gems',
            status: 'completed',
            conclusion: 'success',
            number: 6,
            started_at: '2020-01-20T09:42:52.000-08:00',
            completed_at: '2020-01-20T09:42:53.000-08:00'
          },
          {
            name: 'Run Tests',
            status: 'completed',
            conclusion: 'success',
            number: 7,
            started_at: '2020-01-20T09:42:53.000-08:00',
            completed_at: '2020-01-20T09:42:59.000-08:00'
          },
          {
            name: 'Deploy to Heroku',
            status: 'completed',
            conclusion: 'success',
            number: 8,
            started_at: '2020-01-20T09:42:59.000-08:00',
            completed_at: '2020-01-20T09:44:39.000-08:00'
          },
          {
            name: 'Post actions/cache@v2',
            status: 'completed',
            conclusion: 'success',
            number: 16,
            started_at: '2020-01-20T09:44:39.000-08:00',
            completed_at: '2020-01-20T09:44:39.000-08:00'
          },
          {
            name: 'Complete job',
            status: 'completed',
            conclusion: 'success',
            number: 17,
            started_at: '2020-01-20T09:44:39.000-08:00',
            completed_at: '2020-01-20T09:44:39.000-08:00'
          }
        ],
        check_run_url:
          'https://api.github.com/repos/octo-org/octo-repo/check-runs/399444496'
      }
    ]
  }
}
```

</details>

## [`listOrgSecrets(options)`](https://docs.github.com/rest/reference/actions#list-organization-secrets)

Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listOrgSecrets({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listOrgSecrets.all({ org })) {
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
    total_count: 3,
    secrets: [
      {
        name: 'GIST_ID',
        created_at: '2019-08-10T14:59:22Z',
        updated_at: '2020-01-10T14:59:22Z',
        visibility: 'private'
      },
      {
        name: 'DEPLOY_TOKEN',
        created_at: '2019-08-10T14:59:22Z',
        updated_at: '2020-01-10T14:59:22Z',
        visibility: 'all'
      },
      {
        name: 'GH_TOKEN',
        created_at: '2019-08-10T14:59:22Z',
        updated_at: '2020-01-10T14:59:22Z',
        visibility: 'selected',
        selected_repositories_url:
          'https://api.github.com/orgs/octo-org/actions/secrets/SUPER_SECRET/repositories'
      }
    ]
  }
}
```

</details>

## [`listRepoSecrets(options)`](https://docs.github.com/rest/reference/actions#list-repository-secrets)

Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listRepoSecrets({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listRepoSecrets.all({
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
  data: {
    total_count: 2,
    secrets: [
      {
        name: 'GH_TOKEN',
        created_at: '2019-08-10T14:59:22Z',
        updated_at: '2020-01-10T14:59:22Z'
      },
      {
        name: 'GIST_ID',
        created_at: '2020-01-10T10:59:22Z',
        updated_at: '2020-01-11T11:59:22Z'
      }
    ]
  }
}
```

</details>

## [`listRepoWorkflows(options)`](https://docs.github.com/rest/reference/actions#list-repository-workflows)

Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listRepoWorkflows({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listRepoWorkflows.all({
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
  data: {
    total_count: 2,
    workflows: [
      {
        id: 161335,
        node_id: 'MDg6V29ya2Zsb3cxNjEzMzU=',
        name: 'CI',
        path: '.github/workflows/blank.yaml',
        state: 'active',
        created_at: '2020-01-08T23:48:37.000-08:00',
        updated_at: '2020-01-08T23:50:21.000-08:00',
        url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/workflows/161335',
        html_url:
          'https://github.com/octo-org/octo-repo/blob/master/.github/workflows/161335',
        badge_url:
          'https://github.com/octo-org/octo-repo/workflows/CI/badge.svg'
      },
      {
        id: 269289,
        node_id: 'MDE4OldvcmtmbG93IFNlY29uZGFyeTI2OTI4OQ==',
        name: 'Linter',
        path: '.github/workflows/linter.yaml',
        state: 'active',
        created_at: '2020-01-08T23:48:37.000-08:00',
        updated_at: '2020-01-08T23:50:21.000-08:00',
        url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/workflows/269289',
        html_url:
          'https://github.com/octo-org/octo-repo/blob/master/.github/workflows/269289',
        badge_url:
          'https://github.com/octo-org/octo-repo/workflows/Linter/badge.svg'
      }
    ]
  }
}
```

</details>

## [`listRunnerApplicationsForOrg(options)`](https://docs.github.com/rest/reference/actions#list-runner-applications-for-an-organization)

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listRunnerApplicationsForOrg({ org })
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
      os: 'osx',
      architecture: 'x64',
      download_url:
        'https://github.com/actions/runner/releases/download/v2.164.0/actions-runner-osx-x64-2.164.0.tar.gz',
      filename: 'actions-runner-osx-x64-2.164.0.tar.gz'
    },
    {
      os: 'linux',
      architecture: 'x64',
      download_url:
        'https://github.com/actions/runner/releases/download/v2.164.0/actions-runner-linux-x64-2.164.0.tar.gz',
      filename: 'actions-runner-linux-x64-2.164.0.tar.gz'
    },
    {
      os: 'linux',
      architecture: 'arm',
      download_url:
        'https://github.com/actions/runner/releases/download/v2.164.0/actions-runner-linux-arm-2.164.0.tar.gz',
      filename: 'actions-runner-linux-arm-2.164.0.tar.gz'
    },
    {
      os: 'win',
      architecture: 'x64',
      download_url:
        'https://github.com/actions/runner/releases/download/v2.164.0/actions-runner-win-x64-2.164.0.zip',
      filename: 'actions-runner-win-x64-2.164.0.zip'
    },
    {
      os: 'linux',
      architecture: 'arm64',
      download_url:
        'https://github.com/actions/runner/releases/download/v2.164.0/actions-runner-linux-arm64-2.164.0.tar.gz',
      filename: 'actions-runner-linux-arm64-2.164.0.tar.gz'
    }
  ]
}
```

</details>

## [`listRunnerApplicationsForRepo(options)`](https://docs.github.com/rest/reference/actions#list-runner-applications-for-a-repository)

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `repo` scope to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listRunnerApplicationsForRepo({
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
  data: [
    {
      os: 'osx',
      architecture: 'x64',
      download_url:
        'https://github.com/actions/runner/releases/download/v2.164.0/actions-runner-osx-x64-2.164.0.tar.gz',
      filename: 'actions-runner-osx-x64-2.164.0.tar.gz'
    },
    {
      os: 'linux',
      architecture: 'x64',
      download_url:
        'https://github.com/actions/runner/releases/download/v2.164.0/actions-runner-linux-x64-2.164.0.tar.gz',
      filename: 'actions-runner-linux-x64-2.164.0.tar.gz'
    },
    {
      os: 'linux',
      architecture: 'arm',
      download_url:
        'https://github.com/actions/runner/releases/download/v2.164.0/actions-runner-linux-arm-2.164.0.tar.gz',
      filename: 'actions-runner-linux-arm-2.164.0.tar.gz'
    },
    {
      os: 'win',
      architecture: 'x64',
      download_url:
        'https://github.com/actions/runner/releases/download/v2.164.0/actions-runner-win-x64-2.164.0.zip',
      filename: 'actions-runner-win-x64-2.164.0.zip'
    },
    {
      os: 'linux',
      architecture: 'arm64',
      download_url:
        'https://github.com/actions/runner/releases/download/v2.164.0/actions-runner-linux-arm64-2.164.0.tar.gz',
      filename: 'actions-runner-linux-arm64-2.164.0.tar.gz'
    }
  ]
}
```

</details>

## [`listSelectedReposForOrgSecret(options)`](https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret)

Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listSelectedReposForOrgSecret({
  org,
  secret_name
})
```

**Options**

- `org` (required, string)
- `secret_name` (required, string)

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
        hooks_url: 'http://api.github.com/repos/octocat/Hello-World/hooks'
      }
    ]
  }
}
```

</details>

## [`listSelectedRepositoriesEnabledGithubActionsOrganization(options)`](https://docs.github.com/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization)

Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an organization](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization).

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

**Usage**

```js
const response = await octokit.actions.listSelectedRepositoriesEnabledGithubActionsOrganization(
  { org }
)
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listSelectedRepositoriesEnabledGithubActionsOrganization.all(
  { org }
)) {
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

## [`listSelfHostedRunnersForOrg(options)`](https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-an-organization)

Lists all self-hosted runners configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listSelfHostedRunnersForOrg({ org })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listSelfHostedRunnersForOrg.all({
  org
})) {
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
    total_count: 2,
    runners: [
      {
        id: 23,
        name: 'linux_runner',
        os: 'linux',
        status: 'online',
        busy: true,
        labels: [
          {
            id: 5,
            name: 'self-hosted',
            type: 'read-only'
          },
          {
            id: 7,
            name: 'X64',
            type: 'read-only'
          },
          {
            id: 11,
            name: 'Linux',
            type: 'read-only'
          }
        ]
      },
      {
        id: 24,
        name: 'mac_runner',
        os: 'macos',
        status: 'offline',
        busy: false,
        labels: [
          {
            id: 5,
            name: 'self-hosted',
            type: 'read-only'
          },
          {
            id: 7,
            name: 'X64',
            type: 'read-only'
          },
          {
            id: 20,
            name: 'macOS',
            type: 'read-only'
          },
          {
            id: 21,
            name: 'no-gpu',
            type: 'custom'
          }
        ]
      }
    ]
  }
}
```

</details>

## [`listSelfHostedRunnersForRepo(options)`](https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-a-repository)

Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listSelfHostedRunnersForRepo({
  owner,
  repo
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listSelfHostedRunnersForRepo.all({
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
  data: {
    total_count: 2,
    runners: [
      {
        id: 23,
        name: 'linux_runner',
        os: 'linux',
        status: 'online',
        busy: true,
        labels: [
          {
            id: 5,
            name: 'self-hosted',
            type: 'read-only'
          },
          {
            id: 7,
            name: 'X64',
            type: 'read-only'
          },
          {
            id: 11,
            name: 'Linux',
            type: 'read-only'
          }
        ]
      },
      {
        id: 24,
        name: 'mac_runner',
        os: 'macos',
        status: 'offline',
        busy: false,
        labels: [
          {
            id: 5,
            name: 'self-hosted',
            type: 'read-only'
          },
          {
            id: 7,
            name: 'X64',
            type: 'read-only'
          },
          {
            id: 20,
            name: 'macOS',
            type: 'read-only'
          },
          {
            id: 21,
            name: 'no-gpu',
            type: 'custom'
          }
        ]
      }
    ]
  }
}
```

</details>

## [`listWorkflowRunArtifacts(options)`](https://docs.github.com/rest/reference/actions#list-workflow-run-artifacts)

Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listWorkflowRunArtifacts({
  owner,
  repo,
  run_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listWorkflowRunArtifacts.all({
  owner,
  repo,
  run_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `run_id` (required, integer)
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_count: 2,
    artifacts: [
      {
        id: 11,
        node_id: 'MDg6QXJ0aWZhY3QxMQ==',
        name: 'Rails',
        size_in_bytes: 556,
        url:
          'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11',
        archive_download_url:
          'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11/zip',
        expired: false,
        created_at: '2020-01-10T14:59:22Z',
        expires_at: '2020-03-21T14:59:22Z',
        updated_at: '2020-02-21T14:59:22Z'
      },
      {
        id: 13,
        node_id: 'MDg6QXJ0aWZhY3QxMw==',
        name: '',
        size_in_bytes: 453,
        url:
          'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/13',
        archive_download_url:
          'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/13/zip',
        expired: false,
        created_at: '2020-01-10T14:59:22Z',
        expires_at: '2020-03-21T14:59:22Z',
        updated_at: '2020-02-21T14:59:22Z'
      }
    ]
  }
}
```

</details>

## [`listWorkflowRuns(options)`](https://docs.github.com/rest/reference/actions#list-workflow-runs)

List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.

**Usage**

```js
const response = await octokit.actions.listWorkflowRuns({
  owner,
  repo,
  workflow_id
})
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listWorkflowRuns.all({
  owner,
  repo,
  workflow_id
})) {
  console.log(response.data)
}
```

</details>

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `workflow_id` (required): The ID of the workflow. You can also pass the workflow file name as a string.
- `actor` (string): Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
- `branch` (string): Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
- `event` (string): Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
- `status` (string): Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in "[Create a check run](https://docs.github.com/rest/reference/checks#create-a-check-run)."
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_count: 1,
    workflow_runs: [
      {
        id: 30433642,
        name: 'Build',
        node_id: 'MDEyOldvcmtmbG93IFJ1bjI2OTI4OQ==',
        head_branch: 'master',
        head_sha: 'acb5820ced9479c074f688cc328bf03f341a511d',
        run_number: 562,
        event: 'push',
        status: 'queued',
        conclusion: null,
        workflow_id: 159038,
        url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642',
        html_url: 'https://github.com/octo-org/octo-repo/actions/runs/30433642',
        pull_requests: [],
        created_at: '2020-01-22T19:33:08Z',
        updated_at: '2020-01-22T19:33:08Z',
        jobs_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/jobs',
        logs_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/logs',
        check_suite_url:
          'https://api.github.com/repos/octo-org/octo-repo/check-suites/414944374',
        artifacts_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/artifacts',
        cancel_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/cancel',
        rerun_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/rerun',
        workflow_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/workflows/159038',
        head_commit: {
          id: 'acb5820ced9479c074f688cc328bf03f341a511d',
          tree_id: 'd23f6eedb1e1b9610bbc754ddb5197bfe7271223',
          message: 'Create linter.yaml',
          timestamp: '2020-01-22T19:33:05Z',
          author: {
            name: 'Octo Cat',
            email: 'octocat@github.com'
          },
          committer: {
            name: 'GitHub',
            email: 'noreply@github.com'
          }
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
          hooks_url: 'http://api.github.com/repos/octocat/Hello-World/hooks'
        },
        head_repository: {
          id: 217723378,
          node_id: 'MDEwOlJlcG9zaXRvcnkyMTc3MjMzNzg=',
          name: 'octo-repo',
          full_name: 'octo-org/octo-repo',
          private: true,
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
          html_url: 'https://github.com/octo-org/octo-repo',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/octo-org/octo-repo',
          forks_url: 'https://api.github.com/repos/octo-org/octo-repo/forks',
          keys_url:
            'https://api.github.com/repos/octo-org/octo-repo/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/octo-org/octo-repo/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/octo-org/octo-repo/teams',
          hooks_url: 'https://api.github.com/repos/octo-org/octo-repo/hooks',
          issue_events_url:
            'https://api.github.com/repos/octo-org/octo-repo/issues/events{/number}',
          events_url: 'https://api.github.com/repos/octo-org/octo-repo/events',
          assignees_url:
            'https://api.github.com/repos/octo-org/octo-repo/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/octo-org/octo-repo/branches{/branch}',
          tags_url: 'https://api.github.com/repos/octo-org/octo-repo/tags',
          blobs_url:
            'https://api.github.com/repos/octo-org/octo-repo/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/octo-org/octo-repo/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/octo-org/octo-repo/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/octo-org/octo-repo/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/octo-org/octo-repo/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/octo-org/octo-repo/languages',
          stargazers_url:
            'https://api.github.com/repos/octo-org/octo-repo/stargazers',
          contributors_url:
            'https://api.github.com/repos/octo-org/octo-repo/contributors',
          subscribers_url:
            'https://api.github.com/repos/octo-org/octo-repo/subscribers',
          subscription_url:
            'https://api.github.com/repos/octo-org/octo-repo/subscription',
          commits_url:
            'https://api.github.com/repos/octo-org/octo-repo/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/octo-org/octo-repo/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/octo-org/octo-repo/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/octo-org/octo-repo/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/octo-org/octo-repo/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/octo-org/octo-repo/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/octo-org/octo-repo/merges',
          archive_url:
            'https://api.github.com/repos/octo-org/octo-repo/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/octo-org/octo-repo/downloads',
          issues_url:
            'https://api.github.com/repos/octo-org/octo-repo/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/octo-org/octo-repo/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/octo-org/octo-repo/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/octo-org/octo-repo/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/octo-org/octo-repo/labels{/name}',
          releases_url:
            'https://api.github.com/repos/octo-org/octo-repo/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/octo-org/octo-repo/deployments'
        }
      }
    ]
  }
}
```

</details>

## [`listWorkflowRunsForRepo(options)`](https://docs.github.com/rest/reference/actions#list-workflow-runs-for-a-repository)

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.listWorkflowRunsForRepo({ owner, repo })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.actions.listWorkflowRunsForRepo.all({
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
- `actor` (string): Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
- `branch` (string): Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
- `event` (string): Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
- `status` (string): Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in "[Create a check run](https://docs.github.com/rest/reference/checks#create-a-check-run)."
- `per_page` (integer): Results per page (max 100)
- `page` (integer): Page number of the results to fetch.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_count: 1,
    workflow_runs: [
      {
        id: 30433642,
        name: 'Build',
        node_id: 'MDEyOldvcmtmbG93IFJ1bjI2OTI4OQ==',
        head_branch: 'master',
        head_sha: 'acb5820ced9479c074f688cc328bf03f341a511d',
        run_number: 562,
        event: 'push',
        status: 'queued',
        conclusion: null,
        workflow_id: 159038,
        url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642',
        html_url: 'https://github.com/octo-org/octo-repo/actions/runs/30433642',
        pull_requests: [],
        created_at: '2020-01-22T19:33:08Z',
        updated_at: '2020-01-22T19:33:08Z',
        jobs_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/jobs',
        logs_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/logs',
        check_suite_url:
          'https://api.github.com/repos/octo-org/octo-repo/check-suites/414944374',
        artifacts_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/artifacts',
        cancel_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/cancel',
        rerun_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/runs/30433642/rerun',
        workflow_url:
          'https://api.github.com/repos/octo-org/octo-repo/actions/workflows/159038',
        head_commit: {
          id: 'acb5820ced9479c074f688cc328bf03f341a511d',
          tree_id: 'd23f6eedb1e1b9610bbc754ddb5197bfe7271223',
          message: 'Create linter.yaml',
          timestamp: '2020-01-22T19:33:05Z',
          author: {
            name: 'Octo Cat',
            email: 'octocat@github.com'
          },
          committer: {
            name: 'GitHub',
            email: 'noreply@github.com'
          }
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
          hooks_url: 'http://api.github.com/repos/octocat/Hello-World/hooks'
        },
        head_repository: {
          id: 217723378,
          node_id: 'MDEwOlJlcG9zaXRvcnkyMTc3MjMzNzg=',
          name: 'octo-repo',
          full_name: 'octo-org/octo-repo',
          private: true,
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
          html_url: 'https://github.com/octo-org/octo-repo',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/octo-org/octo-repo',
          forks_url: 'https://api.github.com/repos/octo-org/octo-repo/forks',
          keys_url:
            'https://api.github.com/repos/octo-org/octo-repo/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/octo-org/octo-repo/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/octo-org/octo-repo/teams',
          hooks_url: 'https://api.github.com/repos/octo-org/octo-repo/hooks',
          issue_events_url:
            'https://api.github.com/repos/octo-org/octo-repo/issues/events{/number}',
          events_url: 'https://api.github.com/repos/octo-org/octo-repo/events',
          assignees_url:
            'https://api.github.com/repos/octo-org/octo-repo/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/octo-org/octo-repo/branches{/branch}',
          tags_url: 'https://api.github.com/repos/octo-org/octo-repo/tags',
          blobs_url:
            'https://api.github.com/repos/octo-org/octo-repo/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/octo-org/octo-repo/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/octo-org/octo-repo/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/octo-org/octo-repo/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/octo-org/octo-repo/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/octo-org/octo-repo/languages',
          stargazers_url:
            'https://api.github.com/repos/octo-org/octo-repo/stargazers',
          contributors_url:
            'https://api.github.com/repos/octo-org/octo-repo/contributors',
          subscribers_url:
            'https://api.github.com/repos/octo-org/octo-repo/subscribers',
          subscription_url:
            'https://api.github.com/repos/octo-org/octo-repo/subscription',
          commits_url:
            'https://api.github.com/repos/octo-org/octo-repo/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/octo-org/octo-repo/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/octo-org/octo-repo/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/octo-org/octo-repo/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/octo-org/octo-repo/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/octo-org/octo-repo/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/octo-org/octo-repo/merges',
          archive_url:
            'https://api.github.com/repos/octo-org/octo-repo/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/octo-org/octo-repo/downloads',
          issues_url:
            'https://api.github.com/repos/octo-org/octo-repo/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/octo-org/octo-repo/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/octo-org/octo-repo/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/octo-org/octo-repo/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/octo-org/octo-repo/labels{/name}',
          releases_url:
            'https://api.github.com/repos/octo-org/octo-repo/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/octo-org/octo-repo/deployments'
        }
      }
    ]
  }
}
```

</details>

## [`reRunWorkflow(options)`](https://docs.github.com/rest/reference/actions#re-run-a-workflow)

Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.reRunWorkflow({ owner, repo, run_id })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `run_id` (required, integer)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = { status: 201 }
```

</details>

## [`removeSelectedRepoFromOrgSecret(options)`](https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret)

Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.removeSelectedRepoFromOrgSecret({
  org,
  secret_name,
  repository_id
})
```

**Options**

- `org` (required, string)
- `secret_name` (required, string)
- `repository_id` (required, integer)

**Response when repository was removed from the selected list (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

**Error when visibility type not set to selected (HTTP 409)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.actions.removeSelectedRepoFromOrgSecret({
    org,
    secret_name,
    repository_id
  })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`setAllowedActionsOrganization(options)`](https://docs.github.com/rest/reference/actions#set-allowed-actions-for-an-organization)

Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an organization](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization).

If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.

To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

**Usage**

```js
const response = await octokit.actions.setAllowedActionsOrganization({ org })
```

**Options**

- `org` (required, string)
- `github_owned_allowed` (boolean): Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.
- `verified_allowed` (boolean): Whether actions in GitHub Marketplace from verified creators are allowed. Set to `true` to allow all GitHub Marketplace actions by verified creators.
- `patterns_allowed` (string\[]): Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`."

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`setAllowedActionsRepository(options)`](https://docs.github.com/rest/reference/actions#set-allowed-actions-for-a-repository)

Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for a repository](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository).

If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings.

To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

**Usage**

```js
const response = await octokit.actions.setAllowedActionsRepository({
  owner,
  repo
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `github_owned_allowed` (boolean): Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.
- `verified_allowed` (boolean): Whether actions in GitHub Marketplace from verified creators are allowed. Set to `true` to allow all GitHub Marketplace actions by verified creators.
- `patterns_allowed` (string\[]): Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`."

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`setGithubActionsPermissionsOrganization(options)`](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization)

Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.

If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

**Usage**

```js
const response = await octokit.actions.setGithubActionsPermissionsOrganization({
  org,
  enabled_repositories
})
```

**Options**

- `org` (required, string)
- `enabled_repositories` (required, string): The policy that controls the repositories in the organization that are allowed to run GitHub Actions. Can be one of: `all`, `none`, or `selected`.
- `allowed_actions` (string): The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`setGithubActionsPermissionsRepository(options)`](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository)

Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.

If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

**Usage**

```js
const response = await octokit.actions.setGithubActionsPermissionsRepository({
  owner,
  repo,
  enabled
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `enabled` (required, boolean): Whether GitHub Actions is enabled on the repository.
- `allowed_actions` (string): The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`setSelectedReposForOrgSecret(options)`](https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret)

Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

**Usage**

```js
const response = await octokit.actions.setSelectedReposForOrgSecret({
  org,
  secret_name
})
```

**Options**

- `org` (required, string)
- `secret_name` (required, string)
- `selected_repository_ids` (integer\[]): An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret) endpoints.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`setSelectedRepositoriesEnabledGithubActionsOrganization(options)`](https://docs.github.com/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization)

Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see [Set GitHub Actions permissions for an organization](https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization).

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

**Usage**

```js
const response = await octokit.actions.setSelectedRepositoriesEnabledGithubActionsOrganization(
  { org, selected_repository_ids }
)
```

**Options**

- `org` (required, string)
- `selected_repository_ids` (required, integer\[]): List of repository IDs to enable for GitHub Actions.

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>
