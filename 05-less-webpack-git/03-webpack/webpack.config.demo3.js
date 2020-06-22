var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
// var { CleanWebpackPlugin } = require("clean-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
    mode: "production",

    entry: {
        index: "./demo3/src/index.js",
        print: "./demo3/src/print.js"
    },

    plugins: [
        new CleanWebpackPlugin(),
        // 自动定位 出口目录
        new ManifestPlugin(),

        new HtmlWebpackPlugin({
            title: "Output Management XXX",
            template: "./demo3/src/index.html"
        })
    ],

    devtool: "inline-source-map",

    devServer: {
        contentBase: "./demo3/dist",
        compress: true,
        // hotOnly: true,
        overlay: true
    },
    // localhost:8080

    output: {
        filename: "app.[name].[chunkhash].js",
        path: path.resolve(__dirname, "demo3/dist")
    }
};
