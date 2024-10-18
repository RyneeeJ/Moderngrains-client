import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function PublicRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();

  if (!isLoading && isAuthenticated)
    return <Navigate to="/account/profile" replace />;

  if (!isAuthenticated) return children;
}

export default PublicRoute;
