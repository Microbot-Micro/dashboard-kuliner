const path = require('path');

module.exports = {
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      alias: {
        '@env': path.resolve(__dirname, '.env.local'),
      },
    },
  },
};
