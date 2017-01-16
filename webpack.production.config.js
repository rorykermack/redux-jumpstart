var path = require('path')
var webpack = require('webpack')

var mainPath = path.resolve(__dirname, 'src/browser/', 'main.js');
var buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
  devtool: 'inline-source-map',
  entry: mainPath,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file" },
    ]
  }
}
