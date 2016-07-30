'use strict';

module.exports = {

  extends: [
    './_common-js.js',
  ],

  rules: {

    /* Stylistic consistencies */

    'comma-dangle': [1,
      'always-multiline',
    ],
    'dot-notation': [1,
      { allowKeywords: true },
    ],

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
