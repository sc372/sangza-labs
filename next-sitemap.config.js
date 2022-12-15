/** @type {import('next-sitemap').IConfig} */

const siteConfig = require('./site.config')

module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true,
  exclude: ['/sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteConfig.url}/sitemap.xml`],
  },
}
