import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../Store/Store";

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  error: string | null;
  token: string;
  role: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  token: "",
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const login = (email: string, password: string): AppThunk => {
  return async (dispatch: any) => {
    try {
      dispatch(loginRequest()); // Dispatch login request action

      const response = await axios.post("http://192.168.2.68:3001/auth/login", {
        email,
        password,
      });

      console.log("Login success data:", response.data);

      const token = response.data.data;
      localStorage.setItem("authToken", token);

      dispatch(
        loginSuccess({
          user: response.data.user,
          token: response.data.data,
          role: response.data.role,
        })
      );

      return response.data;
    } catch (error: any) {
      console.error("Login error:", error.response?.data);
      dispatch(loginFailure("Login failed"));
    }
  };
};

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
