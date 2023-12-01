import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "./Services/api";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "product",
    "profile",
    "user"
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistMiddleware = getDefaultMiddleware({
  serializableCheck: false,
}).concat(api.middleware);

const store = configureStore({
  reducer: persistedReducer,
  middleware: persistMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)
export default store;