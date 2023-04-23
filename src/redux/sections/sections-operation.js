import * as api from "API/sections";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSections = createAsyncThunk(
    "sections/fetch",
    async( category, thunkApi) => {
        try {
            const data = await api.getSections(                {
                    category,
                  }
                  );
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }}
    );

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