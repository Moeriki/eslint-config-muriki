'use strict'

module.exports = {

  env: {
    browser: true,
  },

  rules: {

    /**
     * Possible Errors
     */

    'comma-dangle': [2, 'never'],
    'dot-notation': [1, {
      allowKeywords: false,
    }],
    'semi': [2, 'always'],

    /**
     * Best Practices
     */

    'no-alert': 2,
    'no-implicit-globals': 2,

  },

}
