'use strict';

module.exports = {

  plugins: [
    'import',
  ],

  rules: {

    // Statis analysis

    'import/named': 'error',
    'import/namespace': ['error', {
      allowComputed: true,
    }],
    'import/default': 'error',
    'import/export': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],

    // Potential errors

    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-unassigned-import': 'error',
    'import/unambiguous': 'warn',

    // Module systems

    'import/no-amd': 'error',

    // Stylistic preference

    'import/extensions': ['error', {
      js: 'always', // eslint-disable-line id-length
      json: 'always',
    }],
    // 'import/exports-last': 'error', // TODO enable when released
    'import/max-dependencies': ['warn', { max: 16 }],
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: false,
    }],
    'import/first': 'error',
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'parent',
        'sibling',
        'index',
        'internal',
      ],
    }],

    // Disabled:
    // - group-exports
    // - no-anonymous-default-export
    // - no-dynamic-require
    // - no-internal-modules
    // - no-namespace
    // - no-nodejs-modules
    // - no-restricted-paths
    // - no-unassigned-import
    // - no-webpack-loader-syntax
    // - prefer-default-export

  },

};
