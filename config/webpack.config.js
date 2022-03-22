const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        full: './src/index.js',
        mini: './src/index.js'
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /wallkit-integration-library.min.js(\?.*)?$/i,
            })
        ]
    },
    mode: 'production',
    output: {
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