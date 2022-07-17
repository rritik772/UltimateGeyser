/** @type {import('next').NextConfig} */

const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

const nextConfig = {
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {domains: ['firebasestorage.googleapis.com']},
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    DATABASEURL: process.env.DATABASEURL,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
    APPID: process.env.APPID,
    MEASUREMENTID: process.env.MEASUREMENTID
  }

}

module.exports = nextConfig
