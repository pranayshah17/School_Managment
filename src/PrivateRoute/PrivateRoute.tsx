import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../Store/Store";



const isAuthenticated = () => {
  const token = localStorage.getItem("authToken");
  return typeof token === "string" && token.trim() !== "";
};

const PrivateRoute: React.FC<any> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/loginpage" />;
  }
};

export default PrivateRoute;

