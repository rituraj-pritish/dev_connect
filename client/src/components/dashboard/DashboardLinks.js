import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLinks = () => {
  return (
    <div>
      <Link to='/edit-profile' className='btn btn-mrtop'>
        Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-mrtop'>
        Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-mrtop'>
        Add Education
      </Link>
    </div>
  );
};

export default DashboardLinks;
