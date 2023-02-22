import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import myInfoReducer from "../reducers/myInfoReducer";
import searchReducer from "../reducers/searchReducer";
import userListReducer from "../reducers/userListReducer";
import specificUserReducer from "../reducers/specificUserReducer";

import userExperienceReducer from "../reducers/experiencesReducer";

import setNetworkReducer from "../reducers/setNetworkReducer";
import addExperience from "../reducers/addExperience";
import { editExperience } from "../actions";

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
  search: searchReducer,
  users: userListReducer,
  specificUserId: specificUserReducer,

  experienceData: userExperienceReducer,

  network: setNetworkReducer,
  newExperience: addExperience,
  editExperience: editExperience,
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
