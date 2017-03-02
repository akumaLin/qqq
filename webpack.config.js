var webpack=require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('css/[name].css');
module.exports ={
    entry :__dirname + "/src/js/index.js",
    output:{
        path:__dirname + '/assets/js',
        filename:"index.js",
        publicPath:"/temp/"
    },
    module:{
        rules:[

            {//编译ES6配置
			  test: /\.js$/,
			  exclude: /(node_modules|bower_components)/,//不需要编译的地方
			  use: 'babel-loader',
			/*  query: {
				presets: ['es2015']
			  }*/
			},
            {//单独打包CSS配置
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
				  fallback: "style-loader",
				  use: "css-loader"
				})
			 }

        ]

    }
    ,
    devServer:{
        contentBase:"./",
        host:'192.168.31.113',
        port:'1278',
    },
    plugins:  [
		extractCSS
    ]
}