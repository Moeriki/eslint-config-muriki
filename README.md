# ESLint Config Muriki

An extensive opinionated ESLint config.

[![Build Status](https://travis-ci.org/Moeriki/eslint-config-muriki.svg?branch=master)](https://travis-ci.org/Moeriki/eslint-config-muriki) [![Known Vulnerabilities](https://snyk.io/test/github/moeriki/eslint-config-muriki/badge.svg)](https://snyk.io/test/github/moeriki/eslint-config-muriki) [![dependencies Status](https://david-dm.org/moeriki/eslint-config-muriki/status.svg)](https://david-dm.org/moeriki/eslint-config-muriki) [![Downloads](http://img.shields.io/npm/dm/eslint-config-muriki.svg?style=flat)](https://www.npmjs.org/package/eslint-config-muriki)

---

## Install

```
npm install --save-dev eslint eslint-config-muriki
```

## Usage

Create your `.eslintrc.js` file.

```javascript
module.exports = {

  extends: [
    'muriki'
  ]

}
```

## Modularity

Muriki config is split up in different modules you can combine at your own liking.

```javascript
module.exports = {

  extends: [

    // potential errors and best practices
    'muriki/base',

    // style rules
    'muriki/style',

    // environments
    'muriki/env/browser',
    'muriki/env/bundled',          // for bundled JavaScript, include after browser for looser rules
    'muriki/env/common-js',        // node-ish environments, base for node and bundled
    'muriki/env/node',             // extends node-ish
    'muriki/env/node-script',      // extends node - some rules loosened up
    'muriki/env/test',             // loosen up some rules, import after node/browser

    // node version
    'muriki/es/2015',              // rules specific for es2015
    'muriki/es/2015-node4',        // rules specific for es2015 as in Node4
    'muriki/es/2016',              // rules specific for es2016
    'muriki/es/2017',              // rules specific for es2017

    // extra
    'muriki/jasmine',              // rules specific for React
    'muriki/mocha',                // rules specific for React
    'muriki/react',                // rules specific for React
    'muriki/react-jsx',            // extends react
  ]

}
```

Extending the default [`extends: ['muriki']`] include `base` and `style`.

## TODO

- [ ] proof-read and update README
- [ ] CLI to lookup rules
- [ ] CLI to generate config file (.js)
- [ ] CLI to update config file
- [ ] CLI to validate config file
- [ ] CLI to list missing rules
- [ ] CLI to set / update presets on config file
