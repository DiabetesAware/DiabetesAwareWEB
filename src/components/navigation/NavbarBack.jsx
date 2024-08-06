import { CiCircleChevLeft } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from '@/assets/logo.png'

const NavbarBack = () => {
  return (
    <>
      <nav className=" w-full flex justify-between items bg-[#073D5B]">
        <Link to={"/"} className="ml-20 gap-3 flex justify-center items-center text-white">
          <i className="text-4xl">
            <CiCircleChevLeft />
          </i>
          <p className="text-2xl font-semibold">Kembali</p>
        </Link>
        <div className="wrapper flex items-center gap-2">
          <a href="" className="text-3xl font-bold text-white">
            Si-Dihimen
          </a>
          <div className="nav-brand-logo bg-white pr-14 pl-5 py-4 rounded-l-full">
            <img
              className="border-2   rounded-full "
              src={logo}
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>{" "}
      </nav>
    </>
  );
};

export default NavbarBack;
