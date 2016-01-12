'use strict'

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
    wrapDefault(require('babel-plugin-lodash')),
    // require('babel-plugin-transform-runtime'),
  ],
  presets: [
    require('babel-preset-stage-0'),
    require('babel-preset-es2015'),
    require('babel-preset-react'),
  ],
  env: {
    development: {
      presets: ['react-hmre']
    },
    production: {
      plugins: [
        'transform-react-constant-elements',
        'transform-react-inline-elements',
      ]
    }
  },
}
