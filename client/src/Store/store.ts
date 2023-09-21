import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Features/productSlice';
import userReducer from './Features/userSlice';
import { api } from "./Services/api";

const persistedState = typeof localStorage !== 'undefined'
  ? (localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')!) : {})
  : {};

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        //acá van los reducers que exportemos...
        //los reducer podemos ponerles el nombre que queramos o el nombre con el cual lo importamos;
        product: productReducer,
        user: userReducer,
    },
    preloadedState: persistedState,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(api.middleware)
    )
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state));
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;