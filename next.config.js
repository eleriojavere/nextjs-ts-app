/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flipdish.imgix.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
