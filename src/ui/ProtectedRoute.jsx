import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();
  if (isLoading) return <div>Loading.........</div>;
  if (!isLoading && !isAuthenticated) return <Navigate to="/" replace />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
