import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js';

import {createProfile} from '../../actions/profile'

const CreateProfile = props => {
  const {createProfile} = props

  useEffect(() => {
    M.AutoInit();
  }, []);

  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubUsername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedIn: '',
    youtube: '',
    instagram: ''
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    githubUsername,
    bio,
    twitter,
    facebook,
    linkedIn,
    youtube,
    instagram
  } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newProfile = {
      company,
      website,
      location,
      status,
      skills,
      githubUsername,
      bio,
      twitter,
      facebook,
      linkedIn,
      youtube,
      instagram
    }
    createProfile(newProfile)
  };

  return (
    <div>
      <h4 className='teal-text'>Create Your Profile</h4>
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
              id='website'
              type='text'
              name='website'
              value={website}
              onChange={handleChange}
            />
            <label htmlFor='website'>Website</label>
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

          <div className='input-field col s6'>
            <select value={status} onChange={handleChange} name='status' >
              <option value='disabled'>
                Select
              </option>
              <option value='Sr. Developer'>Sr. Developer</option>
              <option value='Jr. Developer'>Jr. Developer</option>
              <option value='Student'>Student</option>
            </select>
            <label htmlFor='status'>
              <span className='red-text'>*</span>Status
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field col s11'>
            <input
              id='skills'
              type='text'
              name='skills'
              value={skills}
              onChange={handleChange}
            />
            <label htmlFor='skills'>
              <span className='red-text'>*</span>Skills
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field col s11'>
            <input
              id='bio'
              type='text'
              name='bio'
              value={bio}
              onChange={handleChange}
            />
            <label htmlFor='bio'>Bio</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field col s4'>
            <input
              id='githubUsername'
              type='text'
              name='githubUsername'
              value={githubUsername}
              onChange={handleChange}
            />
            <label htmlFor='githubUsername'>
              <i className='fab fa-github' /> Github Username
            </label>
            <span className='helper-text'>Adding Github Repos</span>
          </div>

          <div className='input-field col s4'>
            <input
              id='facebook'
              type='text'
              name='facebook'
              value={facebook}
              onChange={handleChange}
            />
            <label htmlFor='facebook'>
              <i className='fab fa-facebook' /> Facebook Link
            </label>
          </div>

          <div className='input-field col s4'>
            <input
              id='instagram'
              type='text'
              name='instagram'
              value={instagram}
              onChange={handleChange}
            />
            <label htmlFor='instagram'>
              <i className='fab fa-instagram' /> Instagram Link
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field col s4 '>
            <input
              id='twitter'
              type='text'
              name='twitter'
              value={twitter}
              onChange={handleChange}
            />
            <label htmlFor='twitter'>
              <i className='fab fa-twitter' /> Twitter Link
            </label>
          </div>

          <div className='input-field col s4'>
            <input
              id='linkedIn'
              type='text'
              name='linkedIn'
              value={linkedIn}
              onChange={handleChange}
            />
            <label htmlFor='linkedIn'>
              <i className='fab fa-linkedin' /> LinkedIn Link
            </label>
          </div>

          <div className='input-field col s4'>
            <input
              id='youtube'
              type='text'
              name='youtube'
              value={youtube}
              onChange={handleChange}
            />
            <label htmlFor='youtube'>
              <i className='fab fa-youtube' /> Youtube Link
            </label>
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

        <Link to='/dashboard' className='btn grey'>Back</Link>
      </form>
    </div>
  );
};

export default connect(null,{createProfile})(CreateProfile);
