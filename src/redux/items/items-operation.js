import * as api from "API/items";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
    "items/fetch",
    async(itemName, description, price, itemImg, section, thunkApi) => {
        try {
            const data = await api.getItems(                {
                    itemName,
                    description,
                    price,
                    itemImg,
                    section,
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
            // console.log(category)
            try {
                
                const  data  = await api.getItemsByCategory(category)
                console.log(data)
                return data;
            } 
             catch (error) {
                return  rejectWithValue(error);
            }
        },
    );

    
    export const addItems = createAsyncThunk(
        "items/add",
        async(datas, {rejectWithValue}) => {
            console.log(datas)
            try {
                const result = await api.addItems(datas);
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
    export const itemUpdate = createAsyncThunk(
        'items/itemUpdate',
        async ( datas, { rejectWithValue }) => {
          try {
            // const itemName = datas.map(data => data.itemName)
            const result = await api.itemUpdate(datas._id, datas.itemName);
            // console.log(datas._id)
            console.log(result)
            console.log(datas)
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
