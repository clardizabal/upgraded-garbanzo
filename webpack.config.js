// const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: './client/app.js',
  output: { path: __dirname, filename: '/client/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};
