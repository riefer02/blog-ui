const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../blog-api/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:6969'
      }
    }
  }
};
