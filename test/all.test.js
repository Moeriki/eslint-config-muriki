/* eslint no-console:0 */

'use strict';

const path = require('path');

const { CLIEngine } = require('eslint');

/**
 * Verify if a config file is valid.
 * @param {string} filepath
 * @return {boolean}
 */
function cliOutput(filepath) {
  const configFile = path.join(__dirname, `../${filepath}.js`);
  return new CLIEngine({ useEslintrc: false, configFile }).executeOnText(`/**/
`);
}

// tests

describe('eslint-config-medialaan', () => {

  [
    'index',
    'loose',
    'test',
  ].forEach((configFile) => {

    describe(configFile, () => {

      it('should be valid config', () => {
        const output = cliOutput(configFile);
        if (output.errorCount) {
          console.log(JSON.stringify(output.results, null, 2));
        }
        expect(output.errorCount).toBe(0);
      });

    });

  });

});
