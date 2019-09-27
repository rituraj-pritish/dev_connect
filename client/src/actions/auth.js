import { LOGIN_SUCCESS, LOGIN_FAIL,LOGOUT,CLEAR_PROFILE } from './types';
import { setAlert } from './alert';
import axios from 'axios';

export const register = data => async dispatch => {
  try {
    await axios.post('/user/register', data);

    dispatch(setAlert('Registered, Login to continue', 'success'));
    setTimeout(() => {
      window.location.assign('/login');
    }, 1500);
  } catch (err) {
    dispatch(setAlert(err.response.data.msg, 'fail'));
  }
};

export const login = data => async dispatch => {
  try {
    const res = await axios.post('/user/login', data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    window.location.assign('/');
  } catch (err) {
    dispatch(setAlert('Invalid Credentials', 'fail'));
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => async dispatch => {
  await axios.get('/user/logout');
  dispatch({
    type: LOGOUT
  });
  dispatch({type: CLEAR_PROFILE})
  window.location.assign('/login')
};

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/user/current_user');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
