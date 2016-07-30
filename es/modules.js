'use strict';

module.exports = {

  extends: [
    '../env/common-js.js',
  ],

  parserOptions: {
    impliedStrict: true,
    sourceType: 'module',
  },

  rules: {

    'strict': [2,
      'never',
    ],

    /* ************* */
    /* Plugin import */
    /* ************* */

    'import/no-commonjs': 2,

  },

};
