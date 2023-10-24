import sessionStorage from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";

const authPersistConfig = {
  key: "auth",
  storage: sessionStorage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

const rootReducer = {
  auth: persistedAuthReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
