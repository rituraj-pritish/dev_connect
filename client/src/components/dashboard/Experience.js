import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const handleDelete = id => {
    deleteExperience(id);
  };

  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          'Present'
        ) : (
          <Moment format='DD/MM/YYYY'>{exp.to}</Moment>
        )}
      </td>
      <button
        onClick={() => handleDelete(exp._id)}
        style={{ marginTop: '7px' }}
        className=' btn red lighten-1 btn-small '
      >
        <i className='material-icons right'>delete</i> Remove
      </button>
    </tr>
  ));

  return (
    <div>
      <h4>Experience</h4>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>From - To</th>
          </tr>
        </thead>

        <tbody>{experiences}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  experience: state.profile.profile.experience
});

export default connect(
  mapStateToProps,
  { deleteExperience }
)(Experience);
