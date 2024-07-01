/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ['via.placeholder.com', 'res.cloudinary.com', 'picsum.photos'],
  },
}

module.exports = nextConfig
