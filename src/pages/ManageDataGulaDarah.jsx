import { useState } from "react";
import { DataTableGulaDarah } from "@/components/tables/manage-data-gula-darah/DataTableGulaDarah";
import { LayoutDashboardContent } from "@/layouts/LayoutDashboardContent";
import { Searchbar } from "@/components/fields/Searchbar";
import { BsPlus } from "react-icons/bs";
import { Pagination } from "@/components/pagination";

const ManageGulaDarah = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <>
      <LayoutDashboardContent>
        <p className="text-title text-3xl font-bold mb-5">Daftar GDS</p>
        <div className="w-full h-full flex flex-col p-5 border bg-[#fff] gap-5 ">
          <div className="flex justify-between items-center">
            <Searchbar className="w-3/12" />
            <button className="my-auto flex items-center h-fit py-4 px-5 gap-[10px] rounded-[10px] bg-[#073D5B] text-white">
              <BsPlus className="text-2xl" />
              <p>Tambah Data</p>
            </button>
          </div>
          <DataTableGulaDarah />

          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onChangeItemsPerPage={setItemsPerPage}
            onChangePage={setCurrentPage}
            totalItems={totalItems}
          />
        </div>
      </LayoutDashboardContent>
    </>
  );
};
export default ManageGulaDarah;
