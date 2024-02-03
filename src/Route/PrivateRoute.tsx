import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-infinity loading-lg">Loading...</span>
    );
  }

  if (user) {
    return <>{children}</>;
  }

  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
