import * as api from "API/contacts";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(name, number, thunkApi) => {
        try {
            const data = await api.getContacts(                {
                    name,
                    number,
                  }
                  );
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }}
    );

    export const addContacts = createAsyncThunk(
        "contacts/add",
        async({ name, number }, {rejectWithValue}) => {
            console.log(name, number)
            try {
                const result = await api.addContacts(
                    {
                    name,
                    number,
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
        async(id, {rejectWithValue}) => {
            try {
                await api.deleteContact(id);
                return id;
            } catch(error) {
                return rejectWithValue(error);
            }}
    );