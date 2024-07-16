export function ArticleCards({ data, setArticleData }) {
  return (
    <>
      <div
        onClick={() => setArticleData(data)}
        className="card border rounded-md cursor-pointer shadow-md max-w-[220px] max-h-[260px] mx-auto"
      >
        <img
          className="rounded-t-md max-h-[150px] w-full object-cover"
          src={data.img}
          alt=""
        />
        <div className="p-5">
          <p className="text-md font-semibold">{data.title}</p>
          <p className="text-sm font-thin mt-3 text-right">{data.tgl}</p>

        </div>
      </div>
    </>
  );
}
