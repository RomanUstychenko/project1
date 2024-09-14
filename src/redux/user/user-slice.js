import { createSlice } from '@reduxjs/toolkit';
import { allUsers } from './user-operation';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const pendingHandler = (store, { payload }) => {
  store.loading = true;
  store.error = null;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(allUsers.pending, pendingHandler)
      .addCase(allUsers.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.users = payload;
      })
      .addCase(allUsers.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
