import { ArticleCards } from "./ArticleCards";
import { useState } from "react";
import { ModalDetailArticle } from "../modals";


export function ArticleList({
  editArticleData,
  setEditArticleData,
  articleData,
}) {
  const [currArticleData, setCurrArticleData] = useState(null);
  return (
    <>
      <ModalDetailArticle
        currArticleData={currArticleData}
        editArticleData={editArticleData}
        setEditArticleData={setEditArticleData}
        onClose={() => setCurrArticleData(null)}
      />

      <div className=" flex flex-wrap gap-10">
        {articleData.map((article, index) => (
          <ArticleCards
            setCurrArticleData={setCurrArticleData}
            data={article}
            key={index}
          />
        ))}
      </div>
    </>
  );
}