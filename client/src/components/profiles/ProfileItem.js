import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const ProfileItem = props => {
  const {
    status,
    company,
    skills,
    location,
    user: { name,_id }
  } = props.profile;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        background: '#ebf0f2'
      }}
      className='row'
    >
      <div className='divider'></div>
      <div className='col s3'>
        <Avatar className='teal lighten-2' name={name} round='50%' size='150' />
      </div>
      <div className='col s1'></div>
      <div className='center-align col s4'>
        <div>{name}</div>
        <div>
          {status} at {company}
        </div>
        <div>{location}</div>
        <Link
          style={{ minWidth: '118px', fontSize: '12px' }}
          to={`/profiles/${_id}`}
          className='btn teal btn-mrtop lighten-2'
        >
          View Profile
        </Link>
      </div>
      <div className='col s1'></div>
      <div className='col s3'>
        {skills.map(skill => (
          <div key={skill}>
            <span className='teal-text'>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileItem;
