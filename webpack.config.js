const path = require('path');

const webMode = {
    name: 'browserConfig',
    entry: './src/index.js',
    target: "web",
    output: {
        filename: 'bundle.browser.js',
        path: path.resolve(__dirname, 'dist/browser')
    },
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
        path: path.resolve(__dirname, 'dist/terminal') 
    },
    mode: 'production'
};

module.exports = [
    webMode, 
    terminalMode
];