const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const loaders = {
  typescript: {
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
  },
};

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: loaders.typescript,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]react.+/,
          name: 'react',
          chunks: 'all',
        },
        core: {
          test: /[\\/]node_modules[\\/](?!react).+/,
          name: 'core',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: isDevelopment,
    }),
  ].filter(Boolean),
  devtool: isDevelopment ? 'source-map' : 'none',
  stats: {
    warningsFilter: /export .* was not found in/,
  },
  devServer: {
    clientLogLevel: 'warn',
    historyApiFallback: true,
    stats: 'errors-only',
    progress: true,
    overlay: true,
    compress: true,
    hot: true,
  },
};
