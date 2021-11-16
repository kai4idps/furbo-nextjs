import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LOCALE_API } from 'config/common';
import { REGION_INFO } from 'config/navigation';
import axios from 'axios';
import { FLAG_US } from 'config/images/flags';

const initialState = {
  country: null,
  language: null,
  code: null,
  group: null,
  image: null,
  status: 'idle',
  error: null,
};

export const fetchRegion = createAsyncThunk('region/fetchRegion', async () => {
  const response = await axios.get(LOCALE_API, { headers: {} });
  const code = response.data.Country === 'GB' ? 'UK' : response.data.Country;
  const info = REGION_INFO?.[code] || REGION_INFO.US;
  return info;
});

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    updateRegion: (state, action) => {
      const { country, code, language, group, image } = action.payload;
      state.country = country;
      state.code = code;
      state.language = language;
      state.group = group;
      state.image = image;
    },
    fallbackRegion: (state) => {
      state.country = 'United State';
      state.code = 'us';
      state.language = 'en-us';
      state.group = 'Americas';
      state.image = FLAG_US;
    },
  },
  extraReducers: {
    [fetchRegion.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchRegion.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      const { country, code, language, group, image } = action.payload;
      state.country = country;
      state.code = code;
      state.language = language;
      state.group = group;
      state.image = image;
    },
    [fetchRegion.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { updateRegion, fallbackRegion } = regionSlice.actions;

export default regionSlice.reducer;
