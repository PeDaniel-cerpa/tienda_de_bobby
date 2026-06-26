const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const webMode = {
    name: 'browserConfig',
    entry: './src/index.js',
    target: "web",
    output: {
        filename: 'build.browser.js',
        path: path.resolve(__dirname, 'dist/builds/browser')
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        title: "tienda Bobby"
    })],
    externals: {
        'scanf': '{}' 
    },
    resolve: {
        fallback: { "fs": false, "path": false }
    },
    mode: 'production'
};

const terminalMode = {
    name: 'terminalConfig',
    entry: './src/index.js',
    target: "node",
    output: {
        filename: 'build.terminal.js', 
        path: path.resolve(__dirname, 'dist/builds/terminal') 
    },
    mode: 'production'
};

module.exports = [
    webMode, 
    terminalMode
];