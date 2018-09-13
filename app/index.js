var path = require('path');
import $ from 'jquery'

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: [ path.join(__dirname, "app")],
        options: { cacheDirectory: true }
      }
     ]
   },
   devtool: 'source-map'
};


$(add).add('click') => document.createTextNode("card")

