const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const loaders = {
  typescript: {
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
  },
};

module.exports = (_, argv) => ({
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
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: argv.mode === 'development',
      useTypescriptIncrementalApi: argv.mode !== 'development',
    }),
  ],
  devtool: argv.mode === 'development' ? 'source-map' : 'none',
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
  },
});
