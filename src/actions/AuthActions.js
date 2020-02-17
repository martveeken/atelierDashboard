import axios from 'axios';

import { ROOT_URL } from '../config/config';
import history from '../history';

import {
  LOGIN_USER_SUCCES,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

const loginUserRequest = (username, password) => {
  const data = ({
    username,
    password,
  });

  const url = `${ROOT_URL}/user/login/dashboard`;

  const request = axios.post(url, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return request;
};

export const loginUserStart = () => ({
  type: LOGIN_USER,
});


const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCES,
    payload: user,
  });
};

export const loginUser = (username, password) => {
  return (dispatch) => {
    dispatch(loginUserStart());
    return loginUserRequest(username, password)
      .then((response) => {
        if (response.status === 200) {
          try {
            const token = response.data;
            if (token) {
              localStorage.setItem('user', token);
              history.push('/producers');
              loginUserSuccess(dispatch, response);
            }
          } catch (err) {
            loginUserFail(dispatch);
          }
        }
      })
      .catch(() => {
        loginUserFail(dispatch);
      });
  };
};
