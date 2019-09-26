import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      setAlert('All fields are required', 'fail');
    } else if (password !== password2) {
      setAlert('Passwords does not match', 'fail');
    } else if (password.length <= 6) {
      setAlert('Password must be 6 or more characters', 'fail');
    } else {
      register({ name, email, password });
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='card-panel' style={{ marginTop: '30px' }}>
      <form style={{ width: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
        <div className='row'>
          <div className='input-field '>
            <input
              id='name'
              type='text'
              name='name'
              value={name}
              onChange={handleChange}
            />
            <label htmlFor='name'>Name</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field '>
            <input
              id='email'
              type='text'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <label htmlFor='email'>Email</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field '>
            <input
              id='password'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field '>
            <input
              id='password2'
              type='password'
              name='password2'
              value={password2}
              onChange={handleChange}
            />
            <label htmlFor='password2'>Confirm Password</label>
          </div>
        </div>

        <div className='grey-text'>
          Already have an account
          <Link to='/user/login'> Login</Link>
        </div>

        <button
          style={{ marginTop: '20px' }}
          type='submit'
          className='waves-effect waves-light btn teal text-white lighten-2'
        >
          Register
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
