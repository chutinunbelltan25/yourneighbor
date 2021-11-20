module.exports = {
  webpack(config) {
      config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
      });

      return config;
  },
  module: {
      loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader' }],
  },
};
