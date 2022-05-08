import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// 以下の二行は保管を効かせるためのインポート
import 'webpack-dev-server';
import { Configuration } from 'webpack';

const isDevEnv: boolean = process.env.NODE_ENV === 'development';

const config: Configuration = {
  // target: ['web', 'es5'],
  mode: isDevEnv ? "development" : "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  entry: {
    main: "./src/entry.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "asset/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader:  "css-loader",
            options: {
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
  devtool: isDevEnv ? "source-map" : undefined,
  devServer: {
    static: {
      directory: "./dist"
    },
  },
}

// 上記の設定をデフォルトエクスポートする
export default config;
