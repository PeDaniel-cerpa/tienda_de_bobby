const path = require('path');

const webMode = {
    name: 'browserConfig',
    entry: './src/index.js',
    target: "web",
    output: {
        filename: 'bundle.browser.js',
        path: path.resolve(__dirname, 'dist/browser')
    },
    // 1. Esto le dice a Webpack que no empaquete scanf en el bundle web
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
        filename: 'build.node.js', // Cambiado para evitar que se sobreescriban
        path: path.resolve(__dirname, 'dist/terminal') // Separado en su propia carpeta
    },
    mode: 'production'
};

module.exports = [
    webMode, 
    terminalMode
];