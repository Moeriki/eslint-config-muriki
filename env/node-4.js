'use strict'

module.exports = {

  extends: [
    './node.js',
  ],

  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      forOf: true,
      generators: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      restParams: true,
      templateStrings: true,
    },
  },

}
