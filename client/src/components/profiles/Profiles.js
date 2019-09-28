import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from '../layout/Loader';
import { getProfiles, clearProfile } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = ({
  getProfiles,
  clearProfile,
  profile: { profiles, loading }
}) => {
  useEffect(() => {
    clearProfile();
    getProfiles();
  }, [getProfiles, clearProfile]);

  const render = profiles.map(profile => (
    <ProfileItem key={profile._id} profile={profile} />
  ));

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='card-panel'>
      <h2 className='teal-text center-align'>Developers</h2>
      <p className=' center-align'>Connect with developers</p>
      {render}
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles, clearProfile }
)(Profiles);
