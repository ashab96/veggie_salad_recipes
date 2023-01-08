/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.sndimg.com",
        port: "",
        pathname:
          "/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/39/62/22/",
      },
    ],
  },
};

module.exports = nextConfig;
