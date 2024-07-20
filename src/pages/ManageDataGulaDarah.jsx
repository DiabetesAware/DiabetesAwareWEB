import { useState } from "react";
import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import { DataTableGulaDarah } from "@/components/tables/manage-data-gula-darah/DataTableGulaDarah";
import { LayoutDashboardContent } from "@/layouts/LayoutDashboardContent";
import { Searchbar } from "@/components/fields/Searchbar";
import { Pagination } from "@/components/pagination";
import { ModalGDS } from "@/components/modals/data-gds/ModalGDS";
import { useDispatch } from "react-redux";

const ManageGulaDarah = () => {
  const dispatch = useDispatch();

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // handleOpenModal
  const handleModalGDS = () => {
    onOpen();
  };

  // handleSubmit
  const handleSubmitData = (data) => {
    // dispatch(createAdmins(data)).then((res) => {
    //   if (res.payload) {
    //     onClose();
    //   }
    // });
  };

  return (
    <LayoutDashboardContent>
      <ModalGDS isOpen={isOpen} onClose={onClose} onSubmit={handleSubmitData} />
      <Heading
        as="h1"
        color={"#201A18"}
        fontSize={"2xl"}
        fontWeight="bold"
        mb={"1.5rem"}
      >
        Daftar GDS
      </Heading>
      <Flex
        bg={"white"}
        borderRadius={"xl"}
        boxShadow={"md"}
        direction={"column"}
        gap={"1.5rem"}
        p={"1.5rem"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Searchbar className="wrapper w-3/12" />
          <Button
            backgroundColor={"#073D5B"}
            color={"white"}
            width={"12rem"}
            height={"4rem"}
            _hover={"#073D5B"}
            borderRadius={"10px"}
            gap={"10px"}
            onClick={handleModalGDS}
          >
            <BsPlus className="text-2xl" />
            Tambah Data
          </Button>
        </Flex>
        <DataTableGulaDarah />
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onChangeItemsPerPage={setItemsPerPage}
          onChangePage={setCurrentPage}
          totalItems={totalItems}
        />
      </Flex>
    </LayoutDashboardContent>
  );
};

export default ManageGulaDarah;
