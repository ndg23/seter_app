import {
    LOGIN_SUCCESS,
    LOGOUT,
    LOGIN_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    ADD_USER,
  } from './type';
  
  export const Signin = token => {
    return {
      type: LOGIN_SUCCESS,
      payload: token,
    };
  };
  export const register = user => {
    return {
      type: SIGNUP_SUCCESS,
      payload: user,
    };
  };
  export const addContent=(user)=>{
    return {
      type: ADD_USER,
      payload: user,
    };
  }
  export const registerFailure = error => {
    return {
      type: SIGNUP_FAILURE,
      error,
    };
  };
  export const loginFailure = data => {
    return {
      type: LOGIN_FAILURE,
      payload:data,
    };
  };
  export const signout = () => {
    return {
      type: LOGOUT,
    };
  };