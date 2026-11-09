import type { NextConfig } from "next";

/**
 * GitHub Pages serves a project site from https://<user>.github.io/<repo>/,
 * so every asset and link needs the "/<repo>" prefix. The deploy workflow
 * sets NEXT_PUBLIC_BASE_PATH for you; locally it is empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
