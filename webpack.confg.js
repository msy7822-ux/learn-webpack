const path = require("node:path");
const isDevEnv = process.env.NODE_ENV === 'development';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// buildするごとに溜まっていく./distディレクトリの不要なファイルを削除するプラグイン
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      scriptLoading: "defer",
      favicon: "./src/favicon.ico",
    }),
  ],
  target: ['web', 'es5'],
  mode: isDevEnv ? "development" : "production",
  devtool: isDevEnv ? "source-map" : undefined,
  devServer: {
    static: {
      directory: "./dist"
    },
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  entry: {
    app: "./src/entry.jsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
    assetModuleFilename: "asset/[name][ext]",
  },
  module: {
    rules: [
      {
        // test: /\.(ico|png|svg|ttf|otf|eot|woff?2?)$/,
        test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.jsx?$/,
        // ローダーの指定
        loader: "babel-loader",
      },
      {
        // 拡張子 scss または css のファイルが対象
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader:  "css-loader",
            options: {
              // dev モードではソースマップを付ける
              sourceMap: isDevEnv,
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevEnv,
            },
          },
        ]
      },
    ],
  },
};
