'use strict'

const load = require('./load')

module.exports = {
  presets: [
    load('babel-preset-react'),
    load('babel-preset-es2015'),
    load('babel-preset-stage-1'),
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
        // load('babel-plugin-closure-elimination'),
      ],
      presets: [
        load('babel-preset-react-optimize'),
      ]
    }
  },
}
