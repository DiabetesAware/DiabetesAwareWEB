import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { formatDateToLocalDate } from "@/utils";
import Parse from "html-react-parser";

export function ModalDetailArticle({
  setEditArticleData,
  currArticleData,
  onClose,
}) {
  if (!currArticleData) return null;
  return (
    <Modal isOpen={currArticleData} onClose={onClose} size={"lg"} isCentered>
      <ModalOverlay bg={"#0000000D"} backdropFilter={"blur(10px)"} />
      <ModalContent padding={"24px"} borderRadius={"xl"}>
        <p className="text-[28px]">{currArticleData.title}</p>
        <img
          src={currArticleData.img_url}
          className="my-8 object-cover h-[148px]"
          alt=""
        />
        <div className="flex justify-between">
          <div className="flex gap-2">

            <div className="my-auto h-3 w-[1px] bg-[#C7C9D9]" />
            <p className="text-sm text-[#808080]">
              {formatDateToLocalDate(currArticleData.createdAt, "numeric")}
            </p>
          </div>
        </div>

        <div className="mt-2 max-h-[353px] overflow-y-scroll">
          {Parse(currArticleData.description)}
        </div>

        <div className="mt-8 flex gap-3 justify-between text-white">
          <button
            onClick={onClose}
            className="p-4 w-full rounded-lg bg-[#828282] hover:opacity-90"
          >
            Kembali
          </button>
          <button
            onClick={() => {
              onClose();
              setEditArticleData(currArticleData);
            }}
            className="p-4 w-full rounded-lg bg-[#073D5B] hover:opacity-90"
          >
            Ubah
          </button>
        </div>
      </ModalContent>
    </Modal>
  );
}
