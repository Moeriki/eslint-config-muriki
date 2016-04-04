'use strict'

// node

var fs = require('fs')
var path = require('path')

// vendor modules

var expect = require('chai').expect
var CLIEngine = require('eslint').CLIEngine;

// private variables

var fixture = fs.readFileSync(path.join(__dirname, './fixture.js'))

// private functions

/**
 * Verify if a config file is valid.
 * @param  {string} filepath
 * @return {boolean}
 */
function cliOutput(filepath) {
  var fullFilepath = path.join(__dirname, '../', filepath + '.js')

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: fullFilepath,
  })

  return cli.executeOnText(fixture)
}

// tests

describe('eslint-config-muriki', function () {

  [
    'base',
    'env/browser',
    'env/node-ish',
    'env/node',
    'env/node-4',
    'env/node-5',
    'env/node-script',
    'env/test',
    'env/test-mocha',
    'es/2015',
    'es/2016',
    'plugins/import',
    'plugins/react',
    'plugins/react-jsx',
    'style',
  ].forEach(function (filepath) {

    describe(filepath, function () {

      it('should be valid config', function () {
        // test
        var output = cliOutput(filepath)

        // verify
        if (output.errorCount) {
          console.log(JSON.stringify(output.results, null, 2))
        }
        expect(output.errorCount).to.equal(0)
      })

    })

  })

})
