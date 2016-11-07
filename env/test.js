'use strict';

module.exports = {

  extends: [
    './node.js',
  ],

  plugins: [
    'import',
  ],

  rules: {

    'arrow-body-style': 0,
    'func-names': 0,
    'handle-callback-err': 0,
    'max-statements': [1, 32],
    'no-unused-expressions': 0,
    'no-sync': 0,

    /* ************* */
    /* Plugin import */
    /* ************* */

    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
    }],

  },

};
