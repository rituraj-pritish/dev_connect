import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCurrentProfile } from '../../actions/profile';
import Loader from '../layout/Loader';

const Dashboard = props => {
  const { getCurrentProfile, auth, profile } = props;

  useEffect(() => {
    getCurrentProfile();
  }, []);

  const noProfile = (
    <p>
      You have not setup a profile yet, please create one here <br/>
      <Link to='/create-profile' className='btn'>
        Create Profile
      </Link>
    </p>
  );

  const haveProfile = (
    <p>have</p>
  )

  if (auth.loading || profile.loading) {
    return <Loader />;
  }

  return (
    <div>
      <h4 className='teal-text'>Dashboard</h4>
      <h5>
      Welcome {auth.user.user.name}
      </h5>
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
  { getCurrentProfile }
)(Dashboard);
