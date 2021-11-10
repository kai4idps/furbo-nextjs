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
        '@material-ui/icons': '@material-ui/icons/esm',
        '@babel/runtime': path.resolve(
          __dirname,
          'node_modules/@babel/runtime',
        ),
        'react-is': path.resolve(__dirname, 'node_modules/react-is'),
      };
    }

    return config;
  },
  images: {
    domains: ['images.prismic.io', 'furbo-prismic.cdn.prismic.io'],
  },
});
