//selectors
export const cart = state => state.cart;

//actions
const createActionName = actionName => `app/cart/${actionName}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const GET_TOTAL = createActionName('GET_TOTAL');
const CHANGE_QUANTITY = createActionName('CHANGE_QUANTITY');
const UPDATE_CART = createActionName('UPDATE_CART');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CLEAR_CART = createActionName('CLEAR_CART');

// action creators
export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const getTotal = payload => ({ type: GET_TOTAL, payload });
export const changeQuantity = payload => ({ type: CHANGE_QUANTITY, payload });
export const updateCart = payload => ({ type: UPDATE_CART, payload });
export const removeProduct = payload => ({ type: REMOVE_PRODUCT, payload });
export const clearCart = () => ({ type: CLEAR_CART });

export const clearLocalStorage = () => {
  return async (dispatch) => {
    try {
      localStorage.clear();
      await dispatch(clearCart());
    }
    catch (err) {
      console.log(err)
    }
  }
}

export const addCartToLocalStorage = (payload) => {
  return async (dispatch, cart) => {
    try {
      await dispatch(addToCart(payload));
      const cartToLocalStorage = cart().cart;
      localStorage.setItem('cart', JSON.stringify(cartToLocalStorage));
    }
    catch (err) {
      console.log(err)
    }
  }
}

export const removeFromLocalStorage = (payload) => {
  return async (dispatch, cart) => {
    try {
      await dispatch(removeProduct(payload));
      const cartToLocalStorage = await cart().cart;
      localStorage.setItem('cart', JSON.stringify(cartToLocalStorage));
    }
    catch (err) {
      console.log(err);
    }
  }
}

export const changeQuantityLocalStorage = (payload) => {
  return async (dispatch, cart) => {
    try {
      await dispatch(changeQuantity(payload));
      const product = await cart().cart.find(prod => prod.id === payload.id);
      if(product.quantity < 1) {
        dispatch(removeFromLocalStorage(payload.id));
      };      
      const cartToLocalStorage = cart().cart;
      localStorage.setItem('cart', JSON.stringify(cartToLocalStorage));
    }
    catch (err) {
      console.log(err);
    }
  }
}

const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (statePart.find(product => product.id === action.payload.id)) {
        return statePart.map(product => {
          if(product.id === action.payload.id) {
            return {
              ...product, 
              quantity: action.payload.quantity,
              totalPrice: action.payload.totalPrice
            }
          } else {
            return product;
          }
        });
      } else {
        return [...statePart, action.payload]
      }
    }

    case REMOVE_PRODUCT:
      return statePart.filter(product => product.id !== action.payload)

    case CLEAR_CART:
      return statePart = []
      
    case CHANGE_QUANTITY: 
      return statePart.map(product => {
        if (product.id === action.payload.id && action.payload.sign === 'decrease') {
          return { 
            ...product, 
            quantity: product.quantity - 1,
            totalPrice: product.price * (product.quantity - 1)
          }
        } else if (product.id === action.payload.id && action.payload.sign === 'increase') {
          return {
            ...product, 
            quantity: product.quantity + 1,
            totalPrice: product.price * (product.quantity + 1)
          }
        } else {
          return {...product}
        }
      })
                  
    default:
      return statePart
  }
}

export default cartReducer;