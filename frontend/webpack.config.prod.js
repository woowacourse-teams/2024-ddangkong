const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');
const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'production',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'hidden-source-map',
  plugins: [
    sentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: 'ddangkong',
      project: 'ddangkong-front',
      sourcemaps: {
        filesToDeleteAfterUpload: '**/*.js.map',
      },
    }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
