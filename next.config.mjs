/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure proper routing for both App Router and Pages Router
  trailingSlash: false,
  // Compress output
  compress: true,
  images: {
    // Add smaller device sizes so high-DPR mobile screens don't jump straight to 640/750w.
    deviceSizes: [320, 324, 328, 360, 420, 480, 560, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply font-display: swap to all font files from Google Fonts
        source: '/:path*.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Optimize CSS chunk loading with proper caching
        source: '/_next/static/chunks/:path*.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
