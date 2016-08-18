'use strict';

module.exports = {

  plugins: [
    'node',
  ],

  extend: [
    './common-js.js',
    'plugin:node/recommended',
  ],

  env: { node: true },

  rules: {

    /* Best practices */

    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-sync': 2,

  },

};
