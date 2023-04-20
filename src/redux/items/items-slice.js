import { createSlice } from "@reduxjs/toolkit";
import { fetchItems, addItems, deleteItem } from "./items-operation";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const pendingHandler = (store, {payload}) => {
    store.isLoading = true;
  };

const itemsSlice = createSlice({
    name: "items",
    initialState,
    extraReducers:  builder => {
        builder
        .addCase(fetchItems.pending, pendingHandler)
        .addCase(fetchItems.fulfilled, (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        }) 
        .addCase(fetchItems.rejected, (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        })
        .addCase(addItems.pending, pendingHandler)
        .addCase(addItems.fulfilled, (store, {payload}) => {
            store.loading = false;
            store.error = null;
            console.log(payload)
            store.items.push(payload)
        })
        .addCase(addItems.rejected, (store, {payload}) => {
            store.loading = false;
            console.log(payload)
            store.error = payload;
        })
        .addCase(deleteItem.pending, pendingHandler)
        .addCase(deleteItem.fulfilled, (store, {payload}) => {
            store.loading = false;
            store.items = store.items.filter(item => item._id !== payload);
        })
        .addCase(deleteItem.rejected, (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        })
       
    }
});

export const itemsReducer = itemsSlice.reducer;