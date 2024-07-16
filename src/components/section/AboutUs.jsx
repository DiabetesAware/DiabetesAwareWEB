import about from "@/assets/landing-page/about-us-asset.png";
import banner from "@/assets/landing-page/banner 1.png";

export const AboutUs = () => {
  return (
    <>
      <div className=" py-5 mt-14  mx-auto ">
        <div className="grid lg:flex items-center ">
          <div className="wrapper-text mx-auto w-7/12 pl-32">
            <p className="title-text text-7xl font-bold capitalize text-[#073D5B] max-w-5xl">
              Perhatikan Pola Hidup Sehat Demi Masa Tua Kita
            </p>
            <p className="desc text-xl my-10 max-w-xl">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur
            </p>
          </div>
          <div className="w-5/12 wrapper bg-[#073D5B] rounded-l-full py-16">
            <img
              className="border-[#333] shadow mx-16 w-5/12"
              src={about}
              alt=""
            />
          </div>
        </div>

        <div className="">
          <img className="mx-auto my-24" src={banner} alt="" />
        </div>
      </div>
    </>
  );
};
