import axios from 'axios';
import { API_URL } from '../config.js';
import { startRequest, endRequest } from './requestReducer.js';

//selectors
export const productsList = state => state.products;
export const productById = (state, productId) => state.products.find(product => product.id === productId);

//actions
const createActionName = actionName => `app/products/${actionName}`;

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const LOAD_PRODUCT_BY_ID = createActionName('LOAD_PRODUCT_BY_ID');


// action creators
export const loadProducts = payload => ({ type: LOAD_PRODUCTS, payload });
export const loadProductByID = payload => ({ type: LOAD_PRODUCT_BY_ID, payload });


export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/products`)
      console.log(res)
      dispatch(loadProducts([...res.data]))
      dispatch(endRequest())
    }
    catch (err) {
      console.log(err);
    }
  }
};

export const fetchPromotions = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/products/promotions`)
      console.log(res)
      dispatch(loadProducts([...res.data]))
      dispatch(endRequest())
    }
    catch (err) {
      console.log(err);
    }
  }
};

export const fetchProductById = id => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/products/${id}`)
      dispatch(loadProductByID(res.data))
      dispatch(endRequest())
    }
    catch (err) {
      console.log(err);
    }
  }
};

export const searchProducts = searchPhrase => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/products/search/${searchPhrase}`)
      dispatch(loadProducts([...res.data]))
      dispatch(endRequest())
    }
    catch (err) {
      console.log(err);
    }
  }
};

export const fetchProductsByCategory = category => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/products/category/${category}`)
      dispatch(loadProducts([...res.data]))
      dispatch(endRequest())
    }
    catch (err) {
      console.log(err);
    }
  }
};

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload]
    case LOAD_PRODUCT_BY_ID:
      return [action.payload]
  
    default:
      return statePart;
  }
}

export default productsReducer;