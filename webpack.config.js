module.exports ={
    entry :__dirname + "/src/js/index.js",
    output:{
        path:__dirname + '/assets/js',
        filename:"index.js",
        publicPath:"/temp/"
    },
    module:{
        loaders:[

            {
                test:/\.json$/,
                loader:"json-loader"
            },
            {
                test :/\.css$/,
                loader :'style-loader!css-loader'
            },
            {
                test :/\.js$/,
                exclude:/node_modules/,
                loader :'babel-loader',
                /*query:{
                    presets:["es2015","react"]
                }*/
            }

        ]

    }
    ,
    devServer:{
        contentBase:"./",
        host:'192.168.31.113',
        port:'1278',
    }
}