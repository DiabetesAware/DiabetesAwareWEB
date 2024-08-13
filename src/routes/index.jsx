//  import library
import { Route, Routes } from "react-router-dom";
//  rules routing
import PrivateRoute from "./private-route";
import ProtectedRoute from "./protected-routed";
import RoleBasedRoute from "./role-based-route";
//  import layout
import LayoutDashboardRoot from "@/layouts/LayoutDashboardRoot";
//  import pages
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import ManageContentArticle from "@/pages/ManageContentArticle";
import ManageDataGulaDarah from "@/pages/ManageDataGulaDarah";
import ManageDataAdmin from "@/pages/ManageDataAdmin";
import ManageDataPatient from "@/pages/ManageDataPatient";
import FormPendaftaran from "@/pages/FormPendaftaran";
import FormPemantauanGDS from "@/pages/FormPemantauanGDS";
import FormKuisoner from "@/pages/FormKuisoner";
import AllArticle from '@/pages/AllArticle';
import DetailArticle from '@/pages/DetailArticle';
import {DoneRegistration}  from "@/pages/DoneRegistration";
// error pages
import Unauthorized from "@/error/Unauthorized";
import PageNotFound from "@/error/PageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<ProtectedRoute />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/form-pendaftaran" element={<FormPendaftaran />} />
      <Route path="/form-kuisoner" element={<FormKuisoner />} />
      <Route path="/form-gds" element={<FormPemantauanGDS />} />
      <Route path="/done-gds" element={<DoneRegistration />} />
      <Route path="/articles" element={<AllArticle />} />
      <Route path="/article/:id" element={<DetailArticle />} />

      {/* Private Routes */}
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route element={<LayoutDashboardRoot />}>
          <Route index element={<Dashboard />} />
          <Route
            path="manage-admin"
            element={
              <RoleBasedRoute>
                <ManageDataAdmin />
              </RoleBasedRoute>
            }
          />
          <Route path="manage-user" element={<ManageDataPatient />} />
          <Route path="manage-article" element={<ManageContentArticle />} />
          <Route path="manage-gds" element={<ManageDataGulaDarah />} />
        </Route>
      </Route>

      {/* Routes Error */}
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/unauthorized" element={<Unauthorized/>} />
    </Routes>
  );
};

export default AppRoutes;
