const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@styles/_variables.scss"; @import "@styles/_mixins.scss";`, // prependData 옵션 추가
  },
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }

    return config
  },
}

module.exports = nextConfig
