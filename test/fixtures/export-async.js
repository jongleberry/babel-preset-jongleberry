import * as fs from 'fs'

export default async function myFunction (event) {
  return await Promise.resolve(true)
}

export const handler = (event, context) => {
  return myFunction(event).then(val => context.succeed(value), err => context.fail(err))
}
