import { connect } from 'react-redux';
import { fetchAllPosts } from '../Actions/posts';
import PostFeed from '../Components/PostFeed';

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: dispatch(fetchAllPosts)
  }
}

const ActivePostFeed = connect(mapStateToProps, mapDispatchToProps)(PostFeed);

export default ActivePostFeed