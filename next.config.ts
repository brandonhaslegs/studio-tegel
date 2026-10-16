import type { NextConfig } from "next";

// Static export for Strato (Apache, no Node.js): `npm run build` writes the site to `out/`.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
