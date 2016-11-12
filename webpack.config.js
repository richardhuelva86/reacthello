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
     inline: true,
    host: '0.0.0.0'
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
