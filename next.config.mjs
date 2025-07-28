/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ required for static site generation
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
