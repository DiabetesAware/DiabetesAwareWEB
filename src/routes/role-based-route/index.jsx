import { authService } from "@/config";
import { Navigate } from "react-router-dom";

function RoleBasedRoute({ children }) {
  const { role } = authService.getAdminRole();
  if (role !== "SUPER_ADMIN") {
    return <Navigate to={"/unauthorized"} replace />;
  }

  return children;
}

export default RoleBasedRoute;
