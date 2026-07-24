const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webMode = {
    name: 'browserConfig',
    entry: './src/index.ts',
    target: "web",
    output: {
        filename: 'build.browser.js',
        path: path.resolve(__dirname, 'dist/builds/browser')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: { "fs": false, "path": false }
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/presentation/ui/web/index.html",
        title: "tienda Bobby"
    })],
    externals: {
        'scanf': '{}',
        'node-localstorage': '{}',
        'dotenv': '{}'
    },
    mode: 'production'
};


const terminalMode = {
    name: 'terminalConfig',
    entry: './src/index.ts',
    target: "node",
    output: {
        filename: 'build.terminal.js',
        path: path.resolve(__dirname, 'dist/builds/terminal')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: 'production'
};

module.exports = [
    webMode,
    terminalMode
];