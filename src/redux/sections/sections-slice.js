import { createAction, createSlice } from '@reduxjs/toolkit';
import {
  fetchSections,
  addSection,
  deleteSection,
  updateSection,
} from './sections-operation';

const initialState = {
  menuOptions: localStorage.getItem('menuOptions') || '',
  sections: [],
  allSections: [],
  loading: false,
  error: null,
};
const pendingHandler = (store, { payload }) => {
  store.isLoading = true;
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchSections.pending, pendingHandler)
      .addCase(fetchSections.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.sections = payload.filteredSections;
        store.allSections = payload.data;
      })
      .addCase(fetchSections.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload.filteredSections;
      })
      .addCase(addSection.pending, pendingHandler)
      .addCase(addSection.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        store.sections.push(payload);
        store.allSections.push(payload);
      })
      .addCase(addSection.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(deleteSection.pending, pendingHandler)
      .addCase(deleteSection.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.sections = store.sections.filter(
          section => section._id !== payload
        );
        store.allSections = store.allSections.filter(
          section => section._id !== payload
        );
      })
      .addCase(deleteSection.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(updateSection.pending, pendingHandler)
      .addCase(updateSection.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.sections.forEach((item, index) => {
          if (item._id === payload._id) {
            store.sections[index] = payload;
          }
        });
      })
      .addCase(updateSection.rejected, (store, { meta, payload }) => {
        store.loading = false;
        store.error = payload;
      })

      .addCase(setMenuOptions, (store, { payload }) => {
        store.menuOptions = payload;
      });
  },
});

export const setMenuOptions = createAction('sections/setMenuOptions');

export const sectionsReducer = sectionsSlice.reducer;
