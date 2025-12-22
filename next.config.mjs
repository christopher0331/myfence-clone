/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
