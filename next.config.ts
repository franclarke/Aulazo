import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporary workaround for webpack minification issue
  webpack: (config) => {
    // Only disable minification in development to avoid build issues
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimize = false;
    }
    return config;
  },
};

export default nextConfig;
