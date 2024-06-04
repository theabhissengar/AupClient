import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./firebase/firebase";
const PrivateComponent = () => {
  const auth1 = localStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateComponent;
