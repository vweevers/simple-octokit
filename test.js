'use strict'

const test = require('tape')
const nock = require('nock')
const simpleOctokit = require('.')

test('pagination', async function (t) {
  const octokit = simpleOctokit('fake-token')

  nock('https://api.github.com')
    .get('/repos/octocat/hello-world/issues?per_page=2')
    .reply(function (uri, requestBody, cb) {
      const body = [{
        number: 1,
        title: 'Found a bug'
      }, {
        number: 2,
        title: 'Found another bug'
      }]

      const headers = {
        link: '<https://api.github.com/repos/octocat/hello-world/issues?per_page=2&page=2>; rel="next"'
      }

      cb(null, [200, body, headers])
    })
    .get('/repos/octocat/hello-world/issues?per_page=2&page=2')
    .reply(function (uri, requestBody, cb) {
      const body = [{
        number: 3,
        title: 'Bump dependencies'
      }]

      cb(null, [200, body])
    })

  const iterable = octokit.issues.listForRepo.all({
    owner: 'octocat',
    repo: 'hello-world',
    per_page: 2
  })

  const pages = []

  for await (const response of iterable) {
    pages.push(response)
  }

  t.same(pages, [{
    status: 200,
    url: 'https://api.github.com/repos/octocat/hello-world/issues?per_page=2',
    headers: {
      'content-type': 'application/json',
      link: '<https://api.github.com/repos/octocat/hello-world/issues?per_page=2&page=2>; rel="next"'
    },
    data: [{
      number: 1,
      title: 'Found a bug'
    }, {
      number: 2,
      title: 'Found another bug'
    }]
  }, {
    status: 200,
    url: 'https://api.github.com/repos/octocat/hello-world/issues?per_page=2&page=2',
    headers: {
      'content-type': 'application/json'
    },
    data: [{
      number: 3,
      title: 'Bump dependencies'
    }]
  }])
})
