import axios from 'axios';

import history from '../history';
import { ROOT_URL } from '../config/config';

import {
  PRODUCERS_ACTIONS_START,
  PRODUCERS_ACTIONS_FAIL,
  FETCH_PRODUCERS_SUCCES,
  NEW_PRODUCER_SUCCES,
  FETCH_SINGLE_PRODUCER_SUCCES,
  ADD_PRODUCER_CONTACT_SUCCES,
  EDIT_PRODUCER_CONTACT_SUCCES,
  DELETE_PRODUCER_CONTACT_SUCCES,
} from './types';

// Handle start and fail

export const producerActionStart = () => ({
  type: PRODUCERS_ACTIONS_START,
});

export const producerActionFail = error => ({
  type: PRODUCERS_ACTIONS_FAIL,
  payload: { error },
});

// Fetch all producers

const getProducers = () => {
  const url = `${ROOT_URL}/producer/producers`;
  const token = localStorage.getItem('user');

  const request = axios.get(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth': token,
    },
  });

  return request;
};

export const fetchProducersSuccess = producers => ({
  type: FETCH_PRODUCERS_SUCCES,
  payload: { producers },
});

export const fetchProducers = () => {
  return (dispatch) => {
    dispatch(producerActionStart());
    return getProducers()
      .then((response) => {
        dispatch(fetchProducersSuccess(response.data));
        return response.data;
      })
      .catch(error => dispatch(producerActionFail(error)));
  };
};

// Add new Producer
const addNewProducer = (data) => {
  const url = `${ROOT_URL}/producer/newproducer`;
  const token = localStorage.getItem('user');
  const request = axios.post(url, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth': token,
    },
  });

  return request;
};

export const newProducerSuccess = producers => ({
  type: NEW_PRODUCER_SUCCES,
  payload: { producers },
});

export const newProducer = (data) => {
  return (dispatch) => {
    dispatch(producerActionStart());
    return addNewProducer(data)
      .then((response) => {
        dispatch(newProducerSuccess(response.data));
        return response.data;
      })
      .catch(error => dispatch(producerActionFail(error)));
  };
};

// Fetch single Producer
const fetchSingleProducer = (id) => {
  const url = `${ROOT_URL}/producer/producer/${id}`;
  const token = localStorage.getItem('user');

  const request = axios.get(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth': token,
    },
  });

  return request;
};

export const fetchSingleProducerSucces = producer => ({
  type: FETCH_SINGLE_PRODUCER_SUCCES,
  payload: { producer },
});

export const getProducer = (id) => {
  return (dispatch) => {
    dispatch(producerActionStart());
    return fetchSingleProducer(id)
      .then((response) => {
        dispatch(fetchSingleProducerSucces(response.data));
        return response.data;
      })
      .catch(error => dispatch(producerActionFail(error)));
  };
};


// Add producer contact

const addProducerContact = (id, data) => {
  const url = `${ROOT_URL}/producer/newcontact/${id}`;
  const token = localStorage.getItem('user');

  const request = axios.post(url, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth': token,
    },
  });

  return request;
};

export const addProducerContactSucces = producer => ({
  type: ADD_PRODUCER_CONTACT_SUCCES,
  payload: { producer },
});

export const newProducerContact = (id, data) => {
  return (dispatch) => {
    dispatch(producerActionStart());
    return addProducerContact(id, data)
      .then((response) => {
        dispatch(addProducerContactSucces(response.data));
        history.push(`/producer/${id}`);
        return response.data;
      })
      .catch(error => dispatch(producerActionFail(error)));
  };
};

// Edit producer contact

const editProducerContactRequest = (contactId, data) => {
  const url = `${ROOT_URL}/producer/editcontact/${contactId}`;
  const token = localStorage.getItem('user');

  const request = axios.post(url, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth': token,
    },
  });

  return request;
};

export const editProducerContactSucces = producer => ({
  type: EDIT_PRODUCER_CONTACT_SUCCES,
  payload: { producer },
});

export const editProducerContact = (contactId, producerId, data) => {
  return (dispatch) => {
    dispatch(producerActionStart());
    return editProducerContactRequest(contactId, data)
      .then((response) => {
        dispatch(editProducerContactSucces(response.data));
        history.push(`/producer/${producerId}`);
        return response.data;
      })
      .catch(error => dispatch(producerActionFail(error)));
  };
};

// Edit producer contact

const deleteProducerContactRequest = (producerId, contactId) => {
  const url = `${ROOT_URL}/producer/deletecontact`;
  const token = localStorage.getItem('user');

  const data = {
    producerId,
    contactId,
  };

  const request = axios.post(url, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-auth': token,
    },

  });

  return request;
};

export const deleteProducerContactSucces = producer => ({
  type: DELETE_PRODUCER_CONTACT_SUCCES,
  payload: { producer },
});

export const deleteProducerContact = (contactId, producerId) => {
  return (dispatch) => {
    dispatch(producerActionStart());
    return deleteProducerContactRequest(producerId, contactId)
      .then((response) => {
        dispatch(deleteProducerContactSucces(response.data));
        history.push(`/producer/${producerId}`);
        return response.data;
      })
      .catch(error => dispatch(producerActionStart(error)));
  };
};
