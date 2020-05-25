const path = require('path');

module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  outputDir: path.resolve(__dirname, '../src/main/resources/static'),
};
