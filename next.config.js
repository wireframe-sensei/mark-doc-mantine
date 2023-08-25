const withMarkdoc = require('@markdoc/next.js');

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports =
  withMarkdoc(/* config: https://markdoc.io/docs/nextjs#options */)({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
    trailingSlash: true,
    optimization: {
      minimize: false,
    },
  });
