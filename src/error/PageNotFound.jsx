import { Link } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import image from "@/assets/not-found.png";
const ErrorNotFound = () => {
  return (
    <>
      <Navbar className="relative w-full bg-white"/>
      <div className="bg-[#E7E7E7] h-[800px] flex justify-center items-center">
        <div className="px-24 py-32 bg-white rounded-[40px] flex justify-center items-center gap-5">
          <div className="wrapper">
            <p className="text-6xl font-bold max-w-2xl my-3 capitalize">
              oops, halaman tidak ditemukan
            </p>
            <p className="text-xl font-thin max-w-md my-8 capitalize">
              jangan khawatir, kamu dapat kembali mengakses halaman lainnya
              melalui halaman beranda
            </p>
            <Link to="/" className="bg-[#073D5B] px-24 py-5 container mx-auto rounded-lg text-white hover:opacity-90">
              Kembali ke Beranda
            </Link>
          </div>
          <img className="mx-auto" src={image} alt />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default ErrorNotFound;
