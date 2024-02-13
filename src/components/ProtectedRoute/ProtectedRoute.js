import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  if (!loggedIn) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};

export default ProtectedRoute;