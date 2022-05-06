const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "js/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
        library: "App",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    mode: "development"
}