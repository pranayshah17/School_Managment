// src/store.ts
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "../Slices/HeaderSlice";
import SlidebarSlices from "../Slices/SlidebarSlices";

const store = configureStore({
  reducer: {
    sidebar: SlidebarSlices,
    header: HeaderSlice,
  },
});
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
