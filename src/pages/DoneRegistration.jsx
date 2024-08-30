import React from "react";
import medical from "@/assets/medical.png";
import { Link } from "react-router-dom";
import NavbarBack from "@/components/navigation/NavbarBack";


export const DoneRegistration = () => {
  return (
    <div className="overflow-hidden  h-screen">
      <NavbarBack />
      <div className="pt-5 flex items-center lg:px-10 sm:p-5 bg-[#e7e7e7]">
        <div className="wrapper w-screen h-full p-10 bg-white shadow-xl rounded-t-3xl sm:rounded-3xl">
          <img className="mx-auto lg:w-3/12 " src={medical} />
          <div className="wrapper text-center">
            <p className="lg:text-5xl sm:text-3xl capitalize text-[#073D5B] font-bold">
              terimakasih sudah mendaftar
            </p>
            <p className="lg:text-xl sm:text-md sm:mt-5 max-w-sm mx-auto text-[#073D5B] font-thin tracking-wider">
              pendaftaran sudah berhasil , silahkan kembali kehalaman utama
            </p>
          </div>
          <Link
            to={"/"}
            className="max-w-[250px] mt-10 bg-[#073D5B] px-8 py-4 text-white mb-24 flex justify-center items-center gap-4 rounded-md mx-auto cursor-pointer"
          >
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};
