import { authService } from "@/config";
import { Navigate, Outlet } from "react-router-dom";
function ProtectedRoute() {
  if (authService.isAuthorized()) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
}
export default ProtectedRoute