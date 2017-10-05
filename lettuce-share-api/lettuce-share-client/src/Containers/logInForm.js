import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../Actions/auth';

let LogInForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor='email'>Email</label>
        <Field name='email' component='input' type='text' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <Field name='password' component='input' type='password' />
      </div>
      <button type='submit'>Login</button>
    </form>
  )
}

LogInForm = reduxForm({
  form: 'login',
  onSubmit: loginUser
})(LogInForm)

export default LogInForm