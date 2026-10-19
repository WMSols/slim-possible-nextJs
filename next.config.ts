import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  // Disabled: Next.js 16.4 Cache Components hangs on Cloudflare Workers
  // (workerd + OpenNext 1.20.x). Re-enable after OpenNext ships the
  // CacheSignal(null) / staged-render fix (opennextjs-cloudflare#1318).
  // cacheComponents: true,
  // partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
