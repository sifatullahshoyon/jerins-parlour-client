import React, { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Shared/Loader/Loader";
import { AuthContext } from "../../providers/AuthProviders";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader />;
  }

  if (user && isAdmin) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
