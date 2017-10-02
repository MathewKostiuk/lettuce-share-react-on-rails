export const REQUEST_ALL_POSTS = 'REQUEST_ALL_POSTS';
export function requestAllPosts() {
  return { type: REQUEST_ALL_POSTS }
}

export const RECEIVED_ALL_POSTS = 'RECEIVED_ALL_POSTS';
export function receivedAllPosts(json) {
  return {
    type: RECEIVED_ALL_POSTS,
    posts: json,
    receivedAt: Date.now()
  }
}

export function fetchAllPosts() {
  return function (dispatch) {
    dispatch(requestAllPosts())

    return fetch('/api/posts.json')
      .then(
        response => response.json(),
        error => console.log('An error occured', error)
      )
      .then(json =>
        dispatch(receivedAllPosts(json))
      )
  }
}

export const ADD_POST = 'ADD_POST';
export function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}