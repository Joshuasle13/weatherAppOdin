const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      { test: /\.html$/i, use: ["html-loader"] },

      { test: /\.(png|svg|jpg|jpeg|gif)$/i, use: "asset/resource" },
    ],
  },
};
module.exports = config;
