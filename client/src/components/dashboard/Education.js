import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const handleDelete = id => {
    deleteEducation(id);
  };

  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.fieldOfStudy}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          'Present'
        ) : (
          <Moment format='DD/MM/YYYY'>{edu.to}</Moment>
        )}
      </td>
      <button
        onClick={() => handleDelete(edu._id)}
        style={{ marginTop: '7px' }}
        className=' btn red lighten-1 btn-small '
      >
        <i className='material-icons right'>delete</i> Remove
      </button>
    </tr>
  ));

  return (
    <div>
      <h4>Education</h4>
      <table>
        <thead>
          <tr>
            <th>School/College</th>
            <th>Field Of Study</th>
            <th>From - To</th>
          </tr>
        </thead>

        <tbody>{educations}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  education: state.profile.profile.education
});

export default connect(
  mapStateToProps,
  { deleteEducation }
)(Education);
