'use strict';

module.exports = {

  extends: [
    './common-js.js',
  ],

  rules: {

    /* Stylistic consistencies */

    'comma-dangle': [1, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    'dot-notation': [1,
      { allowKeywords: true },
    ],
    'semi': [1,
      'always',
    ],

    /* ************* */
    /* Plugin import */
    /* ************* */

    // Module systems

    'import/no-webpack-loader-syntax': 0,
    'import/unambiguous': 0,

  },

  settings: {

    /* ************* */
    /* Plugin import */
    /* ************* */

    'import/ignore': [
      'node_modules',
      '\\.(css|scss|sass|less|html|png)',
    ],

  },

};
