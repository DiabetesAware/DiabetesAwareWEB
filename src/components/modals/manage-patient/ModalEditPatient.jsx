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
import {
  fetchPatientSelector,
  patchPatientSelector,
} from "@/store/manage-patient";
import { schema } from "./PatientFormSchema";
import { Spinner } from "@/components/spinner";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Fields from "./PatientFormFields";

export function ModalEditPatient({ isOpen, onClose, onSubmit }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const { data, status } = useSelector(fetchPatientSelector);
  const { status: updateStatus } = useSelector(patchPatientSelector);

  useEffect(() => {
    if (data) {
      setValue("nama", data.nama);
      setValue("nik", data.nik);
      setValue("tanggal_lahir", data.tanggal_lahir);
      setValue("alamat", data.alamat);
      setValue("jenis_kelamin", data.jenis_kelamin);
    }
  }, [data, setValue]);

  const handleOnSubmit = (data) => {
    onSubmit(data);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  useEffect(() => {
    if (updateStatus === "success") {
      onClose();
    }
  }, [onClose, updateStatus]);

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
            <ModalHeader fontSize={20}>Edit Data Patient</ModalHeader>
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
