import React from 'react';
import Moment from 'react-moment';

const ProfileEducation = ({
  edu: { school, from, to, fieldOfStudy, description, degree }
}) => {
  return (
    <div>
      {}
      <h6 className='bold'>{school}</h6>
      <Moment format='DD/MM/YYYY'>{from}</Moment> -{' '}
      {to ? <Moment format='DD/MM/YYYY'>{to}</Moment> : 'Present'}
      <br />
      <span className='bold'>Degree: </span>
      {degree}
      <br />
      <span className='bold'>Field Of Study: </span>
      {fieldOfStudy}
      {description && (
        <span>
          <span className='bold'>Description: </span>
          {description}
        </span>
      )}
    </div>
  );
};

export default ProfileEducation;
