import { Searchbar } from "@/components/fields/Searchbar";
const AllArticle = () => {
  return (
    <>
      <div className="p-5 border rounded-xl bg-white">
        <div className="header-article flex justify-between items-center">
          <p className="text-lg font-bold capitalize">semua article</p>
          <Searchbar />
        </div>
        <div className="cards-article flex flex-wrap gap-5 mt-4" key={i}>
          {data.map((data, i) => (
            <div
              className="card flex items-center gap-4 border border-[#333] rounded-[10px]"
              key={i}
            >
              <img
                className="rounded-[10px] w-[200px]"
                src={data.img_url}
                alt=""
              />
              <div className="wrapper-body-content">
                <p className="title text-2xl font-bold w-max-3xl">
                  {data.title}
                </p>
                <p className="text-lg font-normal">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllArticle;
