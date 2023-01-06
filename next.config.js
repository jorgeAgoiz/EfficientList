/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.istockphoto.**',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.**'
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.**'
      }
    ],
  },
}

module.exports = nextConfig
