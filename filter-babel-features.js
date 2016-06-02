'use strict'

const debug = require('debug')('babel-preset-jongleberry:filter-babel-features')
const features = require('babel-features').test()

const plugins = Object.keys(features)
.filter(x => {
  // already supported
  if (features[x]) return false
  // only check ES2015 features
  if (!/^es2015/.test(x)) return false
  // apply this feature
  return true
})
.map(name => 'babel-plugin-transform-' + name.toLowerCase())

debug(plugins)

module.exports = plugins
