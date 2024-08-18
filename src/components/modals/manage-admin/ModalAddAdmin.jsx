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
import { schema } from "./AdminFormSchema";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAdminSelector } from "@/store/auth";
import * as Fields from "./AdminFormFields";

export function ModalAddAdmin({ isOpen, onClose, onSubmit }) {
  console.log("ModalAddAdmin - isOpen:", isOpen);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { status: createStatus } = useSelector(createAdminSelector);

  const handleOnSubmit = (data) => {
    console.log("Data from Modal form:", data);
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
            <ModalHeader fontSize={20}>Tambah Data Admin</ModalHeader>
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
                <Fields.AdminNameFields control={control} error={errors.nama} />
                <Fields.AdminEmailFields
                  control={control}
                  error={errors.email}
                />
                <Fields.AdminPasswordFields
                  name={"password"}
                  control={control}
                  error={errors.password}
                />
                <Fields.AdminPasswordFields
                  name={"confirm_password"}
                  label={"Konfirmasi Kata Sandi"}
                  control={control}
                  error={errors.confirm_password}
                />
              </ModalBody>
              <ModalFooter justifyContent={"center"} gap={"12px"}>

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
