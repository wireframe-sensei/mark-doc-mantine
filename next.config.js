const withMarkdoc = require('@markdoc/next.js');

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = './'
let basePath = '/out'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `https://wireframe-sensei.github.io/${repo}/`
  basePath = `/${repo}`
}

module.exports =
  withMarkdoc(/* config: https://markdoc.io/docs/nextjs#options */)({
    basePath,
    assetPrefix,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
    trailingSlash: true,
  });
