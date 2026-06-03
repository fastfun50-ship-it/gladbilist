import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images from public/ are auto-optimized.
    // Add remotePatterns here if you ever pull from external CDNs.
    remotePatterns: [],
    // Optimize for Core Web Vitals (95+ target)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
  },
  // Clean URLs and better SEO
  trailingSlash: false,
  // Enable React strict mode for better dev experience
  reactStrictMode: true,
  // Recommended for GSAP + Lenis performance
  experimental: {
    optimizePackageImports: ["gsap", "framer-motion", "lucide-react"],
  },
};

export default nextConfig;
