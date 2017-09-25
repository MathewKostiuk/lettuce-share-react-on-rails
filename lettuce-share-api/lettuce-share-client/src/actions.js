export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const TOGGLE_POST = 'TOGGLE_POST';

export const VisibilityFilers = {
  SHOW_ALL: 'SHOW_ALL'
}

export function getPosts() {
  return { type: GET_POSTS }
}

export function addPost(post) {
  return { type: ADD_POST, post }
}

export function togglePost(index) {
  return { type: TOGGLE_POST, index }
}
