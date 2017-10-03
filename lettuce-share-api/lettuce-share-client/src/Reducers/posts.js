import {
  ADD_POST,
  POST_ADDED,
  REQUEST_ALL_POSTS,
  RECEIVED_ALL_POSTS
} from '../Actions/posts.js';

export function postReducers(
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
        isFetching: true
      })
    case POST_ADDED:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
