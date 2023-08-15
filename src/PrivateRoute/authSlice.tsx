// src/redux/auth/authSlice.ts

import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  // Add other authentication-related properties here
}

const initialState: AuthState = {
  isAuthenticated: false,
  // Set initial values for other properties
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    // Add other authentication-related reducers here
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
