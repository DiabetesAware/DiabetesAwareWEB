// library
import { Route, Routes } from "react-router-dom";
// layouts
import { LayoutDashboardRoot } from "@/layouts/LayoutDashboardRoot";
// pages
import Login from "@/pages/Login";
import LandingPage from "@/pages/LandingPage";
import Dashboard from "@/pages/Dashboard";
import ManageUser from "@/pages/ManageUser";
import ManageContentArticle from "@/pages/ManageContentArticle";
import ManageDataGulaDarah from "@/pages/ManageDataGulaDarah";
import ManageDataKuesioner from "@/pages/ManageDataKuesioner";
// error
import Unauthorized from "@/error/Unauthorized";
import PageNotFound from "@/error/PageNotFound";
// routes
import PrivateRoute from "@/routes/PrivateRoute";

export default function AppRoutes() {
  return (
    <>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route element={<LayoutDashboardRoot />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-user" element={<ManageUser />} />
            <Route path="/manage-content" element={<ManageContentArticle />} />
            <Route
              path="/manage-data-gula-darah"
              element={<ManageDataGulaDarah />}
            />
            <Route
              path="/manage-data-kuesioner"
              element={<ManageDataKuesioner />}
            />
          </Route>
        </Route>

  `     {/* Routes Error */}
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </>
  );
}
