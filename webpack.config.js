const path = require("path");
const webpack = require("webpack");

const ASSETS_PATH = path.resolve(__dirname, "build");

module.exports = {
	mode: 'production',
  optimization: {
    // 关闭默认开启的tree-shaking
    usedExports: true,
    minimize: true,
  },

  entry: path.resolve(__dirname, "index.js"),

  output: {
    path: ASSETS_PATH,
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },

  plugins: [],
};
