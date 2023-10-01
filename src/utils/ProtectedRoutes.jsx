/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useLocalStorage } from "react-use";

const ProtectedRoutes = ({ redirectPath = "/" }) => {
  const [user] = useLocalStorage("user");

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
