/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure proper routing for both App Router and Pages Router
  trailingSlash: false,
  images: {
    // Add smaller device sizes so high-DPR mobile screens don't jump straight to 640/750w.
    deviceSizes: [320, 360, 420, 480, 560, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
