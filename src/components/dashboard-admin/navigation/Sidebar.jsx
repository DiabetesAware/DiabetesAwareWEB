import { SideBarItem, LogoutItem } from "./SidebarItem";
import { LuScrollText } from "react-icons/lu";
import { FaRegUser, FaStethoscope, FaLaptop } from "react-icons/fa";
import { useState } from "react";
export const SideBar = ({ setCollapse, collapse }) => {
  const [expandedMenu, setExpandedMenu] = useState("");


  const menuItems = [
    { name: "Dashboard", logo: <FaLaptop />, path: "/dashboard" },
    { name: "Manage Admin", logo: <FaRegUser />, path: "manage-admin" },
    { name: "Manage Artikel", logo: <LuScrollText />, path: "manage-article" },

    { name: "Manage Gula Darah", logo: <FaStethoscope />, path: "manage-gds" },
  ];

  return (
    <nav
      className={`fixed h-screen  flex flex-col justify-between items-center py-10 shadow-md transition-all bg-white z-10 ${
        collapse ? "w-[96px]" : "w-[450px]"
      } `}
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
