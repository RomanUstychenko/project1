import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContact } from "./contacts-operation";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const pendingHandler = (store, {payload}) => {
    store.isLoading = true;
  };

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers:  builder => {
        builder
        .addCase(fetchContacts.pending, pendingHandler)
        .addCase(fetchContacts.fulfilled, (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        }) 
        .addCase(fetchContacts.rejected, (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        })
        .addCase(addContacts.pending, pendingHandler)
        .addCase(addContacts.fulfilled, (store, {payload}) => {
            store.loading = false;
            store.error = null;
            console.log(payload)
            store.items.push(payload)
        })
        .addCase(addContacts.rejected, (store, {payload}) => {
            store.loading = false;
            console.log(payload)
            store.error = payload;
        })
        .addCase(deleteContact.pending, pendingHandler)
        .addCase(deleteContact.fulfilled, (store, {payload}) => {
            store.loading = false;
            store.items = store.items.filter(item => item._id !== payload);
        })
        .addCase(deleteContact.rejected, (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        })
       
    }
});

export const contactsReducer = contactsSlice.reducer;