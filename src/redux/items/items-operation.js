import * as api from 'API/items';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk(
  'items/fetch',
  async (itemName, description, price, itemImg, section, thunkApi) => {
    try {
      const data = await api.getItems({
        itemName,
        description,
        price,
        itemImg,
        section,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const fetchItemsLive = createAsyncThunk(
  'items/live/fetch',
  async (items, thunkApi) => {
    try {
      const data = await api.getItemsLive(items);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const geItemsByCategory = createAsyncThunk(
  'items/getByCategory',
  async (category, { rejectWithValue }) => {
    try {
      const data = await api.getItemsByCategory(category);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addItems = createAsyncThunk(
  'items/add',
  async (data, { rejectWithValue }) => {
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
    try {
      const result = await api.addItems(filteredData);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'items/remove',
  async (_id, { rejectWithValue }) => {
    try {
      await api.deleteItem(_id);
      return _id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const delItemsByCategory = createAsyncThunk(
  'items/delByCategory',
  async (_id, { rejectWithValue }) => {
    try {
      const data = await api.delItemsByCategory(_id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const itemUpdate = createAsyncThunk(
  'items/itemUpdate',
  async (datas, { rejectWithValue }) => {
    try {
      const newArr = [datas].map(({ _id, ...rest }) => rest);
      const result = await api.itemUpdate(datas._id, newArr);

      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
export const imgUpdate = createAsyncThunk(
  'items/imgUpdate',
  async (data, { rejectWithValue }) => {
    const { _id, imageURL } = data;

    try {
      const result = await api.imgUpdate(_id, imageURL);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const imgDelete = createAsyncThunk(
  'items/imgDelete',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.deleteImage(data);

      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const imgSectionDelete = createAsyncThunk(
  'items/imgSectionDelete',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.deleteImages(data);

      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
