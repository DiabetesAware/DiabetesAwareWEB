import { useNavigate } from "react-router-dom";
import Parse from "html-react-parser";

export function AllArticleList({ articleData }) {
  const navigate = useNavigate();
  const maxDescriptionLength = 100;

  const handleClick = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <>
      <div className="cards-article flex flex-wrap gap-5 my-5">
        {articleData.map((data, i) => (
          <div
            onClick={() => handleClick(data.id)}
            className="card flex md:flex-row sm:flex-col items-center gap-8 w-full lg:max-h-[150px] lg:min-h-[150px] border border-[#D9D9D9] rounded-[10px] cursor-pointer"
            key={i}
          >
            <img
              className="rounded-[10px] lg:w-[200px] sm:w-full max-h-[150px] object-cover"
              src={data.img_url}
              alt=""
            />
            <div className="wrapper-body-content md:border-none md:p-0 sm:p-3 sm:border-t w-full">
              <p className="title lg:text-2xl sm:text-sm font-extrabold w-max-3xl uppercase">
                {data.title}
              </p>
              <p className="lg:text-lg sm:text-xs font-normal">
                {Parse(
                  data.description.length > maxDescriptionLength
                    ? data.description.slice(0, maxDescriptionLength) + "..."
                    : data.description
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
