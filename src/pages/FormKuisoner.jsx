import { useState } from "react";
import { Footer } from "@/components/section/Footer";
import { Navbar } from "@/components/navigation/Navbar";

const FormKuisoner = () => {
  const [formLink, setFormLink] = useState(
    "https://forms.gle/YMQCg3KkQDRcAN3v6"
  );

  const handlePreTest = () => {
    setFormLink("https://forms.gle/YMQCg3KkQDRcAN3v6");
  };

  const handlePostTest = () => {
    setFormLink("https://forms.gle/X8tyoPV17AXmkvDN8");
  };

  return (
    <>
      <Navbar />
      <div className="pt-5 xl:px-10 sm:px-4 bg-[#e7e7e7]">
        <p className="xl:text-4xl sm:text-xl md:text-left sm:text-center xl:p-4 sm:p-2 font-bold text-[#073D5B]">
          Form Kuisoner
        </p>
        <div className="wrapper md:w-5/12 mx-auto">
          <div className="flex rounded-t-xl">
            <button
              onClick={handlePreTest}
              className={`px-4 py-2 rounded-tl-lg hover:bg-blue-600 ${
                formLink === "https://forms.gle/YMQCg3KkQDRcAN3v6"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-[#333]"
              }`}
            >
              Pre-Test
            </button>
            <button
              onClick={handlePostTest}
              className={`px-4 py-2 rounded-tr-lg hover:bg-blue-600 ${
                formLink === "https://forms.gle/X8tyoPV17AXmkvDN8"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-[#333]"
              }`}
            >
              Post-Test
            </button>
          </div>
          <div className="wrapper p-3 mx-auto bg-white grid items-center justify-center lg:grid-cols-1 shadow-xl">
            <iframe
              src={formLink}
              width="100%"
              className="rounded-[1rem]"
              height="800px"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormKuisoner;
