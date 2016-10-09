'use strict';

module.exports = {

  extends: [
    './node.js',
  ],

  plugins: [
    'import',
  ],

  rules: {

    'func-names': 0,
    'no-console': 0,
    'no-magic-numbers': 0,
    'no-process-exit': 0,
    'no-sync': 0,
    'require-jsdoc': 0,

    /* ************* */
    /* Plugin import */
    /* ************* */

    'import/no-extraneous-dependencies': [0, {
      devDependencies: true,
    }],

  },

};
