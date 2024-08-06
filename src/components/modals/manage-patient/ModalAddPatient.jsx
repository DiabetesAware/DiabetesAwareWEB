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
import { CloseSquare } from "react-iconly";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./PatientFormSchema";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPatientSelector } from "@/store/manage-patient";
import * as Fields from "./PatientFormFields";

export function ModalAddPatient({ isOpen, onClose, onSubmit }) {
  console.log("ModalAddPatient - isOpen:", isOpen);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { status: createStatus } = useSelector(createPatientSelector);

  const handleOnSubmit = (data) => {
    console.log("ini data add modal: ", data);
    onSubmit(data);
  };

  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  return (
    <>
      <Modal
        size={"sm"}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={createStatus !== "loading"}
      >
        <ModalOverlay bg={"#0000000D"} backdropFilter={"blur(5px)"} />
        <ModalContent
          padding={2}
          borderRadius={"20px"}
          justifyContent={"center"}
        >
          <>
            <ModalHeader fontSize={20}>Tambah Data Pasien</ModalHeader>
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
                <Fields.PatientNikFields control={control} error={errors.nik} />
                <Fields.PatientNameFields
                  control={control}
                  error={errors.nama}
                />
                <Fields.PatientTglLahirFields
                  control={control}
                  error={errors.tanggal_lahir}
                />
                <Fields.PatientAlamatFields
                  control={control}
                  error={errors.alamat}
                />
                <Fields.PatientJenisKelaminFields
                  control={control}
                  error={errors.jenis_kelamin}
                />
              </ModalBody>
              <ModalFooter justifyContent={"center"} gap={"12px"}>
                <Button
                  onClick={onClose}
                  color={"white"}
                  bg={"#828282"}
                  borderRadius={"lg"}
                  px={"5.5rem"}
                  py={"1.75rem"}
                  _hover={{ bg: "#333333" }}
                  isDisabled={createStatus === "loading"}
                >
                  Batal
                </Button>
                <Button
                  color={"white"}
                  bg={"#073D5B"}
                  borderRadius={"lg"}
                  px={"5rem"}
                  py={"1.75rem"}
                  _hover={{ opacity: "90%" }}
                  type="submit"
                  isLoading={createStatus === "loading"}
                >
                  Tambah
                </Button>
              </ModalFooter>
            </form>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
