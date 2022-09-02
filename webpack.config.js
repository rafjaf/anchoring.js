var path = require('path')

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '.'),
    filename: './dist/standalone-anchoring.js',
    library: 'anchoring',
  },
};
