const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  // mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  // resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist',
    hot: true,
  },
  plugins: [new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
};
