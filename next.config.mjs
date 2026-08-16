/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  // Static export-style for Vercel / any static host
  output: undefined,
  trailingSlash: false,
};

export default nextConfig;
