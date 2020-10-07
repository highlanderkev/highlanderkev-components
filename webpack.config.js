
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};