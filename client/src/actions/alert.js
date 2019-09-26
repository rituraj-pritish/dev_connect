import {SET_ALERT,REMOVE_ALERT} from './types'
import uuid from 'uuid/v4'

export const setAlert = (msg,alertType) =>  dispatch => {
  console.log('setalert');
  const id = uuid()
  dispatch({
    type: SET_ALERT,
    payload: {msg,alertType,id}
  })

  //remove alert from state array
  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id
    })
  }, 100);
} 