import React from "react";
import { BaseTable } from "../base-table/BaseTable";
import { CenteredCell, TextCell } from "../base-table/TableCells";
import { TableBodyRow } from "../base-table/TableRows";
import { useNavigate } from "react-router-dom";

export const DataTableGulaDarah = ({ data, currentPage, itemsPerPage }) => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`detail-gds/${id}`);
  };

  const TablesHead = ["ID", "No. Pasien", "Nama", "Usia", "Data Gula Darah"];

  return (
    <>
      <BaseTable data={data} heads={TablesHead}>
        {data.map((row, rowIndex) => (
          <TableBodyRow key={rowIndex} index={rowIndex}>
            <CenteredCell>
              {(currentPage - 1) * itemsPerPage + rowIndex + 1}
            </CenteredCell>
            <TextCell content={row.no_pasien} />
            <TextCell content={row.nama} />
            <TextCell content={row.usia} />
            <CenteredCell>
              <button onClick={() => handleDetailClick(row.id)}>
                Selengkapnya
              </button>
            </CenteredCell>
          </TableBodyRow>
        ))}
      </BaseTable>
    </>
  );
};
