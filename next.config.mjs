/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure proper routing for both App Router and Pages Router
  trailingSlash: false,
  // Exclude non-existent app router paths from being scanned
  experimental: {
    turbo: {
      resolveAlias: {
        // Prevent Turbopack from trying to resolve these paths
      },
    },
  },
};

export default nextConfig;
