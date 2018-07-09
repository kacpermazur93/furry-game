const path = require('path');

module.exports = {
    entry: ['./js/app.js'],
    output: {
        path: path.resolve(__dirname, 'js'), //output directory
        filename: 'out.js', //output file (merge all JS-files will into one out.js file)
        publicPath: 'js'
    },
    devServer: {
        filename: './js/out.js',
    },
    plugins: [],
    watch: true,
    mode: 'development',
    devtool: 'source-map'
}