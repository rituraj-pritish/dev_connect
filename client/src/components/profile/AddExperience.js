import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import { Link } from 'react-router-dom';

const AddExperience = ({addExperience}) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { company, location, title, from, to, description } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newExp = {
      company,
      location,
      title,
      from,
      to,
      current: to === '' ? true : false,
      description
    };

    addExperience(newExp)
  };

  return (
    <div>
      <h4 className='teal-text'>Add Experience</h4>
      <p className='grey-text'>* - required fields</p>

      <form className='col s12' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='input-field col s6 '>
            <input
              id='company'
              type='text'
              name='company'
              value={company}
              onChange={handleChange}
            />
            <label htmlFor='company'>
              <span className='red-text'>*</span> Company
            </label>
          </div>

          <div className='input-field col s6'>
            <input
              id='title'
              type='text'
              name='title'
              value={title}
              onChange={handleChange}
            />
            <label htmlFor='title'><span className='red-text'>*</span>Title</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field col s6'>
            <input
              id='location'
              type='text'
              name='location'
              value={location}
              onChange={handleChange}
            />
            <label htmlFor='location'>
              <span className='red-text'>*</span>Location
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
            <span className='helper-text'>Leave if current job</span>
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

export default connect(null,{addExperience})(AddExperience);
