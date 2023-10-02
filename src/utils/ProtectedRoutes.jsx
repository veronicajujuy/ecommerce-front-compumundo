/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoutes = () => {
  const { user, isAdmin } = useAuth();

  if (!user || !isAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
