'use strict';

const path = require('path');

module.exports = {

  env: {
    jest: true,
  },

  extends: [
    path.join(__dirname, './loose.js'),
    path.join(__dirname, './plugins/jasmine.js'),
  ],

  rules: {
    'arrow-body-style': 'off',
  },

};
