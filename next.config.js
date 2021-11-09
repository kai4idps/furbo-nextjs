const Redirect = require('./config/redirect');

module.exports = {
  reactStrictMode: false,
  async redirects() {
    return Redirect;
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
        '@material-ui/core': '@material-ui/core/esm',
        '@material-ui/icons': '@material-ui/icons/esm',
      };
    }
    return config;
  },
  images: {
    domains: ['images.prismic.io', 'furbo-prismic.cdn.prismic.io'],
  },
};
