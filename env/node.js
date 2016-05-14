'use strict'

module.exports = {

  extend: [
    './_common-js.js',
  ],

  env: {
    node: true,
  },

  rules: {

    /* Best practices */

    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-sync': 2,

    /* Stylistic consistencies */

    'semi': [1, 'never'],

  },

}
