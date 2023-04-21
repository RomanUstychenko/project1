import * as api from "API/items";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
    "items/fetch",
    async(itemName, description, price, itemImg, thunkApi) => {
        try {
            const data = await api.getItems(                {
                    itemName,
                    description,
                    price,
                    itemImg,
                  }
                  );
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }}
    );
   export const geItemsByCategory = createAsyncThunk(
        'items/getByCategory',
        async ( category, {rejectWithValue}) => {
            try {
                
                const { data } = await api.getItemsByCategory(category)
                return data;
            } 
             catch (error) {
                return rejectWithValue(error);
            }
        },
    );





    
    export const addItems = createAsyncThunk(
        "items/add",
        async(datas, {rejectWithValue}) => {
            console.log(datas)
            try {
                const result = await api.addItems(
                    
                    datas
                  
                  );
                console.log(result)
                return result;
                
            } catch (error) {
                console.log("error", error)
                return rejectWithValue(error);
            }},
    );

    export const deleteItem = createAsyncThunk(
        "items/remove",
        async(_id, {rejectWithValue}) => {
            try {
                await api.deleteItem(_id);
                return _id;
            } catch(error) {
                return rejectWithValue(error);
            }}
    );