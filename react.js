'use strict'

const load = require('./load')

module.exports = {
  presets: [
    load('babel-preset-react'),
    load('babel-preset-es2015'),
    load('babel-preset-stage-1'),
  ],

  plugins: [
    load('babel-plugin-transform-es2015-modules-commonjs'),
    load('babel-plugin-lodash'),
    load('babel-plugin-transform-flow-strip-types'),
    load('babel-plugin-transform-runtime'),
  ],

  env: {
    development: {
      plugins: [
        load('babel-plugin-typecheck'),
      ],
      presets: [
        load('babel-preset-react-hmre'),
      ]
    },

    production: {
      presets: [
        load('babel-preset-react-optimize'),
      ]
    }
  },
}
