
// This is a core Node.js module that we need for out
// output key below...
const path = require("path");


module.exports = {
    mode: "development",
    devtool: "none",
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        // Resolves the current directory to the relative path "dist".
        // __dirname is the directory in which this config file 
        // resides.
        path: path.resolve(__dirname, "dist")
    },
}