'use strict';

module.exports = {

  extends: [
    './2016.js',
  ],

  parserOptions: {
    ecmaVersion: 2017,
  },

  rules: {

    'comma-dangle': [1, 'always-multiline'],
    'space-before-function-paren': [1, {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    }],

  },

};
