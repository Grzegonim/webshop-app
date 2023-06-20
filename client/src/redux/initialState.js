const initialState = {
  products: [],
  orders: [],
  cart: [],
  reviews: [],
  request: { status: null },
  user: { 
    access_token: null, 
    refresh_token: null,
    name: null, 
    address: null, 
    phone: null,
    email: null,
    id: null
  }
};

export default initialState;