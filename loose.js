'use strict';

const path = require('path');

module.exports = {

  extends: [
    path.join(__dirname, 'index.js'),
  ],

  rules: {
    'func-names': 'off',
    'handle-callback-err': 'off',
    'max-lines': ['warn', 1000],
    'max-nested-callbacks': ['warn', 5],
    'max-statements': ['warn', 32],
    'no-await-in-loop': 'warn',
    'no-console': 'off',
    'no-empty-function': 'warn',
    'no-invalid-this': 'warn',
    'no-magic-numbers': 'off',
    'no-process-exit': 'off',
    'no-process-env': 'off',
    'no-sync': 'off',
    'require-jsdoc': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
  },

};
