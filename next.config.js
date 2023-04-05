/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mathiasbynens.be",
      },
      {
        protocol: "https",
        hostname: "laetro-production.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "laetro-staging.s3.amazonaws.com",
      },
    ],
    domains: ["https://laetro-staging.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
