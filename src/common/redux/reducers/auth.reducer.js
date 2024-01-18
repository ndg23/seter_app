import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
  } from '../actions/type';
  
  init = {
    access_token: '',
    uid: '',
    error: false,
    isLoggin: false,
    message:""
  };
  export const AuthReducer = (state = init, action) => {
    switch (action.type) {
      case SIGNUP_SUCCESS:
      case LOGIN_SUCCESS:
        const data = action.payload;
        return {
          ...state,
          token: data,
          isLoggin: true,
        };
  
      case LOGIN_FAILURE:
  //      const error = action.payload.data.error;
        return {
          ...state,
          isLoggin: false,
        };
      case LOGOUT:
        return {
          ...state,
          token: null,
          isLoggin: false,
        };
      default:
        return state;
    }
  };