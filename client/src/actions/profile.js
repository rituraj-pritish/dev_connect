import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR,CREATE_PROFILE, UPDATE_PROFILE } from './types';

export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.statusText
    });
  }
};

export const createProfile = (data,edit=false) => async dispatch => {
  try {
    const res = await axios.post('/profile',data)
    dispatch({
      type: CREATE_PROFILE,
      payload: res.data
    })

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'))

    window.location.assign('/dashboard')
  } catch (err) {

    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.statusText
    });
  }
}

export const addExperience = (data) => async dispatch => {
  try {
    const res = await axios.put('/profile/experience',data)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    dispatch(setAlert('Experience Added', 'success'))

    window.location.assign('/dashboard')
  } catch (err) {
    //for backend errors
    // const error = err.response.data.msg

    // if(error) {
    //   dispatch(setAlert('error','fail'))
    // }
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.statusText
    });
  }
}

export const deleteExperience = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/profile/experience/${id}`)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    dispatch(setAlert('Experience Removed', 'success'))

  } catch (err) {

    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.statusText
    });
  }
}

export const addEducation = (data) => async dispatch => {
  try {
    const res = await axios.put('/profile/education',data)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    dispatch(setAlert('Education Added', 'success'))

    window.location.assign('/dashboard')
  } catch (err) {

    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.statusText
    });
  }
}

export const deleteEducation = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/profile/education/${id}`)
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })

    dispatch(setAlert('Education Removed', 'success'))

  } catch (err) {

    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.statusText
    });
  }
}