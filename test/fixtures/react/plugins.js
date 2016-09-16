
// TODO: make sure `ref`s do not conflict
import React from 'react'

// http://babeljs.io/docs/plugins/transform-react-constant-elements/
const Hr = () => {
  return <hr className='hr' />
}

// http://babeljs.io/docs/plugins/transform-react-inline-elements/
const el = <Baz foo='bar' key='1' />

// https://github.com/codemix/babel-plugin-closure-elimination
function demo (input) {
  return input.map(item => item + 1).map(item => item + 2)
}
