
import store from '../_store'

export const getMessages = async () => {
  store.dispatch({
    type: 'CURRENT_USER_MESSAGES_GETTING',
    payload: {}
  })

  const response = await fetch('/api/conversations/overview', {
    method: 'GET',
    credentials: 'include'
  })

  const messages = await response.json()

  switch (response.status) {
    case 200: {
      return store.dispatch({
        type: 'CURRENT_USER_MESSAGES_SET',
        payload: {
          messages,
          status: 200
        }
      })
    }
    default: {
      return store.dispatch({
        type: 'CURRENT_USER_MESSAGES_SET',
        payload: {
          status: 404
        }
      })
    }
  }
}
