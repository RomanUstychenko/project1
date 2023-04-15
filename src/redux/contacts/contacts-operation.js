import * as api from "API/contacts";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(name, description, phone, thunkApi) => {
        try {
            const data = await api.getContacts(                {
                    name,
                    description,
                    phone,
                  }
                  );
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }}
    );

    export const addContacts = createAsyncThunk(
        "contacts/add",
        async({ name, description, phone }, {rejectWithValue}) => {
            console.log(name, description, phone)
            try {
                const result = await api.addContacts(
                    {
                    name,
                    description,
                    phone,
                  }
                  );
                console.log(result)
                return result;
                
            } catch (error) {
                console.log("error", error)
                return rejectWithValue(error);
            }},
    );

    export const deleteContact = createAsyncThunk(
        "contacts/remove",
        async(_id, {rejectWithValue}) => {
            try {
                await api.deleteContact(_id);
                return _id;
            } catch(error) {
                return rejectWithValue(error);
            }}
    );