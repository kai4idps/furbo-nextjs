const Redirect = require('./config/redirect');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  reactStrictMode: false,
  async redirects() {
    return Redirect;
  },
  webpack: (config, { dev, isServer }) => {
    // if (dev) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }),
    );
    // }
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
        minSize: 1,
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
    domains: ['images.prismic.io', 'furbo-prismic.cdn.prismic.io'],
  },
};
