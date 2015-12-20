var path = require('path');

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {
        presets: ['es2015', 'stage-0']
      } },
      { test: /\.json$/, loader: 'json' }
    ]
  }
};
