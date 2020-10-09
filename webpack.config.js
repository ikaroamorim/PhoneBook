const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devServer: {
        open: true,
        contentBase: "dist"
    },
    entry: "./src/scripts/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html"
    })],
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use:["html-loader"]
            },
            {
                test: /\.svg$/,
                use:{
                    loader: "file-loader",
                    options:{
                        name: "[name].[ext]"
                    }
                }
            }
        ]
    }
}