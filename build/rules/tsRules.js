const path = require("path");
module.exports = [{
        test: /\.tsx$/,
        use: [{
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                loader: "ts-loader",
                options: { transpileOnly: true }
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
]