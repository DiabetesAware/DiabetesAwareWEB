import { useRef, useState } from "react";
import TextEditor from "./TextEditor";
import { UploadImageIcon } from "../icons";
import { APIArticle } from "@/apis/APIArticle";
import { Spinner } from "../spinner";

function AddArticle({ onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(false);
  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    img_url: null,
  });
  const [errorImage, setErrorImage] = useState("");
  const categoryHeight = useRef(null);
  const titleWidth = useRef(null);

  // HandleImage Error
  function handleImage(e) {
    setErrorImage("");
    const validTypes = ["image/jpg", "image/png"];
    try {
      if (e.target.files && e.target.files[0]) {
        if (!validTypes.includes(e.target.files[0].type))
          return setErrorImage("format file berupa .jpg atau .png");
        if (e.target.files[0].size > 5000000)
          return setErrorImage("ukuran file maksimal 5 Mb");
        const objUrl = URL.createObjectURL(e.target.files[0]);
        setPreviewImage(objUrl);
        setArticleData((prev) => ({ ...prev, img_url: e.target.files[0] }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log("articleData:", articleData);

  // HandleCreate Article
  function handleCreateArticle() {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("title", articleData.title);
    formData.append("description", articleData.description);
    formData.append("img_url", articleData.img_url);
    APIArticle.addArticle(formData)
      .then((res) => {
        console.log("Article added successfully:", res);
        setIsLoading(false);
        onClose(true);
      })
      .catch((err) => {
        console.error("Error adding article:", err);
        setIsLoading(false);
      });
  }

  return (
    <div className="p-6 w-full bg-[#EBEBF0]">
      <p className="text-2xl font-bold">Tambah Konten</p>
      <div className="mt-4 flex gap-9 pl-3 pr-6 py-6 rounded-xl min-h-[75vh] bg-white">
        <div className="flex-1">
          <p className="mb-2 text-sm font-medium">Masukkan Judul</p>
          <input
            ref={titleWidth}
            onChange={(e) =>
              setArticleData((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            maxLength={100}
            className="w-full pl-6 py-4 rounded-xl border border-[#828282]"
            type="text"
            placeholder="Masukkan Judul Disini..."
          />
          <TextEditor
            titleWidth={titleWidth}
            setArticleData={setArticleData}
            peerHeight={categoryHeight}
          />
        </div>

        <div ref={categoryHeight} className="flex flex-col max-w-[328px]">
          <div
            className={`relative mt-6 h-52 rounded-xl ${
              !previewImage && "border"
            } border-dashed border-[#828282] min-w-[328px] cursor-pointer`}
          >
            <input
              onChange={handleImage}
              className="absolute w-full h-full opacity-0 cursor-pointer"
              type="file"
              accept="image/*"
            />
            {previewImage ? (
              <img
                src={previewImage}
                className="w-full h-full object-cover rounded-xl"
                alt="Preview"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <UploadImageIcon />
                <p className="text-center font-medium text-[#828282]">
                  Unggah Gambar
                </p>
              </div>
            )}
          </div>
          <p className="text-sm text-center text-red-500">{errorImage}</p>
          <p className="mt-2 text-sm text-center text-[#828282]">
            Max 5 Mb, Format JPG & PNG
          </p>
          <div className="mt-auto flex gap-3 justify-between text-white">
            <button
              disabled={isLoading}
              onClick={() => onClose()}
              className="p-4 w-full rounded-lg bg-[#828282] disabled:opacity-50 hover:opacity-90"
            >
              Batal
            </button>
            <button
              disabled={
                isLoading ||
                !articleData.title ||
                !articleData.img_url ||
                !articleData.description
              }
              onClick={handleCreateArticle}
              className="p-4 w-full rounded-lg bg-[#073D5B] disabled:opacity-50 hover:opacity-90 flex gap-2 justify-center"
            >
              <span className="my-auto">Bagikan</span>
              {isLoading && <Spinner containerSize={6} width={6} height={6} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddArticle;
