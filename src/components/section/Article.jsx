import { FaStethoscope } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import banner from "@/assets/landing-page/banner 2.png";
import { useState, useEffect } from "react";
import { APIArticle } from "@/apis/APIArticle";
import { useDebounce } from "@/hooks/useDebounce";
import Parse from "html-react-parser";
// import Img from "react-optimized-image";

// Fungsi untuk memotong teks
const truncateText = (text, maxWords) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return text;
};

export const Article = () => {
  const [articleData, setArticleData] = useState([]);
  const [_searchTerm, setSearchTerm] = useState("");

  const searchTerm = useDebounce(_searchTerm, 500);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/article/${id}`);
  };

  function getArticleData() {
    APIArticle.getAllArticle(searchTerm, currentPage, itemsPerPage).then(
      (res) => {
        if (res.data && res.data.datas) {
          setArticleData(res.data.datas.slice(0, 4));
        }
      }
    );
  }

  useEffect(() => {
    getArticleData();
  }, [currentPage, itemsPerPage, searchTerm]);

  return (
    <>
      <div id="artikel" className="relative sm:px-5">
        <div className="bg-[#073D5B] container mx-auto rounded-3xl lg:px-24 lg:py-5 sm:px-8">
          <div className="flex lg:gap-3 sm:gap-1 justify-center items-center text-white">
            <i className="lg:text-3xl sm:text-xl">
              <FaStethoscope />
            </i>
            <p className="lg:text-3xl sm:text-xl font-semibold text-center py-14 text-white">
              Pahami Penyakitnya!
            </p>
          </div>

          <div className="grid justify-center items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-10 sm:gap-5 ">
            {articleData.map((item, i) => (
              <div
                className="card max-w-xl rounded-3xl shadow-md transform transition-transform duration-500 ease-out hover:scale-[105%] bg-white cursor-pointer"
                key={i}
                onClick={() => handleOnClick(item.id)}
              >
                <div className="card-header">
                  {/* <Img
                    src={item.img_url}
                    alt={item.title}
                    className="border w-full rounded-3xl lg:h-[300px] sm:h-[150px] object-cover"
                  /> */}
                  <img
                    className="border w-full rounded-3xl lg:h-[300px] sm:h-[150px] object-cover"
                    src={item.img_url}
                    alt={item.title}
                  />
                </div>
                <div className="card-body p-5">
                  <p className="lg:text-2xl sm:text-md font-bold uppercase">
                    {truncateText(item.title, 8)}
                  </p>
                  <p className="lg:text- sm:text-xs font-thin">
                    {Parse(truncateText(item.description, 15))}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-end items-center lg:my-10 sm:my-3 lg:px-5 lg:py-3 gap-3 cursor-pointer">
            <Link
              to="/articles"
              className="my-5 text-white lg:text-xl sm:text-md duration-200 ease-in-out"
            >
              Selebihnya
            </Link>
            <i className="text-white lg:text-3xl sm:text-lg">
              {" "}
              <CiCircleChevRight />
            </i>
          </div>
        </div>

        <div className="wrapper relative lg:my-20 sm:my-10 container mx-auto">
          <div className="relative">
            <img
              className="w-full rounded-xl lg:h-[300px] sm:h-[100px]"
              src={banner}
              alt="Banner"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#073D5B] to-transparent rounded-xl"></div>
            <div className="absolute inset-0 z-20 flex flex-col justify-center lg:pl-44 sm:pl-10 text-white">
              <h2 className="lg:text-2xl sm:text-md lg:mb-4 sm:mb-1 font-thin capitalize">
                Cek Pengecekan terdekat
              </h2>
              <a
                href=""
                className="lg:text-6xl sm:text-xl font-bold tracking-wide max-w-xs"
              >
                Disini
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
