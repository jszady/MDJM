import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow"
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/work",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
