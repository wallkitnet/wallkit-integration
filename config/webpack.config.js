const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require('../package.json');
const banner = `Package name: ${pkg.name}.
Package description: ${pkg.description}.
Package version: ${pkg.version}.`

module.exports = {
    entry: {
        full: './src/index.js',
        mini: './src/index.js'
    },
    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: 'wallkit-integration-library.js.map',
            exclude: ['wallkit-integration-library.min.js'],
        }),
        new CleanWebpackPlugin({
            protectWebpackAssets: false,
            cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
        }),
        new webpack.BannerPlugin(banner)
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /wallkit-integration-library.min.js(\?.*)?$/i,
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            })
        ]
    },
    mode: 'production',
    output: {
        libraryTarget: 'umd',
        filename: (pathData) => {
            return pathData.chunk.name === 'mini' ?
                'wallkit-integration-library.min.js' :
                'wallkit-integration-library.js';
        },
        path: path.resolve('dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
