global.Promise = require('bluebird');

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const publicPath         = 'http://localhost:8050/public/assets';
const cssName            = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
const jsName             = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            BROWSER:  JSON.stringify(true),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }),
    new ExtractTextPlugin(cssName)
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new CleanWebpackPlugin([ 'public/assets/' ], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    );
}

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions:         ['.js', '.jsx']
    },
    plugins,
    output: {
        path: `${__dirname}/public/assets/`,
        filename: jsName,
        publicPath
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
            {
                test: /\.jsx?$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: [/node_modules/, /public/]
            },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,
    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' }
    }
};

