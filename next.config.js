const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      if (ANALYZE) {
        config.plugins.push(new BundleAnalyzerPlugin());
      }
    }
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
        '@material-ui/core': '@material-ui/core/esm',
        '@material-ui/icons': '@material-ui/icons/esm',
      };
      config.optimization.splitChunks = {
        maxSize: 300000,
        chunks: 'all',
        cacheGroups: {
          commons: {
            name: 'commons',
            minChunks: 2,
          },
        },
      };
    }
    return config;
  },
  images: {
    domains: [
      'images.prismic.io',
      'furbo-prismic.cdn.prismic.io',
      'cdn.shopify.com',
    ],
  },
};
