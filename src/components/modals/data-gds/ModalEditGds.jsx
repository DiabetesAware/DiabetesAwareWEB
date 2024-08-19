import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Spinner } from "@/components/spinner";
import { CloseSquare } from "react-iconly";
import { schema } from "./GdsFormSchema";
import { useDispatch } from "react-redux";
import * as Fields from "./GdsFormFields";
import {
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { fetchGdsSelector, patchGdsSelector } from "@/store/manage-gds";
import { useEffect } from "react";

export function ModalEditGds({ isOpen, onClose, onSubmit }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const { data, status } = useSelector(fetchGdsSelector);
  const { status: updateStatus } = useSelector(patchGdsSelector);

  useEffect(() => {
    if (data) {
      setValue("tanggal_periksa", data.tanggal_periksa);
      setValue("gds", data.gds);
      setValue("tekanan_darah_sistolik", data.tekanan_darah_sistolik);
      setValue("tekanan_darah_diastolik", data.tekanan_darah_diastolik);
      setValue("nadi_per_min", data.nadi_per_min);
      setValue("frekuensi_napas_per_min", data.frekuensi_napas_per_min);
    }
  }, [data, setValue]);

  const handleOnSubmit = (data) => {
    onSubmit(data);
    onClose()
  };

  return (
    <Modal
      size={"sm"}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnOverlayClick={updateStatus !== "loading"}
    >
      <ModalOverlay bg={"#0000000D"} backdropFilter={"blur(5px)"} />
      <ModalContent padding={"10px"} borderRadius={"20px"}>
        {status === "loading" ? (
          <Spinner containerSize={"lg"} />
        ) : (
          <>
            <ModalHeader fontSize={20}>Edit Data GDS</ModalHeader>
            <IconButton
              as={ModalCloseButton}
              icon={<CloseSquare size={"large"} />}
              size={"sm"}
              bg={"transparent"}
              color={"#828282"}
              position={"absolute"}
              right={"1.5rem"}
              top={"1.5rem"}
              _hover={{ bg: "transparent", color: "#333333" }}
              _focus={{ boxShadow: "none" }}
            />

            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <ModalBody as={Flex} direction={"column"} gap={"1rem"}>
                <Fields.TanggalPeriksaFields
                  control={control}
                  error={errors.tanggal_periksa}
                />
                <Fields.GdsFields control={control} error={errors.gds} />
                <Fields.TekananDarahSistolikFields
                  control={control}
                  error={errors.tekanan_darah_sistolik}
                />
                <Fields.TekananDarahDiastolikFields
                  control={control}
                  error={errors.tekanan_darah_diastolik}
                />
                <Fields.NadiPerMenitFields
                  control={control}
                  error={errors.nadi_per_min}
                />
                <Fields.FrekuensiNafasFields
                  control={control}
                  error={errors.frekuensi_napas_per_min}
                />
              </ModalBody>
              <ModalFooter justifyContent={"center"} gap={"12px"}>
                <Button
                  onClick={onClose}
                  color={"white"}
                  bg={"#828282"}
                  borderRadius={"lg"}
                  px={"4.5rem"}
                  py={"1.75rem"}
                  _hover={{ bg: "#333333" }}
                  isDisabled={updateStatus === "loading"}
                >
                  Batal
                </Button>
                <Button
                  color={"white"}
                  bg={"#073D5B"}
                  borderRadius={"lg"}
                  px={"4rem"}
                  py={"1.75rem"}
                  _hover={{ opacity: "90%" }}
                  type="submit"
                  isLoading={updateStatus === "loading"}
                >
                  Simpan
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
