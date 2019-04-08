const path = require("path");

// const HtmlPlugin = require("html-webpack-plugin");
const srcPath = path.resolve(__dirname, "./src");

const { tsRules, styleRules, imgRules } = require("./rules/index");

module.exports = {
    mode: "development",
    entry: srcPath + "/index.tsx",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        libraryTarget: "umd", // Important
        umdNamedDefine: true // Important
    },
    watch: true,
    devServer: {
        port: 8901
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".tsx", ".ts"],
        //基于webpack文件所在位置
        alias: {
            views: path.resolve(__dirname, './src/views/')
        },
        modules: [path.resolve(__dirname, "./src"), "node_modules"]
    },
    resolveLoader: {
        modules: ["node_modules", "src"]
    },
    externals: ["antd", "react", "react-dom"],
    module: {
        rules: [...styleRules, ...styleRules, ...imgRules]
    },
    // plugins: [
    //     new HtmlPlugin({
    //         title: "self-webpack",
    //         template: "index.html"
    //     })
    // ]

}