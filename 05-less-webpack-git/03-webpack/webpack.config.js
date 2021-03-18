var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
// var { CleanWebpackPlugin } = require("clean-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            },

            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        // 自动定位 出口目录
        new ManifestPlugin(),

        new HtmlWebpackPlugin({
            title: "Output Management XXX"
        })
    ],
    devtool: "inline-source-map",

    devServer: {
        contentBase: "./dist",
        compress: true,
        // hotOnly: true,
        overlay: true
    }
};
