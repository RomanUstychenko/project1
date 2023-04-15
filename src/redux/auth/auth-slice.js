import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, current } from "./auth-operation";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const initialState = {
    newUser: { name: null, email: null, verify: false },
    token: "",
    isLogin: false,
    loading: false,
    isLoadingUser: false,
    error: null,
}

const pendingHandler = (store, {payload}) => {
    store.isLoading = true;
    store.error = null;
  };


const authSlice = createSlice({name:"auth", initialState,  extraReducers: builder => {
    builder

    .addCase(register.pending, pendingHandler)
    .addCase(register.fulfilled, (store, {payload}) => {
        store.loading = false;
        store.newUser = payload.user;
        store.token = payload.token;
        // store.isLogin = true;
    })
    .addCase(register.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
        Notify.failure(`Login or email is already exists`)
    })
    .addCase(login.pending, pendingHandler)
    .addCase(login.fulfilled, (store, {payload}) => {
        console.log(payload)
        console.log("store", store)
        store.loading = false;
        store.newUser = payload.user;
        store.token = payload.token;
        store.isLogin = true;
    })
    .addCase(login.rejected, (store, {payload}) => {
        // store.loading = false;
        store.error = payload;
        Notify.failure(`wrong password or email`)
    })
    .addCase(logout.pending, pendingHandler)
    .addCase(logout.fulfilled, (store, {payload}) => {
        store.loading = false;
        store.newUser = { name: null, email: null };
        store.token = "";
        store.isLogin = false;
    })
    .addCase(logout.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;

    })
    .addCase(current.pending, pendingHandler)
    .addCase(current.fulfilled, (store, {payload}) => {
        store.isLoadingUser = false;
        store.newUser = payload;
        store.isLogin = true;
    })
    .addCase(current.rejected, (store, {payload}) => {
        store.isLoadingUser = false;
        store.error = payload;
    });
   
}}
);

export const authReducer = authSlice.reducer;