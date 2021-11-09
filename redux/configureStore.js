import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import regionReducer from './features/region/regionSlice';
import orderReducer from './features/order/orderSlice';

const preloadState = {};

const store = () =>
  configureStore({
    reducer: {
      region: regionReducer,
      order: orderReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    preloadState,
  });

export const wrapper = createWrapper(store);
