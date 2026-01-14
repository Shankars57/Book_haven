import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuthStore();

  if (!token) return <Navigate to="/auth" />;
  return children;
};

export default ProtectedRoute;
