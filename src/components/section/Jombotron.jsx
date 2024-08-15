import banner from "@/assets/landing-page/Team of young specialist doctors standing in the corridor of the hospital.png";

export const Jombotron = () => {
  return (
    <div className="w-full border relative">
      <div className="wrapper relative z-0">
        <img className="w-full relative z-0" src={banner} alt="Banner" />
        <div className="cover absolute inset-0 z-10 bg-gradient-to-r from-[#073D5B] to-transparent"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center lg:pl-44 sm:pl-20 z-20 text-white">
        <h1 className="lg:text-6xl md:text-4xl sm:text-xl font-bold lg:mb-2 sm:mb-0">
          WE PROTECT
        </h1>
        <div className="wrapper lg:ml-10 lg:my-5">
          <h2 className="lg:text-4xl md:text-2xl sm:text-xl mb-4 font-semibold">
            Be Aware,
          </h2>
          <p className="lg:text-2xl md:text-xl sm:text-md font-thin tracking-wide max-w-xs">
            Kebanyakan kasus kematian lansia disebabkan karena diabetes yang
            terlalu banyak dan gejala komplikasi.
          </p>
        </div>
      </div>
    </div>
  );
};
