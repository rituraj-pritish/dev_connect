import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setAlert } from '../actions/alert';
import { login } from '../actions/auth';

import { Link, Redirect } from 'react-router-dom';

const Login = ({ setAlert, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('All fields are required', 'fail');
    } else {
      login({ email, password });
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
        <div className='grey-text'>
          Doesn't have an account
          <Link to='/user/register'> Register</Link>
        </div>
        <button
          style={{ marginTop: '20px' }}
          type='submit'
          className='waves-effect waves-light btn teal text-white lighten-2'
        >
          Login
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
  { setAlert, login }
)(Login);
