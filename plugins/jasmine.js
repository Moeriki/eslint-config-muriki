'use strict';

module.exports = {

  env: {
    jest: true,
  },

  extends: [
    'plugin:jasmine/recommended',
  ],

  plugins: [
    'jasmine',
  ],

  rules: {
    'jasmine/new-line-before-expect': 'off',
    'jasmine/no-spec-dupes': ['error', 'branch'],
    'jasmine/no-suite-dupes': ['error', 'branch'],
  },

};
