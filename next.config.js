const useSubDirectory = process.env.USE_SUB_DIRECTORY === 'true'

module.exports = {
  reactStrictMode: true,
  assetPrefix: useSubDirectory ? '/animefest-next-site-2022/' : '',
  basePath: useSubDirectory ? '/animefest-next-site-2022' : ''
}
