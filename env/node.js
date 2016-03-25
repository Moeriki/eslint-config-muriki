'use strict'

module.exports = {

  extend: [
    './node-ish.js',
  ],

  env: {
    node: true,
  },

  rules: {

    /**
     * Best Practices
     */

    'no-path-concat': 1,
    'no-process-exit': 1,
    'no-sync': 1,

  },

}
