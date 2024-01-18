import {FETCH_USER_SUCCESS, UPDATE_USER_PROFILE} from '../actions/type';
const init = {
  user: null,
};
export const UserReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {...state, user: action.payload};
    case UPDATE_USER_PROFILE:
      const user = action.payload;
      return {...state, user: user};
    default:
      return state;
  }
};