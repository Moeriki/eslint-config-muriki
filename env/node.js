'use strict';

module.exports = {

  plugins: [
    'node',
  ],

  extends: [
    './common-js.js',
    'plugin:node/recommended',
  ],

  env: { node: true },

  rules: {

    /* Best practices */

    'no-buffer-constructor': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-sync': 2,

  },

};
