/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["tour.ci", "www.tour.ci", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tour.ci",
      },
      {
        protocol: "https",
        hostname: "www.tour.ci",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
