import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { getCurrentProfile } from '../../actions/profile';
import { fetchUser } from '../../actions/auth';
import Loader from '../layout/Loader';
import DashboardLinks from '../dashboard/DashboardLinks';
import Experience from '../dashboard/Experience';
import Education from '../dashboard/Education';

const Dashboard = props => {
  const { getCurrentProfile, fetchUser, auth, profile } = props;

  useEffect(() => {
    getCurrentProfile();
  }, []);

  const noProfile = (
    <p>
      You have not setup a profile yet, please create one here <br />
      <Link to='/create-profile' className='btn'>
        Create Profile
      </Link>
    </p>
  );

  const haveProfile = (
    <div>
      <Experience />
      <Education />
    </div>
  );

  if (!auth.isAuthenticated) {
    return <Redirect to='/login' />;
  }

  console.log(auth.loading, profile.loading);

  if (auth.loading || profile.loading || auth.user.user === null) {
    return <Loader />;
  }

  return (
    <div>
      <h4 className='teal-text'>Dashboard</h4>
      <h5>Welcome {auth.user.user.name}</h5>
      <DashboardLinks />
      {profile.profile === null ? noProfile : haveProfile}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, fetchUser }
)(Dashboard);
