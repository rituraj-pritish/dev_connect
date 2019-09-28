import React from 'react';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div >
      <div  className='row center-align'>
        {bio && (
          <div style={{ marginTop: '10px',background: '#ebf0f2',padding: '10px' }}>
            <h4>{name.trim().split(' ')[0]}'s Bio</h4>
            <p>{bio}</p>
          </div>
        )}
      </div>
      <div style={{ marginTop: '-10px',background: '#ebf0f2',padding: '10px' }} className='row center-align'>
        <h4>Skill Set</h4>
        {skills.map(skill => (
          <span style={{margin: '0 5px'}} className='teal-text'>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default ProfileAbout;
