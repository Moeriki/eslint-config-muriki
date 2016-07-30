'use strict'

module.exports = {

  plugins: [
    'jsx-a11y',
  ],

  extends: [
    './react.js',
  ],

  parserOptions: { ecmaFeatures: { jsx: true } },

  rules: {

    /* Plugin react */

    'react/jsx-boolean-value': [1,
      'never',
    ],
    'react/jsx-closing-bracket-location': [1,
      'props-aligned',
    ],
    'react/jsx-curly-spacing': [1,
      'never',
      { allowMultiline: true },
    ],
    'react/jsx-equals-spacing': [1,
      'never',
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-handler-names': [1, {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-indent': [1, 2],
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': [1,
      { maximum: 3 },
    ],
    'react/jsx-no-bind': 2,
    'react/jsx-no-comment-textnodes': 0,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 1,
    'react/jsx-sort-props': 0,
    'react/jsx-space-before-closing': [1,
      'always',
    ],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,

    /* *************** */
    /* Plugin jsx-a11y */
    /* *************** */

    'jsx-a11y/aria-props': 2,
    'jsx-a11y/aria-proptypes': 2,
    'jsx-a11y/aria-role': 2,
    'jsx-a11y/aria-unsupported-elements': 2,
    'jsx-a11y/href-no-hash': [2,
      ['Link'],
    ],
    'jsx-a11y/img-has-alt': [2,
      ['Image'],
    ],
    'jsx-a11y/img-redundant-alt': 1,
    'jsx-a11y/label-has-for': [2,
      ['Label'],
    ],
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/no-access-key': 2,
    'jsx-a11y/no-onchange': 2,
    'jsx-a11y/onclick-has-focus': 2,
    'jsx-a11y/onclick-has-role': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/tabindex-no-positive': 2,
  },

}
