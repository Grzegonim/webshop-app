export const API_URL = process.env.NODE_ENV === 'production' ? '' : "http://localhost:8001";

export const IMGS_URL = (process.env.NODE_ENV === 'production') ? '/src/public/' : 'http://localhost:8001/src/public/';