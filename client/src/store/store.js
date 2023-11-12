import sessionStorage from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import { apiService } from "./api-service";

const authPersistConfig = {
  key: "auth",
  storage: sessionStorage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

const rootReducer = {
  auth: persistedAuthReducer,
  [apiService.reducerPath]: apiService.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredPaths: ["apiService"],
    }).concat(apiService.middleware),
});

export const persistor = persistStore(store);
