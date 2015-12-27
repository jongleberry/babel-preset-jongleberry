
# babel-preset-jongleberry

[![NPM version][npm-image]][npm-url]
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

- `babel-preset-es2015`, `babel-preset-es2015-node4`, `babel-preset-es2015-node5` - depending on the environment
- `babel-preset-stage-0`
- `babel-plugin-syntax-flow`, `babel-plugin-typecheck` (non-production only), `babel-plugin-transform-flow-strip-types` - for flow type support
- `babel-plugin-transform-runtime` - avoid global polyfills
- `babel-plugin-lodash` - minimize lodash builds in your FE builds

## Contributions

I would love to add more! Create an issue or PR with recommendations.

Please help with tests :)

[npm-image]: https://img.shields.io/npm/v/babel-preset-jongleberry.svg?style=flat-square
[npm-url]: https://npmjs.org/package/babel-preset-jongleberry
[david-image]: http://img.shields.io/david/jongleberry/babel-preset-jongleberry.svg?style=flat-square
[david-url]: https://david-dm.org/jongleberry/babel-preset-jongleberry
[license-image]: http://img.shields.io/npm/l/babel-preset-jongleberry.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/babel-preset-jongleberry.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/babel-preset-jongleberry
