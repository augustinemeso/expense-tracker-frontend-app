import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoute = () => {
  const token = localStorage.getItem("jwt_token");
  
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;