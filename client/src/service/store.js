import sessionStorage from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import { userApi } from "./user-api";
import { driverApi } from "./driver-api";
import { shiftApi } from "./shift-api";
import uiSlice from "./ui-slice";

const authPersistConfig = {
  key: "auth",
  storage: sessionStorage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

const rootReducer = {
  auth: persistedAuthReducer,
  ui: uiSlice,
  [userApi.reducerPath]: userApi.reducer,
  [driverApi.reducerPath]: driverApi.reducer,
  [shiftApi.reducerPath]: shiftApi.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredPaths: ["userApi"],
    }).concat(userApi.middleware, driverApi.middleware, shiftApi.middleware),
});

export const persistor = persistStore(store);
