var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var inProduction = (process.env.NODE_ENV === "production");

module.exports = {
    context: __dirname + '/',
    entry: './app.js',
    output: {
        path: __dirname + '/build/js',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: inProduction
        }),
        new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        })
    ],
};

if (inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );

    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    );
}
