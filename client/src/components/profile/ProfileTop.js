import React from 'react';
import Avatar from 'react-avatar';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    social,
    user: { name }
  }
}) => {
  return (
    <div style={{ marginTop: '20px',background: '#ebf0f2',padding: '20px' }} >
      <div className='center-align'>
        <Avatar name={name} round='50%' size='150' />
        <h4>{name}</h4>
        <h5>
          {status} at {company}
        </h5>
        <p>{location}</p>
        <div className='row'>
          {social && social.twitter && (
            <a href={social.twitter} target='_blank'>
              <i className='fab fa-twitter fa-lg'></i>
            </a>
          )}{' '}
          {social && social.instagram && (
            <a href={social.instagram} target='_blank'>
              <i className='fab fa-instagram fa-lg'></i>
            </a>
          )}{' '}
          {social && social.facebook && (
            <a href={social.facebook} target='_blank'>
              <i className='fab fa-facebook fa-lg fa-lg'></i>
            </a>
          )}{' '}
          {social && social.linkedin && (
            <a href={social.linkedin} target='_blank'>
              <i className='fab fa-linkedin fa-lg'></i>
            </a>
          )}{' '}
          {social && social.youtube && (
            <a href={social.youtube} target='_blank'>
              <i className='fab fa-youtube fa-lg'></i>
            </a>
          )}{' '}
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
