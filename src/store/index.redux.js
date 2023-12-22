import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from './slices/modalSlice'
import themeReducer from './slices/themeSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  modal: modalReducer,
  theme: themeReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["theme"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)