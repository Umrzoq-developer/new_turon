import {combineReducers} from "redux";

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

//reducers
import authReducer from "./auth/authReducer";
import NavbarReducer from "./Navbar/NavbarReducer";
import TableReducer from "./Table/TableReducer";
import actionBarReducer from "./actionBar/actionBarReducer";


const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    navBar: NavbarReducer,
    table: TableReducer,
    action: actionBarReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer)