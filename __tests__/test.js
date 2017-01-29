'use strict';

// node

const fs = require('fs');
const path = require('path');

// vendor modules

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

[
  'index',
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
  'plugins/jasmine',
  'plugins/react',
  'presets/jest',
  'presets/node',
  'presets/test',
].forEach((filepath) => {

  it(`${filepath} should be valid config`, () => {
    // test
    const output = cliOutput(filepath);

    // verify
    if (output.errorCount) {
      /* eslint-disable no-console */
      console.log(JSON.stringify(output.results, null, 2));
    }
    expect(output.errorCount).toBe(0);
  });

});
