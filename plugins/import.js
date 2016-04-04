'use strict'

module.exports = {

  plugins: [
    'import',
  ],

  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
  ],

  settings: {

    'import/ignore': [
      'node_modules',
      '\.(scss|css|png|jpg|md)',
    ],

  },

}
