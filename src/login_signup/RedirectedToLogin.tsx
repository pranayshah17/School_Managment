import { Navigate } from "react-router-dom";

export const RedirectedToLogin = () => {
  return <Navigate to="loginpage" />;
};
