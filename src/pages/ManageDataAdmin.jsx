import { useState, useCallback, useEffect } from "react";
import { DataTableAdmin } from "@/components/tables/manage-admin/DataTableAdmin";
import { LayoutDashboardContent } from "@/layouts/LayoutDashboardContent";
import { Searchbar } from "@/components/fields/Searchbar";
import { BsPlus } from "react-icons/bs";
import { Pagination } from "@/components/pagination/Pagination";
import { ModalAddAdmin } from "@/components/modals/manage-admin/ModalAddAdmin";
import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useCustomToast } from "@/hooks/useCustomToast";
import { Spinner } from "@/components/spinner";
import { useDebounce } from "@/hooks/useDebounce";
import {
  fetchAllAdmin,
  patchAdminSelector,
  deleteAdminSelector,
  fetchAllAdminSelector,
  clearPatchAdminState,
  clearDeleteAdminState,
  clearFetchAllAdminState,
} from "@/store/manage-admin";
import {
  createAdmin,
  createAdminSelector,
  clearCreateAdminState,
} from "@/store/auth";

const ManageDataAdmin = () => {
  const dispatch = useDispatch();

  const {
    data = [],
    status,
    message,
    count_data,
  } = useSelector(fetchAllAdminSelector);

  const { status: updateStatus, message: updateMessage } =
    useSelector(patchAdminSelector);
  const { status: deleteStatus, message: deleteMessage } =
    useSelector(deleteAdminSelector);
  const { status: createStatus, message: createMessage } =
    useSelector(createAdminSelector);

  const [_searchTerm, setSearchTerm] = useState("");
  const searchTerm = useDebounce(_searchTerm);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useCustomToast(updateStatus, updateMessage);
  useCustomToast(deleteStatus, deleteMessage);
  useCustomToast(createStatus, createMessage);

  const fetchAdminData = useCallback(() => {
    dispatch(
      fetchAllAdmin({
        adminName: searchTerm,
        pageSize: itemsPerPage,
        page: currentPage,
      })
    );
  }, [dispatch, searchTerm, itemsPerPage, currentPage]);

  useEffect(() => {
    fetchAdminData();
  }, [searchTerm, itemsPerPage, currentPage, fetchAdminData]);

  useEffect(() => {
    if (
      updateStatus === "success" ||
      deleteStatus === "success" ||
      createStatus === "success"
    ) {
      fetchAdminData();
      setSearchTerm("");
      setCurrentPage(1);
    }
    return () => {
      if (updateStatus !== "idle") dispatch(clearPatchAdminState());
      if (deleteStatus !== "idle") dispatch(clearDeleteAdminState());
      if (createStatus !== "idle") dispatch(clearCreateAdminState());
    };
  }, [fetchAdminData, updateStatus, deleteStatus, createStatus, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearFetchAllAdminState());
    };
  }, [dispatch]);

  const filteredData = data.filter((admin) =>
    admin.nama?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSubmitData = (data) => {
    dispatch(createAdmin(data)).then((res) => {
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
        <ModalAddAdmin
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmitData}
        />
        <p className="text-title text-3xl font-bold mb-5">Manage Admin</p>
        <div className="w-full max-h-[730px]  flex flex-col p-5 border bg-[#fff] gap-5 ">
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
              <DataTableAdmin
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
        </div>
      </LayoutDashboardContent>
  );
};

export default ManageDataAdmin;
