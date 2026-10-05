import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site, deployed to GitHub Pages.
  output: "export",
  // Export routes as /path/index.html so GitHub Pages serves /path/ cleanly.
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // Two root layouts (English and Chinese) mean there's no single layout to
    // build 404.html from; global-not-found.tsx renders a full branded page.
    globalNotFound: true,
  },
};

export default nextConfig;
