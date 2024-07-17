const NavbarBack = () => {
  return (
    <>
      <nav className=" w-full flex justify-between items bg-[#073D5B]">
        <button className="flex gap-3 items-center text-white">
          <i></i>
          <p className="text-2xl font-semibold ml-20">Kembali</p>
        </button>
        <div className="wrapper flex items-center gap-2">
          <a href="" className="text-3xl font-bold text-white">
            Si-Dihimen
          </a>
          <div className="nav-brand-logo bg-white pr-14 pl-2 py-4 rounded-l-full">
            <img
              className="border-2 border-white rounded-full bg-[#073D5B]"
              src={"logo"}
              alt=""
              width={75}
              height={75}
            />
          </div>
        </div>{" "}
      </nav>
    </>
  );
};

export default NavbarBack;
