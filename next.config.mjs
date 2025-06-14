/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Essential for static HTML export
  reactStrictMode: true, // Recommended for React apps
  basePath:  '',
  assetPrefix: '',

  images: {
    unoptimized: true, // Recommended for static export as Next.js image optimization needs a server
  },
};

export default nextConfig;
