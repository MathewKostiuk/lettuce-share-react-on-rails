import {
  ADD_POST,
  REQUEST_ALL_POSTS,
  RECEIVED_ALL_POSTS
} from '../Actions/posts.js';

function posts(
  state = {
    isFetching: false,
    posts: []
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
        posts: action.posts,
        lastUpdated: action.receivedAt
      })
    case ADD_POST:
      return Object.assign({}, state, {
        posts: action.post
      })
    default:
      return state
  }
}
export default posts