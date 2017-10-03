import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { addPostRequest } from '../Actions/posts';

let PostForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor='image'>Image URL</label>
        <Field name='image' component='input' type='text' />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <Field name='description' component='input' type='text' />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

PostForm = reduxForm({
  form: 'post',
  onSubmit: addPostRequest
})(PostForm)

export default PostForm