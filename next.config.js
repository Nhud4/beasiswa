/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withTM = require('next-transpile-modules')(['@mui/x-date-pickers']);

module.exports = withTM({});
