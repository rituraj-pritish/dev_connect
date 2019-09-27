import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import { Link } from 'react-router-dom';

const AddEducation = ({addEducation}) => {
  const [formData, setFormData] = useState({
    school: '',
    fieldOfStudy: '',
    degree: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { school, degree, fieldOfStudy, from, to, current, description } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newEdu = {
      school,
      degree,
      fieldOfStudy,
      from,
      to,
      current: to === '' ? true : false,
      description
    };

    addEducation(newEdu)
  };

  return (
    <div>
      <h4 className='teal-text'>Add Education</h4>
      <p className='grey-text'>* - required fields</p>

      <form className='col s12' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='input-field col s6 '>
            <input
              id='school'
              type='text'
              name='school'
              value={school}
              onChange={handleChange}
            />
            <label htmlFor='school'>
              <span className='red-text'>*</span> School/College
            </label>
          </div>

          <div className='input-field col s6'>
            <input
              id='fieldOfStudy'
              type='text'
              name='fieldOfStudy'
              value={fieldOfStudy}
              onChange={handleChange}
            />
            <label htmlFor='fieldOfStudy'><span className='red-text'>*</span>Field Of Study</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field col s6'>
            <input
              id='degree'
              type='text'
              name='degree'
              value={degree}
              onChange={handleChange}
            />
            <label htmlFor='degree'>
              <span className='red-text'>*</span>Degree
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field col s6 '>
            <input
              id='from'
              type='date'
              name='from'
              value={from}
              onChange={handleChange}
            />
            <label htmlFor='from'>
              <span className='red-text'>*</span>Date From
            </label>
          </div>

          <div className='input-field col s6'>
            <input
              id='to'
              type='date'
              name='to'
              value={to}
              onChange={handleChange}
            />
            <label htmlFor='to'>Date To</label>
            <span className='helper-text'>Leave if currently studying</span>
          </div>
        </div>

        

        <div className='row'>
          <div className='input-field col s11'>
            <input
              id='description'
              type='text'
              name='description'
              value={description}
              onChange={handleChange}
            />
            <label htmlFor='description'>Description</label>
          </div>
        </div>

        <button
          style={{ marginTop: '20px' }}
          type='submit'
          className='waves-effect waves-light btn teal text-white lighten-2'
        >
          Submit
          <i className='material-icons right'>send</i>
        </button>

        <Link to='/dashboard' className='btn grey'>
          Back
        </Link>
      </form>
    </div>
  );
};

export default connect(null,{addEducation})(AddEducation);
