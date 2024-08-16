import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setFilter, (store, { payload }) => {
      store.filter = payload;
    });
  },
});

export const setFilter = createAction('filter/setFilter');

export const filterReducer = filterSlice.reducer;
