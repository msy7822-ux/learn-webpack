/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */

// webpack とbabelを一緒に使えるようにするための設定を記述している
module.exports = {
  target: ['web', 'es5'],
  mode: "development",
  module: {
    // 変換やバンドルのルールは module.rules 配列に指定する
    // 多くの場合、test でファイル形式を指定し、loader（または use 配列）へローダーを指定することになる
    rules: [
      {
        // 拡張子 js のファイル（正規表現）
        test: /\.js$/,
        // ローダーの指定
        loader: "babel-loader",
      },
    ],
  },
};
