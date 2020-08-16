const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
require("babel-polyfill");

module.exports = {
    entry : ['babel-polyfill','./src/index.js'],
    output : {
        path : path.resolve(__dirname , '/dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.(js)$/, 
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test : /\.css$/, 
                use: ['style-loader', 'css-loader']}
        ]
    },
    // mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : './src/index.html'
        })
    ]

};