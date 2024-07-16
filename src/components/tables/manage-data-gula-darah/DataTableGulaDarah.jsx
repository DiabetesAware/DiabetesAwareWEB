import { patients } from "./patientsList";
import { BaseTable } from "../base-table/BaseTable";
import { CenteredCell, TextCell } from "../base-table/TableCells";
import { TableBodyRow } from "../base-table/TableRows";
// import { ModalEditAdmin } from "../../modals/ModalEditAdmin";
export const DataTableGulaDarah = ({ data, currentPage, itemsPerPage }) => {
  const TablesHead = ["ID", "No. Pasien", "Nama", "Usia", "Data Gula Darah"];

  return (
    <>
      {/* <ModalEditAdmin
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        onSubmit={handleSubmitEdited}
      /> */}
      <BaseTable data={data} heads={TablesHead}>
        {patients.map((row, rowIndex) => (
          <TableBodyRow key={rowIndex} index={rowIndex}>
            <CenteredCell>
              {(currentPage - 1) * itemsPerPage + rowIndex + 1}
            </CenteredCell>
            <TextCell content={row.noPasien} />
            <TextCell content={row.namaLengkap} />
            <TextCell content={row.usia} />
          </TableBodyRow>
        ))}
      </BaseTable>
    </>
  );
};
