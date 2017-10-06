import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from '../Actions/auth';

let RegisterForm = props => {
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
      <div>
        <label htmlFor='password_confirmation'>Confirm Password</label>
        <Field name='password_confirmation' component='input' type='password' />
      </div>
      <button type='submit'>Register</button>
    </form>
  )
}

RegisterForm = reduxForm({
  form: 'register',
  onSubmit: registerUser
})(RegisterForm)

export default RegisterForm