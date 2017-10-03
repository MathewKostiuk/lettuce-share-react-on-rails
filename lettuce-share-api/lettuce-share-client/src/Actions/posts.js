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
  return async function (dispatch) {
    dispatch(requestAllPosts())

    return await fetch('/api/posts.json')
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
export function initPostRequest(post) {
  return {
    type: ADD_POST,
    post
  }
}

export const POST_ADDED = 'POST_ADDED';
export function addedPost() {
  return {
    type: POST_ADDED,
    receivedAt: Date.now()
  }
}

export function addPostRequest(post) {
  return async function (dispatch) {
    dispatch(initPostRequest())

    return await fetch('/api/posts.json', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: {
        description: post.description,
        image: post.image
      }
    })
    .then(addedPost())
    .then(fetchAllPosts())
  }
}