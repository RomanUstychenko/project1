import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, current, userUpdate } from "./auth-operation";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { toast } from 'react-toastify';


const initialState = {
    users: {},
    newUser: {_id: null, name: null, phone: null, address: null, description: null, email: null, verify: false, logoURL: null  },
    token: "",
    isRegister: false,
    isLogin: false,
    isLive: false,
    loading: false,
    error: null,
}

const pendingHandler = (store, {payload}) => {
    // store.loading = true;
    store.error = null;
  };


const authSlice = createSlice({name:"auth", initialState,  extraReducers: builder => {
    builder

    .addCase(register.pending, pendingHandler)
    .addCase(register.fulfilled, (store, {payload}) => {
        store.loading = false;
        store.newUser = payload.user;
        store.token = payload.token;
        store.isRegister = true;
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
        
        store.loading = false;
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
        
        store.loading = false;
        store.newUser = payload;
        store.isLogin = true;
    })
    .addCase(current.rejected, (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    })
    // .addCase(allUsers.pending, pendingHandler)
    // .addCase(allUsers.fulfilled, (store, {payload}) => {
    //     store.isLoadingUser = false;
    //     store.users = payload;
    //     store.isLogin = true;
    // })
    // .addCase(allUsers.rejected, (store, {payload}) => {
    //     store.isLoadingUser = false;
    //     store.error = payload;
    // })

    .addCase(userUpdate.pending, pendingHandler)
    .addCase(userUpdate.fulfilled, (store, { payload }) => {
      console.log(payload)
      console.log(store.newUser)
        // store.newUser = {
        //   name: payload.user.name,
        //   email: payload.user.email,
        //   phone: payload.user.phone,
        //   address: payload.user.address,
        //   description: payload.user.description,
        //   verify: payload.user.verify,
        //   logoURL: payload.user.logoURL,
        //   _id: payload.user._id
        // };
        store.newUser = payload.user
      })
      .addCase(userUpdate.rejected, (store, { meta, payload }) => {
        store.loading = false;
        store.error = payload;
        // toast.error(chooseValid(Object.keys(meta.arg)[0]));
        // function chooseValid(key) {
        //   switch (key) {
        //     case 'name':
        //       return 'Name must be in English, contain 2-20 symbols';
        //     default:
        //       return 'Wrong!';
        //   }
        // }
      })
      // .addCase(isLive.pending, pendingHandler)
      // .addCase(isLive.fulfilled, (store, {payload}) => {
      //     store.loading = false;
      //     store.isLive = true;
      //     store.isLogin = false;
      // })
      // .addCase(isLive.rejected, (store, {payload}) => {
      //     store.loading = false;
      //     store.error = payload;
  
      // })
   
}}
);

export const authReducer = authSlice.reducer;