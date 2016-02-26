'use strict'

const babel = require('babel-core')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const path = require('path')
const fs = require('fs')

const presets = [
  'node',
  'react',
  'isomorphic',
]

const fixtures = fs.readdirSync(path.join(__dirname, 'fixtures'))

before(done => {
  rimraf(path.join(__dirname, 'results'), done)
})

describe('ES2016 + Flow', () => {
  const ENVS = [
    'development',
    'production',
  ]

  for (const ENV of ENVS) {
    describe(`Environment: ${ENV}`, () => {
      presets.forEach(name => {
        describe(name, () => {
          const preset = require(`../${name}`)
          fixtures.forEach(fixture => {
            it(fixture, () => {
              process.env.BABEL_ENV = ENV

              const result = babel.transform(fs.readFileSync(path.join(__dirname, 'fixtures', fixture), 'utf8'), preset)

              const pathname = path.join(__dirname, 'results', ENV, name, fixture)
              mkdirp.sync(path.dirname(pathname))
              fs.writeFileSync(pathname, result.code)

              try {
                new Function(result.code)
              } catch (err) {
                console.error(result.code)
                throw err
              }
            })
          })
        })
      })
    })
  }
})
