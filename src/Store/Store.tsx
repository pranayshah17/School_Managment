import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Choose your storage method
import authSlice from "../login_signup/authSlice";
import HeaderSlice from "../Slices/HeaderSlice";
import SlidebarSlices from "../Slices/SlidebarSlices";

// Create a persist configuration
const persistConfig = {
  key: "root", // The key for the stored data
  storage, // Choose the storage method (local storage, session storage, etc.)
};

// Wrap the reducers with persistReducer
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    sidebar: SlidebarSlices,
    header: HeaderSlice,
    auth: authSlice,
  })
);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create the Redux store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Create the persistor for persisting the store
export const persistor = persistStore(store);

export default store;
