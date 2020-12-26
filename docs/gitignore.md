# `octokit.gitignore`

[Previous: git](git.md) \| [Index](README.md) \| [Next: interactions](interactions.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`getAllTemplates()`](#getalltemplates)
- [`getTemplate(options)`](#gettemplateoptions)

</details>

## [`getAllTemplates()`](https://docs.github.com/v3/gitignore/#get-all-gitignore-templates)

List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user).

**Usage**

```js
const response = await octokit.gitignore.getAllTemplates()
```

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: [
    'Actionscript',
    'Android',
    'AppceleratorTitanium',
    'Autotools',
    'Bancha',
    'C',
    'C++'
  ]
}
```

</details>

## [`getTemplate(options)`](https://docs.github.com/v3/gitignore/#get-a-gitignore-template)

The API also allows fetching the source of a single template. Use the raw [media type](https://docs.github.com/rest/overview/media-types/) to get the raw contents.

**Usage**

```js
const response = await octokit.gitignore.getTemplate({ name })
```

**Options**

- `name` (required, string)

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = {
  status: 200,
  data: {
    name: 'C',
    source:
      '# Object files\n*.o\n\n# Libraries\n*.lib\n*.a\n\n# Shared objects (inc. Windows DLLs)\n*.dll\n*.so\n*.so.*\n*.dylib\n\n# Executables\n*.exe\n*.out\n*.app\n'
  }
}
```

</details>
