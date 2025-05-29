const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devServer: {
    static: "./dist",
    hot: true,
    compress: true,
    port: 3000,
    open: true,
    watchFiles: ["src/**/*.html"], // Faz o devServer observar mudanças no HTML
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Quicklist",
      template: "./src/index.html", // Template HTML base
      favicon: "./src/assets/favicon.svg",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets", // Pasta de origem
          to: "assets", // Pasta de destino dentro de dist
        },
      ],
    }),
  ],
};
