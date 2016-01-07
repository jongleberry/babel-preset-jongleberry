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
  presets.forEach(name => {
    describe(name, () => {
      const preset = require(`../${name}`)
      fixtures.forEach(fixture => {
        it(fixture, () => {
          const result = babel.transform(fs.readFileSync(path.join(__dirname, 'fixtures', fixture), 'utf8'), preset)

          const pathname = path.join(__dirname, 'results', name, fixture)
          mkdirp.sync(path.dirname(pathname))
          fs.writeFileSync(pathname, result.code)

          new Function(result.code)
        })
      })
    })
  })
})
