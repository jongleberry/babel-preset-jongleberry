'use strict'

/**
 * Otherwise, certain modules will error with an "invalid property default".
 */

module.exports = name => {
  const mod = require(name)
  return mod.default || mod
}
