const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './js/index.js',
    },
    entry: path.resolve(__dirname, 'src/index.jsx'),
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
    ],
    mode: 'development',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
};
