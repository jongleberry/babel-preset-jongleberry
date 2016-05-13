
import React from 'react'

// http://babeljs.io/docs/plugins/transform-react-constant-elements/
const Hr = () => {
  return <hr className="hr" />;
}

// http://babeljs.io/docs/plugins/transform-react-inline-elements/
const el = <Baz foo="bar" key="1"></Baz>;
