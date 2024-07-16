import { ArticleCards } from './ArticleCards';

export function ArticleList({ articleData }) {
  if (!Array.isArray(articleData)) {
    console.error('articleData should be an array but received:', articleData);
    return null;
  }

  return (
    <>
      <div className=" flex flex-wrap justify-center gap-10">
        {articleData.map((article, index) => (
          <ArticleCards
            data={article}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
