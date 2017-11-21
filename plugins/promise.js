'use strict';

module.exports = {

  plugins: [
    'promise',
  ],

  rules: {

    'promise/catch-or-return': ['error', {
      terminationMethod: ['catch', 'asCallback', 'finally'],
    }],
    'promise/no-callback-in-promise': 'warn', // callback, cb, next, done
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',

    // Disabled:
    // - always-return
    // - avoid-new
    // - no-native
    // - no-nesting
    // - prefer-await-to-then
    // - prefer-await-to-callbacks

  },

};
