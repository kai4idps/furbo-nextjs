import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UNIT_COUNT_API, BASIC_AUTHORIZATION } from 'config/common';
import axios from 'axios';

export const fetchUnitCount = createAsyncThunk(
  'product/fetchUnitCount',
  async () => {
    const data = {
      Action: 'CampaignLeftQuantity',
    };
    const response = await axios.post(
      UNIT_COUNT_API[process.env.BUILD_ENV],
      data,
      {
        Header: {
          'Content-Type': 'application/json',
          Authorization: BASIC_AUTHORIZATION,
        },
      },
    );
    return response.data.Left;
  },
);

export const productInfoSlice = createSlice({
  name: 'productInfo',
  initialState: {
    price: null,
    id: null,
    image: null,
    sku: null,
    title: null,
    inventoryQuantity: null,
    status: 'idle',
    unitCount: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUnitCount.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchUnitCount.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.unitCount = action.payload;
    },
    [fetchUnitCount.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default productInfoSlice.reducer;
