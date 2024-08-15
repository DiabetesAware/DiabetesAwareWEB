import { Pagination } from "@/components/pagination/Pagination";
import { BsPlus } from "react-icons/bs";
import { Searchbar } from "@/components/fields/Searchbar";
import { LayoutDashboardContent } from "@/layouts/LayoutDashboardContent";
import { useState, useCallback, useEffect } from "react";
import { DataTablePatient } from "@/components/tables/manage-patient/DataTablePatient";
import { useCustomToast } from "@/hooks/useCustomToast";
import { useDebounce } from "@/hooks/useDebounce";
import { useDisclosure } from "@chakra-ui/react";
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
    console.log("Submitting Data from Modal:", data);
    dispatch(createPatient(data)).then((res) => {
      if (res.payload) {
        console.log("Response from CreatePatientSlice:", res.payload);
        onClose();
      }
    });
  };

  const handleAddModal = () => {
    onOpen();
  };

  return (
    <>
      <LayoutDashboardContent>
        <ModalAddPatient
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmitData}
        />
        <p className="text-title text-2xl font-bold mb-5">Manage User</p>
        <div className="w-full h-full flex flex-col p-5 border bg-[#fff] gap-5 ">
          <div className="flex justify-between items-center">
            <Searchbar className="w-3/12" onSearch={handleSearch} />
            <button
              className="my-auto flex items-center h-fit py-4 px-5 gap-[10px] rounded-[10px] bg-[#073D5B] text-white"
              onClick={handleAddModal}
            >
              <BsPlus className="text-2xl" />
              <p>Tambah Data</p>
            </button>
          </div>
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
        </div>
        {status === "loading" && <Spinner />}
        {status === "failed" && <p>{message}</p>}
      </LayoutDashboardContent>
    </>
  );
};

export default ManageDataUser;
