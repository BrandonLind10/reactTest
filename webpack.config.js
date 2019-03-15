module.exports={
    entry: "./src/app.js",
    output:{
        filename: "bundle.js"
    },
    module:{
        rules:[
            {  test: /\.m?js$/,
                exclude: /(node_modules|browsers_components)/,
                use:{
                    loader: "babel-loader",
                    options: {
                            presets: ["@babel/preset-env","@babel/preset-react"]
                    }
                }
            }
        ]
    }
}