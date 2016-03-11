'use strict'

module.exports = {

  rules: {

    /**
     * Possible errors
     */

    'comma-dangle': [1, 'always-multiline'],

    /**
     * Best practices
     */

    'no-magic-numbers': [1, {
      ignore: [-1, 0, 1, 2],
    }],

    /**
     * Stylistic consistency
     */

    'array-bracket-spacing': 1,
    'block-spacing': 1,
    'brace-style': 1,
    'camelcase': 0,
    'comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': 1,
    'consistent-this': [1, 'self'],
    'eol-last': 1,
    'func-names': 1,
    'id-blacklist': [1,
      'obj', 'object',
      'num', 'number',
      'str', 'string',
      'bool', 'boolean',
      'val',
    ],
    'id-length': [1, {
      min: 3,
      exceptions: ['i', '_', 'fs', 'id'],
    }],
    'indent': [1, 2, { SwitchCase: 1 }],
    'jsx-quotes': 1,
    'key-spacing': [1, {
      afterColon: true,
      mode: 'minimum',
    }],
    'keyword-spacing': 1,
    'linebreak-style': 1,
    'lines-around-comment': 1,
    'max-depth': [1, 5],
    'max-len': [1, {
      code: 120,
      ignoreComments: true,
    }],
    'max-nested-callbacks': [1, 5],
    'max-params': [1, 5],
    'max-statements': [1, 16],
    'new-cap': 1,
    'new-parens': 1,
    'newline-per-chained-call': 0,
    'no-array-constructor': 2,
    'no-bitwise': 2,
    'no-continue': 1,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multiple-empty-lines': 1,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 1,
    'no-trailing-spaces': 1,
    'no-underscore-dangle': [1, {
      allow: ['_id'],
    }],
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 1,
    'object-curly-spacing': [1, 'always'],
    'one-var-declaration-per-line': 1,
    'operator-linebreak': 1,
    'quote-props': [1, 'consistent-as-needed'],
    'quotes': [1, 'single', 'avoid-escape'],
    'require-jsdoc': [1, {
      require: {
        ClassDeclaration: true,
        FunctionDeclaration: true,
        MethodDefinition: true,
      },
    }],
    'semi-spacing': 1,
    'space-before-blocks': 1,
    'space-before-function-paren': [1, {
      anonymous: 'always',
      named: 'never',
    }],
    'space-in-parens': 1,
    'space-infix-ops': 1,
    'space-unary-ops': 1,
    'spaced-comment': 1,
    'wrap-regex': 1,
  },

}
