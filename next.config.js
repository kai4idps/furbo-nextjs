const Redirect = require('./config/redirect');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const path = require('path');

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  async redirects() {
    return Redirect;
  },
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin());
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
        '@material-ui/core': '@material-ui/core/esm',
        '@material-ui/icons': '@material-ui/icons/esm',
        '@babel/runtime': path.resolve(
          __dirname,
          'node_modules/@babel/runtime',
        ),
        'react-is': path.resolve(__dirname, 'node_modules/react-is'),
      };
    }
    // 1 ~ 400k
    // 10000 ~ 400k

    if (!isServer && !dev) {
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
      // config.optimization.splitChunks.cacheGroups = {
      //   commons: {
      //     name: 'commons',
      //     minChunks: 2,
      //   },
      // };
      // 2:35
      // config.optimization.splitChunks.cacheGroups = {
      //   vendor: {
      //     test: /node_modules/,
      //     name: 'vendor',
      //     chunks: 'all',
      //     enforce: true,
      //   },
      // };
    }

    return config;
  },
  images: {
    domains: ['images.prismic.io', 'furbo-prismic.cdn.prismic.io'],
  },
});
