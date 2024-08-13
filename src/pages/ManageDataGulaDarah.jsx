import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import { DataTableGulaDarah } from "@/components/tables/manage-data-gula-darah/DataTableGulaDarah";
import { LayoutDashboardContent } from "@/layouts/LayoutDashboardContent";
import { Searchbar } from "@/components/fields/Searchbar";
import { Pagination } from "@/components/pagination";
import { ModalGDS } from "@/components/modals/data-gds/ModalGDS";
import { useDebounce } from "@/hooks/useDebounce";
import { Spinner } from "@/components/spinner";
import { useCustomToast } from "@/hooks/useCustomToast";
import {
  fetchAllGds,
  fetchAllGdsSelector,
  createGds,
  createGdsSelector,
  patchGdsSelector,
  deleteGdsSelector,
  clearPatchGdsState,
  clearDeleteGdsState,
  clearCreateGdsState,
  clearFetchAllGdsState,
} from "../store/manage-gds";

const ManageGulaDarah = () => {
  const dispatch = useDispatch();

  const {
    data = [],
    status,
    message,
    count_data,
  } = useSelector(fetchAllGdsSelector);
  const { status: updateStatus, message: updateMessage } =
    useSelector(patchGdsSelector);
  const { status: deleteStatus, message: deleteMessage } =
    useSelector(deleteGdsSelector);
  const { status: createStatus, message: createMessage } =
    useSelector(createGdsSelector);

  const [_searchTerm, setSearchTerm] = useState("");
  const searchTerm = useDebounce(_searchTerm);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useCustomToast(updateStatus, updateMessage);
  useCustomToast(deleteStatus, deleteMessage);
  useCustomToast(createStatus, createMessage);

  const fetchGdsData = useCallback(() => {
    console.log("Fetching GDS data with params:", {
      keyword: searchTerm,
      pageSize: itemsPerPage,
      page: currentPage,
    });

    dispatch(
      fetchAllGds({
        keyword: searchTerm,
        pageSize: itemsPerPage,
        page: currentPage,
      })
    );
  }, [dispatch, itemsPerPage, currentPage, searchTerm]);

  useEffect(() => {
    fetchGdsData();
  }, [searchTerm, itemsPerPage, currentPage, fetchGdsData]);

  useEffect(() => {
    if (
      updateStatus === "success" ||
      deleteStatus === "success" ||
      createStatus === "success"
    ) {
      fetchGdsData();
      setSearchTerm("");
      setCurrentPage(1);
    }
    return () => {
      if (updateStatus !== "idle") dispatch(clearPatchGdsState());
      if (deleteStatus !== "idle") dispatch(clearDeleteGdsState());
      if (createStatus !== "idle") dispatch(clearCreateGdsState());
    };
  }, [
    fetchGdsData,
    updateStatus,
    deleteStatus,
    createStatus,
    dispatch,
    onClose,
  ]);

  useEffect(() => {
    return () => {
      dispatch(clearFetchAllGdsState());
    };
  }, [dispatch]);

  const filteredData = data.filter((gds) => gds.nama);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSubmitData = (data) => {
    dispatch(createGds(data)).then((res) => {
      if (res.payload) {
        onClose();
      }
    });
  };

  const handleAddModal = () => {
    onOpen();
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
          <Searchbar className="wrapper w-3/12" onSearch={handleSearch} />
          <Button
            backgroundColor={"#073D5B"}
            color={"white"}
            width={"12rem"}
            height={"4rem"}
            _hover={"#073D5B"}
            borderRadius={"10px"}
            gap={"10px"}
            onClick={handleAddModal}
          >
            <BsPlus className="text-2xl" />
            Tambah Data
          </Button>
        </Flex>
        {status === "success" && (
          <>
            <DataTableGulaDarah
              currentPage={currentPage}
              data={filteredData}
              itemsPerPage={itemsPerPage}
            />
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onChangeItemsPerPage={setItemsPerPage}
              onChangePage={setCurrentPage}
              totalItems={count_data}
            />
          </>
        )}
        {status === "loading" && <Spinner />}
        {status === "failed" && <p>{message}</p>}
      </Flex>
    </LayoutDashboardContent>
  );
};

export default ManageGulaDarah;
