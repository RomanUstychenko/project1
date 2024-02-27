import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "API/users"



export const allUsers = createAsyncThunk(
    "users/allUsers",
    async(_, {rejectWithValue}) => {
        try {
            const result = await api.getAllUsers();
            // console.log(result)
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
           return rejectWithValue(error)
        }}
)
