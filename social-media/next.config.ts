import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "*.googleusercontent.com", protocol: "https" },
      { hostname: "localhost", protocol: "http" },
    ],
  },
};

export default nextConfig;
