import React from "react";
import medical from "@/assets/medical.png";
import { Link } from "react-router-dom";
import NavbarBack from "@/components/navigation/NavbarBack";


export const DoneRegistration = () => {
  return (
    <div className="overflow-hidden h-screen">
      <NavbarBack />
      <div className="pt-5 px-10 bg-[#e7e7e7]">
        <div className="wrapper p-10 bg-white shadow-xl rounded-t-3xl">
          <img className="mx-auto w-3/12" src={medical} />
          <div className="wrapper text-center">
            <p className="text-5xl capitalize text-[#073D5B] font-bold">
              terimakasih sudah mendaftar
            </p>
            <p className="text-xl max-w-sm mx-auto text-[#073D5B] font-thin tracking-wider">
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
