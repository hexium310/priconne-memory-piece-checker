const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (_, argv) => {
  const isDevelopment = argv.mode === 'development';

  const loaders = {
    babel: {
      loader: 'babel-loader',
      options: {
        plugins: ['react-refresh/babel'],
      },
    },
    css:{
      loader: 'css-loader',
      options: {
        sourceMap: false,
      },
    },
    postcss: {
      loader: 'postcss-loader',
      options: {
        sourceMap: false,
        postcssOptions: {
          ident: 'postcss',
          plugins: [
            require('tailwindcss/nesting'),
            require('tailwindcss'),
          ],
        },
      },
    },
    style:{
      loader: 'style-loader',
    },
    typescript: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        compilerOptions: {
          jsx: isDevelopment ? 'react-jsxdev' : 'react-jsx',
        },
      },
    },
  };

  return {
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
          use: [
            isDevelopment && loaders.babel,
            loaders.typescript,
          ].filter(Boolean),
        },
        {
          test: /\.css$/,
          use: [loaders.style, loaders.css, loaders.postcss],
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
        typescript: {
          configOverwrite: {
            compilerOptions: {
              noUnusedLocals: false,
              sourceMap: false,
            },
          },
        },
      }),
    ].filter(Boolean),
    devtool: isDevelopment ? 'source-map' : false,
    ignoreWarnings: [
      {
        message: /export .* was not found in/,
      },
    ],
    stats: {
      builtAt: true,
      children: false,
      modules: false,
      warningsFilter: /export .* was not found in/,
      colors: true,
    },
    devServer: {
      client: {
        logging: 'info',
        progress: true,
      },
      hot: true,
      historyApiFallback: true,
    },
  };
};
