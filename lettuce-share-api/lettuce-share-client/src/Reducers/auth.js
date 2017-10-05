import {
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../Actions/auth';

export function authReducers(
  state = {
    auth: !!sessionStorage.jwt
  },
  action
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        auth: !!sessionStorage.jwt
      })
    default:
      return state
  }
}
