let path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: {
        main: './src/js/resumebuilder.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mainapp.js',
        publicPath: "/dist/", // string
        // the url to the output directory resolved relative to the HTML page

    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
            /*{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['env']
                }
            }
            }*/
        ]
    },
    plugins: [
        new CompressionPlugin({
            test: /\.html/,
            algorithm: 'gzip'
        })
    ],
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
}