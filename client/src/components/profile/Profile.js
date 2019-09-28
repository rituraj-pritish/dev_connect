import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../layout/Loader';
import { getProfileById } from '../../actions/profile.js';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';

const Profile = ({
  getProfileById,
  match,
  profile: { profile, loading },
  auth
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  if (loading || profile === null) {
    return <Loader />;
  }

  return (
    <div className='card-panel'>
      {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user.user._id === profile.user._id && (
          <Link
            to='/edit-profile'
            className='btn teal lighten-2 secondary-content'
          >
            Edit Profile
          </Link>
        )}
      <Link to='/profiles' className='btn grey'>
        Back To Profiles
      </Link>
      <div>
        <ProfileTop profile={profile} />
        <ProfileAbout profile={profile} />
        <div className='row'>
          <div
            className='col s6'
            style={{
              marginTop: '-10px',
              background: '#ebf0f2',
              padding: '20px'
            }}
          >
            <h5 className='teal-text'>Experience</h5>
            {profile.experience.length !== 0 ? (
              profile.experience.map(exp => (
                <ProfileExperience key={exp._id} exp={exp} />
              ))
            ) : (
              <p>No experience details provided by the user</p>
            )}
          </div>
          <div
            className='col s6'
            style={{
              marginTop: '-10px',
              background: '#ebf0f2',
              padding: '20px'
            }}
          >
            <h5 className='teal-text'>Experience</h5>

            {profile.education.length !== 0 ? (
              profile.education.map(edu => (
                <ProfileEducation key={edu._id} edu={edu} />
              ))
            ) : (
              <p>No education details provided by the user</p>
            )}
          </div>
        </div>
      </div>
      {profile.githubUsername && <ProfileGithub username={profile.githubUsername} />}
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);
