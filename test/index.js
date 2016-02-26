'use strict'

const babel = require('babel-core')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
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

        presets.forEach(name => {
          describe(name, () => {
            const preset = require(`../${name}`)

            FIXTURES_JS.forEach(fixture => {
              it(fixture, run(
                ENV,
                preset,
                path.join(__dirname, 'fixtures', 'js', fixture),
                path.join(__dirname, 'results', ENV, name, 'js', fixture)
              ))
            })
          })
        })
      })

      describe('React Fixtures', () => {
        const presets = [
          'react',
          'isomorphic',
        ]

        presets.forEach(name => {
          describe(name, () => {
            const preset = require(`../${name}`)

            FIXTURES_REACT.forEach(fixture => {
              it(fixture, run(
                ENV,
                preset,
                path.join(__dirname, 'fixtures', 'react', fixture),
                path.join(__dirname, 'results', ENV, name, 'react', fixture)
              ))
            })
          })
        })
      })
    })
  }
})

function run (ENV, preset, filename, output) {
  return () => {
    process.env.BABEL_ENV = ENV

    const result = babel.transform(fs.readFileSync(filename, 'utf8'), preset)

    mkdirp.sync(path.dirname(output))
    fs.writeFileSync(output, result.code)

    try {
      new Function(result.code)
    } catch (err) {
      console.error(result.code)
      throw err
    }
  }
}
