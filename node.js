'use strict'

const version = ~~/^v(\d+)/.exec(process.version)[1]

const wrapDefault = require('./wrap-default')

module.exports = {
  plugins: [
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
  ],
  presets: [
    require('babel-preset-stage-0'),
    version >= 5 ? require('babel-preset-es2015-node5')
      : version >= 4 ? require('babel-preset-es2015-node4')
      : require('babel-preset-es2015'),
  ],
}
