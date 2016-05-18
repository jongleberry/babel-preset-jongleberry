'use strict'

const version = ~~/^v(\d+)/.exec(process.version)[1]
if (version < 4) throw new Error('Only node v4+ is supported!')

const load = require('./load')

module.exports = {
  plugins: [
    [
      load('babel-plugin-transform-async-to-module-method'), {
        module: 'bluebird',
        method: 'coroutine'
      }
    ],
    load('babel-plugin-syntax-flow'),
    load('babel-plugin-lodash'),
    load('babel-plugin-transform-flow-strip-types'),
    load('babel-plugin-transform-runtime'),
  ]
  .concat(load('./filter-babel-features').map(load)),

  presets: [
    load('babel-preset-stage-1'),
  ],

  env: {
    development: {
      plugins: [
        load('babel-plugin-typecheck')
      ]
    },
  }
}
