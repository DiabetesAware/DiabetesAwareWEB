import about from "@/assets/landing-page/about-us-asset.png";
import banner from "@/assets/landing-page/banner 1.png";
import { Button } from "@chakra-ui/react";
import { FaStethoscope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const AboutUs = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    window.location.href = "/form-pendaftaran";
  };
  return (
    <>
      <div
        id="tentang"
        className="lg:py-5 md:py-3 sm:py-1 lg:mt-14 md:mt-8 sm:mt-4 mx-auto"
      >
        <div className="flex sm:flex-wrap sm:justify-end items-center">
          <div className="wrapper-text mx-auto sm:my-5 xl:w-7/12 sm:w-full xl:pl-32 sm:pl-14 sm:pr-5">
            <p className="title-text xl:text-7xl lg:text-5xl sm:text-xl  font-bold capitalize text-[#073D5B] max-w-5xl">

              peduli bahaya diabetes dan hipertensi demi masyarakat indonesia sehat 2045
            </p>
            <p className="desc text-justify xl:text-xl xl:my-10 sm:text-sm  sm:my-5 max-w-xl">
              Pionir dalam menanggulangi masalah diabetes dan hipertensi bukan
              hanya menjadi tanggung jawab tenaga kesehatan tetapi juga dimulai
              dari kepedulian disekitar kita
            </p>
          </div>
          <div className="xl:w-5/12 sm:w-10/12 wrapper bg-[#073D5B] rounded-l-full py-16 rounded-lg">
            <img
              className="border-[#333]  mx-16 xl:w-5/12 sm:w-7/12"
              src={about}
              alt=""
            />
          </div>
        </div>

        <div className="wrapper relative xl:mt-24 sm:mt-14 mx-3">
          <div className="relative container mx-auto xl:mb-8 sm:mb-4">
            <img
              className="w-full rounded-xl xl:h-[300px] sm:h-[150px]"
              src={banner}
              alt="Banner"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000] to-transparent rounded-xl"></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center xl:pl-44 sm:pl-10 text-white">
              <h2 className="xl:text-2xl sm:text-sm xl:mb-4 sm:mb-1 font-thin capitalize">
                Sering lupa hasil tes anda?
              </h2>
              <p className="xl:text-5xl sm:text-xl font-bold tracking-wide max-w-sm">
                Daftarkan Hasil Tes Anda Sekarang !
              </p>
            </div>
          </div>
          <Button
            onClick={handleOnClick}
            display={"flex"}
            justifyItems={"center"}
            color={"white"}
            _hover={{ opacity: "90%" }}
            bg={"#073D5B"}
            className="xl:max-w-[250px] sm:max-w-[175px] bg-[#073D5B] xl:px-8 sm:px-4 xl:py-4 sm:py-2 text-white xl:mb-24 sm:mb-8 flex justify-center items-center xl:gap-4 sm:gap-2 rounded-md mx-auto cursor-pointer"
          >
            <i className="xl:text-xl sm:text-md">
              <FaStethoscope />
            </i>
            <p>Daftar Sekarang</p>
          </Button>
        </div>
      </div>
    </>
  );
};
