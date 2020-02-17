// import _ from 'lodash';

import {
  PRODUCERS_ACTIONS_START,
  PRODUCERS_ACTIONS_FAIL,
  FETCH_PRODUCERS_SUCCES,
  FETCH_SINGLE_PRODUCER_SUCCES,
} from '../actions/types';

const INITIAL_STATE = {
  results: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCERS_ACTIONS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PRODUCERS_ACTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        results: [],
      };
    case FETCH_PRODUCERS_SUCCES:
      return {
        ...state,
        ...INITIAL_STATE,
        results: action.payload.producers,
      };
    case FETCH_SINGLE_PRODUCER_SUCCES:
      return {
        ...state,
        ...INITIAL_STATE,
        producer: action.payload.producer,
      };
    default:
      return state;
  }
};
