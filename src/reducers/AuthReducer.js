import {
  LOGIN_USER_SUCCES,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  user: '',
  error: '',
  loading: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCES:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication failed.',
        password: '',
        loading: false,
      };
    case LOGIN_USER:
      return { ...state, loading: true };
    default:
      return state;
  }
};
