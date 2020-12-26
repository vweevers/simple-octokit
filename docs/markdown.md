# `octokit.markdown`

[Previous: licenses](licenses.md) \| [Index](README.md) \| [Next: meta](meta.md)

## Table of Contents

<details><summary>Click to expand</summary>

- [`render(options)`](#renderoptions)
- [`renderRaw(options)`](#renderrawoptions)

</details>

## [`render(options)`](https://docs.github.com/v3/markdown/#render-a-markdown-document)

**Usage**

```js
const response = await octokit.markdown.render({ text })
```

**Options**

- `text` (required, string): The Markdown text to render in HTML.
- `mode` (string): The rendering mode.
- `context` (string): The repository context to use when creating references in `gfm` mode.

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>

## [`renderRaw(options)`](https://docs.github.com/v3/markdown/#render-a-markdown-document-in-raw-mode)

You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.

**Usage**

```js
const response = await octokit.markdown.renderRaw({ data })
```

**Options**

- `data` (required, string): raw markdown text

**Response (HTTP 200)**

<details><summary>Example</summary>

```js
const response = { status: 200 }
```

</details>
