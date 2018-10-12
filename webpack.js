const webpack = require('webpack')
const hmtlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')


const path = require('path')

module.exports = {
    mode:"development",
    entry: __dirname + '/src/index.js',
    output:{
        path : __dirname + "/build",
        filename: "qinyu_test-[hash].js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader'
                },
            },
            {
                test:/\.vue$/,
                use:{
                    loader:'vue-loader',
                },
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:20000
                        }
                    }
                ]
            },
        ]
    },
    plugins:[
        new hmtlWebpackPlugin({
            template:__dirname + '/src/index.htm',
            filename:'qinyu.html'
        })    
    ],
    devServer:{
        contentBase:path.join(__dirname,'build'),
        index:'qinyu.html',
        host:'0.0.0.0',
        port:'8000'
    }

}