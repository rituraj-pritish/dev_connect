import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div>
      <div className='background-image' />
      <div className='background-overlay' />
      <div className='landing-content'>
        <h1>Dive In</h1>
        <Link to='/register' className='btn teal lighten-3'>
          Sign Up
        </Link>
        <Link to='/login' className='btn teal lighten-3'>
          Log In
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
