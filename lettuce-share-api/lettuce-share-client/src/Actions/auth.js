export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess() {
  return { type: LOGIN_SUCCESS }
}

export const LOGIN_ERROR = 'LOGIN_ERROR';
export function loginError() {
  return { type: LOGIN_ERROR }
}

export function loginUser(info) {
  return function(dispatch) {
    return fetch('api/login', {
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
    .then(
      response => response.json(),
      error => {
        console.log('An error occured', error)
        dispatch(loginError())
      }
    )
    .then(json =>
      sessionStorage.setItem('jwt', json.jwt),
      dispatch(loginSuccess())
    )
  }
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
  return function(dispatch) {
    return fetch('api/register', {
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
    .then(
      response => response.json(),
      error => {
        console.log('An error occured', error)
        dispatch(registerError())
    }
    )
    .then(json =>
      sessionStorage.setItem('jwt', json.jwt),
      dispatch(registerSuccess())
    )
  }
}