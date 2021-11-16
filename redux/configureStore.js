import { configureStore } from '@reduxjs/toolkit';
import regionReducer from './features/region/regionSlice';
import productReducer from './features/product/productSlice';
import orderReducer from './features/order/orderSlice';

const preloadState = {};

export const store = configureStore({
  reducer: {
    region: regionReducer,
    product: productReducer,
    order: orderReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadState,
});
