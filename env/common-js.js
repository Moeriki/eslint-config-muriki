'use strict';

module.exports = {

  plugins: [
    'import',
  ],

  env: {
    commonjs: true,
  },

  rules: {

    /* Best practices */

    'no-duplicate-imports': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'strict': [2, 'global'],

    /* ************* */
    /* Plugin import */
    /* ************* */

    // static analysis

    'import/default': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/no-unresolved': [2,
      { commonjs: true },
    ],
    'import/no-unassigned-import': 0,

    // Helpful warnings

    'import/export': 2,
    'import/no-absolute-path': 2,
    'import/no-named-as-default': 1,
    'import/no-named-as-default-member': 1,
    'import/no-named-default': 1,
    'import/no-deprecated': 0,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: false,
    }],

    // Module systems

    'import/no-amd': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/unambiguous': 2,

    // style guide

    'import/first': [1,
      { 'absolute-first': true },
    ],
    'import/max-dependencies': 0,
    'import/newline-after-import': 1,
    'import/no-duplicates': 1,
    'import/no-namespace': 0,
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
    }],

  },

};
