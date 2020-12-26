# `octokit.billing`

[Previous: apps](apps.md) \| [Index](README.md) \| [Next: checks](checks.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`getGithubActionsBillingOrg(options)`](#getgithubactionsbillingorgoptions)
- [`getGithubActionsBillingUser(options)`](#getgithubactionsbillinguseroptions)
- [`getGithubPackagesBillingOrg(options)`](#getgithubpackagesbillingorgoptions)
- [`getGithubPackagesBillingUser(options)`](#getgithubpackagesbillinguseroptions)
- [`getSharedStorageBillingOrg(options)`](#getsharedstoragebillingorgoptions)
- [`getSharedStorageBillingUser(options)`](#getsharedstoragebillinguseroptions)

</details>

## [`getGithubActionsBillingOrg(options)`](https://docs.github.com/v3/billing/#get-github-actions-billing-for-an-organization)

Gets the summary of the free and paid GitHub Actions minutes used.

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see [Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions).

Access tokens must have the `read:org` scope.

**Usage**

```js
const response = await octokit.billing.getGithubActionsBillingOrg({ org })
```

**Options**

- `org` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_minutes_used: 305,
    total_paid_minutes_used: 0,
    included_minutes: 3000,
    minutes_used_breakdown: {
      UBUNTU: 205,
      MACOS: 10,
      WINDOWS: 90
    }
  }
}
```

</details>

## [`getGithubActionsBillingUser(options)`](https://docs.github.com/v3/billing/#get-github-actions-billing-for-a-user)

Gets the summary of the free and paid GitHub Actions minutes used.

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see [Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions).

Access tokens must have the `user` scope.

**Usage**

```js
const response = await octokit.billing.getGithubActionsBillingUser({ username })
```

**Options**

- `username` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_minutes_used: 305,
    total_paid_minutes_used: 0,
    included_minutes: 3000,
    minutes_used_breakdown: {
      UBUNTU: 205,
      MACOS: 10,
      WINDOWS: 90
    }
  }
}
```

</details>

## [`getGithubPackagesBillingOrg(options)`](https://docs.github.com/v3/billing/#get-github-packages-billing-for-an-organization)

Gets the free and paid storage usued for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see [Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).

Access tokens must have the `read:org` scope.

**Usage**

```js
const response = await octokit.billing.getGithubPackagesBillingOrg({ org })
```

**Options**

- `org` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_gigabytes_bandwidth_used: 50,
    total_paid_gigabytes_bandwidth_used: 40,
    included_gigabytes_bandwidth: 10
  }
}
```

</details>

## [`getGithubPackagesBillingUser(options)`](https://docs.github.com/v3/billing/#get-github-packages-billing-for-a-user)

Gets the free and paid storage used for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see [Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).

Access tokens must have the `user` scope.

**Usage**

```js
const response = await octokit.billing.getGithubPackagesBillingUser({
  username
})
```

**Options**

- `username` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    total_gigabytes_bandwidth_used: 50,
    total_paid_gigabytes_bandwidth_used: 40,
    included_gigabytes_bandwidth: 10
  }
}
```

</details>

## [`getSharedStorageBillingOrg(options)`](https://docs.github.com/v3/billing/#get-shared-storage-billing-for-an-organization)

Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see [Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).

Access tokens must have the `read:org` scope.

**Usage**

```js
const response = await octokit.billing.getSharedStorageBillingOrg({ org })
```

**Options**

- `org` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    days_left_in_billing_cycle: 20,
    estimated_paid_storage_for_month: 15,
    estimated_storage_for_month: 40
  }
}
```

</details>

## [`getSharedStorageBillingUser(options)`](https://docs.github.com/v3/billing/#get-shared-storage-billing-for-a-user)

Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see [Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).

Access tokens must have the `user` scope.

**Usage**

```js
const response = await octokit.billing.getSharedStorageBillingUser({ username })
```

**Options**

- `username` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    days_left_in_billing_cycle: 20,
    estimated_paid_storage_for_month: 15,
    estimated_storage_for_month: 40
  }
}
```

</details>
