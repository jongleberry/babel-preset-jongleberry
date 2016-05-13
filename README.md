
# babel-preset-jongleberry

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Personal babel presets.

Usage:

```js
{
  // choose one of the following:
  "presets": [
    "jongleberry",
    "jongleberry/node",
    "jongleberry/react",
    "jongleberry/isomorphic"
  ]
}
```

These presets use the following plugins, wherever appropriate:

- `babel-preset-es2015` - for browsers
- `babel-features` - use just the presets needed for the current node environment
- `babel-preset-stage-1`
- `babel-plugin-syntax-flow`, `babel-plugin-typecheck` (non-production only), `babel-plugin-transform-flow-strip-types` - for flow type support
- `babel-plugin-transform-runtime` - avoid global polyfills
- `babel-plugin-lodash` - minimize lodash builds in your FE builds
- `babel-plugin-transform-react-constant-elements`, `babel-plugin-transform-react-inline-elements`, `babel-plugin-transform-react-remove-prop-types` - minimize react builds in production
- `babel-plugin-closure-elimination` - eliminate closures in production for performance

## Contributions

I would love to add more! Create an issue or PR with recommendations.

[npm-image]: https://img.shields.io/npm/v/babel-preset-jongleberry.svg?style=flat-square
[npm-url]: https://npmjs.org/package/babel-preset-jongleberry
[travis-image]: https://img.shields.io/travis/jongleberry/babel-preset-jongleberry.svg?style=flat-square
[travis-url]: https://travis-ci.org/jongleberry/babel-preset-jongleberry
[codecov-image]: https://img.shields.io/codecov/c/github/jongleberry/babel-preset-jongleberry/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/jongleberry/babel-preset-jongleberry
[david-image]: http://img.shields.io/david/jongleberry/babel-preset-jongleberry.svg?style=flat-square
[david-url]: https://david-dm.org/jongleberry/babel-preset-jongleberry
[license-image]: http://img.shields.io/npm/l/babel-preset-jongleberry.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/babel-preset-jongleberry.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/babel-preset-jongleberry
