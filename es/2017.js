'use strict';

module.exports = {

  extends: [
    './2016.js',
  ],

  parserOptions: {
    ecmaVersion: 2017,
  },

  rules: {

    /**
     * Potential Errors
     */

    'no-return-await': 2,

    /**
     * Best Practices
     */

    'comma-dangle': [1, 'always-multiline'],
    'space-before-function-paren': [1, {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    }],

  },

};
