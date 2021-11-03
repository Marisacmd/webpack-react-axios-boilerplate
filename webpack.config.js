const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, './web'),
        compress: true,
        port: process.env.WEBPACK_DEV_SERVER_PORT || 4000,
        disableHostCheck: true,
        historyApiFallback: true,
   proxy: {
      '/message': {
        target: 'http://localhost:4001',
        secure: false
      }
    },    
    },
    entry: path.join(__dirname, './index.js'),
    output: {
        path: path.join(__dirname, './'),
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
        }),
    ],
       module:{
        rules:[   
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    },   
}
