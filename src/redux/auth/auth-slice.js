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

const authSlice = createSlice({
name: "auth",
initialState,
extraReducers: {
    [register.pending]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [register.fulfilled]: (store, {payload}) => {
        console.log(payload)
        store.loading = false;
        store.newUser = payload.user;
        store.token = payload.token;
        // store.isLogin = true;
    },
    [register.rejected]: (store, {payload}) => {
        console.log(payload)
        console.log(store)
        store.loading = false;
        store.error = payload;
        Notify.failure(`Login or email is already exists`)
    },
    [login.pending]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [login.fulfilled]: (store, {payload}) => {
        console.log(payload)
        console.log("store", store)
        store.loading = false;
        store.newUser = payload.user;
        store.token = payload.token;
        store.isLogin = true;
    },
    [login.rejected]: (store, {payload}) => {
        // store.loading = false;
        store.error = payload;
        Notify.failure(`wrong password or email`)
    },
    [logout.pending]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [logout.fulfilled]: (store, {payload}) => {
        store.loading = false;
        store.newUser = { name: null, email: null };
        store.token = "";
        store.isLogin = false;
    },
    [logout.rejected]: (store, {payload}) => {
        store.loading = false;
        store.error = payload;

    },
    [current.pending]: (store) => {
        store.isLoadingUser = true;
        store.error = null;
    },
    [current.fulfilled]: (store, {payload}) => {
        store.isLoadingUser = false;
        store.newUser = payload;
        store.isLogin = true;
    },
    [current.rejected]: (store, {payload}) => {
        store.isLoadingUser = false;
        store.error = payload;
    },
}
});

export const authReducer = authSlice.reducer;