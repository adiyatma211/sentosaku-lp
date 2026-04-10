import type { NextConfig } from "next";
import path from "path";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/api/v1/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
        ],
      },
    ];
  },
  images: {
    unoptimized: false, // Remove once images are working - temporary disable to test optimization issues
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
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gadingprint.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    };
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
});

