import { useState, useEffect } from "react";
import { SideBarItem, LogoutItem } from "./SidebarItem";
import { LuScrollText } from "react-icons/lu";
import { FaRegUser, FaStethoscope, FaLaptop } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { authService } from "@/config";

export const SideBar = ({ setCollapse, collapse }) => {
  const [expandedMenu, setExpandedMenu] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = authService.getAdminRole();
    setUserRole(role);
  }, []);

  const menuItems = [
    { name: "Dashboard", logo: <FaLaptop />, path: "/dashboard" },
    ...(userRole === "SUPER_ADMIN" ? [{ name: "Manage Admin", logo: <MdOutlineAdminPanelSettings />, path: "/dashboard/manage-admin" }] : []),
    { name: "Manage User", logo: <FaRegUser />, path: "/dashboard/manage-user" },
    { name: "Manage Artikel", logo: <LuScrollText />, path: "/dashboard/manage-article" },
    { name: "Manage Gula Darah", logo: <FaStethoscope />, path: "/dashboard/manage-gds" },
  ];


  return (
    <nav
      className={`fixed h-screen flex flex-col justify-between items-center py-10 shadow-md transition-all bg-white z-10 ${
        collapse ? "w-[96px]" : "w-[450px]"
      }`}
    >
      <div
        className={`nav-brand p-5 text-4xl font-bold hide-scrollbar ${
          collapse
            ? "opacity-0 h-0 overflow-hidden"
            : "opacity-100 h-auto overflow-auto"
        }`}
      >
        Si-Dihimen
      </div>
      <ul className="flex flex-col gap-5">
        {menuItems.map((item, i) => (
          <SideBarItem
            expandedMenu={expandedMenu}
            setExpandedMenu={setExpandedMenu}
            sideBarCollapse={collapse}
            setCollapse={setCollapse}
            logo={item.logo}
            key={i}
            name={item.name}
            path={item.path}
          />
        ))}
      </ul>

      <LogoutItem
        expandedMenu={expandedMenu}
        setExpandedMenu={setExpandedMenu}
        sideBarCollapse={collapse}
        setCollapse={setCollapse}
      />
    </nav>
  );
};
