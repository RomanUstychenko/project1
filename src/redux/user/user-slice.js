import { createSlice } from "@reduxjs/toolkit";
import {  allUsers  } from "./user-operation";


const initialState = {
    users: [],
    loading: false,
    // isLoadingUser: false,
    error: null,
}

const pendingHandler = (store, {payload}) => {
    store.loading = true;
    store.error = null;
  };


const usersSlice = createSlice({name:"users", initialState,  extraReducers: builder => {
    builder

    
    .addCase(allUsers.pending, pendingHandler)
    .addCase(allUsers.fulfilled, (store, {payload}) => {
        store.loading = false;
        console.log(payload)
        // store.users.push(payload)
        store.users = payload;
        console.log(store.users)
        // store.isLogin = true;
    })
    .addCase(allUsers.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    })


   
}}
);

export const usersReducer = usersSlice.reducer;