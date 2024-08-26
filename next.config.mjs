// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // 提供對於前端的 polyfills
        config.resolve.fallback = { fs: false, net: false, tls: false };
      }
      // 啟用實驗性功能
      config.experiments = {
        topLevelAwait: true,
        layers: true,
        asyncWebAssembly: true
      };
      return config;
    },
    swcMinify: true,
    experimental: {
      esmExternals: true  // 允許使用 ESM 模塊
    }
  };
  
  export default nextConfig;
  