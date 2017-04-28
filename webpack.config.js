const { resolve } = require('path');
const webpack = require('webpack');


module.exports = {
    context: resolve(__dirname, 'src'),

    entry: [
        //    'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
  //      "bootstrap-webpack!./bootstrap.config.js",

        './index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'bundle.js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },
//    devtool: "cheap-eval-source-map",
      devtool: 'inline-source-map',

    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: resolve(__dirname, ''),
        // match the output path

        publicPath: '/'
        // match the output `publicPath`
    },

    module: {
        rules: [
            /*
{
test: /\.jsx?$/,
use: [ 'babel-loader', ],
exclude: /node_modules/
},
             */
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader?modules', ],
            },
/*
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: ['url?limit=10000&mimetype=application/font-woff']},

      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: ['url?limit=10000&mimetype=application/octet-stream']},

      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: ['file']},

      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: ['url?limit=10000&mimetype=image/svg+xml']}
*/
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
};