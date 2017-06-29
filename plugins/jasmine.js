'use strict';

module.exports = {

  plugins: [
    'jasmine',
  ],

  extends: [
    'plugin:jasmine/recommended',
  ],

  env: {
    jasmine: true,
  },

  rules: {
    'arrow-body-style': 0,
    'jasmine/newline-before-expect': 0,
    'jasmine/no-spec-dupes': [1, 'branch'],
    'jasmine/no-suite-dupes': [1, 'branch'],
  },

};
