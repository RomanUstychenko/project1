import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContact } from "./contacts-operation";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.loading = true;
        },
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [addContacts.pending]: (store) => {
            store.loading = true;
        },
        [addContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.error = null;
            console.log(payload)
            store.items.push(payload)
        },
        [addContacts.rejected]: (store, {payload}) => {
            store.loading = false;
            console.log(payload)
            store.error = payload;
        },
        [deleteContact.pending]: (store) => {
            store.loading = true;
        },
        [deleteContact.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = store.items.filter(item => item.id !== payload);
        },
        [deleteContact.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
    }
});

export const contactsReducer = contactsSlice.reducer;