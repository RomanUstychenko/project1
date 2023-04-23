import { createSlice } from "@reduxjs/toolkit";
import { fetchSections, addSection, deleteSection } from "./sections-operation";


const initialState = {
    sections: [],
    loading: false,
    error: null,
}
const pendingHandler = (store, {payload}) => {
    store.isLoading = true;
  };

  const sectionsSlice = createSlice({
    name: "sections",
    initialState,
    extraReducers:  builder => {
        builder
        .addCase(fetchSections.pending, pendingHandler)
        .addCase(fetchSections.fulfilled, (store, {payload}) => {
            store.loading = false;
            store.sections = payload;
        }) 
        .addCase(fetchSections.rejected, (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        })
        .addCase(addSection.pending, pendingHandler)
        .addCase(addSection.fulfilled, (store, {payload}) => {
            store.loading = false;
            store.error = null;
            console.log(payload)
            store.sections.push(payload)
        })
        .addCase(addSection.rejected, (store, {payload}) => {
            store.loading = false;
            console.log(payload)
            store.error = payload;
        })
        .addCase(deleteSection.pending, pendingHandler)
        .addCase(deleteSection.fulfilled, (store, {payload}) => {
            store.loading = false;
            store.sections = store.sections.filter(section => section._id !== payload);
        })
        .addCase(deleteSection.rejected, (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        })
    }
});

export const sectionsReducer = sectionsSlice.reducer;