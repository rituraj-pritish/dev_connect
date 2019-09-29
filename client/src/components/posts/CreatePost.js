import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addPost } from '../../actions/post';
import { setAlert } from '../../actions/alert';

const CreatePost = ({ addPost,setAlert }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Post cannot be empty', 'fail');
    } else {
      addPost({ text });
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
          <label htmlFor='textarea1'>Add a post</label>
        </div>
        <button className='btn col s2'>Add</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addPost, setAlert }
)(CreatePost);
