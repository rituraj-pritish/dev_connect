import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import M from 'materialize-css/dist/js/materialize.min.js';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Loader from '../layout/Loader';
import DashboardLinks from '../dashboard/DashboardLinks';
import Experience from '../dashboard/Experience';
import Education from '../dashboard/Education';
import AccountDeleteModal from '../AccountDeleteModal';

const Dashboard = props => {
  const { getCurrentProfile, auth, profile, deleteAccount } = props;

  useEffect(() => {
    M.AutoInit();
    getCurrentProfile();
  }, [getCurrentProfile]);

  useEffect(() => {
    M.AutoInit();
  });

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
      <DashboardLinks />
      <Experience />
      <Education />
    </div>
  );

  if (!auth.isAuthenticated) {
    return <Redirect to='/login' />;
  }

  if (auth.loading || profile.loading || auth.user.user === null) {
    return <Loader />;
  }

  const handleDelete = () => {
    deleteAccount(auth.user.user._id);
  };

  return (
    <div className='card-panel' >
      <AccountDeleteModal handleDelete={handleDelete} />
      <h4 className='teal-text'>Dashboard</h4>
      <h5>Welcome {auth.user.user.name}</h5>

      {profile.profile === null ? noProfile : haveProfile}
      <br />
      <a href='#acc-delete-modal' className='btn red lighten-1 modal-trigger '>
        Delete Account
      </a>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
