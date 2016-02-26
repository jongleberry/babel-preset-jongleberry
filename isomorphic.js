'use strict'

const load = require('./load')

module.exports = {
  plugins: [
    [
      load('babel-plugin-typecheck'), {
        disable: {
          production: true,
        },
      },
    ],
    load('babel-plugin-syntax-flow'),
    load('babel-plugin-transform-flow-strip-types'),
    load('babel-plugin-transform-runtime'),
  ],
  presets: [
    load('babel-preset-stage-0'),
    load('babel-preset-es2015'),
    load('babel-preset-react'),
  ],
  env: {
    development: {
      presets: [
        load('babel-preset-react-hmre'),
      ]
    },
    production: {
      plugins: [
        load('babel-plugin-transform-react-constant-elements'),
        load('babel-plugin-transform-react-inline-elements'),
        load('babel-plugin-react-remove-prop-types'),
      ]
    }
  },
}
