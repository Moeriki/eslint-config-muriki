'use strict';

const path = require('path');

module.exports = {

  root: true,

  extends: [
    path.join(__dirname, 'plugins/import.js'),
    path.join(__dirname, 'plugins/promise.js'),
  ],

  env: {
    es6: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2015,
  },

  rules: {

    /**
     * Possible Errors
     */

    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'handle-callback-err': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      enforceForArrowConditionals: true,
      ignoreJSX: 'multi-line',
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-return-await': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-return': 'warn',
    'require-yield': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': ['error', {
      prefer: {
        arg: 'param',
        argument: 'param',
        class: 'constructor',
        returns: 'return',
      },
      preferType: {
        Boolean: 'boolean',
        Number: 'number',
        Object: 'object',
        String: 'string',
      },
      requireReturn: false,
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturnType: true,
    }],
    'valid-typeof': ['error', {
      requireStringLiterals: true,
    }],

    /**
     * Best Practices
     */

    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'callback-return': ['error', [
      'callback',
      'done',
    ]],
    'complexity': ['warn', { max: 16 }],
    'consistent-return': ['error', {
      treatUndefinedAsUnspecified: true,
    }],
    'class-methods-use-this': 'error',
    'curly': ['error', 'multi-line'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eqeqeq': ['error', 'smart'],
    'global-require': 'error',
    'guard-for-in': 'error',
    'max-lines': ['warn', 500],
    'no-alert': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-console': 'warn',
    'no-div-regex': 'error',
    'no-global-assign': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['warn', {
      enforceConst: true,
      ignore: [-1, 0, 1, 2, 1000],
      ignoreArrayIndexes: true,
    }],
    'no-mixed-requires': 'error',
    'no-multi-spaces': ['error', {
      ignoreEOLComments: true,
    }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'warn',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-process-env': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': ['error', {
      patterns: ['lodash/*', '!lodash/fp', 'lodash/fp/*'],
    }],
    'no-restricted-modules': ['error', {
      patterns: ['lodash/*', '!lodash/fp', 'lodash/fp/*'],
    }],
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-sync': ['error', {
      allowAtRootLevel: true,
    }],
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'radix': ['error', 'as-needed'],
    'require-await': 'error',
    'symbol-description': 'error',
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
    'yoda': 'error',

    // Disabled:
    // - no-eq-null
    // - no-confusing-arrow
    // - no-duplicate-imports
    // - no-restricted-properties
    // - no-restricted-syntax
    // - no-void
    // - prefer-destructuring
    // - semi-style
    // - vars-on-top

    /**
     * Strict
     */

    'strict': ['error', 'global'],

    /**
     * Variables
     */

    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow': ['error', {
      allow: ['err'],
    }],
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error', { typeof: true }],
    'no-undef-init': 'error',
    'no-unused-vars': ['error', {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all',
    }],
    'no-use-before-define': ['error', 'nofunc'],

    // Disabled:
    // - init-declarations
    // - no-catch-shadow
    // - no-restricted-globals

    /**
     * Stylistic Consistency
     */

    'arrow-body-style': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': ['error', {
      properties: 'always',
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', 'after'],
    'id-blacklist': ['error',
      'obj', 'object',
      'num', 'number',
      'str', 'string',
      'bool', 'boolean',
    ],
    'id-length': ['error', {
      min: 3,
      exceptions: [
        '$',
        '$q',
        '_',
        'as',
        'db',
        'eq',
        'fs',
        'gt',
        'id',
        'ip',
        'lt',
        'on',
        'os',
        'qs',
        'to',
        'vm',
        'x',
        'y',
        'z',
      ],
    }],
    'indent': ['error', 2, {
      SwitchCase: 1,
    }],
    'jsx-quotes': 'error',
    'key-spacing': ['error', {
      afterColon: true,
      mode: 'minimum',
    }],
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'lines-between-class-members': 'error',
    'max-depth': ['warn', 5],
    'max-len': ['warn', {
      code: 120,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'max-nested-callbacks': ['error', 5],
    'max-statements': ['warn', 24],
    'max-statements-per-line': 'error',
    'max-params': ['warn', 5],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'nonblock-statement-body-position': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': ['warn', {
      allow: ['_id'],
    }],
    'no-unneeded-ternary': 'error',
    'no-useless-computed-key': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
      },
    }],
    'padded-blocks': ['error', {
      classes: 'always',
      switches: 'never',
    }],
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: '*', next: ['function'] },
      { blankLine: 'always', prev: '*', next: ['export', 'cjs-export'] },
    ],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true,
    }],
    'prefer-numeric-literals': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', 'avoid-escape'],
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
      },
    }],
    'rest-spread-spacing': 'error',
    'semi': 'error',
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {
      // balanced: true, // TODO enable when released
      block: { markers: ['*'] },
      line: { markers: ['/', '-'] },
    }],
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': ['error', 'after'],

    // Disabled:
    // - array-element-newline
    // - capitalized-comments
    // - func-style
    // - id-match
    // - line-comment-position
    // - lines-around-comment
    // - multiline-comment-style
    // - newline-per-chained-call
    // - no-inline-comments
    // - no-multi-assign
    // - no-ternary
    // - no-undefined
    // - object-curly-newline
    // - one-var
    // - no-plusplus
    // - sort-imports
    // - sort-keys
    // - sort-vars

    // Legacy:
    // - indent-legacy
    // - lines-around-directive
    // - newline-after-var
    // - newline-before-return
    // - no-native-reassign
    // - no-negated-in-lhs
    // - no-spaced-func
    // - prefer-reflect

    // - generator-star
    // - global-strict
    // - no-arrow-condition
    // - no-comma-dangle
    // - no-empty-class
    // - no-empty-label
    // - no-extra-strict
    // - no-reserved-keys
    // - no-space-before-semi
    // - no-wrap-func
    // - space-after-function-name
    // - space-after-keywords
    // - space-before-function-parentheses
    // - space-before-keywords
    // - space-in-brackets
    // - space-return-throw-case
    // - space-unary-word-ops
    // - spaced-line-comment

  },

};
