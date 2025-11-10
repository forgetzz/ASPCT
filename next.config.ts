import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
 remotePatterns: [
   {
    protocol: "https",
    hostname: "cdn.something.com"
   }
 ]
    
  },

};

export default nextConfig;
