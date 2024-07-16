import { admins } from "./AdminList";
import { BaseTable } from "../base-table/BaseTable";
import { Edit2, Trash } from "iconsax-react";
import { CenteredCell, TextCell } from "../base-table/TableCells";
import { TableBodyRow } from "../base-table/TableRows";
// import { CustomIconButton } from "@/components/buttons/CustomIconButton";
// import { ModalEditAdmin } from "../../modals/ModalEditAdmin";
export const DataTableAdmin = ({ data, currentPage, itemsPerPage }) => {
  const TablesHead = ["ID", "Nama Admin", "Email", "Status", "Aksi"];

  return (
    <>
      {/* <ModalEditAdmin
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        onSubmit={handleSubmitEdited}
      /> */}
      <BaseTable data={data} heads={TablesHead}>
        {admins.map((row, rowIndex) => (
          <TableBodyRow key={rowIndex} index={rowIndex}>
            <CenteredCell>
              {(currentPage - 1) * itemsPerPage + rowIndex + 1}
            </CenteredCell>
            <TextCell content={row.ID} />
            <TextCell content={row.Nama} />
            <TextCell content={row.Email} />
            <TextCell content={row.Status} />
            {/* <CenteredCell>
							<CustomIconButton
								icon={<Edit2 />}
								color={"#201A18"}
								hoverColor={"#333333"}
							/>
							<CustomIconButton
								icon={<Trash />}
								color={"#E53535"}
								hoverColor={"#B22222"}
							/>
						</CenteredCell> */}
          </TableBodyRow>
        ))}
      </BaseTable>
    </>
  );
};
