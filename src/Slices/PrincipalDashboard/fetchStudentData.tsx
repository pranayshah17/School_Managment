const studentListToken = "your-auth-token"; // Replace with the actual token

// Save the token in local storage
localStorage.setItem("authToken", studentListToken);

export const fetchStudentData = () => {
  return async (dispatch: any) => {
    try {
      const studentListToken = localStorage.getItem("studentListToken");

      if (!studentListToken) {
        throw new Error("Authentication token not found");
      }

      const response = await fetch(
        "http://192.168.2.68:3001/dashboard/principal",
        {
          headers: {
            Authorization: `Bearer ${studentListToken}`,
            // Add other headers if needed
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      throw error;
    }
  };
};
