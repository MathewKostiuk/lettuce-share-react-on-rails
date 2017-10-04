import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { addPostRequest } from '../Actions/posts';


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
        <Field name='password' component='input' type='text' />
      </div>
      <button type='submit'>Login</button>
    </form>
  )
}

LogInForm = reduxForm({
  form: 'login',
  onSubmit: addPostRequest
})(LogInForm)

export default LogInForm