import axios from 'axios';

import { ROOT_URL } from '../config/config';

import {
  LOGIN_USER_SUCCES,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

const loginUserFail = (dispatch) => {
  console.log(localStorage.getItem('x-auth'));
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};

export const loginUserSuccess = (dispatch, user) => {
  console.log(localStorage.getItem('x-auth'));
  dispatch({
    type: LOGIN_USER_SUCCES,
    payload: user,
  });
};

export const loginUser = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    const data = ({
      username,
      password,
    });

    const url = `${ROOT_URL}/user/login/dashboard`;

    axios
      .post(url, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          try {
            const token = response.data;
            if (token) {
              localStorage.setItem('user', token);
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
