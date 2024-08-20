import Parse from "html-react-parser";

export function ArticleCards({ data, setCurrArticleData }) {
  // const maxDescriptionLength = 20;
  const maxTitleLength = 30;
  return (
    <>
      <div
        onClick={() => setCurrArticleData(data)}
        className="card border rounded-md cursor-pointer shadow-md min-w-[220px] max-w-[220px] min-h-[260px] max-h-[260px] "
      >
        <img
          className="rounded-t-md max-h-[150px] w-full object-cover "
          src={data.img_url}
          alt=""
        />
        <div className="p-5">
          <p className="text-md font-semibold uppercase">{data.title.length > maxTitleLength ? data.title.slice(0,maxTitleLength) + "..." : data.title}</p>
          {/* <p className="text-sm font-thin mt-3 text-right">{Parse(data.description.length > maxDescriptionLength ? data.description.slice(0,maxDescriptionLength) + "..." : data.description)}</p> */}
        </div>
      </div>
    </>
  );
}
