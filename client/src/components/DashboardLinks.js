import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLinks = () => {
  return (
    <div>
      <Link to='/edit-profile' className='btn'>
        Edit Profile
      </Link>
      <Link to='/add-experience' className='btn'>
        Add Experience
      </Link>
      <Link to='/add-education' className='btn'>
        Add Education
      </Link>
    </div>
  );
};

export default DashboardLinks;
