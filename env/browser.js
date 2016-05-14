'use strict'

module.exports = {

  env: {
    browser: true,
  },

  rules: {

    /* Possible errors */

    'comma-dangle': [2, 'never'],
    'dot-notation': [1, {
      allowKeywords: false,
    }],
    'semi': [2, 'always'],

    /* Best practices */

    'no-alert': 2,
    'no-implicit-globals': 2,

  },

}
