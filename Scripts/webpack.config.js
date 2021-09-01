const path = require('path');

module.exports = {
    entry: './src/app.ts',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    },
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, '../Theme/Dawn/assets')
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    watch: true
}