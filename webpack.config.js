/**
 * Created by victor on 15/11/2017.
 */
/* eslint-disable */
const conf = {
    src: __dirname + '/src',
    dist: __dirname + '/dist'
};

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      port: 3000
    },
    entry: [
        conf.src + '/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: conf.dist
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: conf.src,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                include: conf.src,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png|gif|eot|woff|woff2|svg|ttf)$/,
                use: 'file-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                ],
                include: [conf.src]
                //exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery'
        })
    ]
};