import banner from "@/assets/landing-page/Team of young specialist doctors standing in the corridor of the hospital.png";

export const Jombotron = () => {
  return (
    <div className="w-full border relative">
      <div className="wrapper relative z-0">
        <img className="w-full relative z-0" src={banner} alt="Banner" />
        <div className="cover absolute inset-0 z-10 bg-gradient-to-r from-[#073D5B] to-transparent"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center pl-44 z-20 text-white">
        <h1 className="text-6xl font-bold mb-2">WE PROTECT</h1>
        <div className="wrapper ml-10 my-5">
          <h2 className="text-4xl mb-4 font-semibold">Be Aware,</h2>
          <p className="text-2xl font-thin tracking-wide max-w-xs">
            Kebanyakan kasus kematian lansia disebabkan karena diabetes yang
            terlalu banyak dan gejala komplikasi.
          </p>
        </div>
      </div>
    </div>
  );
};
