'use strict';

module.exports = {

  rules: {

    /* Possible errors */

    'callback-return': [2, [
      'callback',
      'next',
      'done',
    ]],
    'no-catch-shadow': 2,
    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 1,
    'no-extra-parens': [1,
      'all',
      {
        conditionalAssign: false,
        nestedBinaryExpressions: false,
        returnAssign: false,
      },
    ],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 1,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-label-var': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 1,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-undef': [2,
      { typeof: true },
    ],
    'no-undef-init': 1,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 1,
    'no-unused-vars': [1, {
      vars: 'all',
      args: 'after-used',
    }],
    'no-use-before-define': [2,
      'nofunc',
    ],
    'strict': 2,
    'use-isnan': 2,
    'valid-typeof': [2, { requireStringLiterals: true }],

    /* Best practices */

    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'comma-dangle': [1, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'complexity': [1, 7],
    'consistent-return': 1,
    'curly': [2, 'multi-line'],
    'default-case': 1,
    'dot-location': [1,
      'property',
    ],
    'dot-notation': 1,
    'eqeqeq': [1, 'smart'],
    'func-name-matching': 1,
    'guard-for-in': 1,
    'no-caller': 2,
    'no-console': 1,
    'no-div-regex': 1,
    'no-global-assign': 2,
    'no-else-return': 1,
    'no-empty-function': 1,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 1,
    'no-implicit-coercion': 1,
    'no-implied-eval': 2,
    'no-invalid-this': 1,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 1,
    'no-loop-func': 2,
    'no-magic-numbers': [1, {
      enforceConst: true,
      ignore: [-1, 0, 1, 2, 7, 12, 24, 30, 60],
      ignoreArrayIndexes: true,
    }],
    'no-multi-spaces': 1,
    'no-multi-str': 1,
    'no-new': 1,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-restricted-properties': 0,
    'no-return-assign': 1,
    'no-script-url': 2,
    'no-self-assign': [2, { props: true }],
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-warning-comments': 1,
    'no-with': 2,
    'radix': 2,
    'require-jsdoc': 0,
    'valid-jsdoc': [1, {
      requireReturn: false,
      requireParamDescription: false,
      requireReturnDescription: false,
    }],
    'wrap-iife': 1,
    'yoda': 1,

    /* Stylistic consistency */

    'array-bracket-spacing': 1,
    'block-spacing': 1,
    'brace-style': 1,
    'camelcase': 0,
    'comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': 1,
    'consistent-this': [1, 'self'],
    'eol-last': 1,
    'func-call-spacing': 1,
    'func-names': 1, // when env is Node >=6 you can use [1, 'as-needed']
    'id-blacklist': [1,
      'obj', 'object',
      'num', 'number',
      'str', 'string',
      'bool', 'boolean',
      'val',
    ],
    'id-length': [1, {
      min: 3,
      exceptions: [
        '_',
        '$',
        '$q',
        'cb',
        'db',
        'fs',
        'gt',
        'i',
        'id',
        'lt',
        'on',
        'or',
        'os',
        'S3',
        'x',
        'y',
      ],
    }],
    'indent': [1,
      2,
      { SwitchCase: 1 },
    ],
    'jsx-quotes': 1,
    'key-spacing': [1, {
      afterColon: true,
      mode: 'minimum',
    }],
    'keyword-spacing': 1,
    'linebreak-style': 1,
    'lines-around-comment': [1, {
      beforeBlockComment: true,
      allowBlockStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
    }],
    'lines-around-directive': 1,
    'line-comment-position': 0,
    'max-depth': [1, 5],
    'max-len': [1, {
      code: 120,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'max-lines': [1, {
      skipBlankLines: true,
      skipComments: true,
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
    'no-mixed-operators': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multiple-empty-lines': 1,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-tabs': 1,
    'no-trailing-spaces': 1,
    'no-underscore-dangle': [1, {
      allow: ['_id'],
    }],
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 1,
    'object-curly-newline': 0,
    'object-curly-spacing': [1, 'always'],
    'object-property-newline': [1, { allowMultiplePropertiesPerLine: true }],
    'one-var-declaration-per-line': 1,
    'operator-linebreak': [1, 'before'],
    'quote-props': [1, 'consistent-as-needed'],
    'quotes': [1, 'single', 'avoid-escape'],
    'semi': [1, 'always'],
    'semi-spacing': 1,
    'sort-keys': 0,
    'space-before-blocks': 1,
    'space-before-function-paren': [1, {
      anonymous: 'always',
      named: 'never',
    }],
    'space-in-parens': 1,
    'space-infix-ops': 1,
    'space-unary-ops': 1,
    'spaced-comment': 1,
    'unicode-bom': 1,
    'wrap-regex': 1,

  },

};
