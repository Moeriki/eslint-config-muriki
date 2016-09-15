'use strict';

// node

const fs = require('fs');
const path = require('path');

// vendor modules

const expect = require('chai').expect;
const CLIEngine = require('eslint').CLIEngine;

// private variables

const fixture = fs.readFileSync(path.join(__dirname, './fixture.js'));

// private functions

/**
 * Verify if a config file is valid.
 * @param  {string} filepath
 * @return {boolean}
 */
function cliOutput(filepath) {
  const fullFilepath = path.join(__dirname, '../', `${filepath}.js`);

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: fullFilepath,
  });

  return cli.executeOnText(fixture);
}

// tests

describe('eslint-config-muriki', function () {

  [
    'base',
    'style',
    'env/browser',
    'env/bundled',
    'env/common-js',
    'env/node',
    'env/node-script',
    'env/test',
    'es/2015',
    'es/2015-node4',
    'es/2016',
    'es/modules',
    'plugins/mocha',
    'plugins/react',
    'plugins/react-jsx',
  ].forEach((filepath) => {

    describe(filepath, function () {

      it('should be valid config', function () {
        // test
        const output = cliOutput(filepath);

        // verify
        if (output.errorCount) {
          /* eslint-disable no-console */
          console.log(JSON.stringify(output.results, null, 2));
        }
        expect(output.errorCount).to.equal(0);
      });

    });

  });

});
