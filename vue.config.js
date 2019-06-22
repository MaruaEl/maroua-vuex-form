// vue.config.js
const path = require('path');

module.exports = {
  /* eslint-disable indent */
  /* eslint-disable no-tabs */
  /* eslint-disable-next-line */
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/scss/main.scss'),
        path.resolve(__dirname, 'src/assets/scss/*.scss'),
      ],
    },
  },
};
