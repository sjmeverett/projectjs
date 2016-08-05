
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
  entry: ['babel-polyfill', './main.js'],
  output: {path: __dirname, filename: 'bundle.js'},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
      new ExtractTextPlugin('public/style.css', {
          allChunks: true
      })
  ]
};
