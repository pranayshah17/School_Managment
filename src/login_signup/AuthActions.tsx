import axios from "axios";
import { AppThunk } from "../Store/Store";
import { loginFailure, loginRequest, loginSuccess } from "./authSlice";

export const login = (email: string, password: string): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest()); // Dispatch login request action

      setTimeout(async () => {
        const response = await axios.post(
          "http://192.168.2.68:3001/auth/login",
          { email, password }
        );

        console.log("Login success data:", response.data);

        dispatch(loginSuccess);
      }, 1000);
    } catch (error: any) {
      console.error("Login error:", error.response?.data);
      dispatch(loginFailure("Login failed"));
    }
  };
};
