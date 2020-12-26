'use strict'

const { Octokit } = require('@octokit/core')
const { paginateRest } = require('@octokit/plugin-paginate-rest')
const { restEndpointMethods: rest } = require('@octokit/plugin-rest-endpoint-methods')
const { throttling } = require('@octokit/plugin-throttling')
const { retry } = require('@octokit/plugin-retry')

const autoAgent = require('auto-http-agent')
const iterables = require('./iterables')
const version = require('./package.json').version
const SimpleOctokit = Octokit.plugin(paginateRest, rest, throttling, retry)

module.exports = function simpleOctokit (options) {
  if (typeof options === 'string') {
    return simpleOctokit({ auth: options })
  }

  const { keepAlive, ...rest } = options || {}
  const userAgent = rest.userAgent || `simple-octokit/${version}`
  const baseUrl = rest.baseUrl || process.env.GITHUB_API_URL || 'https://api.github.com'
  const auth = rest.auth || process.env.GITHUB_TOKEN

  if (!auth) {
    throw new Error(
      'The auth option or GITHUB_TOKEN environment variable is required'
    )
  }

  const octokit = new SimpleOctokit({
    ...rest,
    userAgent,
    baseUrl,
    auth,
    request: requestOptions(rest, baseUrl, keepAlive),
    throttle: throttleOptions(rest)
  })

  for (const scope in iterables) {
    for (const id of iterables[scope]) {
      const request = octokit[scope][id]

      request.all = function (...args) {
        return octokit.paginate.iterator(request, ...args)
      }
    }
  }

  return octokit
}

function requestOptions (options, baseUrl, keepAlive) {
  return { ...options.request, agent: agent(options, baseUrl, keepAlive) }
}

function agent (options, baseUrl, keepAlive) {
  if (options.request && options.request.agent) {
    return options.request.agent
  } else {
    return autoAgent(baseUrl, { keepAlive })
  }
}

function throttleOptions (options) {
  return {
    onRateLimit (retryAfter, xopts, octokit) {
      return xopts.request.retryCount < 3
    },
    onAbuseLimit (retryAfter, xopts, octokit) {
      return xopts.request.retryCount === 0
    },
    ...options.throttle
  }
}
