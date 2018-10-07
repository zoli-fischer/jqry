const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const libraryName = 'index';
const entry = {};
entry[libraryName] = path.resolve(__dirname, 'src/index.js');
entry[libraryName + '.min'] = path.resolve(__dirname, 'src/index.js');
['All', 'Object', 'Event'].forEach(element => {
    const name = element.toLocaleLowerCase() === 'all' ? 'index' : element.toLocaleLowerCase();
    entry['polyfill/' + name] = path.resolve(__dirname, 'src/polyfill/' + element + '.js');
    entry['polyfill/' + name + '.min'] = path.resolve(__dirname, 'src/polyfill/' + element + '.js');
});

const config = {
    entry,
    devtool: 'source-map',
    mode: 'none',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/,
        })],
    },
    plugins: [
        new CleanWebpackPlugin(['lib']),
    ],
};

module.exports = config;
