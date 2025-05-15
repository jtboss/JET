/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || "hey.jjedwards@gmail.com",
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  // Vercel specific settings
  trailingSlash: false,
}

module.exports = nextConfig 