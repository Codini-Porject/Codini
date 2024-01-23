/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Borat_in_Cologne.jpg",
      "upload.wikimedia.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
