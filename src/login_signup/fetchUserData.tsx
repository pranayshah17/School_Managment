import axios from "axios";
import { AppThunk } from "../Store/Store";

// Create a function to get the stored token from local storage
const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const fetchUserData = (): AppThunk => {
  return async (dispatch) => {
    try {
      // Get the authentication token from local storage
      const authToken = getAuthToken();

      // Include the token in the headers for an authenticated request
      const response = await axios.get(
        "http://192.168.2.68:3001/api/auth/login",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // Handle the response as needed
      console.log("User data:", response.data);
    } catch (error: any) {
      console.error("Fetch user data error:", error.response?.data);
      // Dispatch appropriate failure action if needed
    }
  };
};
