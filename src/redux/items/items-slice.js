import { createSlice } from "@reduxjs/toolkit";
import { fetchItems, geItemsByCategory, addItems, deleteItem, itemUpdate } from "./items-operation";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { toast } from 'react-toastify';

const initialState = {
    items: [],
    itemsByCategory: [],
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


        .addCase(geItemsByCategory.pending, pendingHandler)
        .addCase(geItemsByCategory.fulfilled, (store, {payload}) => {
            console.log(payload)
            store.loading = false;
            store.error = null;
            store.itemsByCategory = payload
        }) 
        .addCase(geItemsByCategory.rejected, (store, {payload}) => {
            console.log(payload)
            store.itemsByCategory = [];
            store.loading = false;
            store.error = payload;
        })


        .addCase(addItems.pending, pendingHandler)
        .addCase(addItems.fulfilled, (store, {payload}) => {
            store.loading = false;
            store.error = null;
            console.log(payload)
            console.log(store)
            store.items.push(payload)
        })
        .addCase(addItems.rejected, (store, {payload}) => {
            store.loading = false;
            console.log(payload)
            console.log(store)
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


        .addCase(itemUpdate.pending, pendingHandler)
        .addCase(itemUpdate.fulfilled, (store,  {payload} ) => {
          console.log(payload)
          console.log(store)
            // store.items = {
            //   itemName: payload.itemName,
            // };
            store.items = {
                 payload,
              };
          })
        .addCase(itemUpdate.rejected, (store, { meta, payload }) => {
            store.loading = false;
            store.error = payload;
            console.log(meta)
            console.log(payload)
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
    }
});

export const itemsReducer = itemsSlice.reducer;