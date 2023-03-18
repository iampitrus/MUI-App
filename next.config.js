/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "is4-ssl.mzstatic.com",
      "is5-ssl.mzstatic.com",
      "lh3.googleusercontent.com",
      "graph.facebook.com",
    ],
  },
};

module.exports = nextConfig;
