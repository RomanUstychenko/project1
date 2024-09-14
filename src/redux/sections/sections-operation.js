import * as api from 'API/sections';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSections = createAsyncThunk(
  'sections/fetch',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getSections(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addSection = createAsyncThunk(
  'sections/add',
  async (datas, { rejectWithValue }) => {
    try {
      const result = await api.addSection(datas);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteSection = createAsyncThunk(
  'sections/remove',
  async (_id, { rejectWithValue }) => {
    try {
      await api.deleteSection(_id);
      return _id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateSection = createAsyncThunk(
  'sections/update',
  async (data, { rejectWithValue }) => {
    try {
      const newArr = [data].map(({ _id, ...rest }) => rest);
      const result = await api.updateSection(data._id, newArr);

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
