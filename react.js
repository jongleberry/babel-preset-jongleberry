'use strict'

const load = require('./load')

module.exports = {
  presets: [
    load('babel-preset-react'),
    load('babel-preset-modern'),
    load('babel-preset-modern/safari9'),
    load('babel-preset-modern/stage1'),
  ],

  plugins: [
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
      plugins: [
        load('babel-plugin-transform-react-constant-elements'),
        load('babel-plugin-transform-react-inline-elements'),
        load('babel-plugin-react-remove-prop-types'),
      ]
    }
  },
}
