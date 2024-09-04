import React from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"; // Check if authenticated

  return isAuthenticated ? (
    <>
      <Header />
      <Component {...rest} />
    </>
  ) : (
    <Navigate to="/loginadmin" />
  );
};

export default ProtectedRoute;
