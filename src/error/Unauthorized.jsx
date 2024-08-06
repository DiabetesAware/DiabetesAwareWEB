import { Link } from "react-router-dom";
import { Navbar } from "@/components/navigation/Navbar";
import image from "@/assets/unauthorized.png";
const Unauthorized = () => {
  return (
    <>
      <Navbar className="relative w-full bg-white" />
      <div className="bg-[#E7E7E7] h-[800px] flex justify-center items-center">
        <div className="px-24 py-32 bg-white rounded-[40px] flex justify-center items-center gap-5">
          <div className="wrapper ">
            <p className="text-6xl font-bold max-w-2xl my-3 capitalize">
              Oops, Halaman Tidak Diizinkan
            </p>
            <p className="text-xl font-thin max-w-xl my-10 capitalize">
              Oh tidak! Sepertinya Anda belum mendapatkan izin untuk mengakses
              halaman ini. Kami minta maaf atas ketidaknyamanan ini. Jika Anda
              merasa ini adalah kesalahan, silakan hubungi tim dukungan kami
              untuk bantuan lebih lanjut.
            </p>
            <Link to="/" className="bg-[#073D5B] px-24 py-5 container mx-auto rounded-lg text-white hover:opacity-90">
              Kembali ke Beranda
            </Link>
          </div>
          <img className="mx-auto" src={image} alt />
        </div>
      </div>
    </>
  );
};

export default Unauthorized;
