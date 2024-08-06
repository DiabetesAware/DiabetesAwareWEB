import {
  Avatar,
  Box,
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
  Text,
} from "@chakra-ui/react";
import {
  Calendar,
  CloseSquare,
  Message,
  TicketStar,
  TickSquare,
  User,
} from "react-iconly";
import { DetailUserField } from "./DetailUserField";
import { fetchUserSelector } from "@/store/user";
import {
  formatDateToCustomDate,
  formatDateToLocalDate,
  formatWithCommas,
} from "@/utils";
import { Spinner } from "@/components/spinner";
import { useSelector } from "react-redux";

const LABELS = {
  nama: { title: "Nama Pengguna", icon: <User /> },
  nik: { title: "Email", icon: <Message /> },
  tanggal_lahir: { title: "Tanggal Lahir", icon: <Calendar /> },
  usia: { title: "Total Poin", icon: <TicketStar /> },
  no_pasien: { title: "Tujuan Pengguna", icon: <TickSquare /> },
};

export function ModalViewDetailUser({ isOpen, onClose }) {
  const { data, status, message } = useSelector(fetchUserSelector);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"3xl"} isCentered>
      <ModalOverlay bg={"#0000000D"} backdropFilter={"blur(5px)"} />
      <ModalContent
        p={"1.5rem"}
        gap={"1.5rem"}
        borderRadius={"3xl"}
        shadow={"lg"}
      >
        {status === "loading" && <Spinner containerSize={"lg"} />}
        {status === "failed" && <p>{message}</p>}
        {status === "success" && (
          <>
            <ModalHeader p={0}>
              <Flex alignItems={"center"} justifyContent={"flex-start"}>
                <Avatar
                  size={"lg"}
                  src={
                    `https://ui-avatars.com/api/?name=${data.nama}&background=0D8ABC&color=fff&size=128`
                  }
                />
                <Flex ml={"1.5rem"} flexDirection={"column"}>
                  <Text
                    fontWeight={"bold"}
                    fontSize={"3xl"}
                    casing={"capitalize"}
                  >
                    {data.nama || "-"}
                  </Text>
                  <Box as={"p"} fontSize={"md"}>
                    <Text as={"span"} fontWeight={"medium"} color={"#828282"}>
                      {LABELS.created_at.title} :{" "}
                    </Text>
                    <Text as={"span"} fontWeight={"bold"} color={"#333333"}>
                      {formatDateToCustomDate(data.created_at) || "-"}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
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
            </ModalHeader>

            <ModalBody
              p={0}
              display={"flex"}
              flexDirection={"column"}
              gap={"1rem"}
            >
              <Text
                fontSize={"lg"}
                fontWeight={"semibold"}
                color={"#828282"}
                letterSpacing={"tight"}
              >
                Detail Informasi
              </Text>
              <DetailUserField
                icon={LABELS.name.icon}
                title={LABELS.name.title}
                value={data.name}
                casing={"capitalize"}
              />
              <DetailUserField
                icon={LABELS.nik.icon}
                title={LABELS.nik.title}
                value={data.nik}
              />
              <DetailUserField
                icon={LABELS.tanggal_lahir.icon}
                title={LABELS.tanggal_lahir.title}
                value={formatDateToLocalDate(data.tanggal_lahir)}
              />
              <DetailUserField
                icon={LABELS.no_pasien.icon}
                title={LABELS.no_pasien.title}
                value={formatWithCommas(data.no_pasien)}
              />
              <DetailUserField
                icon={LABELS.usia.icon}
                title={LABELS.usia.title}
                value={data.usia}
                casing={"capitalize"}
              />
            </ModalBody>
            <ModalFooter p={0}>
              <Button
                color={"white"}
                bg={"#828282"}
                borderRadius={"lg"}
                px={"2.5rem"}
                py={"1.75rem"}
                _hover={{ bg: "#333333" }}
                onClick={onClose}
              >
                Kembali
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
