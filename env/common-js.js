'use strict';

module.exports = {

  plugins: [
    'import',
  ],

  env: { commonjs: true },

  rules: {

    /* Best practices */

    'no-duplicate-imports': 2,
    'no-new-require': 1,
    'strict': [2, 'global'],

    /* ************* */
    /* Plugin import */
    /* ************* */

    // static analysis

    'import/no-unresolved': [2,
      { commonjs: true },
    ],
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,

    // Helpful warnings

    'import/export': 2,
    'import/no-named-as-default': 1,
    'import/no-named-as-default-member': 1,
    'import/no-deprecated': 0,
    'import/no-extraneous-dependencies': 2,

    // Module systems

    'import/no-amd': 2,

    // style guide

    'import/imports-first': [1,
      { 'absolute-first': true },
    ],
    'import/no-duplicates': 1,
    'import/no-namespace': 0,

  },

  settings: {
    'import/extensions': ['.js'],
  },

};
