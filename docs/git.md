# `octokit.git`

[Previous: gists](gists.md) \| [Index](README.md) \| [Next: gitignore](gitignore.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`createBlob(options)`](#createbloboptions)
- [`createCommit(options)`](#createcommitoptions)
- [`createRef(options)`](#createrefoptions)
- [`createTag(options)`](#createtagoptions)
- [`createTree(options)`](#createtreeoptions)
- [`deleteRef(options)`](#deleterefoptions)
- [`getBlob(options)`](#getbloboptions)
- [`getCommit(options)`](#getcommitoptions)
- [`getRef(options)`](#getrefoptions)
- [`getTag(options)`](#gettagoptions)
- [`getTree(options)`](#gettreeoptions)
- [`listMatchingRefs(options)`](#listmatchingrefsoptions)
- [`updateRef(options)`](#updaterefoptions)

</details>

## [`createBlob(options)`](https://docs.github.com/rest/reference/git#create-a-blob)

**Usage**

```js
const response = await octokit.git.createBlob({ owner, repo, content })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `content` (required, string): The new blob's content.
- `encoding` (string): The encoding used for `content`. Currently, `"utf-8"` and `"base64"` are supported.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    url:
      'https://api.github.com/repos/octocat/example/git/blobs/3a0f86fb8db8eea7ccbb9a95f325ddbedfb25e15',
    sha: '3a0f86fb8db8eea7ccbb9a95f325ddbedfb25e15'
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.git.createBlob({ owner, repo, content })
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
  response = await octokit.git.createBlob({ owner, repo, content })
} catch (err) {
  if (err.status === 409) {
    // ..
  }
}
```

</details>

## [`createCommit(options)`](https://docs.github.com/rest/reference/git#create-a-commit)

Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

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
const response = await octokit.git.createCommit({ owner, repo, message, tree })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `message` (required, string): The commit message
- `tree` (required, string): The SHA of the tree object this commit points to
- `parents` (string\[]): The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.
- `author` (object): Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
- `author.name` (string): The name of the author (or committer) of the commit
- `author.email` (string): The email of the author (or committer) of the commit
- `author.date` (string): Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `committer` (object): Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
- `committer.name` (string): The name of the author (or committer) of the commit
- `committer.email` (string): The email of the author (or committer) of the commit
- `committer.date` (string): Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
- `signature` (string): The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the `gpgsig` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a `signature` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    sha: '7638417db6d59f3c431d3e1f261cc637155684cd',
    node_id:
      'MDY6Q29tbWl0NzYzODQxN2RiNmQ1OWYzYzQzMWQzZTFmMjYxY2M2MzcxNTU2ODRjZA==',
    url:
      'https://api.github.com/repos/octocat/Hello-World/git/commits/7638417db6d59f3c431d3e1f261cc637155684cd',
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
        'https://api.github.com/repos/octocat/Hello-World/git/trees/827efc6d56897b048c772eb4087f854f46256132',
      sha: '827efc6d56897b048c772eb4087f854f46256132'
    },
    parents: [
      {
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/commits/7d1b31e74ee336d15cbd21741bc88a537ed063a0',
        sha: '7d1b31e74ee336d15cbd21741bc88a537ed063a0'
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
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.git.createCommit({ owner, repo, message, tree })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`createRef(options)`](https://docs.github.com/rest/reference/git#create-a-reference)

Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.

**Usage**

```js
const response = await octokit.git.createRef({ owner, repo, ref, sha })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string): The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
- `sha` (required, string): The SHA1 value for this reference.
- `key` (string)

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    ref: 'refs/heads/featureA',
    node_id: 'MDM6UmVmcmVmcy9oZWFkcy9mZWF0dXJlQQ==',
    url:
      'https://api.github.com/repos/octocat/Hello-World/git/refs/heads/featureA',
    object: {
      type: 'commit',
      sha: 'aa218f56b14c9653891f9e74264a383fa43fefbd',
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/commits/aa218f56b14c9653891f9e74264a383fa43fefbd'
    }
  }
}
```

</details>

## [`createTag(options)`](https://docs.github.com/rest/reference/git#create-a-tag-object)

Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.

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
const response = await octokit.git.createTag({
  owner,
  repo,
  tag,
  message,
  object,
  type
})
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `tag` (required, string): The tag's name. This is typically a version (e.g., "v0.0.1").
- `message` (required, string): The tag message.
- `object` (required, string): The SHA of the git object this is tagging.
- `type` (required, string): The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
- `tagger` (object): An object with information about the individual creating the tag.
- `tagger.name` (string): The name of the author of the tag
- `tagger.email` (string): The email of the author of the tag
- `tagger.date` (string): When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    node_id: 'MDM6VGFnOTQwYmQzMzYyNDhlZmFlMGY5ZWU1YmM3YjJkNWM5ODU4ODdiMTZhYw==',
    tag: 'v0.0.1',
    sha: '940bd336248efae0f9ee5bc7b2d5c985887b16ac',
    url:
      'https://api.github.com/repos/octocat/Hello-World/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac',
    message: 'initial version',
    tagger: {
      name: 'Monalisa Octocat',
      email: 'octocat@github.com',
      date: '2014-11-07T22:01:45Z'
    },
    object: {
      type: 'commit',
      sha: 'c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c',
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/commits/c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c'
    },
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null
    }
  }
}
```

</details>

## [`createTree(options)`](https://docs.github.com/rest/reference/git#create-a-tree)

The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.

If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see [Create a commit](https://docs.github.com/rest/reference/git#create-a-commit) and [Update a reference](https://docs.github.com/rest/reference/git#update-a-reference).

**Usage**

```js
const response = await octokit.git.createTree({ owner, repo, tree })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `tree` (required, object\[]): Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure.
- `tree[].path` (string): The file referenced in the tree.
- `tree[].mode` (string): The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.
- `tree[].type` (string): Either `blob`, `tree`, or `commit`.
- `tree[].sha` (string): The SHA1 checksum ID of the object in the tree. Also called `tree.sha`. If the value is `null` then the file will be deleted.

**Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.

- `tree[].content` (string): The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.

**Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.

- `base_tree` (string): The SHA1 of the tree you want to update with new data. If you don't set this, the commit will be created on top of everything; however, it will only contain your change, the rest of your files will show up as deleted.

**Response (HTTP 201)**

<details><summary>Example</summary>

```js
const response = {
  status: 201,
  data: {
    sha: 'cd8274d15fa3ae2ab983129fb037999f264ba9a7',
    url:
      'https://api.github.com/repos/octocat/Hello-World/trees/cd8274d15fa3ae2ab983129fb037999f264ba9a7',
    tree: [
      {
        path: 'file.rb',
        mode: '100644',
        type: 'blob',
        size: 132,
        sha: '7c258a9869f33c1e1e1f74fbb32f07c86cb5a75b',
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/blobs/7c258a9869f33c1e1e1f74fbb32f07c86cb5a75b'
      }
    ],
    truncated: true
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.git.createTree({ owner, repo, tree })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`deleteRef(options)`](https://docs.github.com/rest/reference/git#delete-a-reference)

**Usage**

```js
const response = await octokit.git.deleteRef({ owner, repo, ref })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string)

**Empty response (HTTP 204)**

<details><summary>Example</summary>

```js
const response = { status: 204 }
```

</details>

## [`getBlob(options)`](https://docs.github.com/rest/reference/git#get-a-blob)

The `content` in the response will always be Base64 encoded.

_Note_: This API supports blobs up to 100 megabytes in size.

**Usage**

```js
const response = await octokit.git.getBlob({ owner, repo, file_sha })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `file_sha` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    content: 'Q29udGVudCBvZiB0aGUgYmxvYg==',
    encoding: 'base64',
    url:
      'https://api.github.com/repos/octocat/example/git/blobs/3a0f86fb8db8eea7ccbb9a95f325ddbedfb25e15',
    sha: '3a0f86fb8db8eea7ccbb9a95f325ddbedfb25e15',
    size: 19,
    node_id: 'Q29udGVudCBvZiB0aGUgYmxvYg=='
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.git.getBlob({ owner, repo, file_sha })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getCommit(options)`](https://docs.github.com/rest/reference/git#get-a-commit)

Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

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
const response = await octokit.git.getCommit({ owner, repo, commit_sha })
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
  data: {
    sha: '7638417db6d59f3c431d3e1f261cc637155684cd',
    node_id:
      'MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==',
    url:
      'https://api.github.com/repos/octocat/Hello-World/git/commits/7638417db6d59f3c431d3e1f261cc637155684cd',
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
    message: 'added readme, because im a good github citizen',
    tree: {
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/trees/691272480426f78a0138979dd3ce63b77f706feb',
      sha: '691272480426f78a0138979dd3ce63b77f706feb'
    },
    parents: [
      {
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/commits/1acc419d4d6a9ce985db7be48c6349a0475975b5',
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
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.git.getCommit({ owner, repo, commit_sha })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getRef(options)`](https://docs.github.com/rest/reference/git#get-a-reference)

Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see [Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests).

**Usage**

```js
const response = await octokit.git.getRef({ owner, repo, ref })
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
    ref: 'refs/heads/featureA',
    node_id: 'MDM6UmVmcmVmcy9oZWFkcy9mZWF0dXJlQQ==',
    url:
      'https://api.github.com/repos/octocat/Hello-World/git/refs/heads/featureA',
    object: {
      type: 'commit',
      sha: 'aa218f56b14c9653891f9e74264a383fa43fefbd',
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/commits/aa218f56b14c9653891f9e74264a383fa43fefbd'
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.git.getRef({ owner, repo, ref })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getTag(options)`](https://docs.github.com/rest/reference/git#get-a-tag)

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
const response = await octokit.git.getTag({ owner, repo, tag_sha })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `tag_sha` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    node_id: 'MDM6VGFnOTQwYmQzMzYyNDhlZmFlMGY5ZWU1YmM3YjJkNWM5ODU4ODdiMTZhYw==',
    tag: 'v0.0.1',
    sha: '940bd336248efae0f9ee5bc7b2d5c985887b16ac',
    url:
      'https://api.github.com/repos/octocat/Hello-World/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac',
    message: 'initial version',
    tagger: {
      name: 'Monalisa Octocat',
      email: 'octocat@github.com',
      date: '2014-11-07T22:01:45Z'
    },
    object: {
      type: 'commit',
      sha: 'c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c',
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/commits/c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c'
    },
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null
    }
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.git.getTag({ owner, repo, tag_sha })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`getTree(options)`](https://docs.github.com/rest/reference/git#get-a-tree)

Returns a single tree using the SHA1 value for that tree.

If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.

**Usage**

```js
const response = await octokit.git.getTree({ owner, repo, tree_sha })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `tree_sha` (required, string)
- `recursive` (string): Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `"true"`, and `"false"`. Omit this parameter to prevent recursively returning objects or subtrees.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    sha: '9fb037999f264ba9a7fc6274d15fa3ae2ab98312',
    url:
      'https://api.github.com/repos/octocat/Hello-World/trees/9fb037999f264ba9a7fc6274d15fa3ae2ab98312',
    tree: [
      {
        path: 'file.rb',
        mode: '100644',
        type: 'blob',
        size: 30,
        sha: '44b4fc6d56897b048c772eb4087f854f46256132',
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/blobs/44b4fc6d56897b048c772eb4087f854f46256132'
      },
      {
        path: 'subdir',
        mode: '040000',
        type: 'tree',
        sha: 'f484d249c660418515fb01c2b9662073663c242e',
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/blobs/f484d249c660418515fb01c2b9662073663c242e'
      },
      {
        path: 'exec_file',
        mode: '100755',
        type: 'blob',
        size: 75,
        sha: '45b983be36b73c0788dc9cbcb76cbb80fc7bb057',
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/blobs/45b983be36b73c0788dc9cbcb76cbb80fc7bb057'
      }
    ],
    truncated: false
  }
}
```

</details>

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    sha: 'fc6274d15fa3ae2ab983129fb037999f264ba9a7',
    url:
      'https://api.github.com/repos/octocat/Hello-World/trees/fc6274d15fa3ae2ab983129fb037999f264ba9a7',
    tree: [
      {
        path: 'subdir/file.txt',
        mode: '100644',
        type: 'blob',
        size: 132,
        sha: '7c258a9869f33c1e1e1f74fbb32f07c86cb5a75b',
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/7c258a9869f33c1e1e1f74fbb32f07c86cb5a75b'
      }
    ],
    truncated: false
  }
}
```

</details>

**Error when resource is not found (HTTP 404)**

<details><summary>Example</summary>

```js
try {
  response = await octokit.git.getTree({ owner, repo, tree_sha })
} catch (err) {
  if (err.status === 404) {
    // ..
  }
}
```

</details>

## [`listMatchingRefs(options)`](https://docs.github.com/rest/reference/git#list-matching-references)

Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.

When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see [Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests).

If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.

**Usage**

```js
const response = await octokit.git.listMatchingRefs({ owner, repo, ref })
```

**Fetch all pages**

<details><summary>Example</summary>

```js
for await (const response of octokit.git.listMatchingRefs.all({
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
      ref: 'refs/heads/feature-a',
      node_id: 'MDM6UmVmcmVmcy9oZWFkcy9mZWF0dXJlLWE=',
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/refs/heads/feature-a',
      object: {
        type: 'commit',
        sha: 'aa218f56b14c9653891f9e74264a383fa43fefbd',
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/commits/aa218f56b14c9653891f9e74264a383fa43fefbd'
      }
    },
    {
      ref: 'refs/heads/feature-b',
      node_id: 'MDM6UmVmcmVmcy9oZWFkcy9mZWF0dXJlLWI=',
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/refs/heads/feature-b',
      object: {
        type: 'commit',
        sha: '612077ae6dffb4d2fbd8ce0cccaa58893b07b5ac',
        url:
          'https://api.github.com/repos/octocat/Hello-World/git/commits/612077ae6dffb4d2fbd8ce0cccaa58893b07b5ac'
      }
    }
  ]
}
```

</details>

## [`updateRef(options)`](https://docs.github.com/rest/reference/git#update-a-reference)

**Usage**

```js
const response = await octokit.git.updateRef({ owner, repo, ref, sha })
```

**Options**

- `owner` (required, string)
- `repo` (required, string)
- `ref` (required, string)
- `sha` (required, string): The SHA1 value to set this reference to
- `force` (boolean): Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    ref: 'refs/heads/featureA',
    node_id: 'MDM6UmVmcmVmcy9oZWFkcy9mZWF0dXJlQQ==',
    url:
      'https://api.github.com/repos/octocat/Hello-World/git/refs/heads/featureA',
    object: {
      type: 'commit',
      sha: 'aa218f56b14c9653891f9e74264a383fa43fefbd',
      url:
        'https://api.github.com/repos/octocat/Hello-World/git/commits/aa218f56b14c9653891f9e74264a383fa43fefbd'
    }
  }
}
```

</details>
