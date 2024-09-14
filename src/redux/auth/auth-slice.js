import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  resendVerificationEmail,
  login,
  logout,
  current,
  userUpdate,
} from './auth-operation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialState = {
  users: {},
  newUser: {
    _id: null,
    name: null,
    phone: null,
    address: null,
    description: null,
    email: null,
    verify: false,
    logoURL: null,
    logoURLId: null,
  },
  token: '',
  isRegister: false,
  emailSent: false,
  isLogin: false,
  isLive: false,
  loading: false,
  error: null,
};

const pendingHandler = (store, { payload }) => {
  // store.loading = true;
  store.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(register.pending, pendingHandler)
      .addCase(register.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.newUser = payload;
        store.token = payload.token;
        store.isRegister = true;
      })
      .addCase(register.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
        Notify.failure(`Login or email is already exists`);
      })

      .addCase(resendVerificationEmail.fulfilled, (state, action) => {
        state.emailSent = true;
      })
      .addCase(resendVerificationEmail.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(login.pending, pendingHandler)
      .addCase(login.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.newUser = payload.user;
        store.token = payload.token;
        store.isLogin = true;
      })
      .addCase(login.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
        Notify.failure(`wrong password or email`);
      })
      .addCase(logout.pending, pendingHandler)
      .addCase(logout.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.newUser = { name: null, email: null };
        store.token = '';
        store.isLogin = false;
      })
      .addCase(logout.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(current.pending, pendingHandler)
      .addCase(current.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.newUser = payload;
        store.isLogin = true;
      })
      .addCase(current.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(userUpdate.pending, pendingHandler)
      .addCase(userUpdate.fulfilled, (store, { payload }) => {
        store.newUser = payload;
      })
      .addCase(userUpdate.rejected, (store, { meta, payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
