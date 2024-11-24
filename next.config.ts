import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "farelart.github.io",
      },
    ],
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/product-cart-list-first" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/product-cart-list-first/" : "",
};

export default nextConfig;
