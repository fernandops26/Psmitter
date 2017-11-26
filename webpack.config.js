var webpack = require('webpack')

module.exports = {
  entry: './psmitter.js',
  output: {
    filename: './psmitter.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ]
}
