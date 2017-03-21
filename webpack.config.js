const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');

const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.jsx'],
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },
};
