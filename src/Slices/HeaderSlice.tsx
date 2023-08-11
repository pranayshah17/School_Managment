import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {
  notificationsCount: number;
  searchQuery: string;
  user: string;
}

const initialState: HeaderState = {
  notificationsCount: 0,
  searchQuery: "",
  user: "",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    incrementNotifications: (state) => {
      state.notificationsCount += 1;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { incrementNotifications, setSearchQuery } = headerSlice.actions;

export default headerSlice.reducer;
