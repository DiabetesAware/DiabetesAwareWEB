import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { authService } from "@/config";
import { clearAuthState } from "@/store/auth";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function SideBarItem({
  name,
  logo,
  path,
  sideBarCollapse,
  setCollapse,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === path);
  }, [pathname, path]);

  function handleClickMenu() {
    if (path) {
      navigate(path);
    }
    setCollapse(false);
  }

  return (
    <div
      onClick={handleClickMenu}
      className={`cursor-pointer ${
        sideBarCollapse ? "text-xl p-3 rounded-lg" : "min-w-[350px] pl-4 pr-3 py-5 flex justify-between rounded-xl shadow-lg border"
      } ${
        isActive ? "bg-[#073D5B] text-white" : "hover:bg-slate-100"
      }`}
    >
      <div className={`flex ${sideBarCollapse ? "" : "gap-4 items-center text-xl"}`}>
        {logo}
        {!sideBarCollapse && <p className="font-medium">{name}</p>}
      </div>
    </div>
  );
}

SideBarItem.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  sideBarCollapse: PropTypes.bool.isRequired,
  setCollapse: PropTypes.func.isRequired,
};

export function LogoutItem({ setCollapse, sideBarCollapse }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    authService.logout();
    dispatch(clearAuthState());
    setCollapse(false);
    navigate("/login");
  };

  if (sideBarCollapse)
    return (
      <button
        onClick={handleLogout}
        className={`cursor-pointer border border-slate-100 text-xl p-3 rounded-lg transition-all duration-150 hover:bg-slate-100 text-white bg-red-600 hover:text-red-600 hover:border-red-600
          `}
      >
        <FiLogOut />
      </button>
    );

  return (
    <div
      onClick={handleLogout}
      className={`cursor-pointer min-w-[350px] pl-4 pr-3 py-5 flex justify-between rounded-xl shadow-lg border bg-red-600 text-white hover:text-red-600 hover:bg-white hover:border-red-600 ${
        pathname === "/logout"
          ? " bg-red-600 text-white"
          : "hover:bg-slate-100 text-red-600"
      }`}
    >
      <button className="flex gap-4 text-xl text-center items-center">
        <FiLogOut />
        <p className="font-medium">Logout</p>
      </button>
    </div>
  );
}

LogoutItem.propTypes = {
  setCollapse: PropTypes.func.isRequired,
  sideBarCollapse: PropTypes.bool,
};
