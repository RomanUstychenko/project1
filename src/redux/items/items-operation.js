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
    export const fetchItemsLive = createAsyncThunk(
        "items/live/fetch",
        async(datas, thunkApi) => {
            // console.log(datas)
            try {
                const data = await api.getItemsLive(               
                    datas,
                    {
                        // itemName,
                        // description,
                        // price,
                        // itemImg,
                        // section,
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
                // console.log(data)
                // console.log(category)
                return data;
            } 
             catch (error) {
                return  rejectWithValue(error);
            }
        },
    );

    
    export const addItems = createAsyncThunk(
        "items/add",
        async(data, {rejectWithValue}) => {
            // console.log(data)
            function removeEmptyValues(obj) {
                const newObj = {};
                for (const key in obj) {
                    if (obj[key] !== '') {
                        newObj[key] = obj[key];
                    }
                }
                return newObj;
            }
            
            const filteredData = removeEmptyValues(data);
            // console.log(filteredData)
            try {
                const result = await api.addItems(filteredData);
                // console.log(result)
                return result;
                
            } catch (error) {
                // console.log("error", error)
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
    export const delItemsByCategory = createAsyncThunk(
        'items/delByCategory',
        async ( _id, {rejectWithValue}) => {
            // console.log(_id)
            try {
                
                const  data  = await api.delItemsByCategory(_id)
                // console.log(data)
                // console.log(_id)
                return data;
            } 
             catch (error) {
                return  rejectWithValue(error);
            }
        },
    );
    export const itemUpdate = createAsyncThunk(
        'items/itemUpdate',
        async ( datas, { rejectWithValue }) => {
            // console.log(datas)
          try {
            
            const newArr = [datas].map(({_id, ...rest}) => (rest))
            // console.log(newArr)
            const result = await api.itemUpdate(datas._id, newArr);
            
            // console.log(result)
            
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
      export const imgUpdate = createAsyncThunk(
        'items/imgUpdate',
        async ( datas, { rejectWithValue }) => {
            console.log(datas)
          try {
            
            // const newArr = [datas].map(({_id, ...rest}) => (rest))
            // console.log(newArr)
            // const result = await api.imgUpdate(datas._id, newArr);
            const result = await api.imgUpdate(datas._id, datas.imageURL);
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
      
