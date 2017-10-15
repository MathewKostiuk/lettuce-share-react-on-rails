import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../Actions/auth';

let LogInForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit } className='auth-form'>
        <label htmlFor='email'>Email</label>
        <Field name='email' component='input' type='text' />
        <label htmlFor='password'>Password</label>
        <Field name='password' component='input' type='password' />
      <button type='submit'>Login</button>
    </form>
  )
}

LogInForm = reduxForm({
  form: 'login',
  onSubmit: loginUser
})(LogInForm)

export default LogInForm