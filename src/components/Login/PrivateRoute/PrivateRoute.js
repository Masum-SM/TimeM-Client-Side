import React from "react";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useFirebase();
  const location = useLocation();
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
