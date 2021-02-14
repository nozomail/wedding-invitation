const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@propTypes': path.resolve(__dirname, 'src/propTypes/'),
    },
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', path.join(process.cwd(), 'dist/**/*')],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      favicon: 'src/assets/images/favicon.ico',
    }),
    new Dotenv(),
  ],
};
