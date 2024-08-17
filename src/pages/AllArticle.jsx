import { Searchbar } from "@/components/fields/Searchbar";
import { useState, useEffect } from "react";
import { APIArticle } from "@/apis/APIArticle";
import { Spinner } from "@/components/spinner";
import { AllArticleList } from "@/components/content-artikel/AllArticleList";
import { Pagination } from "@/components/pagination/Pagination";
import { useDebounce } from "@/hooks/useDebounce";
import { useCustomToast } from "@/hooks/useCustomToast";
import { Navbar } from "@/components/navigation/Navbar"
const AllArticle = () => {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [_searchTerm, setSearchTerm] = useState("");
  const [toastMessage, setToastMessage] = useState({ status: "", message: "" });

  const searchTerm = useDebounce(_searchTerm, 500);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  function handleSearch(term) {
    setSearchTerm(term);
    setCurrentPage(1);
  }
  function getArticleData() {
    setIsLoading(true);
    APIArticle.getAllArticle(searchTerm, currentPage, itemsPerPage)
      .then((res) => {
        if (res.data && res.data.datas) {
          setArticleData(res.data.datas);
          setTotalItems(res.data.total_data);
        }
      })
      .finally(() => {
        setToastMessage({ status: "", message: "" });
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getArticleData();
  }, [currentPage, itemsPerPage, searchTerm]);

  useCustomToast(toastMessage.status, toastMessage.message);

  return (
    <>
      <Navbar />
      <div className="p-10 bg-[#e7e7e7] h-screen">
        <div className="px-20 py-10 border bg-white rounded-xl ">
          <div className="header-article flex justify-between items-center">
            <p className="text-xl text-[#073D5B] py-2 px-3 border-b-[4px] border-[#073D5B] font-bold uppercase">semua article</p>
            <Searchbar value={searchTerm} onSearch={handleSearch} />
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <AllArticleList
            articleData={articleData} />
          )}
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onChangeItemsPerPage={setItemsPerPage}
            onChangePage={setCurrentPage}
            totalItems={totalItems}
          />
        </div>
      </div>
    </>
  );
};

export default AllArticle;
