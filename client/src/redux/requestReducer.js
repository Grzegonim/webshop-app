export const getRequest = state => state.request;
const createActionName = actionName => `app/ads/${actionName}`;
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const ADD_REQUEST = createActionName('ADD_REQUEST');
const REMOVE_REQUEST = createActionName('REMOVE_REQUEST');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = payload => ({ type: ERROR_REQUEST, payload });
export const addRequest = () => ({ type: ADD_REQUEST });
export const removeRequest = () => ({ type: REMOVE_REQUEST });


const requestReducer = (statePart = [], action) => {
  switch (action.type) {

      case START_REQUEST:
        return {
          status: 'start' ,
        };
      case END_REQUEST:
        return {
          status: 'success' ,
        };
      case ADD_REQUEST:
        return {
          pending: false, error: null, success: 'adding',
        };
      case REMOVE_REQUEST:
        return {
          pending: false, error: null, success: 'removing',
        };
      case ERROR_REQUEST:
        return {
          status: action.payload
        }
    default:
      return statePart
  };
}
  export default requestReducer;
