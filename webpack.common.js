'use strict'
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: './src/app/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/myApp'),
        filename: 'assets/js/[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.(s[ca]{1})ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, 'dist/myApp/assets/css')
                        }
                    },
                    'css-loader',
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/myApp/assets/css', 'dist/myApp/assets/js']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'dist/template.html',
            title: 'dapp todos example',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
        }),
    ],
};
