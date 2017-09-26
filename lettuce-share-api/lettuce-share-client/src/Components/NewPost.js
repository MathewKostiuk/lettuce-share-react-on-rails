import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../Actions/actions';

let NewPost = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addPost(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
        Add Post
        </button>
      </form>
    </div>
  )
}

NewPost = connect()(NewPost)

export default NewPost
