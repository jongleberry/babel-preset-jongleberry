'use strict'

const version = ~~/^v(\d+)/.exec(process.version)[1]

if (version < 4) {
  console.error('Only node v4+ is supported!')
  process.exit(1)
}

if (version >= 6) {
  console.error('Only node v6+ is not yet supported! Please file an issue!')
  process.exit(1)
}

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
    require('babel-plugin-transform-runtime'),
  ],
  presets: [
    require('babel-preset-stage-0'),
    require('babel-preset-es2015-node' + version),
  ],
}
