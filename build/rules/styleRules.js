module.exports = [{
    test: /\.(sass|css)/,
    use: ["style-loader", "css-loader", "sass-loader"]
}]