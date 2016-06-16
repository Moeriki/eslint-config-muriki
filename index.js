'use strict'

var path = require('path')

module.exports = {

  extends: [
    path.resolve(__dirname, './base.js'),
    path.resolve(__dirname, './style.js'),
  ],

}
