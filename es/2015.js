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
     * Potential Errors
     */

    'constructor-super': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'require-yield': 2,

    /**
     * Best Practices
     */

    'class-methods-use-this': 1,
    'no-param-reassign': 1,
    'no-confusing-arrow': 1,
    'no-useless-constructor': 1,
    'no-useless-rename': 1,
    'no-template-curly-in-string': 1,
    'object-shorthand': 1,
    'prefer-const': 1,
    'prefer-numeric-literals': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'symbol-description': 1,

    /**
     * Stylistic Consistency
     */

    'arrow-body-style': 1,
    'arrow-parens': 1,
    'arrow-spacing': 1,
    'generator-star-spacing': [1, {
      before: false,
      after: true,
    }],
    'no-useless-computed-key': 1,
    'rest-spread-spacing': [1,
      'never',
    ],
    'yield-star-spacing': 1,

  },

};
