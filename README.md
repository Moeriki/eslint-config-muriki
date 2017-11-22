# ESLint Config Muriki

## Install

```
npm install --save-dev eslint eslint-config-muriki
```

## Usage

You'll probably want to use [eslint-plugin-muriki](http://github.com/moeriki/eslint-plugin-muriki) instead.

## No I don't

To lint your code with ESLint create a file `.eslintrc.js` in your project root.

```javascript
module.exports = { extends: 'muriki' };
```

Add a lint script to your `package.json`.

```javascript
{
  "scripts": {
    "lint": "eslint ...[file|dir]"
  }
}
```

### Different presets

You can use a few different configs.

* *default*
* **loose** - extends *default*, while loosing up some rules, ideal for scripting
* **test** — extends *loose*, for tests

You can extend a preset like so.

```javascript
module.exports = { extends: 'muriki/test' };
```

## Linting in IDE

It's obligatory to install IDE plugins and enabled auto-fixing.

**Atom**

`https://github.com/AtomLinter/linter-eslint`

**Sublime Text**

`https://github.com/roadhump/SublimeLinter-eslint`

**VSCode**

`https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint`

**WebStorm**

`https://www.jetbrains.com/help/webstorm/2016.1/eslint.html`

## Linting on commit

It's possible to lint your code on commit to keep the repository clean and the feedback early.

**Dependencies**

`npm install --save-dev husky lint-staged`

**package.json**

```javascript
{
  "scripts": {
    { "precommit": "lint-staged" }
  },
  "lint-staged": { "*.js": "eslint" }
}
```
