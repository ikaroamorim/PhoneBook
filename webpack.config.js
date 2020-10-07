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
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html"
    })]
}