const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /lottie\.json$/,
      type: "json",
    });
    return config;
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
