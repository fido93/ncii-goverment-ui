var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require("path");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/assets', to: './assets'
      },
      {
        from: './src/js', to: './js'
      },
      {
        from: './src/css', to: './css'
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: "NCII",
      template: "./src/index.html",
      hash: true
    })
  ]
};
