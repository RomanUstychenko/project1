import { createSlice } from "@reduxjs/toolkit";
import { fetchSections, addSection, deleteSection, updateSection } from "./sections-operation";


const initialState = {
    // upd: [],
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
        .addCase(updateSection.pending, pendingHandler)
        .addCase(updateSection.fulfilled, (store,  {payload} ) => {
          console.log(payload)
          console.log(store)
          const upd = payload
          console.log("upd", upd)
          console.log("pay sec", payload.category)
            store.sections = {
                  ...payload
                }
                // .find((section) => section._id === payload)
            //  =  {
            //   ...payload
            // }
          })
        .addCase(updateSection.rejected, (store, { meta, payload }) => {
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

export const sectionsReducer = sectionsSlice.reducer;