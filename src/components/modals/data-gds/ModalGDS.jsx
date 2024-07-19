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
import * as Fields from "./FormFields";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function ModalGDS({ isOpen, onClose, onSubmit }) {
  const { control, handleSubmit, formState:{errors}, reset} = useForm();

  // handleSubmit
  const handleOnSubmit = (data) => {
    onSubmit(data);
  };

useEffect(() => {
if(!isOpen) reset();
},[isOpen, reset])
  return (
    <>
      <Modal size={"sm"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg={"#0000000D"} backdropFilter={"blur(5px)"} />
        <ModalContent
          padding={2}
          borderRadius={"20px"}
          justifyContent={"center"}
        >
          <>
            <ModalHeader fontSize={20}>Tambah Data</ModalHeader>
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
            <form onSubmit={handleSubmit(handleOnSubmit())}>
              <ModalBody as={Flex} direction={"column"} gap={"1rem"}>
                <Fields.GdpFields control={control} error={errors.gdp} />
                <Fields.GdsFields control={control} error={errors.gds} />
                <Fields.GdppFields control={control} error={errors.gdpp} />
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
                >
                  Batal
                </Button>
                <Button
                  color={"white"}
                  bg={"#073D5B"}
                  borderRadius={"lg"}
                  px={"5rem"}
                  py={"1.75rem"}
                  _hover={{ bg: "#2DA22D" }}
                  type="submit"
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
