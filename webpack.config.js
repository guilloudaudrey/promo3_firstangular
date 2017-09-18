module.exports = {
    entry: './src/bootstrap.ts',
    output: './dist/bundle.js',
    extensions: ['.ts', '.tsx', '.js'],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    devtool: 'inline-source-map'
}