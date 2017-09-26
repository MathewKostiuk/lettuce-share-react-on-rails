import {
  ADD_POST,
  REQUEST_ALL_POSTS,
  RECEIVED_ALL_POSTS
} from '../Actions/actions.js';

function posts(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_ALL_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVED_ALL_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
export default posts