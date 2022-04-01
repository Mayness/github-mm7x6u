const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "core",
      filename: "remoteEntry.js",
      remotes: {
        subsyStem1: 'subsyStem1@http://localhost:3002/remoteEntry.js',
        subsyStem2: 'subsyStem2@http://localhost:3003/remoteEntry.js',
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        antd: {
          singleton: true,
          requiredVersion: ">=4.1.0"
        }
      },
    }),
    // new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
