import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The repository's default tsconfig also includes Cloudflare Worker files,
  // which are not part of the standard Next.js/Vercel application build.
  typescript: {
    tsconfigPath:
      process.env.npm_lifecycle_event === "build:vercel"
        ? "tsconfig.vercel.json"
        : "tsconfig.json",
  },
};

export default nextConfig;
