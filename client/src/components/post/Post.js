import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import Moment from 'react-moment';

import Loader from '../layout/Loader';
import { getPost, clearPost } from '../../actions/post';
import CreateComment from './CreateComment';
import CommentItem from './CommentItem';

const Post = ({ clearPost, getPost, loading, post, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  if (loading || post === null) {
    return <Loader />;
  }

  const { avatar, date, text, name, _id, comments } = post;

  return (
    <div className='card-panel'>
      <Link to='/allposts' className='btn grey'>
        Back To Posts
      </Link>
      <div
        style={{ padding: '15px', background: '#ebf0f2', marginTop: '20px' }}
        className='row'
      >
        <div className='col s3 post-left-content'>
          <Link to='#'>
            {avatar ? (
              <img src={avatar} alt={name} className='circle' />
            ) : (
              <Avatar className='teal' name={name} round='50%' />
            )}
          </Link>

          <p className='bold teal-text'>{name}</p>
        </div>
        <div className='col s9'>
          <h6>{text}</h6>
          <p className='grey-text text-small'>
            Posted on <Moment format='DD/MM/YYYY HH:mm'>{date}</Moment>
          </p>
        </div>
      </div>
      <CreateComment postId={_id} />
      {comments.length > 0 ? (
        comments.map(comment => (
          <CommentItem key={comment._id} postId={_id} {...comment} />
        ))
      ) : (
        <p className='grey-text'>No comments to show... Add one</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  post: state.post.post,
  loading: state.post.loading
});

export default connect(
  mapStateToProps,
  { getPost, clearPost }
)(Post);
