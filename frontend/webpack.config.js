const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
        clean: true
    },
    target: 'web',
    devServer: {
        port: '3000',
        static: {
            directory: path.join(__dirname, 'public')
        },
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: 'babel-loader', 
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.join(__dirname, 'public', 'index.html') }),
        new webpack.ProvidePlugin({ 'React': 'react' })
    ]
};