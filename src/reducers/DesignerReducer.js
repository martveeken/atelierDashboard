// import _ from 'lodash';

import {
  DESIGNERS_INIT,
  DESIGNER_ACTIONS_START,
  DESIGNER_ACTIONS_FAIL,
  FETCH_DESIGNERS_SUCCES,
  FETCH_SINGLE_DESIGNER_SUCCES,
  FETCH_DESIGNERS_ID_NAME_SUCCES,
} from '../actions/types';

const INITIAL_STATE = {
  results: [],
  loading: false,
  error: null,
  designer: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DESIGNERS_INIT:
      return {
        ...INITIAL_STATE,
        designers: null,
      };
    case DESIGNER_ACTIONS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DESIGNER_ACTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        results: [],
      };
    case FETCH_DESIGNERS_SUCCES:
      return {
        ...state,
        ...INITIAL_STATE,
        results: action.payload.designers,
      };
    case FETCH_SINGLE_DESIGNER_SUCCES:
      return {
        ...state,
        ...INITIAL_STATE,
        designer: action.payload.designer,
        products: action.payload.products,
      };
    case FETCH_DESIGNERS_ID_NAME_SUCCES:
      return {
        ...state,
        ...INITIAL_STATE,
        idname: action.payload.idname,
      };
    default:
      return state;
  }
};
