let path = require('path');

module.exports = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: "/dist/", // string
    // the url to the output directory resolved relative to the HTML page

    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['env']
                }
            }
            }
        ]
    }
}