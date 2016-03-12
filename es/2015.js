'use strict'

// exports

module.exports = {

  parser: 'babel-eslint',

  plugins: [
    'import',
  ],

  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
  ],

  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      restParams: true,
      spread: true,
      templateStrings: true,
    },
    sourceType: 'module',
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

    'no-param-reassign': 1,

    'no-confusing-arrow': 1,
    'no-useless-constructor': 1,
    'object-shorthand': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,

    /**
     * Stylistic Consistency
     */

    'arrow-body-style': 1,
    'arrow-parens': 1,
    'arrow-spacing': 1,
    'generator-star-spacing': 1,
    'yield-star-spacing': 1,

  },

}
