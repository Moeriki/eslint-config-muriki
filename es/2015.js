'use strict';

// exports

module.exports = {

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 2015,
  },

  rules: {

    /**
     * Best Practices
     */

    'no-param-reassign': 1,
    'object-shorthand': 1,
    'prefer-const': [1, { ignoreReadBeforeAssign: true }],
    'prefer-destructuring': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,

  },

};
