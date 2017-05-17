const path = require('path')
// const webpack = require('webpack')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // }
    ]
  },
  // devServer: {
  //   hot: true,
  //   publicPath: '/build/',
  //   port: 3000
  // },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
    // new webpack.NamedModulesPlugin()
  ]
}
