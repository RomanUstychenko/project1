import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "API/auth"


export const register = createAsyncThunk(
    "auth/register",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.register(data);
            console.log("registr", result)
            return result
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
           return rejectWithValue(error)
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.login(data);
            console.log("login", result)
            return result
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
           return rejectWithValue(error)
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue}) => {
        try {
            const result = await api.logout();
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
           return rejectWithValue(error)
        }
    }
);

export const current = createAsyncThunk(
    "auth/current",
    async(_, {rejectWithValue, getState}) => {
        try {
            const { auth } = getState();
            // console.log(auth)
            const result = await api.getCurrentUser(auth.token);
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
           return rejectWithValue(error)
        }}
)

// export const allUsers = createAsyncThunk(
//     "auth/allUsers",
//     async(_, {rejectWithValue, getState}) => {
//         try {
//             // const { auth } = getState();
//             // console.log(auth)
//             const result = await api.getAllUsers();
//             return result;
//         } catch ({response}) {
//             const error = {
//                 status: response.status,
//                 message: response.data.message
//             }
//            return rejectWithValue(error)
//         }}
// )
export const userUpdate = createAsyncThunk(
    'auth/userUpdate',
    async (userData, { rejectWithValue }) => {
      try {
        const result = await api.userUpdate(userData);
        return result;
      } catch ({response}) {
        const error = {
            status: response.status,
            message: response.data.message
        }
       return rejectWithValue(error)
      }
    }
  );