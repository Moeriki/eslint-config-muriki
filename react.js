'use strict'

module.exports = {

  plugins: [
    'react',
  ],

  rules: {

    /**
     * eslint-plugin-react
     */
    'react/display-name': [1, { acceptTranspilerName: true }],
    'react/no-danger': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 2,

  },

}
