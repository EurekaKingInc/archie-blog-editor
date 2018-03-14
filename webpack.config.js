module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    publicPath: "/lib/"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"],
          plugins: [
            "transform-class-properties",
            "dynamic-import-webpack",
            "babel-plugin-transform-object-rest-spread"
          ]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions: ["*", ".js"] },
  devServer: {
    port: 3003,
    historyApiFallback: {
      index: "public/index.html"
    }
  },
  devtool: "inline-source-map"
}
