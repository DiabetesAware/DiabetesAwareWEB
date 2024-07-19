//  import library
import { Route, Routes } from "react-router-dom";
//  rules routing
import PrivateRoute from "@/routes/private-route";
import ProtectedRoute from "./protected-routed";
//  import layout
import LayoutDashboardRoot from "@/layouts/LayoutDashboardRoot";
//  import pages
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import ManageContentArticle from "@/pages/ManageContentArticle";
import ManageDataGulaDarah from "@/pages/ManageDataGulaDarah";
import ManageDataAdmin from "@/pages/ManageDataAdmin";
import FormPendaftaran from "@/pages/FormPendaftaran";
import FormPemantauanGDS from "@/pages/FormPemantauanGDS";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<ProtectedRoute />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/register-form" element={<FormPendaftaran />} />
      <Route path="/pemantauan-form" element={<FormPemantauanGDS />} />

      {/* Private Routes */}
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route element={<LayoutDashboardRoot />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-admin" element={<ManageDataAdmin />} />
          <Route path="manage-article" element={<ManageContentArticle />} />
          <Route path="manage-gds" element={<ManageDataGulaDarah />} />
        </Route>
      </Route>

      {/* Routes Error */}
      <Route path="/unauthorized" element={<div>Unauthorized</div>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
