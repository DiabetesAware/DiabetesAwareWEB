import { Link } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import image from "@/assets/unauthorized.png";
const Unauthorized = () => {
  return (
    <div className="overflow-hidden h-screen bg-[#e7e7e7] flex flex-col items-center justify-center">
      <Navbar className="lg:relative sm:absolute z-0 top-0 w-full bg-white " />
      <div className="bg-[#E7E7E7] lg:p-10 sm:p-4 lg:mt-0 sm:mt-14 flex lg:h-full justify-center items-center">
        <div className="lg:px-24 sm:px-8 lg:py-32 sm:py-14 bg-white rounded-[40px] flex sm:flex-wrap-reverse justify-center items-center gap-5">
          <div className="wrapper ">
            <div className="wrapper-text">
              <p className="lg:text-6xl sm:text-3xl md:text-left sm:text-center font-bold max-w-2xl my-3 capitalize">
                Oops, Halaman Tidak Diizinkan
              </p>
              <p className="lg:text-xl sm:text-sm font-thin max-w-xl my-10 capitalize">
                Oh tidak! Sepertinya Anda belum mendapatkan izin untuk mengakses
                halaman ini. Kami minta maaf atas ketidaknyamanan ini. Jika Anda
                merasa ini adalah kesalahan, silakan hubungi tim dukungan kami
                untuk bantuan lebih lanjut.
              </p>
            </div>
            <Link
              to="/"
              className="bg-[#073D5B] lg:px-24 sm:px-10 py-5 container mx-auto lg:inline sm:flex sm:justify-center text-center rounded-lg text-white hover:opacity-90"
            >
              Kembali ke Beranda
            </Link>
          </div>
          <img className="mx-auto" src={image} />
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
