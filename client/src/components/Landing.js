import React from 'react';
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <div className='background-image' />
      <div className='background-overlay' />
      <div className='landing-content'>
        <h1>Dive In</h1>
        <Link to='/user/register' className='btn teal lighten-3'>Sign Up</Link>
        <Link  to='/user/login' className='btn teal lighten-3'>Log In</Link>
      </div>
    </div>
  );
};

export default Landing;
