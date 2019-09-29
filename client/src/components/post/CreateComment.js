import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addComment } from '../../actions/post';
import { setAlert } from '../../actions/alert';

const CreateComment = ({ addComment, postId, setAlert }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Comment cannot be empty', 'fail');
    } else {
      addComment({ text }, postId);
      setText('');
    }
  };
  return (
    <div className='row'>
      <form
        style={{ display: 'flex', alignItems: 'center' }}
        className='col s12'
        onSubmit={handleSubmit}
      >
        <div className='input-field col s10'>
          <textarea
            id='textarea1'
            value={text}
            onChange={e => setText(e.target.value)}
            className='materialize-textarea'
          ></textarea>
          <label htmlFor='textarea1'>Add a comment</label>
        </div>
        <button className='btn col s2'>Add</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addComment, setAlert }
)(CreateComment);
