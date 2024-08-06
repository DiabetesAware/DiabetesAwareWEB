import Parse from "html-react-parser";
import { formatDateToLocalDate } from "@/utils";

const ViewArticle = () => {
  return (
    <>
      <div className="p-5 border rounded-xl bg-white">
        <div className="header-view-article">
          <Button>Kembali</Button>
        </div>
        {data.map((data, i) => (
          <div className="content-article" key={i}>
            <div className="header-article">
              <p className="text-3xl font-bold w-max-2xl">{data.title}</p>
              <p className="text-md font-thin">{formatDateToLocalDate(data.createdAt)}</p>
              <img src={data.img_url} alt="" />
            </div>
            <div className="body-content-article">
              <p className="text-lg font-normal">{Parse(data.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewArticle;
