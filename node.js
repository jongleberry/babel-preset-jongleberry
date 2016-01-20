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
    require('babel-plugin-transform-runtime'),
  ]
  .concat(require('./filter-babel-features').map(name => require(name))),

  presets: [
    require('babel-preset-stage-0'),
  ],
}
