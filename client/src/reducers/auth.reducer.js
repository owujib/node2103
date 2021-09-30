import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERR,
  LOGIN,
  LOGIN_ERR,
  LOGOUT,
} from '../actions/type';

const initialState = {
  user: null,
  isLoading: true,
  err: null,
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        err: null,
        isAuthenticated: true,
      };
    case LOGIN_ERR:
      return {
        ...state,
        err: action.payload,
        isLoading: false,
        user: null,
        isAuthenticated: false,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
        err: null,
      };
    case GET_USER_PROFILE_ERR:
      return {
        ...state,
        err: action.payload,
        isLoading: false,
        user: null,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        err: null,
        isAuthenticated: false,
      };

    default:
      return {
        ...state,
      };
  }
}
