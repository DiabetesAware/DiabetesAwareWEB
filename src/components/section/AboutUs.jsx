import about from "@/assets/landing-page/about-us-asset.png";
import banner from "@/assets/landing-page/banner 1.png";
import { FaStethoscope } from "react-icons/fa";

export const AboutUs = () => {
  return (
    <>
      <div className="py-5 mt-14 mx-auto">
        <div className="grid lg:flex items-center">
          <div className="wrapper-text mx-auto w-7/12 pl-32">
            <p className="title-text text-7xl font-bold capitalize text-[#073D5B] max-w-5xl">
              Perhatikan Pola Hidup Sehat Demi Masa Tua Kita
            </p>
            <p className="desc text-xl my-10 max-w-xl">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur
            </p>
          </div>
          <div className="w-5/12 wrapper bg-[#073D5B] rounded-l-full py-16 rounded-lg">
            <img
              className="border-[#333] shadow mx-16 w-5/12"
              src={about}
              alt=""
            />
          </div>
        </div>

        <div className="wrapper relative mt-24">
          <div className="relative container mx-auto mb-8">
            <img
              className="w-full rounded-xl"
              src={banner}
              alt="Banner"
              style={{ height: "300px" }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000] to-transparent rounded-xl"></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center pl-44 text-white">
              <h2 className="text-2xl  mb-4 font-thin capitalize">
                Sering lupa hasil tes anda?
              </h2>
              <p className="text-5xl font-bold tracking-wide max-w-sm">
                Daftarkan Hasil Tes Anda Sekarang !
              </p>
            </div>
          </div>
          <button className="bg-[#073D5B] px-8 py-4 text-white mb-24 flex items-center gap-4 rounded-md mx-auto">
            <i className="text-xl">
              <FaStethoscope />
            </i>
            <p>Daftar Sekarang</p>
          </button>
        </div>
      </div>
    </>
  );
};
