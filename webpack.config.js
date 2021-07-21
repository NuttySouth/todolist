const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const supportedLocales = ['en-US'];


module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Todo List',
          template: "./src/index.html",
        }),
        new webpack.ContextReplacementPlugin(
            /date\-fns[\/\\]/,
            new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]index\.js$`)
          ),
      ],
    module: {
        rules: [
                {
                  test: /\.css$/i,
                  use: ['style-loader', 'css-loader'],
                },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};