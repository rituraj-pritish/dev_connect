import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import Moment from 'react-moment';

import { addLike, removeLike, deletePost, getPost } from '../../actions/post';

const PostItem = ({
  post: { date, text, likes, comments, name, avatar, user, _id },
  auth,
  addLike,
  removeLike,
  deletePost,
  getPost
}) => {
  const handleLike = () => {
    addLike(_id);
  };

  const handleUnLike = () => {
    removeLike(_id);
  };

  const handleDelete = () => {
    deletePost(_id);
  };

  return (
    <Fragment>
      <li className='collection-item row'>
        <div className='col s3 post-left-content'>
          <Link to='#'>
            {avatar ? (
              <img src={avatar} alt={name} className='circle' />
            ) : (
              <Avatar name={name} round='50%' />
            )}
          </Link>

          <p className='bold teal-text'>{name}</p>
        </div>
        <div className='col s9'>
          <h6>{text}</h6>
          <p className='grey-text text-small'>
            Posted on <Moment format='DD/MM/YYYY HH:mm'>{date}</Moment>
          </p>
          <div className='row post-btns'>
            <Link to='#' onClick={handleLike} className='btn btn-flat mr'>
              <i className='material-icons left  '>thumb_up</i>
              {likes.length > 0 && <span>{likes.length}</span>}
            </Link>
            <Link to='#' onClick={handleUnLike} className='btn btn-flat mr'>
              <i className='material-icons'>thumb_down</i>
            </Link>
            <Link to={`/post/${_id}`} className='btn mr '>
              Comments
              {comments.length > 0 && <span> {comments.length}</span>}
            </Link>
            {!auth.loading && user === auth.user.user._id && (
              <Link to='#' onClick={handleDelete} className='btn red mr'>
                <i className='material-icons'>delete</i>
              </Link>
            )}
          </div>
        </div>
      </li>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost, getPost }
)(PostItem);
