import {LOGIN_SUCCESS,LOGIN_FAIL, FETCH_USER} from '../actions/types'

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null
}

export default (state=initialState,action) => {
  const {type,payload} = action
  switch(type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null
      }
    case FETCH_USER:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload
      }
    default:
      return state;
  }
}