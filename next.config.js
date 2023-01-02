const path = require('path')

const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }

    return config
  },
}

module.exports = withPlugins(
  [[withPWA, { pwa: { dest: 'public' } }]],
  nextConfig
)
