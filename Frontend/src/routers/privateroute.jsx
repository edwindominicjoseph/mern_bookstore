import React from "react";
import useAuth from "../context/useAuth";
import { Navigate } from "react-router-dom";

const Privateroute = ({ children }) => {
  const { currentUser } = useAuth();
  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default Privateroute;
