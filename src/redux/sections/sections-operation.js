import * as api from "API/sections";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSections = createAsyncThunk(
    "sections/fetch",
    async(owner, thunkApi) => {
        try {
            console.log("owner", owner)
                const data = await api.getSections({
                    owner,
                  });
                  console.log("data", data)
            return data;

        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }}
    );

    // export const fetchSectionsLive = createAsyncThunk(
    //     "sections/fetch",
    //     async(owner, category, thunkApi) => {
    //         console.log("owner", owner)
    //         console.log("category", category)
    //         try {
    //             const data = await api.getSectionsLive({
    //                     owner,
    //                     category,
    //                   }
    //                   );
    //             return data;
    //         } catch (error) {
    //             return thunkApi.rejectWithValue(error);
    //         }}
    //     );
    export const addSection = createAsyncThunk(
        "sections/add",
        async(datas, {rejectWithValue}) => {
            try {
                const result = await api.addSection(datas);
                return result;
                
            } catch (error) {
                return rejectWithValue(error);
            }},
    );

    export const deleteSection = createAsyncThunk(
        "sections/remove",
        async(_id, {rejectWithValue}) => {
            try {
                await api.deleteSection(_id);
                return _id;
            } catch(error) {
                return rejectWithValue(error);
            }}
    );
    export const updateSection = createAsyncThunk(
        'sections/update',
        async ( datas, { rejectWithValue }) => {
            console.log(datas)
          try {
            
            const newArr = [datas].map(({_id, ...rest}) => (rest))
            // const newArr = [datas].map(({ ...rest}) => (rest))

            console.log(newArr)
            const result = await api.updateSection(datas._id, newArr);
            // const result = await api.updateSection("65f077e9f50655929ea5e5f4", newArr);
            
            console.log(result)
            
            return result;
          } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
           return rejectWithValue(error)
          }
        }
      );