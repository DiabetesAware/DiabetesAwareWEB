import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <>
      <footer className="bg-[#073D5B] px-5 py-10 text-white">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="flex xl:gap-20 sm:gap-4 xl:my-14 sm:my-4 sm:text-xs xl:text-xl">
            <a href="#" className="hover:underline font-bold mb-2 xl:mb-0">
              Privacy policy
            </a>
            <a href="#" className="hover:underline font-bold mb-2 xl:mb-0">
              Privacy policy
            </a>
            <a href="#" className="hover:underline font-bold mb-2 xl:mb-0">
              Cookie Policy
            </a>
            <a href="#" className="hover:underline font-bold mb-2 xl:mb-0">
              Contact Us
            </a>
          </div>
          <div className="flex sm:flex-row sm:justify-between xl:items-center sm:items-start mt-8">
            <div className="text-sm xl:text-lg">
              <p className="mb-4 max-w-2xl">
                This website is intended for use by United States residents only. The content is for informational purposes only and is not intended to replace a discussion with a health care provider.
              </p>
              <p className="max-w-4xl">
                NovoCare® is a registered trademark of Novo Nordisk A/S. Novo Nordisk is a registered trademark of Novo Nordisk A/S. All other trademarks, registered or unregistered, are the property of their respective owners.
              </p>
            </div>
            <img className="mt-4 sm:mt-0 sm:ml-10 bg-white rounded-full" src={logo} width={150} height={150} />
          </div>
          <p className="font-semibold text-sm xl:text-xl mt-8 text-center sm:text-left">
            © 2024 Novo Nordisk. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
