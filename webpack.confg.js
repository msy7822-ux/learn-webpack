const path = require("node:path");
const isDevEnv = process.env.NODE_ENV === 'development'

// webpack とbabelを一緒に使えるようにするための設定を記述している
module.exports = {
  target: ['web', 'es5'],
  mode: isDevEnv ? "development" : "production",
  // ソースマップは開発環境でのみ有効にする
  devtool: isDevEnv ? "source-map" : undefined,
  devServer: {
    static: {
      directory: "./dist"
    },
  },
  // 依存関係解決に参照するファイルの拡張子を指定
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  entry: "./src/entry.jsx",
  output: {
    // ファイル名
    filename: "bundle.js",
    // 出力するフォルダ
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    // 変換やバンドルのルールは module.rules 配列に指定する
    // 多くの場合、test でファイル形式を指定し、loader（または use 配列）へローダーを指定することになる
    rules: [
      {
        // 拡張子 jsxのファイル（正規表現）
        test: /\.jsx?$/,
        // ローダーの指定
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
};
