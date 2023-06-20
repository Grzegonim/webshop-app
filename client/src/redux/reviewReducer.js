import axios from 'axios';
import { API_URL } from '../config.js';
import { startRequest, endRequest, errorRequest } from './requestReducer.js';

//selectors
export const reviewsList = state => state.reviews;

//actions
const createActionName = actionName => `app/reviews/${actionName}`;

const LOAD_REVIEWS = createActionName('LOAD_REVIEWS');
const ADD_NEW_REVIEW = createActionName('ADD_REVIEW');


// action creators
export const loadReviews = payload => ({ type: LOAD_REVIEWS, payload });
export const addNewReview = payload => ({ type: ADD_NEW_REVIEW, payload });

export const fetchReviews = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/reviews`)
      dispatch(loadReviews([...res.data]))
      dispatch(endRequest())
    }
    catch (err) {
      console.log(err);
    }
  }
};

export const addReview = (review) => {
  return async (dispatch) => {
    try {
      dispatch(startRequest());
      let res = await axios.post(`${API_URL}/reviews`, review);
      dispatch(addNewReview(res.data));
      dispatch(endRequest());
    }
    catch (err) {
      dispatch(errorRequest('error.review'));
    }
  }
}

const reviewReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_REVIEWS:
      return [...action.payload]
    case ADD_NEW_REVIEW:
      return [...statePart, action.payload]
  
    default:
      return statePart;
  }
}

export default reviewReducer;