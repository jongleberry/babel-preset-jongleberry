'use strict'

/**
 * Otherwise, certain modules will error with an "invalid property default".
 */

module.exports = mod => mod.default || mod
