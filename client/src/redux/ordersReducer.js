import axios from 'axios';
import { startRequest, endRequest } from './requestReducer.js';
import { API_URL } from '../config.js';

//actions
const createActionName = actionName => `app/orders/${actionName}`;
const ADD_ORDER = createActionName('ADD_ORDER');
export const addOrder = payload => ({ type: ADD_ORDER, payload });

export const sendOrder = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(startRequest());
      await axios.post(`${API_URL}/orders`, payload);
      dispatch(addOrder(payload));
      dispatch(endRequest());
    }
    catch (err) {
      console.log(err);
    }
  }
};

const ordersReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [...statePart, action.payload]
    default:
      return statePart
  };
};

export default ordersReducer;