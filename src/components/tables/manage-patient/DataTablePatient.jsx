import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDisclosure } from "@chakra-ui/react";
import { BaseTable } from "../base-table/BaseTable";
import { Edit2, Trash } from "iconsax-react";
import { CustomIconButton } from "@/components/buttons/IconButton";
import { CenteredCell, TextCell } from "../base-table/TableCells";
import { TableBodyRow } from "../base-table/TableRows";
import { ModalEditPatient } from "@/components/modals/manage-patient/ModalEditPatient";
import { ModalDelete } from "@/components/modals/action-feedback/ModalDelete";
import {
  deletePatient,
  deletePatientSelector,
  patchPatient,
  fetchPatient,
} from "@/store/manage-patient";

export const DataTablePatient = ({ data, currentPage, itemsPerPage }) => {
  const [id, setId] = useState(null);
  const [idPatient, setIdPatient] = useState(null);
  const dispatch = useDispatch();
  const TablesHead = ["No", "NIK", "Nama", "Alamat", "Tanggal Lahir", "Aksi"];
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

  const { status: deleteStatusPatient } = useSelector(deletePatientSelector);

  useEffect(() => {
    if (deleteStatusPatient === "success" || deleteStatusPatient === "failed") {
      onCloseDelete();
    }
  }, [deleteStatusPatient, onCloseDelete]);

  const handleSubmitEdited = (data) => {
    dispatch(patchPatient({ id, data }));
    onClose();
  };

  const handleEditModal = (target) => {
    setId(target);
    dispatch(fetchPatient(target));
    onOpenEdit();
  };

  const handleDeleteModal = (id) => {
    setIdPatient(id);
    onOpenDelete();
  };

  const handleDelete = (id) => {
    dispatch(deletePatient(id));
  };

  return (
    <>
      <ModalEditPatient
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        onSubmit={handleSubmitEdited}
      />
      <ModalDelete
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        target={idPatient}
        onDelete={handleDelete}
        deleteStatus={deleteStatusPatient}
        isLoading={deleteStatusPatient === "loading"}
      />
      <BaseTable data={data} heads={TablesHead} >
        {data.map((row, rowIndex) => (
          <TableBodyRow key={rowIndex} index={rowIndex}>
            <CenteredCell>
              {(currentPage - 1) * itemsPerPage + rowIndex + 1}
            </CenteredCell>
            <TextCell content={row.nik} />
            <TextCell content={row.nama} />
            <TextCell content={row.alamat} />
            <TextCell content={row.tanggal_lahir} />
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
