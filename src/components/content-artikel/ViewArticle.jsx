import Parse from "html-react-parser";
import { formatDateToLocalDate } from "@/utils";
import { Link } from "iconsax-react";
import { CiCircleChevLeft } from "react-icons/ci";

const ViewArticle = () => {
  return (
    <>
      <div className="p-5 border rounded-xl bg-white">
        <div className="header-view-article">
          <div className="wrapper-button border flex items-center justify-around text-[#073D5B]">
            <i className="text-3xl">
              <CiCircleChevLeft />
            </i>
            <Link to={"/articles"} className="font-semibold text-2xl">
              Kembali
            </Link>
          </div>
        </div>
        {data.map((data, i) => (
          <div className="content-article" key={i}>
            <div className="header-article">
              <p className="text-3xl font-bold w-max-2xl">{data.title}</p>
              <p className="text-md font-thin my-3">
                {formatDateToLocalDate(data.createdAt)}
              </p>
              <img src={data.img_url} alt={data.title} />
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
