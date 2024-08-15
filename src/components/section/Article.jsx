import { useState } from "react";
import { article } from "./ListArticles";
import { FaStethoscope } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";
import banner from "@/assets/landing-page/banner 2.png";

export const Article = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <>
      <div className="relative sm:px-5">
        <div className="bg-[#073D5B] container mx-auto rounded-3xl xl:px-24 xl:py-5 sm:px-8  ">
          <div className="flex xl:gap-3 sm:gap-1 justify-center items-center text-white">
            <i className="xl:text-3xl sm:text-xl">
              <FaStethoscope />
            </i>
            <p className="xl:text-3xl sm:text-xl  font-semibold text-center py-14 text-white">
              Pahami Penyakitnya!
            </p>
          </div>

          <div className="grid justify-center items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xl:gap-10 sm:gap-5 ">
            {article.slice(0, visibleItems).map((item, i) => (
              <div
                className="card rounded-3xl shadow-md transform transition-transform duration-500 ease-out hover:scale-[105%] bg-white"
                key={i}
              >
                <div className="card-header">
                  <img
                    className="border w-full rounded-3xl xl:h-[300px] sm:h-[150px] object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="card-body p-5">
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p className="text-md font-thin">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          {visibleItems < article.length && (
            <div
              className="w-full flex justify-end items-center xl:my-10 sm:my-3 xl:px-5 xl:py-3 gap-3 cursor-pointer"
              onClick={handleSeeMore}
            >
              <button className="my-5 text-white xl:text-xl sm:text-md duration-200 ease-in-out">
                Selebihnya
              </button>
              <i className="text-white xl:text-3xl sm:text-lg">
                {" "}
                <CiCircleChevRight />
              </i>
            </div>
          )}
        </div>

        <div className="wrapper relative xl:my-20 sm:my-10 container mx-auto">
          <div className="relative">
            <img
              className="w-full rounded-xl xl:h-[300px] sm:h-[100px]"
              src={banner}
              alt="Banner"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#073D5B] to-transparent rounded-xl"></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center xl:pl-44 sm:pl-10 text-white">
              <h2 className="xl:text-2xl sm:text-md xl:mb-4 sm:mb-1 font-thin capitalize">
                Cek Pengecekan terdekat
              </h2>
              <a href="" className="xl:text-6xl sm:text-xl font-bold tracking-wide max-w-xs">
                Disini
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
