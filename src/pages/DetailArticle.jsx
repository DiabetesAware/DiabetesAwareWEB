import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIArticle } from "@/apis/APIArticle";
import { Spinner } from "@/components/spinner";
import { formatDateToLocalDate } from "@/utils";
import { Footer } from "@/components/section/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import { CiCircleChevLeft } from "react-icons/ci";
import ReactHtmlParser from "html-react-parser";
import { Button } from "@chakra-ui/react";
import "@/css/textEditor.css";

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

  const hasPdfUrl = article.pdf_url && article.pdf_url.trim() !== "";

  return (
    <>
      <Navbar />
      <div className="lg:p-10 sm:p-3 bg-[#e7e7e7] min-h-screen">
        <div className="lg:px-20 sm:px-6 lg:py-10 sm:py-4 border bg-white rounded-xl flex flex-wrap lg:gap-10 sm:gap-4">
          <Button
            bg={"transparent"}
            onClick={handleOnClick}
            className="flex items-center justify-around gap-1"
          >
            <i className="lg:text-3xl sm:text-xl">
              <CiCircleChevLeft />
            </i>
            <p className="lg:text-xl sm:text-md">Kembali</p>
          </Button>
          <div className="header-detail w-full">
            <h1 className="header-detail-title lg:text-3xl sm:text-xl font-bold mb-4 text-[#073D5B] uppercase">
              {article.title}
            </h1>
            <figure className="header-detail-img mx-auto max-w-[600px]">
              <img
                className="w-full lg:h-[500px]  mx-auto border object-contain border-[#ddd]"
                src={article.img_url}
                alt={article.title}
                onError={(e) => {
                  console.error("Failed to load image:", e.target.src);
                  e.target.src = "https://via.placeholder.com/900x600.png";
                }}
              />
              <figcaption>
                <p className="header-detail-created sm:text-xs lg:text-md text-[#D9D9D9] my-3">
                  Diposting pada{" "}
                  <span>{formatDateToLocalDate(article.createdAt)}</span>
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="content-detail w-full lg:px-44">
            <div className="article-content">
              {ReactHtmlParser(article.description)}
            </div>
          </div>

          {hasPdfUrl &&
            (article.pdf_url.startsWith("http") ? (
              <iframe
                src={`${article.pdf_url}#toolbar=0&navpanes=0&scrollbar=0`}
                className={`w-full max-w-[800px] border lg:h-[1100px] sm:h-[300px] mx-auto  border-[#ddd] ${
                  hasPdfUrl ? "block" : "hidden"
                }`}
                title="Article PDF"
              ></iframe>
            ) : (
              <></>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetail;
