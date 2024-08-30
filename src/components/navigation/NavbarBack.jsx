import { CiCircleChevLeft } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from '@/assets/logo.png'

const NavbarBack = () => {
  return (
    <>
      <nav className=" w-full flex justify-between items bg-[#073D5B]">
        <Link to={"/"} className="md:ml-20 sm:ml-5 gap-3 flex justify-center items-center text-white">
          <i className="text-4xl">
            <CiCircleChevLeft />
          </i>
          <p className="md:text-2xl sm:text-sm font-semibold">Kembali</p>
        </Link>
        <div className="wrapper flex items-center gap-2">
          <a href="" className="md:text-3xl sm:text-sm font-bold text-white">
            Si-Dihimen
          </a>
          <div className="nav-brand-logo bg-white md:pr-14 sm:pr-2 md:pl-5 sm:pl-2 md:py-4 sm:py-1 rounded-l-full">
            <img
              className="border-2 rounded-full md:w-[100px] md:h-[100px] sm:w-[75px] sm:h-[75px]"
              src={logo}
              alt=""
            />
          </div>
        </div>{" "}
      </nav>
    </>
  );
};

export default NavbarBack;
