/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ensure static files are copied to the output directory
  async rewrites() {
    return [
      {
        source: '/ads.txt',
        destination: '/api/ads.txt',
      },
    ];
  },
};

module.exports = nextConfig;
