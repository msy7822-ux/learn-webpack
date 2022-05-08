const path = require("node:path");
const isDevEnv = process.env.NODE_ENV === 'development';

module.exports = {
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
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
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
          "style-loader",
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
