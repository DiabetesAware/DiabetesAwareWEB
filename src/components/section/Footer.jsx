import logo from '@/assets/logo.jpg'
export const Footer = () => {
  return (
    <>
      <footer className="bg-[#073D5B] mt-32 px-32 py-5  text-white">
        <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-8">
          <div className="flex gap-20 my-14 text-xl">
            <a href="#" className="hover:underline font-bold">
              Privacy policy
            </a>
            <a href="#" className="hover:underline font-bold">
              Cookie Policy
            </a>
            <a href="#" className="hover:underline font-bold">
              Privacy policy
            </a>
            <a href="#" className="hover:underline font-bold">
              Contact Us
            </a>
          </div>
          <div className="wrapper flex justify-content items-center">
            <div className="text-lg">
              <p className="my-4 max-w-2xl">
                This website is intended for use by United States residents
                only. The content is for informational purposes only and is not
                intended to replace a discussion with a health care provider.
              </p>
              <p className=" max-w-4xl">
                NovoCare® is a registered trademark of Novo Nordisk A/S. Novo
                Nordisk is a registered trademark of Novo Nordisk A/S. All other
                trademarks, registered or unregistered, are the property of
                their respective owners.
              </p>
            </div>
            <img className="bg-#fff rounded-full mx-auto" src={logo}  width={150} height={100} />
          </div>
          <p className="font-semibold text-xl mt-16">
            © 2024 SI-Dihimen. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
