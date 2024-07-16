import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar, NavbarDashboard } from "@/components/dashboard-admin";

const LayoutDashboardRoot = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar collapse={collapse} setCollapse={setCollapse} />
      <div className={`w-full ${collapse ? "ml-[96px]" : "ml-[450px]"}`}>
        <NavbarDashboard collapse={collapse} setCollapse={setCollapse} />
        <div >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboardRoot;
