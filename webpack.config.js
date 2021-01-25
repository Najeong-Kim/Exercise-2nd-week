const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module : {
    rules : [
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        use: 'babel-loader',
      },
    ],
  },
};