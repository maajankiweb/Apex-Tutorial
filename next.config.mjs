/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable Webpack disk pack file cache in dev mode on Windows to eliminate 0.pack.gz ENOENT crashes
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
