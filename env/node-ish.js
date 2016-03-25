'use strict'

module.exports = {

  rules: {

    /**
     * Possible Errors
     */

    'handle-callback-err': 2,

    /**
     * Best Practices
     */

    'callback-return': [1, [
      'callback',
      'done',
      'next',
    ]],
    'no-new-require': 1,

    /**
     * Stylistic consistency
     */

    'comma-dangle': [1, 'always-multiline'],
    'semi': [1, 'never'],

  },

}
