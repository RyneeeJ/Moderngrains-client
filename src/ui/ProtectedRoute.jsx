import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();

  if (!isLoading && !isAuthenticated) {
    toast.error("Please login first");
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
