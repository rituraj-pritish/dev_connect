import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR,CREATE_PROFILE } from './types';

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