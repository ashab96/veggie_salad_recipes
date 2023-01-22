/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: ["cdn.sanity.io", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;

// "postbuild": "next-sitemap --config next-sitemap.config.js"
