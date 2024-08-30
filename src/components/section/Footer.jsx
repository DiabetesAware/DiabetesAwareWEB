import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <>
      <footer className="bg-[#073D5B] px-5 py-10 text-white">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="flex lg:gap-20 sm:gap-4 lg:my-14 sm:my-4 sm:text-xs lg:text-xl">
            <a href="#" className="hover:underline font-bold mb-2 lg:mb-0">
              Privacy policy
            </a>
            <a href="#" className="hover:underline font-bold mb-2 lg:mb-0">
              Privacy policy
            </a>
            <a href="#" className="hover:underline font-bold mb-2 lg:mb-0">
              Cookie Policy
            </a>
            <a href="#" className="hover:underline font-bold mb-2 lg:mb-0">
              Contact Us
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 lg:items-center mt-8">
            <div className="sm:col-span-2 text-sm lg:text-lg sm:order-1">
              <p className="mb-4 max-w-2xl ">
                Website ini digunakan oleh Poltekes Semarang, sebagai sarana edukasi kepada setiap orang tentang kepedulian terhadap kesehatan terutama Hipertensi dan Diabetes.
              </p>
            </div>
            <div className="flex justify-center mx-auto sm:justify-end sm:col-span-1 sm:order-2 lg:w-[150px] lg:h-[150px] sm:w-[120px] sm:h-[120px]">
              <img className="bg-white rounded-full" src={logo} />
            </div>
            <div className="sm:col-span-3 text-sm lg:text-lg sm:order-3">
              <p className="max-w-3xl">
                Sidihimens® adalah website edukasi yang dibuat berdasarkan kepedulian kami terhadap masyarakat indonesia dalam mewujudkan "Mayarakat Indonesia Sehat 2045" yang sadar akan bahaya Hipertensi dan Diabetes.
              </p>
            </div>
          </div>
          <p className="font-semibold text-sm lg:text-xl mt-8 text-center sm:text-left">
            © 2024 Sidihimens. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
