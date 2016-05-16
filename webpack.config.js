module.exports = {
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.html$/, loader: 'html' }
    ]
  },
  entry: './src',
  output: {
    library: 'vue-alert',
    libraryTarget: 'umd',
    filename: `vue-alert.js`,
    path: './dist'
  },
  externals: {
    'vue': 'Vue',
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
};
