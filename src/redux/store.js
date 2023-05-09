import { configureStore } from "@reduxjs/toolkit";
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";


import { usersReducer } from "./user/user-slice";
import { itemsReducer } from "./items/items-slice";
import { filterReducer } from "./filter/filter-slice";
import { authReducer } from "./auth/auth-slice";
import { sectionsReducer } from "./sections/sections-slice";


const persistConfig = {
    key: 'auth',
    version: 1,
    storage,
    whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: persistedReducer,
        items: itemsReducer,
        filter: filterReducer,
        sections: sectionsReducer,
        
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializebleCheck: {
            ignoredActions: 
            [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, ],
            
        },
    
    }),
});

export const persistor = persistStore(store)