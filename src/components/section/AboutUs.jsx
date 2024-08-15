import about from "@/assets/landing-page/about-us-asset.png";
import banner from "@/assets/landing-page/banner 1.png";
import { FaStethoscope } from "react-icons/fa";
import { Link } from "react-router-dom";
export const AboutUs = () => {
  return (
    <>
      <div className="lg:py-5 md:py-3 sm:py-1 lg:mt-14 md:mt-8 sm:mt-4 mx-auto">
        <div className="flex sm:flex-wrap sm:justify-end items-center">
          <div className="wrapper-text mx-auto sm:my-5 xl:w-7/12 sm:w-full xl:pl-32 sm:pl-14 sm:pr-5">
            <p className="title-text xl:text-7xl lg:text-5xl sm:text-xl  font-bold capitalize text-[#073D5B] max-w-5xl">
              Perhatikan Pola Hidup Sehat Demi Masa Tua Kita
            </p>
            <p className="desc text-justify xl:text-xl xl:my-10 sm:text-sm  sm:my-5 max-w-xl">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur
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
          <Link to={"/form-pendaftaran"} className="xl:max-w-[250px] sm:max-w-[175px] bg-[#073D5B] xl:px-8 sm:px-4 xl:py-4 sm:py-2 text-white xl:mb-24 sm:mb-8 flex justify-center items-center xl:gap-4 sm:gap-2 rounded-md mx-auto cursor-pointer">
            <i className="xl:text-xl sm:text-md" >
              <FaStethoscope />
            </i>
            <p>Daftar Sekarang</p>
          </Link>
        </div>
      </div>
    </>
  );
};
