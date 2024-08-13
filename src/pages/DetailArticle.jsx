import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIArticle } from "@/apis/APIArticle";
import { Spinner } from "@/components/spinner";
import { formatDateToLocalDate } from "@/utils";
import { Footer } from "@/components/section/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import Parse from "html-react-parser";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await APIArticle.getArticle(id);
        if (res.data) {
          setArticle(res.data);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) return <Spinner />;

  if (!article) return <p>Article not found</p>;

  return (
    <>
      <Navbar />
      <div className="p-10 bg-[#e7e7e7]">
        <div className="px-20 py-10 border bg-white rounded-xl flex flex-wrap gap-10">
          <button>Kembali</button>
          <div className="header-detail w-full">
            <h1 className="header-detail-title text-3xl font-bold mb-4 text-[#073D5B]">
              {article.title}
            </h1>
            <div className="header-detail-img mx-auto max-w-[900px]">
              <p className="header detail creatAdd text-[#D9D9D9]">
                Diposting pada{" "}
                <span>{formatDateToLocalDate(article.createdAt)}</span>
              </p>
              <img
                className="w-auto mx-auto border object-contain border-[#ddd]"
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetail;
