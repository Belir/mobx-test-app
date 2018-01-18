var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var rootPath = path.join(__dirname);

module.exports = {
  target: 'web',
  context: path.join(rootPath, 'app/'),
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.json', '.js'],
    alias: {
      components: path.join(rootPath, 'app/components'),
      containers: path.join(rootPath, 'app/containers'),
      stores: path.join(rootPath, 'app/stores'),
    },
  },
  entry: {
    app: path.join(rootPath, 'app/index.js'),
  },
  output: {
    filename: '[name]-[hash:8].js',
    path: path.join(rootPath, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'app', 'index.html'),
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
};
