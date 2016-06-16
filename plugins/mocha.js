'use strict'

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
    'mocha/no-skipped-tests': 1,
    'mocha/no-pending-tests': 1,
    'mocha/handle-done-callback': 2,
    'mocha/no-synchronous-tests': 0,
    'mocha/no-global-tests': 2,

  },

}
