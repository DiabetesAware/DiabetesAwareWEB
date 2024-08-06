import { useState } from "react";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
} from "react-icons/md";
import pp from "@/assets/PP.jpg";
export const NavbarDashboard = ({ setCollapse, collapse }) => {
  const [toast, setToast] = useState(false);

  const handleClick = () => {
    setToast(!toast);
  };

  return (
    <div className="flex bg-[#073D5B] justify-between p-3 items-center relative w-full z-50 ">
      <a
        href="#"
        onClick={handleClick}
        className="cursor-pointer text-white text-5xl p-3 duration-150 ease-in-out"
      >
        {collapse ? (
          <MdKeyboardArrowRight onClick={() => setCollapse(false)} />
        ) : (
          <MdKeyboardArrowLeft onClick={() => setCollapse(true)} />
        )}
      </a>
      <div
        href="#"
        className="w-[325px] flex gap-5 justify-end items-center text-right cursor-pointer px-2 py-3 mx-5 duration-150 ease-in-out"
      >
        <div className="flex items-center gap-5">
          <div className="wrapper">
            <p className="text-white text-xl font-semibold">Admin</p>
            <p className="text-white text-sm">admin@gmail.com</p>
          </div>
          <img
            className="w-[50px] h-[50px] rounded-full border"
            src={pp}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

