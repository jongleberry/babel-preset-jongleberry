'use strict'

const version = ~~/^v(\d+)/.exec(process.version)[1]
if (version < 4) throw new Error('Only node v4+ is supported!')

const wrapDefault = require('./wrap-default')

module.exports = {
  plugins: [
    [
      require('babel-plugin-transform-async-to-module-method'), {
        module: 'bluebird',
        method: 'coroutine'
      }
    ],
    [
      wrapDefault(require('babel-plugin-typecheck')), {
        disable: {
          production: true,
        },
      },
    ],
    require('babel-plugin-syntax-flow'),
    require('babel-plugin-transform-flow-strip-types'),
    // require('babel-plugin-transform-runtime'),
  ].concat(require('babel-features').options().plugins.filter(x => {
    // don't use regenerator because it sucks
    if (x === 'transform-regenerator') return false
    return true
  }).map(name => require('babel-plugin-' + name.toLowerCase()))),

  presets: [
    require('babel-preset-stage-0'),
  ],
}
