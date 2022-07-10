/** @type {import('next').NextConfig} */

const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

const nextConfig = {
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
