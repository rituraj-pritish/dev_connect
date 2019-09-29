import axios from 'axios';
import { setAlert } from './alert';
import {
  POST_ERROR,
  GET_POSTS,
  GET_POST,
  UPDATE_LIKES,
  ADD_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  CLEAR_POST
} from './types';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.statusText
    });
  }
};

export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`/posts/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addLike = post_id => async dispatch => {
  try {
    const res = await axios.put(`/posts/like/${post_id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { likes: res.data, post_id }
    });
  } catch (err) {
    if (err.response.data) {
      dispatch(setAlert(err.response.data.msg, 'info'));
    }
    dispatch({
      type: POST_ERROR,
      payload: err.response.statusText
    });
  }
};

export const removeLike = post_id => async dispatch => {
  try {
    const res = await axios.put(`/posts/unlike/${post_id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { likes: res.data, post_id }
    });
  } catch (err) {
    if (err.response.data) {
      dispatch(setAlert(err.response.data.msg, 'info'));
    }
    dispatch({
      type: POST_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deletePost = post_id => async dispatch => {
  try {
    await axios.delete(`/posts/${post_id}`);
    dispatch({
      type: DELETE_POST,
      payload: post_id
    });
    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    console.log(err);
    if (err.response.data) {
      dispatch(setAlert(err.response.data.msg, 'fail'));
    }
    dispatch({
      type: POST_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addPost = data => async dispatch => {
  try {
    const res = await axios.post(`/posts`, data);
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
    dispatch(setAlert('Post Added', 'success'));
  } catch (err) {
    console.log(err);
    if (err.response.data) {
      dispatch(setAlert(err.response.data.msg, 'fail'));
    }
    dispatch({
      type: POST_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addComment = (data, postId) => async dispatch => {
  try {
    const res = await axios.post(`/posts/comment/${postId}`, data);
    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });
    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    if (err.response.data) {
      dispatch(setAlert(err.response.data.msg, 'fail'));
    }
    dispatch({
      type: POST_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await axios.delete(`/posts/comment/${postId}/${commentId}`);
    dispatch({
      type: DELETE_COMMENT,
      payload: commentId
    });
    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    console.log(err);
    if (err.response.data) {
      dispatch(setAlert(err.response.data.msg, 'fail'));
    }
    dispatch({
      type: POST_ERROR,
      payload: err.response.statusText
    });
  }
};

export const clearPost = () => ({
  type: CLEAR_POST
});
