'use strict';

module.exports = {

  env: { mocha: true },

  plugins: [
    'mocha',
  ],

  rules: {

    /* ************ */
    /* Plugin mocha */
    /* ************ */

    'mocha/no-exclusive-tests': 2,
    'mocha/no-hooks': 0,
    'mocha/no-sibling-hooks': 0,
    'mocha/no-skipped-tests': 1,
    'mocha/no-pending-tests': 1,
    'mocha/handle-done-callback': 2,
    'mocha/no-mocha-arrows': 1,
    'mocha/no-synchronous-tests': 0,
    'mocha/no-global-tests': 2,
    'mocha/valid-suite-description': 0,
    'mocha/valid-test-description': 1,

  },

};
