import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import { BaseTable } from "../base-table/BaseTable";
import { Edit2, Trash } from "iconsax-react";
import { CustomIconButton } from "@/components/buttons/IconButton";
import { CenteredCell, TextCell } from "../base-table/TableCells";
import { TableBodyRow } from "../base-table/TableRows";
import { ModalEditAdmin } from "@/components/modals/manage-admin/ModalEditAdmin";
import { ModalDelete } from "@/components/modals/action-feedback/ModalDelete";
import {
  deleteAdmin,
  patchAdmin,
  fetchAdmin,
} from "@/store/manage-admin";

export const DataTableAdmin = ({ data, currentPage, itemsPerPage }) => {
  // console.log("DataTableAdmin Data:", data);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const TablesHead = ["ID", "Nama Admin", "Email", "Aksi"];

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const handleEditModal = (target) => {
    setId(target);
    dispatch(fetchAdmin(target));
    onOpenEdit();
  };

  const handleDeleteModal = (id) => {
    setId(id);
    onOpenDelete();
  };

  const handleDelete = (id) => {
    dispatch(deleteAdmin(id));
  };


  const handleSubmitEdited = (data) => {
    dispatch(patchAdmin({ id, data }));
  };
  return (
    <>
      <ModalEditAdmin
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        onSubmit={handleSubmitEdited}
      />
      <ModalDelete
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onSubmit={() => handleDelete(id)}
      />
      <BaseTable data={data} heads={TablesHead}>
        {data.map((row, rowIndex) => (
          <TableBodyRow key={rowIndex} index={rowIndex}>
            <CenteredCell>
              {(currentPage - 1) * itemsPerPage + rowIndex + 1}
            </CenteredCell>
            <TextCell content={row.nama} />
            <TextCell content={row.email} />
            <CenteredCell>
              <CustomIconButton
                icon={<Edit2 />}
                color={"#201A18"}
                hoverColor={"#333333"}
                onClick={() => handleEditModal(row.id)}
              />
              <CustomIconButton
                icon={<Trash />}
                color={"#E53535"}
                hoverColor={"#B22222"}
                onClick={() => handleDeleteModal(row.id)}
              />
            </CenteredCell>
          </TableBodyRow>
        ))}
      </BaseTable>
    </>
  );
};
