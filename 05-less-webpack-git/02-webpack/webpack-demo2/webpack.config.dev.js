var path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "bundleDev.js",
        path: path.resolve(__dirname, "dev")
    }
};
