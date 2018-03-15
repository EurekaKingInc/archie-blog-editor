const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")

module.exports = merge(common, {
  output: {
    filename: "bundle.js",
    publicPath: "/lib/"
  },
  devServer: {
    port: 3003,
    historyApiFallback: {
      index: "public/index.html"
    }
  },
  devtool: "inline-source-map"
})
