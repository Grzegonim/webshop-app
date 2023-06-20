import { applyMiddleware, compose, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import initialState from './initialState';
import productsReducer from './productsRecuer';
import ordersReducer from './ordersReducer';
import requestReducer from './requestReducer';
import cartReducer from './cartReducer';
import reviewReducer from './reviewReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
  cart: cartReducer,
  reviews: reviewReducer,
  request: requestReducer,
  user: userReducer
});

const store = createStore(
  reducer, 
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;