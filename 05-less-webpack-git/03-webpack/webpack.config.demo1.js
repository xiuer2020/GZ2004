var path = require("path");

module.exports = {
    mode: "production",
    // entry: "./demo1/src/index.js",
    entry: {
        main: "./demo1/src/index.js",
        calc: "./demo1/src/calc.js"
    },

    output: {
        // filename: "bundle.js",
        filename: '[name].js',
        path: path.resolve(__dirname, "demo1/dist")
    }
};
