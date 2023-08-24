import axios from "axios";
import { AppThunk } from "../Store/Store";
import { loginFailure, loginRequest, loginSuccess } from "./authSlice";

// export const login = (email: string, password: string): AppThunk => {
//   return async (dispatch) => {
//     try {
//       dispatch(loginRequest()); // Dispatch login request action

//       const response = await axios.post("http://192.168.2.68:3001/auth/login", {
//         email,
//         password,
//       });

//       console.log("Login success data:", response.data);

//       const token = response.data.data;
//       localStorage.setItem("authToken", token);

//       dispatch(
//         loginSuccess({
//           user: response.data.user,
//           token: response.data.data,
//           role: response.data.role,
//         })
//       );

//       return response.data;
//     } catch (error: any) {
//       console.error("Login error:", error.response?.data);
//       dispatch(loginFailure("Login failed"));
//     }
//   };
// };
