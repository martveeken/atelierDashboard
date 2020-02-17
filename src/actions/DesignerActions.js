import axios from 'axios';

import history from '../history';
import { ROOT_URL } from '../config/config';

import {
  DESIGNERS_INIT,
  DESIGNER_ACTIONS_START,
  DESIGNER_ACTIONS_FAIL,
  FETCH_DESIGNERS_SUCCES,
  NEW_DESIGNER_SUCCES,
  FETCH_SINGLE_DESIGNER_SUCCES,
  ADD_DESIGNER_CONTACT_SUCCES,
  EDIT_DESIGNER_CONTACT_SUCCES,
  DELETE_DESIGNER_CONTACT_SUCCES,
  FETCH_DESIGNERS_ID_NAME_SUCCES,
} from './types';

// Init when component unmounts

export const designerInit = () => ({
  type: DESIGNERS_INIT,
});

// Handle start and fail

export const designerActionStart = () => ({
  type: DESIGNER_ACTIONS_START,
});

export const designerActionFail = error => ({
  type: DESIGNER_ACTIONS_FAIL,
  payload: { error },
});

// Fetch all Designers

const getDesigners = () => {
  const url = `${ROOT_URL}/designer/designers`;
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

export const fetchDesignersSuccess = designers => ({
  type: FETCH_DESIGNERS_SUCCES,
  payload: { designers },
});

export const fetchDesigners = () => {
  return (dispatch) => {
    // dispatch(designerActionStart());
    return getDesigners()
      .then((response) => {
        dispatch(fetchDesignersSuccess(response.data));
        return response.data;
      })
      .catch(error => dispatch(designerActionFail(error)));
  };
};

// Fetch all Designers only with name and id

const getDesignersNameId = () => {
  const url = `${ROOT_URL}/designer/designersid`;
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

export const fetchDesignersIdNameSuccess = idname => ({
  type: FETCH_DESIGNERS_ID_NAME_SUCCES,
  payload: { idname },
});

export const fetchDesignersNameId = () => {
  return (dispatch) => {
    return getDesignersNameId()
      .then((response) => {
        dispatch(fetchDesignersIdNameSuccess(response.data));
        return response.data;
      })
      .catch(error => dispatch(designerActionFail(error)));
  };
};


// Add new Designer
const addNewDesigner = (data) => {
  const url = `${ROOT_URL}/designer/newdesigner`;
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

export const newDesignerSuccess = designers => ({
  type: NEW_DESIGNER_SUCCES,
  payload: { designers },
});

export const newDesigner = (data) => {
  return (dispatch) => {
    dispatch(designerActionStart());
    return addNewDesigner(data)
      .then((response) => {
        dispatch(newDesignerSuccess(response.data));
        history.push('/designers');
        return response.data;
      })
      .catch(error => dispatch(designerActionFail(error)));
  };
};

// Fetch single Designer
const fetchSingleDesigner = (id) => {
  const url = `${ROOT_URL}/designer/designer/${id}`;
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

const fetchDesignerProducts = (id) => {
  const url = `${ROOT_URL}/product/designerproducts/${id}`;
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

export const fetchSingleDesignerSucces = (designer, products) => ({
  type: FETCH_SINGLE_DESIGNER_SUCCES,
  payload: { designer, products },
});

export const getDesigner = (id) => {
  return (dispatch) => {
    dispatch(designerActionStart());
    return fetchSingleDesigner(id)
      .then((designer) => {
        return fetchDesignerProducts(id)
          .then((products) => {
            dispatch(fetchSingleDesignerSucces(designer.data, products.data));
            return (products.data, designer.data);
          })
          .catch(error => dispatch(designerActionFail(error)));
      })
      .catch(error => dispatch(designerActionFail(error)));
  };
};

// Add designer contact

const addDesignerContact = (id, data) => {
  const url = `${ROOT_URL}/designer/newcontact/${id}`;
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

export const addDesignerContactSucces = designer => ({
  type: ADD_DESIGNER_CONTACT_SUCCES,
  payload: { designer },
});

export const newDesignerContact = (id, data) => {
  return (dispatch) => {
    dispatch(designerActionStart());
    return addDesignerContact(id, data)
      .then((response) => {
        dispatch(addDesignerContactSucces(response.data));
        history.push(`/designer/${id}`);
        return response.data;
      })
      .catch(error => dispatch(designerActionFail(error)));
  };
};

// Edit designer contact

const editDesignerContactRequest = (contactId, data) => {
  const url = `${ROOT_URL}/designer/editcontact/${contactId}`;
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

export const editDesignerContactSucces = designer => ({
  type: EDIT_DESIGNER_CONTACT_SUCCES,
  payload: { designer },
});

export const editDesignerContact = (contactId, designerId, data) => {
  return (dispatch) => {
    dispatch(designerActionStart());
    return editDesignerContactRequest(contactId, data)
      .then((response) => {
        dispatch(editDesignerContactSucces(response.data));
        history.push(`/designer/${designerId}`);
        return response.data;
      })
      .catch(error => dispatch(designerActionFail(error)));
  };
};

// Edit designer contact

const deleteDesignerContactRequest = (designerId, contactId) => {
  const url = `${ROOT_URL}/designer/deletecontact`;
  const token = localStorage.getItem('user');
  const data = {
    designerId,
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

export const deleteDesignerContactSucces = designer => ({
  type: DELETE_DESIGNER_CONTACT_SUCCES,
  payload: { designer },
});

export const deleteDesignerContact = (contactId, designerId) => {
  return (dispatch) => {
    dispatch(designerActionStart());
    return deleteDesignerContactRequest(designerId, contactId)
      .then((response) => {
        dispatch(deleteDesignerContactSucces(response.data));
        history.push(`/designer/${designerId}`);
        return response.data;
      })
      .catch(error => dispatch(designerActionFail(error)));
  };
};
