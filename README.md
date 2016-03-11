# ESLint Config Muriki

An excellent ESLint config you should totally use.

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
    'muriki/env/node-ish',         // for bundled JavaScript, include after browser for looser rules
    'muriki/env/node',             // extends node-ish
    'muriki/env/node-script',      // extends node - some rules loosened up
    'muriki/env/test',             // loosen up some rules, import after node/browser
    'muriki/env/test-mocha',       // extends test

    // node version
    'muriki/es/2015',              // rules specific for es2015
    'muriki/es/2016',              // rules specific for es2016

    // extra
    'muriki/react',                // rules specific for React
    'muriki/react-jsx',            // extends react
  ]

}
```

Extending the default [`extends: ['muriki']`] include `base` and `style`.

## TODO

- [X] Muriki config
- [X] Presets for ES5 / ES2016 <> Node 0.10, Node 0.12, Node 4, Node 5
- [ ] Update rules of plugins (and find a way to track their changes)
- [ ] Integrate lo1tuma/eslint-plugin-mocha
- [ ] Integrate eslint angular plugin
- [ ] Create custom comma-dangle rule
- [ ] CLI to lookup rules
- [ ] CLI to generate config file (.js)
- [ ] CLI to update config file
- [ ] CLI to validate config file
- [ ] CLI to list missing rules
- [ ] CLI to set / update presets on config file
