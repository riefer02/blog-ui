const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../api/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:6969'
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'riefer.io';
      return args;
    });
  }
};
