'use strict'

module.exports = {

  plugins: [
    'react',
  ],

  rules: {

    /* Plugin react */

    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/forbid-prop-types': 0,
    'react/no-danger': 1,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': [2, 'allow-in-func'],
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 0,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0,
    'react/sort-prop-types': [1, {
      callbacksLast: true,
      ignoreCase: true,
      requiredFirst: true,
    }],
    'react/wrap-multilines': 1,

  },

  settings: {
    react: {
      pragma: 'React',
      version: '15.0.0',
    },
  },

}
