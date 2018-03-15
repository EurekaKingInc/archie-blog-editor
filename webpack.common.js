module.exports = {
  entry: "./src/index.js",
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
  resolve: { extensions: ["*", ".js"] }
}
