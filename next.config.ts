import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/paia", destination: "/paia-manual", permanent: true },
    ];
  },
};

export default nextConfig;
