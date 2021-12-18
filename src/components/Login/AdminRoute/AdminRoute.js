import React from "react";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, admin, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  if (!admin) {
    return <Link to="/"> Who The Hell Are You? Go to Home Page.</Link>;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
