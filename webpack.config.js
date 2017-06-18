const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const HtmlWebpackPluginConfigProd = new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
});

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'), 
        filename: 'bundle.js'
    },
    devtool: "#cheap-module-source-map",
    module: {
        loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, HtmlWebpackPluginConfigProd]
}