import React from "react";
import { Navigate } from "react-router-dom";

// interface PrivateRouteProps {
//   isAuthenticated: boolean;
//   redirectTo: string;
// }

const isAuthenticated = () => {
  const token = localStorage.getItem("authToken");
  return typeof token === "string" && token.trim() !== "";
};

const PrivateRoute: React.FC<any> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/loginpage" />;
  } else {
    return children;
  }
};

export default PrivateRoute;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { BrowserRouter as Router, Route, useNavigate, Navigate } from 'react-router-dom';
// import { RootState } from '../store';
// import Login from '../pages/Login';

// // Mock authentication function, replace this with actual authentication logic
// const isAuthenticated = () => {
//   const token = localStorage.getItem('authToken');
//   return typeof token === 'string' && token.trim() !== '';
// };

// const PrivateRoute: React.FC<any> = ({ children }) => {

//   if (!isAuthenticated()) {
//     return <Navigate to="/login"/>
//   } else {
//     return children;
//   }
// };

// export default PrivateRoute;
