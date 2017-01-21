'use strict';

module.exports = {

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    'react',
    'jsx-a11y',
  ],

  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],

  settings: {
    react: {
      pragma: 'React',
      version: '15.0.0',
    },
  },

  rules: {
    'class-methods-use-this': 0,
  },

};
