import { combineReducers } from "@reduxjs/toolkit";
import productReducer from './Features/productSlice';
import profileReducer from './Features/profileSlice';
import userReducer from './Features/userSlice';
import { api } from './Services/api';

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    product: productReducer,
    profile: profileReducer,
    user: userReducer
});

export default rootReducer;