const path = require("path");

// const HtmlPlugin = require("html-webpack-plugin");
const srcPath = path.resolve(__dirname, "./src");

module.exports = {
    mode: "development",
    entry: srcPath + "/index.tsx",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js"
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
        rules: [{
                test: /\.tsx$/,
                use: [{
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-react']
                        }
                    },
                    {
                        loader: "ts-loader"
                    }
                ],
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.ts$/,
                use: [{
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-react']
                        }
                    },
                    {
                        loader: "ts-loader"
                    }
                ],
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.(sass|css)/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|png|gif|jpeg)/,
                loader: "url-loader"
            }

        ]
    },
    // plugins: [
    //     new HtmlPlugin({
    //         title: "self-webpack",
    //         template: "index.html"
    //     })
    // ]

}