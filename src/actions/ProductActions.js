import axios from 'axios';

import history from '../history';
import { ROOT_URL } from '../config/config';

import {
  PRODUCTS_ACTIONS_START,
  PRODUCTS_ACTIONS_FAIL,
  FETCH_PRODUCTS_SUCCES,
  NEW_PRODUCT_SUCCES,
  FETCH_SINGLE_PRODUCT_SUCCES,
  ASSIGN_CONTACT_TO_PRODUCT_SUCCES,
} from './types';

// Handle start & fail
export const productsActionStart = () => ({
  type: PRODUCTS_ACTIONS_START,
});

export const productsActionFail = error => ({
  type: PRODUCTS_ACTIONS_FAIL,
  payload: { error },
});

// Fetch all Products
const getProducts = (status) => {
  const url = `${ROOT_URL}/product/products/${status}`;
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

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCES,
  payload: { products },
});

export const fetchProducts = (status) => {
  return (dispatch) => {
    dispatch(productsActionStart());
    return getProducts(status)
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
        return response.data;
      })
      .catch(error => dispatch(productsActionFail(error)));
  };
};

// Add new Product
const addNewProduct = (data) => {
  const url = `${ROOT_URL}/product/newproduct`;
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

export const newProductSuccess = product => ({
  type: NEW_PRODUCT_SUCCES,
  payload: { product },
});

export const newProduct = (data) => {
  return (dispatch) => {
    dispatch(productsActionStart());
    return addNewProduct(data)
      .then((response) => {
        dispatch(newProductSuccess(response.data));
        history.push(`/products/${data.status}`);
        return response.data;
      })
      .catch(error => dispatch(productsActionFail(error)));
  };
};

// Fetch single Product
const fetchSingleProduct = (id) => {
  const url = `${ROOT_URL}/product/product/${id}`;
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

export const fetchSingleProductSucces = (product, designer) => ({
  type: FETCH_SINGLE_PRODUCT_SUCCES,
  payload: { product, designer },
});

export const getProduct = (id) => {
  return (dispatch) => {
    dispatch(productsActionStart());
    return fetchSingleProduct(id)
      .then((product) => {
        return fetchSingleDesigner(product.data.designer_id)
          .then((designer) => {
            dispatch(fetchSingleProductSucces(product.data, designer.data));
            return (product.data, designer.data);
          })
          .catch(error => dispatch(productsActionFail(error)));
      })
      .catch(error => dispatch(productsActionFail(error)));
  };
};

// Assign contact person to product

// Edit designer contact

const assignContactToProductRequest = (data) => {
  const url = `${ROOT_URL}/product/assigncontact/`;
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

export const assignContactToProductSucces = contact => ({
  type: ASSIGN_CONTACT_TO_PRODUCT_SUCCES,
  payload: { contact },
});

export const assignContactToProduct = (data) => {
  const { productId } = data;
  return (dispatch) => {
    dispatch(productsActionStart());
    return assignContactToProductRequest(data)
      .then((response) => {
        dispatch(assignContactToProductSucces(response.data));
        history.push(`/product/${productId}`);
        return response.data;
      })
      .catch(error => dispatch(productsActionFail(error)));
  };
};
