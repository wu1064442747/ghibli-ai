/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
<<<<<<< HEAD
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
} 
=======
    domains: ['example.com'], // 添加您的图片域名
  },
}

module.exports = nextConfig 
>>>>>>> 2fad80e7f1060f51d92b717b4fa501d99e9fe465
