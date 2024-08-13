import { Footer } from "@/components/section/Footer";
import ilustrasi from "@/assets/ilustrasi-pendaftaran.png";
import { Navbar } from '@/components/navigation/Navbar';
const FormKuisoner = () => {
  return (
    <>
      <Navbar />
      <div className="pt-5 px-10 bg-[#e7e7e7]">
        <p className="text-4xl p-4 font-bold text-[#073D5B]">Form Kuisioner</p>
        <div className="wrapper p-32 bg-white grid items-center justify-center lg:grid-cols-2 shadow-xl rounded-t-3xl">
          <iframe
            src="https://forms.gle/BVvSRe3fUzRAkU2u6"
            width="100%"
            height="600"
          >
            Loading…
          </iframe>

          <div className="illustration hidden lg:flex justify-center">
            <img src={ilustrasi} alt="Ilustrasi Pendaftaran" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormKuisoner;
