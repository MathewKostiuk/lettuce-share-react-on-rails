import { postReducers } from './posts';
import { authReducers } from './auth';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { POST_ADDED } from '../Actions/posts';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../Actions/auth';

export const rootReducer = combineReducers({
  posts: postReducers,
  auth: authReducers,
  form: formReducer.plugin({
    post: (state, action) => {
      switch(action.type) {
        case POST_ADDED:
          return undefined;
          // return undefined to clearn form data
        default:
          return state;
      }
    },
    login: (state, action) => {
      switch(action.type) {
        case LOGIN_SUCCESS:
          return undefined;
        default:
          return state;
      }
    },
    register: (state, action) => {
      switch(action.type) {
        case REGISTER_SUCCESS:
          return undefined;
        default:
          return state;
      }
    }
  })
})

