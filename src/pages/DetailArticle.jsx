import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIArticle } from "@/apis/APIArticle";
import { Spinner } from "@/components/spinner";
import { formatDateToLocalDate } from "@/utils";
import { Footer } from "@/components/section/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import { CiCircleChevLeft } from "react-icons/ci";
import Parse from "html-react-parser";
import { Button } from "@chakra-ui/react";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/articles");
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await APIArticle.getArticle(id);
        if (res.data) {
          setArticle(res.data);
        } else {
          setError("Article not found");
        }
      } catch (error) {
        setError("Error fetching article");
        console.error("Error fetching article:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />
      <div className="p-10 bg-[#e7e7e7] min-h-screen">
        <div className="px-20 py-10 border bg-white rounded-xl flex flex-wrap gap-10">
          <Button
            bg={"transparent"}
            onClick={handleOnClick}
            className="flex items-center justify-around gap-3 "
          >
            <i className="text-3xl">
              <CiCircleChevLeft />
            </i>
            <p className="text-xl">Kembali</p>
          </Button>
          <div className="header-detail w-full">
            <h1 className="header-detail-title text-3xl font-bold mb-4 text-[#073D5B]">
              {article.title}
            </h1>
            <div className="header-detail-img mx-auto max-w-[900px]">
              <p className="header-detail-created text-[#D9D9D9] my-3">
                Diposting pada{" "}
                <span>{formatDateToLocalDate(article.createdAt)}</span>
              </p>
              <img
                className="w-full h-[500px] mx-auto border object-contain border-[#ddd]"
                src={article.img_url}
                alt={article.title}
                onError={(e) => {
                  console.error("Failed to load image:", e.target.src);
                  e.target.src = "https://via.placeholder.com/900x600.png"; // Gambar pengganti
                }}
              />
            </div>
          </div>
          <div className="content-detail w-full">
            <p className="text-lg text-justify">{Parse(article.description)}</p>
          </div>
          <iframe
            src={`${article.pdf_url}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full max-w-[800px] h-[600px] mx-auto border border-[#ddd]"
            title="Article PDF"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetail;
