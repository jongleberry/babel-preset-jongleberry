
import {
  sortBy,
  findIndex,
} from 'lodash'

export const doSomething = () => {

}

async function editThing (a, b, changes) {
  const response = await fetch(`/api/thing/${a}/property/${b}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(changes),
  })
  const json = await response.json()
  json.status = response.status
  return json
}
