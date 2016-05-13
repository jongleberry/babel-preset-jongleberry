'use strict'

const babel = require('babel-core')
const uglify = require('uglify-js')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const assert = require('assert')
const path = require('path')
const fs = require('fs')

const FIXTURES_JS = fs.readdirSync(path.join(__dirname, 'fixtures', 'js'))
const FIXTURES_REACT = fs.readdirSync(path.join(__dirname, 'fixtures', 'react'))

before(done => {
  rimraf(path.join(__dirname, 'results'), done)
})

describe('Babel Preset Jongleberry', () => {
  const ENVS = [
    'development',
    'production',
  ]

  for (const ENV of ENVS) {
    describe(`Environment: ${ENV}`, () => {
      describe('JS Fixtures', () => {
        const presets = [
          'node',
          'react',
          'isomorphic',
        ]

        presets.forEach(presetName => {
          describe(presetName, () => {
            FIXTURES_JS.forEach(fixture => {
              it(fixture, run({
                env: ENV,
                presetName,
                type: 'js',
                fixture,
              }))
            })
          })
        })
      })

      describe('React Fixtures', () => {
        const presets = [
          'react',
          'isomorphic',
        ]

        presets.forEach(presetName => {
          describe(presetName, () => {
            FIXTURES_REACT.forEach(fixture => {
              it(fixture, run({
                env: ENV,
                presetName,
                type: 'react',
                fixture,
              }))
            })
          })
        })
      })
    })
  }
})

function run (options) {
  const {
    env,
    presetName,
    type,
    fixture,
  } = options

  const preset = require(`../${presetName}`)
  const minify = presetName !== 'node'
  const filename = path.join(__dirname, 'fixtures', type, fixture)
  const output = path.join(__dirname, 'results', env, presetName, type, fixture)

  return () => {
    process.env.BABEL_ENV = env

    // transform the result
    const result = babel.transform(fs.readFileSync(filename, 'utf8'), preset)

    // write the file for inspection
    mkdirp.sync(path.dirname(output))
    fs.writeFileSync(output, result.code)

    // make sure it's valid JS
    try {
      new Function(result.code)
    } catch (err) {
      console.error(result.code)
      throw err
    }

    // make sure it's minify-able
    if (minify) {
      try {
        uglify.minify(result.code, {
          fromString: true
        })
      } catch (err) {
        console.error(result.code)
        throw err
      }
    }

    if (fixture === 'closures') {
      // https://github.com/codemix/babel-plugin-closure-elimination
      assert(/\binput\.map\(\w+\)\.map\(\w+\)/.test(result.code))
    }

    if (presetName === 'react' && env === 'production' && type === 'react') {
      // no proptypes in production
      assert(!/\bproptypes?\b/i.test(result.code))

      if (fixture === 'plugins') {
        // uses babel helpers
        // http://babeljs.io/docs/plugins/transform-react-inline-elements/
        assert(~result.code.indexOf('babel-runtime/helpers/jsx'))

        // constant elements
        // http://babeljs.io/docs/plugins/transform-react-constant-elements/
        assert(~result.code.indexOf('return _ref')) // NOTE: this test is bound to break
      }
    }
  }
}
