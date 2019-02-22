'use strict'

const path = require('path');


module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use:['style-loader','css-loader']}
    ]
  }
};
