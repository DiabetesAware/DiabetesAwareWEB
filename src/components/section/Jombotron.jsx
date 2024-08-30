import banner from "@/assets/landing-page/Team of young specialist doctors standing in the corridor of the hospital.png";

export const Jombotron = () => {
  return (
    <div id="home" className="w-full lg:h-auto sm:h-[300px] border relative">
      <div className="wrapper relative z-0 h-full">
        <img className="w-full h-full object-cover relative z-0" src={banner} alt="Banner" />
        <div className="cover absolute inset-0 z-10 bg-gradient-to-r from-[#073D5B] to-transparent"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center lg:pl-44 sm:pl-20 z-20 text-white">
        <p className="lg:text-6xl md:text-4xl sm:text-lg font-bold lg:mb-2 sm:mb-0">
          WE PROTECT
        </p>
        <div className="wrapper lg:ml-10 lg:my-5 sm:my-0">
          <p className="lg:text-4xl md:text-2xl sm:text-lg mb-4 font-semibold">
            Be Aware,
          </p>
          <p className="lg:text-2xl md:text-xl sm:text-xs font-thin tracking-normal md:w-4/12 sm:w-10/12">
            Inovasi ini merupakan salah satu langkah dalam menekan kejadian DM
            dan Hipertensi. SIDIHIMENS merupakan suatu rangkaian kegiatan dimana
            di dalamnya terlaksana upaya-upaya untuk pencegahan dan pengendalian
            penyakit DM dan Hipertensi pada keluarga Anda
          </p>
        </div>
      </div>
    </div>
  );
};
