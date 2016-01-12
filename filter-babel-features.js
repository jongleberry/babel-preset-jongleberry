'use strict'

module.exports = require('babel-features').options().plugins
.filter(x => {
  // don't include es3 stuff ever. not sure why travis sucks
  if (/\bes3\b/.test(x)) return false
  // don't use regenerator because it sucks
  if (x === 'transform-regenerator') return false
  return true
})
.map(name => 'babel-plugin-' + name.toLowerCase())
