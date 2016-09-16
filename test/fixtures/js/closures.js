'use strict'

// https://github.com/codemix/babel-plugin-closure-elimination
function demo (input) {
  return input.map(item => item + 1).map(item => item + 2)
}
