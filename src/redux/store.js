import { configureStore } from "@reduxjs/toolkit";
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";


// import {
//     getFirebase,
//     actionTypes as rrfActionTypes,
//   } from 'react-redux-firebase'
//   import { constants as rfConstants } from 'redux-firestore'

import { itemsReducer } from "./items/items-slice";
import { filterReducer } from "./filter/filter-slice";
import { authReducer } from "./auth/auth-slice";

const persistConfig = {
    key: 'auth',
    version: 1,
    storage,
    whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        items: itemsReducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializebleCheck: {
            ignoredActions: 
            [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, ],
            
        },
        // serializableCheck: {
        //     ignoredActions: [
        //       // just ignore every redux-firebase and react-redux-firebase action type
        //       ...Object.keys(rfConstants.actionTypes).map(
        //         (type) => `${rfConstants.actionsPrefix}/${type}`
        //       ),
        //       ...Object.keys(rrfActionTypes).map(
        //         (type) => `@@reactReduxFirebase/${type}`
        //       ),
        //     ],
        //     ignoredPaths: ['firebase', 'firestore'],
        //   },
        //   thunk: {
        //     extraArgument: {
        //       getFirebase,
        //     },
        //   },
    }),
});

export const persistor = persistStore(store)