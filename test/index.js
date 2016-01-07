'use strict'

const babel = require('babel-core')
const path = require('path')
const fs = require('fs')

const presets = [
  'node',
  'react',
  'isomorphic',
]

const fixtures = fs.readdirSync(path.join(__dirname, 'fixtures'))

describe('ES2016 + Flow', () => {
  presets.forEach(name => {
    describe(name, () => {
      const preset = require(`../${name}`)
      fixtures.forEach(fixture => {
        it(fixture, () => {
          const result = babel.transform(fs.readFileSync(path.join(__dirname, 'fixtures', fixture), 'utf8'), preset)
          new Function(result.code)
        })
      })
    })
  })
})
