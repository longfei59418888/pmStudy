
module.exports = {
  mode:'development',
  entry: {
    bundle1: './main.js',
  },
  output: {
    // filename: '[name]-[chunkhash:8].min.js'
    filename: '[name].min.js'
  }
}
