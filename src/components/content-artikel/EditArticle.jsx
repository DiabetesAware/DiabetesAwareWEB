import { useEffect, useRef, useState } from "react";
import TextEditor from "./TextEditor";
import { useDisclosure } from "@chakra-ui/react";
import { ModalDelete } from "@/components/modals/action-feedback/ModalDelete";
import { UploadImageIcon } from "../icons";
import { APIArticle } from "@/apis/APIArticle";
import { Spinner } from "../spinner";
import { InputFields } from "@/components/fields/InputFields";

function EditArticle({ editArticleData, onClose, setToastMessage }) {
  const [isEditLoading, setIsEditLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const [previewImage, setPreviewImage] = useState(null);
  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    img_url: null,
    pdf_url: null,
  });
  const [errorImage, setErrorImage] = useState("");

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  const categoryHeight = useRef(null);
  const titleWidth = useRef(null);

  // HandlePdfFile
  function handlePdfFile(e) {
    const validPdfTypes = ["application/pdf"];
    const file = e.target.files[0];

    if (file) {
      const fileType = file.type;

      if (validPdfTypes.includes(fileType)) {
        if (file.size > 10000000) {
          setErrorImage("Ukuran file maksimal 10 MB");
          return;
        }

        convertToBase64(file)
          .then((base64String) => {
            setArticleData((prev) => ({
              ...prev,
              pdf_url: base64String,
            }));
          })
          .catch((error) => {
            console.error("Error converting PDF to base64:", error);
          });
      } else {
        setErrorImage(
          "Format file tidak sesuai, hanya PDF yang diperbolehkan."
        );
      }
    }
  }

  // handleImage
  function handleImage(e) {
    setErrorImage("");
    const validTypes = ["image/jpg", "image/jpeg", "image/png"];

    try {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];

        if (!validTypes.includes(file.type)) {
          return setErrorImage("Format file berupa .jpg, .jpeg, atau .png");
        }

        if (file.size > 10000000) {
          return setErrorImage("Ukuran file maksimal 10 MB");
        }

        convertToBase64(file)
          .then((base64String) => {
            setPreviewImage(URL.createObjectURL(file));
            setArticleData((prev) => ({
              ...prev,
              img_url: base64String,
            }));
          })
          .catch((error) => {
            console.error("Error converting file to base64:", error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Convert file gambar
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function handleEditArticle() {
    setIsEditLoading(true);
    const formData = new FormData();

    formData.append("title", articleData.title);
    formData.append("description", articleData.description);
    if (previewImage) formData.append("img_url", articleData.img_url);
    if (articleData.pdf_url) formData.append("pdf_url", articleData.pdf_url);

    console.log("Article ID:", editArticleData.id);

    APIArticle.patchArticle({ id: editArticleData.id, data: formData })
      .then((res) => {
        onClose(true);
        setToastMessage({ status: "success", message: res.message });
      })
      .catch((err) =>
        setToastMessage({ status: "failed", message: err.message })
      )
      .finally(() => setIsEditLoading(false));
  }


  function handleDelete(data) {
    setIsDeleteLoading(true);
    APIArticle.deleteArticle(data.id)
      .then((res) => {
        onClose(true);
        setToastMessage({ status: "success", message: res.message });
      })
      .finally(() => {
        onCloseDelete();
        setIsDeleteLoading(false);
      });
  }

  useEffect(() => {
    if (editArticleData) {
      console.log("editArticleData:", editArticleData);
      setArticleData({ ...editArticleData });
      setPreviewImage(editArticleData.img_url);
    }
  }, [editArticleData]);

  return (
    <div className="p-6 w-full min-h-screen bg-[#EBEBF0]">
      <ModalDelete
        title={"Anda yakin ingin menghapus konten ini?"}
        message={"Konten yang dihapus tidak dapat dipulihkan"}
        isOpen={isOpenDelete}
        target={editArticleData}
        onClose={onCloseDelete}
        onDelete={handleDelete}
        isLoading={isDeleteLoading}
      />
      <p className="text-2xl font-bold">Edit Konten</p>
      <div className="mt-4 flex gap-9 pl-3 pr-6 py-6 rounded-xl min-h-[85vh] bg-white">
        <div className="flex-1">
          <p className="mb-2 text-sm font-medium">Masukkan Judul</p>
          <input
            ref={titleWidth}
            value={articleData.title}
            onChange={(event) =>
              setArticleData((prev) => ({ ...prev, title: event.target.value }))
            }
            maxLength={100}
            className="w-full pl-6 py-4 rounded-xl border border-[#828282]"
            type="text"
            placeholder="Masukkan Judul Disini..."
          />
          <TextEditor
            text={articleData.description}
            setArticleData={setArticleData}
            titleWidth={titleWidth}
            peerHeight={categoryHeight}
            reduceHeight={101}
          />
          <button
            disabled={isDeleteLoading || isEditLoading}
            onClick={onOpenDelete}
            className="mt-[45px] p-4 rounded-lg w-[170px] font-bold
          hover:opacity-90 text-white bg-[#FF5C5C] flex gap-2 justify-center disabled:opacity-50"
          >
            <span className="my-auto">Hapus</span>
            {isDeleteLoading && (
              <Spinner containerSize={6} width={6} height={6} />
            )}
          </button>
        </div>

        <div ref={categoryHeight} className="flex flex-col max-w-[328px]">
          <InputFields
            type={"file"}
            placeholder="files"
            onChange={handlePdfFile}
          />
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
                alt=""
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
              disabled={isDeleteLoading || isEditLoading}
              onClick={() => onClose()}
              className="p-4 w-full rounded-lg bg-[#828282] disabled:opacity-50 hover:opacity-90"
            >
              Batal
            </button>
            <button
              disabled={
                isDeleteLoading ||
                isEditLoading ||
                !articleData.title ||
                !articleData.img_url ||
                !articleData.description ||
                !articleData.pdf_url
              }
              onClick={handleEditArticle}
              className="p-4 w-full rounded-lg bg-[#073D5B] disabled:opacity-50 hover:opacity-90 flex gap-2 justify-center"
            >
              <span className="my-auto">Simpan</span>
              {isEditLoading && (
                <Spinner containerSize={6} width={6} height={6} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditArticle;
