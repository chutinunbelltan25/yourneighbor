const withFonts = require("next-fonts");

module.exports = withFonts({
  webpack(config) {
      config.module.rules.push({
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: ['@svgr/webpack'],
      });

      return config;
  },
  module: {
      loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader' }],
  },
});
