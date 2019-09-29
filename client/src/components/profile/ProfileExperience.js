import React from 'react';
import Moment from 'react-moment';

const ProfileExperience = ({
  exp: { company, title, description, from, to }
}) => {
  console.log(company);
  return (
    <div>
      <h6 className='bold'>{company}</h6>
      <Moment format='DD/MM/YYYY'>{from}</Moment> -{' '}
      {to ? <Moment format='DD/MM/YYYY'>{to}</Moment> : 'Present'}
      <br />
      <span className='bold'>Position: </span>
      {title}
      <br/>
      {description && (
        <span>
          <span className='bold'>Description: </span>
          {description}
        </span>
      )}
    </div>
  );
};

export default ProfileExperience;
