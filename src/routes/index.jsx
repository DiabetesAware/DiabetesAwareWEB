// library
import { Route, Routes } from "react-router-dom";

// routing rules
// import PrivateRoute from "@/routes/private-route";

// layout setting
import LayoutDashboardRoot from "@/layouts/LayoutDashboardRoot";

// landingpage
import LandingPage from "@/pages/LandingPage";

// pages admin
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import { ManageContentArticle } from "@/pages/ManageContentArticle";
import ManageDataGulaDarah from "@/pages/ManageDataGulaDarah";
import ManageDataAdmin from "@/pages/ManageDataAdmin";
import FormPendaftaran from "@/pages/FormPendaftaran";
import FormPemantauanGDS from "@/pages/FormPemantauanGDS";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-form" element={<FormPendaftaran />} />
      <Route path="/pemantauan-form" element={<FormPemantauanGDS />} />

      {/* Private Routes */}
      {/* <Route path="/dashboard" element={<PrivateRoute />}> */}
      <Route element={<LayoutDashboardRoot />}>
        <Route path="/dashboard-admin" element={<Dashboard />} />
        <Route path="/manage-admin" element={<ManageDataAdmin />} />
        <Route path="/manage-artikel" element={<ManageContentArticle />} />
        <Route path="/manage-gds" element={<ManageDataGulaDarah />} />

        {/* Tambahkan rute lain di dalam dashboard di sini */}
      </Route>
      {/* </Route> */}

      {/* Routes Error */}
      <Route path="/unauthorized" element={<div>Unauthorized</div>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
