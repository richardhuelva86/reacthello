module.exports = {
 devtool: 'eval-source-map',
 entry: __dirname + "/src/Main.js",
 output: {
     path: __dirname + "/public",
     filename: "bundle.js"
 },
 devServer: {
     contentBase: "./public",
     colors: true,
     historyApiFallback: true,
     inline: true
 },
 module: {
     loaders: [
     {
        test: /\.json$/,
        loader: "json"
     }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
        presets: ['es2015','react']
     }
    }
 ]
 }
}
