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
    .then(response => {
      const res = response.json()
      sessionStorage.setItem('jwt', res.jwt)
      dispatch(loginSuccess())
    }).catch(error => {
      dispatch(loginError())
      return error
    })
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
        email: info.email,
        password: info.password
      })
    })
    .then(response => {
      const res= response.json()
      sessionStorage.setItem('jwt', res.jwt)
      dispatch(registerSuccess())
    }).catch(error => {
      dispatch(registerError())
      return error;
    })
  }
}