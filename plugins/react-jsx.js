'use strict'

module.exports = {

  extends: [
    './react.js',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {

    'react/jsx-boolean-value': [1, 'never'],
    'react/jsx-closing-bracket-location': [1, 'props-aligned'],
    'react/jsx-curly-spacing': [1,
      'never',
      { allowMultiline: true },
    ],
    'react/jsx-equals-spacing': [1, 'never'],
    'react/jsx-handler-names': [1, {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-indent': [1, 2],
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': [1, {
      maximum: 3,
    }],
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-props': 0,
    'react/jsx-space-before-closing': [1, 'always'],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,

  },

}
