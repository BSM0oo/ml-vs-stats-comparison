/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/ml-vs-stats-comparison',
  images: {
    unoptimized: true
  },
  assetPrefix: '/ml-vs-stats-comparison/',
  trailingSlash: true
};

module.exports = nextConfig;