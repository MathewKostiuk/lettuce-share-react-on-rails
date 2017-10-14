export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess() {
  return { type: LOGIN_SUCCESS }
}

export const LOGIN_ERROR = 'LOGIN_ERROR';
export function loginError() {
  return { type: LOGIN_ERROR }
}

export function loginUser(info) {
  return async function(dispatch) {
    const response = await fetch('api/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: info.email,
        password: info.password
      })
    })
    const json = await response.json()

    if (response.status < 300) {
      sessionStorage.setItem('jwt', json.jwt)
      dispatch(loginSuccess())
      return response.status;
    } else {
      dispatch(loginError())
      console.log('An error has occured')
    }
  }
}

export const LOG_OUT = 'LOG_OUT';
export function logoutUser() {
  sessionStorage.removeItem('jwt');
  return { type: LOG_OUT }
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export function registerSuccess() {
  return { type: REGISTER_SUCCESS }
}

export const REGISTER_ERROR = 'REGISTER_ERROR';
export function registerError() {
  return { type: REGISTER_ERROR }
}

export function registerUser(info) {
  return async function(dispatch) {
    const response = await fetch('api/register', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: info.email,
          password: info.password,
          password_confirmation: info.password_confirmation
        }

      })
    })
    const json = await response.json()

    if (response.status < 300) {
      sessionStorage.setItem('jwt', json.jwt)
      dispatch(registerSuccess())
      return response.status
    } else {
      dispatch(registerError())
      console.log('An error has occured')
    }
  }
}