import axios from 'axios';
import {
  LOGIN,
  LOGIN_ERR,
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERR,
  LOGOUT,
} from './type';

export function login({ email, password }) {
  return (dispatch) => {
    axios
      .post('http://localhost:5000/api/user/login', { email, password })
      .then(({ data }) => {
        const user = { ...data?.data, token: data?.token };
        localStorage.setItem('media_user', JSON.stringify(user));
        return dispatch({
          type: LOGIN,
          payload: user,
        });
      })
      .catch(({ response }) => {
        return dispatch({
          type: LOGIN_ERR,
          payload: {
            data: response?.data?.data,
            status: response?.data?.status,
          },
        });
      });
  };
}

export const userProfile = () => (dispatch) => {
  const user = JSON.parse(localStorage.getItem('media_user'));
  axios
    .get('http://localhost:5000/api/user/profile', {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    })
    .then(({ data }) => {
      return dispatch({
        type: GET_USER_PROFILE,
        payload: data?.data,
      });
    })
    .catch(({ response }) => {
      return dispatch({
        type: GET_USER_PROFILE_ERR,
        payload: {
          data: response?.data?.data,
          status: response?.data?.status,
        },
      });
    });
};

export const logout = () => (dispatch) => {
  localStorage.clear('media_user');
  return dispatch({
    type: LOGOUT,
    payload: null,
  });
};
