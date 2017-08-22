<p align="center">
  <h3 align="center">eslint-config-muriki</h3>
  <p align="center">My extensive, opinionated ESLint config.<p>
  <p align="center">
    <a href="https://www.npmjs.com/package/eslint-config-muriki">
      <img src="https://img.shields.io/npm/v/eslint-config-muriki.svg" alt="npm version">
    </a>
    <a href="https://travis-ci.org/Moeriki/eslint-config-muriki">
      <img src="https://travis-ci.org/Moeriki/eslint-config-muriki.svg?branch=master" alt="Build Status"></img>
    </a>
    <a href="https://snyk.io/test/github/moeriki/eslint-config-muriki">
      <img src="https://snyk.io/test/github/moeriki/eslint-config-muriki/badge.svg" alt="Known Vulnerabilities"></img>
    </a>
  </p>
</p>

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

Muriki config is split up in different modules you can combine as you need them.

```javascript
module.exports = {

  extends: [

    'muriki',

    // environments
    'muriki/env/browser',
    'muriki/env/bundled',     // for bundled JavaScript, include after browser for looser rules
    'muriki/env/common-js',   // node-ish environments, base for node and bundled
    'muriki/env/node',        // extends node-ish
    'muriki/env/node-script', // extends node - some rules loosened up
    'muriki/env/test',        // loosen up some rules, import after node/browser

    // node version
    'muriki/es/2015',         // rules specific for es2015
    'muriki/es/2015-node4',   // rules specific for es2015 as in Node4
    'muriki/es/2016',         // rules specific for es2016
    'muriki/es/2017',         // rules specific for es2017
    'muriki/es/2018',         // rules specific for es2017
    'muriki/es/latest',       // rules specific for latest (es2018)
    'muriki/es/modules',      // rules for es modules

    // plugins
    'muriki/plugins/jasmine', // rules for jasmine
    'muriki/plugins/react',   // rules for react

    // presets
    'muriki/node',            // includes muriki, env/node, es/2015
    'muriki/react'            // includes muriki, env/browser, env/bundled, es/2015, plugins/react
    'muriki/test',            // includes muriki, env/node, es/2015, env/test
    'muriki/jest',            // includes muriki, env/node, es/2015, env/test, plugins/jasmine
  ]

}
```
