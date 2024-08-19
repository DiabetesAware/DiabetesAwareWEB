import { Footer } from "@/components/section/Footer";
import ilustrasi from "@/assets/ilustrasi-pendaftaran.png";
import { Navbar } from '@/components/navigation/Navbar';
const FormKuisoner = () => {
  return (
    <>
      <Navbar />
      <div className="pt-5 xl:px-10 sm:px-4  bg-[#e7e7e7]">
        <p className="xl:text-4xl sm:text-xl md:text-left sm:text-center xl:p-4 sm:p-2 font-bold text-[#073D5B]">Form Kuisioner</p>
        <div className="wrapper xl:p-14 md:w-5/12 mx-auto bg-white grid items-center justify-center lg:grid-cols-1 shadow-xl rounded-t-[1rem]">
          <iframe
            src="https://forms.gle/BVvSRe3fUzRAkU2u6"
            width="100%"
            className="rounded-[1rem]"
            height="800px"
          >
            Loading…
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormKuisoner;
