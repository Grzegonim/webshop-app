import axios from "axios";
import { API_URL } from "../config";
import { errorRequest, startRequest, endRequest } from "./requestReducer";

//selectors
export const user = state => state.user;

//actions
const createActionName = actionName => `app/login/${actionName}`;
const ADD_USER = createActionName('ADD_USER');
const REMOVE_USER = createActionName('REMOVE_USER');

//action creators
export const addUser = payload => ({ type: ADD_USER, payload});
export const removeUser = payload => ({ type: REMOVE_USER, payload});

export const loginUser = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(startRequest());
      const config = {
        headers: {
          'Authorization': `Bearer ${payload.token}`
        }
      };
      let res = await axios.post(`${API_URL}/auth/login`, payload.data, config);
      dispatch(addUser(res.data));
      dispatch(endRequest());
    }
    catch (err) {
      if (err.response.status === 401) {
        dispatch(errorRequest('login-error'));
      }
    }
  }
}

export const registerUser = (payload) => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${API_URL}/auth/register`, payload)
      dispatch(addUser(res.data));
    }
    catch (err) {
      console.log(err);
    }
  }
}


export const logoutUser = (payload) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${payload}`
        }
      };
      let res = await axios.post(`${API_URL}/auth/logout`, {}, config)
      dispatch(removeUser({ access_token: null, refresh_token: null, name: null, email: null, phone: null, address: null, id: null }));
    }
    catch (err) {
      console.log(err);
    }
}
}
export const userReducer = (statePart = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...statePart, ...action.payload };
    case REMOVE_USER:
      return action.payload;  
    default: 
    return statePart;
  }
}

export default userReducer;