import { Pagination } from "@/components/pagination/Pagination";
import { BsPlus } from "react-icons/bs";
import { Searchbar } from "@/components/fields/Searchbar";
import { LayoutDashboardContent } from "@/layouts/LayoutDashboardContent";
import { useState, useCallback, useEffect } from "react";
import { DataTablePatient } from "@/components/tables/manage-patient/DataTablePatient";
import { useCustomToast } from "@/hooks/useCustomToast";
import { useDebounce } from "@/hooks/useDebounce";
import { useDisclosure,Heading,Flex, Button } from "@chakra-ui/react";
import { Spinner } from "@/components/spinner";
import { ModalAddPatient } from "@/components/modals/manage-patient/ModalAddPatient";
import { useDispatch, useSelector } from "react-redux";
import {
  createPatient,
  fetchAllPatient,
  fetchAllPatientSelector,
  clearPatchPatientState,
  clearDeletePatientState,
  clearCreatePatientState,
  clearFetchAllPatientState,
  patchPatientSelector,
  deletePatientSelector,
  createPatientSelector,
} from "@/store/manage-patient";
const ManageDataUser = () => {
  const dispatch = useDispatch();

  const {
    data = [],
    status,
    message,
    count_data,
  } = useSelector(fetchAllPatientSelector);

  const { status: updateStatus, message: updateMessage } =
    useSelector(patchPatientSelector);
  const { status: deleteStatus, message: deleteMessage } = useSelector(
    deletePatientSelector
  );
  const { status: createStatus, message: createMessage } = useSelector(
    createPatientSelector
  );

  const [_searchTerm, setSearchTerm] = useState("");
  const searchTerm = useDebounce(_searchTerm);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useCustomToast(updateStatus, updateMessage);
  useCustomToast(deleteStatus, deleteMessage);
  useCustomToast(createStatus, createMessage);

  // fetching data users
  const fetchPatientData = useCallback(() => {
    dispatch(
      fetchAllPatient({
        adminName: searchTerm,
        pageSize: itemsPerPage,
        page: currentPage,
      })
    );
  }, [dispatch, searchTerm, itemsPerPage, currentPage]);

  useEffect(() => {
    fetchPatientData();
  }, [searchTerm, itemsPerPage, currentPage, fetchPatientData]);

  useEffect(() => {
    if (
      updateStatus === "success" ||
      deleteStatus === "success" ||
      createStatus === "success"
    ) {
      fetchPatientData();
      setSearchTerm("");
      setCurrentPage(1);
    }
    return () => {
      if (updateStatus !== "idle") dispatch(clearPatchPatientState());
      if (deleteStatus !== "idle") dispatch(clearDeletePatientState());
      if (createStatus !== "idle") dispatch(clearCreatePatientState());
    };
  }, [fetchPatientData, updateStatus, deleteStatus, createStatus, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearFetchAllPatientState());
    };
  }, [dispatch]);

  const filteredData = data.filter((patient) => {
    return patient.nama?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSubmitData = (data) => {
    dispatch(createPatient(data)).then((res) => {
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
      <ModalAddPatient
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmitData}
      />
      <Heading
        as="h1"
        color={"#201A18"}
        fontSize={"2xl"}
        fontWeight="bold"
        mb={"1.5rem"}
      >
        Manage User
      </Heading>
      <Flex
        bg={"white"}
        borderRadius={"xl"}
        boxShadow={"md"}
        direction={"column"}
        gap={"1.5rem"}
        p={"1.5rem"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
        >
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
            <DataTablePatient
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

export default ManageDataUser;
