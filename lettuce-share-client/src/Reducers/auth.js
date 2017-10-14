import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOG_OUT
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
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        auth: false
      })
    case LOG_OUT:
      return Object.assign({}, state, {
        auth: false
      })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        auth: !!sessionStorage.jwt
      })
    case REGISTER_ERROR:
      return Object.assign({}, state, {
        auth: false
      })
    default:
      return state
  }
}
