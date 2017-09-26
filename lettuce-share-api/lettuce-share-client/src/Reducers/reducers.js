import {
  ADD_POST
} from '../Actions/actions.js';

function posts(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          post: action.post
        }
      ]
    default:
      return state
  }
}

export default posts