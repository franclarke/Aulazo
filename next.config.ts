import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Image domains configuration
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ui-avatars.com',
				port: '',
				pathname: '/api/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
		],
	},
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
