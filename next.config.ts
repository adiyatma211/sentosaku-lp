import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/projects/**',
      },
      {
        protocol: 'https',
        hostname: 'dashboard.sentosakutech.com',
        port: '',
        pathname: '/projects/**',
      },
      {
        protocol: 'http',
        hostname: 'dashboard.sentosakutech.com',
        port: '',
        pathname: '/projects/**',
      },
    ],
  },
};

export default nextConfig;
