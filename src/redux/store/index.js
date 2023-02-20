import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import myInfoReducer from "../reducers/myInfoReducer";

const persistConfig = {
  storage: localStorage,
  key: "root",
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPTION_KEY,
    }),
  ],
};

const combinedReducers = combineReducers({
  me: myInfoReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
