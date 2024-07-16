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
      <div className="relative">
        <div className="bg-[#073D5B] px-24 py-5 container mx-auto rounded-3xl">
          <div className="flex gap-3 justify-center items-center text-white">
            <i className="text-4xl">
              <FaStethoscope />
            </i>
            <p className="text-3xl font-semibold text-center py-14 text-white">
              Pahami Penyakitnya!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 justify-center items-center">
            {article.slice(0, visibleItems).map((item, i) => (
              <div
                className="card rounded-3xl shadow-md transform transition-transform duration-500 ease-out hover:scale-[105%] bg-white"
                key={i}
              >
                <div className="card-header">
                  <img
                    className="border w-full rounded-3xl h-[300px] object-cover"
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
              className="w-full flex justify-end items-center my-10 px-5 py-3 gap-3 cursor-pointer"
              onClick={handleSeeMore}
            >
              <button className="my-5 text-white text-xl duration-200 ease-in-out">
                Selebihnya
              </button>
              <i className="text-white text-3xl">
                {" "}
                <CiCircleChevRight />
              </i>
            </div>
          )}
        </div>

        <div className="wrapper relative my-20 container mx-auto">
          <div className="relative">
            <img
              className="w-full rounded-xl"
              src={banner}
              alt="Banner"
              style={{ height: "300px" }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#073D5B] to-transparent rounded-xl"></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center pl-44 text-white">
              <h2 className="text-2xl  mb-4 font-thin capitalize">
                Cek Pengecekan terdekat
              </h2>
              <a href="" className="text-6xl font-bold tracking-wide max-w-xs">
                Disini
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
