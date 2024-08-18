import { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { LayoutDashboardContent } from "@/layouts/LayoutDashboardContent";
import { Searchbar } from "@/components/fields/Searchbar";
import { ArticleList } from "@/components/content-artikel/ArticleList";
import { Pagination } from "@/components/pagination/Pagination";
import { useDebounce } from "@/hooks/useDebounce";
import { APIArticle } from "@/apis/APIArticle";
import { useCustomToast } from "@/hooks/useCustomToast";
import { Spinner } from "@/components/spinner";
import AddArticle from "@/components/content-artikel/AddArticle";
import EditArticle from "@/components/content-artikel/EditArticle";

const ManageContentArticle = () => {
  const [articleData, setArticleData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState({ status: "", message: "" });

  const [_searchTerm, setSearchTerm] = useState("");
  const searchTerm = useDebounce(_searchTerm, 500);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [showCreateArticle, setShowCreateArticle] = useState(false);
  const [editArticleData, setEditArticleData] = useState(null);

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
  }, [currentPage, itemsPerPage]);

  useCustomToast(toastMessage.status, toastMessage.message);

  if (showCreateArticle)
    return (
      <AddArticle
        onClose={(refresh) => {
          setShowCreateArticle(false);
          if (refresh) getArticleData();
        }}
      />
    );

  if (editArticleData)
    return (
      <EditArticle
        editArticleData={editArticleData}
        setToastMessage={setToastMessage}
        onClose={(refresh) => {
          setEditArticleData(null);
          if (refresh) getArticleData();
        }}
      />
    );

  return (
    <>
      <LayoutDashboardContent>
        <p className="text-title text-3xl font-bold mb-5">Daftar Konten</p>
        <div className="w-full max-h-[730px] flex flex-col p-5 border bg-[#fff] gap-5 ">
          <div className="flex justify-between items-center">
            <Searchbar
              onSearch={handleSearch}
              value={searchTerm}
              className={"max-w-[407px]"}
            />
            <button
              onClick={() => setShowCreateArticle(true)}
              className="my-auto flex items-center h-fit py-4 px-5 gap-[10px] rounded-[10px] bg-[#073D5B] text-white"
            >
              <BsPlus className="text-2xl" />
              <p>Tambah Data</p>
            </button>
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <ArticleList
              editArticleData={editArticleData}
              setEditArticleData={setEditArticleData}
              articleData={articleData}
            />
          )}
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onChangeItemsPerPage={setItemsPerPage}
            onChangePage={setCurrentPage}
            totalItems={totalItems}
          />
        </div>
      </LayoutDashboardContent>
    </>
  );
};

export default ManageContentArticle;
