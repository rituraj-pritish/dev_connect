import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../layout/Loader';
import { getPosts, clearPost } from '../../actions/post';
import PostItem from './PostItem';
import CreatePost from './CreatePost';

const Posts = ({ getPosts, clearPost, post: { posts, loading } }) => {
  useEffect(() => {
    clearPost();
    getPosts();
  }, [getPosts, clearPost]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h4 className='teal-text'>Posts</h4>
      <CreatePost />
      <ul className='collection'>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts, clearPost }
)(Posts);
