import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router";
import UseAuth from "../../Hooks/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = UseAuth();
  let location = useLocation();

  if (isLoading) {
    return <Spinner animation="grow" variant="danger" />;
  }
  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
