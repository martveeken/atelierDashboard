// import _ from 'lodash';

import {
  PRODUCTS_ACTIONS_START,
  PRODUCTS_ACTIONS_FAIL,
  FETCH_PRODUCTS_SUCCES,
  FETCH_SINGLE_PRODUCT_SUCCES,
} from '../actions/types';

const INITIAL_STATE = {
  results: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_ACTIONS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PRODUCTS_ACTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        results: [],
      };
    case FETCH_PRODUCTS_SUCCES:
      return {
        ...state,
        ...INITIAL_STATE,
        results: action.payload.products,
      };
    case FETCH_SINGLE_PRODUCT_SUCCES:
      return {
        ...state,
        ...INITIAL_STATE,
        product: action.payload.product,
        designer: action.payload.designer,
      };
    default:
      return state;
  }
};
