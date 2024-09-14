import { createAction, createSlice } from '@reduxjs/toolkit';
import {
  fetchItems,
  fetchItemsLive,
  geItemsByCategory,
  addItems,
  delItemsByCategory,
  deleteItem,
  itemUpdate,
  imgUpdate,
} from './items-operation';

const initialState = {
  items: [],
  itemsLive: [],
  itemsByCategory: [],
  itemWeightUnit: '',
  imgSaved: false,
  isLive: false,
  loading: false,
  error: null,
};

const pendingHandler = (store, { payload }) => {
  // store.loading = true;
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchItems.pending, pendingHandler)
      .addCase(fetchItems.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.imgSaved = false;
        store.isLive = false;
        store.items = payload;
      })
      .addCase(fetchItems.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchItemsLive.pending)
      .addCase(fetchItemsLive.fulfilled, (store, { payload }) => {
        store.isLive = true;
        store.itemsLive = payload;
      })
      .addCase(fetchItemsLive.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })

      .addCase(geItemsByCategory.pending, pendingHandler)
      .addCase(geItemsByCategory.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        store.itemsByCategory = payload;
      })
      .addCase(geItemsByCategory.rejected, (store, { payload }) => {
        store.itemsByCategory = [];
        store.loading = false;
        store.error = payload;
      })

      .addCase(addItems.pending, pendingHandler)
      .addCase(addItems.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        store.items.push(payload);
      })
      .addCase(addItems.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(deleteItem.pending, pendingHandler)
      .addCase(deleteItem.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = store.items.filter(item => item._id !== payload);
      })
      .addCase(deleteItem.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(delItemsByCategory.pending, pendingHandler)
      .addCase(delItemsByCategory.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        store.items = store.items.filter(item => item.section !== payload);
      })
      .addCase(delItemsByCategory.rejected, (store, { payload }) => {
        store.itemsByCategory = [];
        store.loading = false;
        store.error = payload;
      })

      .addCase(itemUpdate.pending, pendingHandler)
      .addCase(itemUpdate.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.imgSaved = false;
        store.itemsByCategory.forEach((item, index) => {
          if (item._id === payload._id) {
            store.itemsByCategory[index] = payload;
          }
        });
      })
      .addCase(itemUpdate.rejected, (store, { meta, payload }) => {
        store.loading = false;
        store.error = payload;
      })

      .addCase(imgUpdate.pending, pendingHandler)
      .addCase(imgUpdate.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.forEach((item, index) => {
          if (item._id === payload._id) {
            store.items[index] = payload;
          }
        });
        store.imgSaved = true;
      })
      .addCase(imgUpdate.rejected, (store, { meta, payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(setItemWeightUnit, (store, { payload }) => {
        store.itemWeightUnit = payload;
      });
  },
});
export const setItemWeightUnit = createAction('items/setItemWeightUnit');

export const itemsReducer = itemsSlice.reducer;
