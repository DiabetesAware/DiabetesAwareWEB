import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  deleteAdminSelector,
  fetchAdmin,
} from "@/store/manage-admin";

export const DataTableAdmin = ({ data, currentPage, itemsPerPage }) => {
  const [id, setId] = useState(null);
  const [idAdmin, setIdAdmin] = useState(null);
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

  const { status: deleteStatusAdmin } = useSelector(deleteAdminSelector);

  useEffect(() => {
    if (deleteStatusAdmin === "success" || deleteStatusAdmin === "failed") {
      onCloseDelete();
    }
  }, [deleteStatusAdmin, onCloseDelete]);

  const handleEditModal = (target) => {
    setId(target);
    dispatch(fetchAdmin(target));
    onOpenEdit();
  };

  const handleDeleteModal = (id) => {
    setIdAdmin(id);
    onOpenDelete();
  };

  const handleDelete = (id) => {
    dispatch(deleteAdmin(id));
  };

  const handleSubmitEdited = (data) => {
    dispatch(patchAdmin({ id, data }));
    onCloseEdit();
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
        target={idAdmin}
        onDelete={handleDelete}
        deleteStatus={deleteStatusAdmin}
        isLoading={deleteStatusAdmin === "loading"}
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
