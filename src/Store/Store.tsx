import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authSlice from "../login_signup/authSlice";
import HeaderSlice from "../Slices/HeaderSlice";
// import studentslice from "../Slices/Principal/studentslice";
import SlidebarSlices from "../Slices/SlidebarSlices";
import userSlice from "../Slices/Principal/userSlice";

// Create a persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Wrap the reducers with persistReducer
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    sidebar: SlidebarSlices,
    header: HeaderSlice,
    auth: authSlice,
    user:userSlice
  })
);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
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
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
