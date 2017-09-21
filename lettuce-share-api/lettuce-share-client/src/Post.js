import React , {Component} from 'react';
import './Post.css';

class Post extends Component {

  render() {

    return (
      <div className='post'>
        <span>{ this.props.title }</span>
        <img className='post-image' src={ this.props.image }alt='post' />
        <span>{ this.props.description }</span>
        <span>{ this.props.location }</span>
      </div>
    )
  }
}

export default Post;