import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import { deleteComment } from '../../actions/post';

const CommentItem = ({
  auth,
  user,
  deleteComment,
  postId,
  avatar,
  name,
  text,
  date,
  _id
}) => {
  const handleDelete = () => {
    deleteComment(postId, _id);
  };

  return (
    <div>
      <div
        style={{
          padding: '15px',
          background: '#ebf0f2',
          margin: '10px',
          height: '100px'
        }}
        className='row'
      >
        <div className='col s2 post-left-content'>
          <Link to='#'>
            {avatar ? (
              <img src={avatar} alt={name} className='circle' />
            ) : (
              <Avatar name={name} round='50%' size='50px' />
            )}
          </Link>

          <p className='bold teal-text'>{name}</p>
        </div>
        <div className='col s8'>
          <h6>{text}</h6>
          <p className='grey-text text-small'>
            Posted on <Moment format='DD/MM/YYYY HH:mm'>{date}</Moment>
          </p>
        </div>
        {!auth.loading && auth.user.user._id === user && (
          <div className='col s2'>
            <Link onClick={handleDelete} to='#' className='btn btn-small red '>
              <i className='material-icons'>delete</i>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
