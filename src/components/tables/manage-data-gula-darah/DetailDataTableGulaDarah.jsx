import { BaseTable } from "../base-table/BaseTable";
import { TextCell } from "../base-table/TableCells";
import { TableBodyRow } from "../base-table/TableRows";
import { Link } from "react-router-dom";

export const DetailDataTableGulaDarah = ({ data }) => {
  const TablesHead = [
    "Tanggal Periksa",
    "GDS",
    "TD Sistolik",
    "TD Diastolik",
    "Nadi /menit",
    "Nafas /menit",
  ];

  return (
      <>
        <BaseTable data={data} heads={TablesHead}>
          {data.map((row, rowIndex) => (
            <TableBodyRow key={rowIndex} index={rowIndex}>
              <TextCell className="" content={row.tanggal_periksa} />
              <TextCell className="" content={row.gds} />
              <TextCell className="" content={row.tekanan_darah_sistolik} />
              <TextCell className="" content={row.tekanan_darah_diastolik} />
              <TextCell className="" content={row.nadi_per_min} />
              <TextCell className="" content={row.frekuensi_napas_per_min} />
            </TableBodyRow>
          ))}
        </BaseTable>
        <div className="w-full flex justify-end">

        <Link
          to={"/dashboard/manage-gds"}
          className=" mt-5 px- py-3 w-[100px] text-center  text-white font-semibold rounded-lg bg-[#073D5B] disabled:opacity-50 hover:opacity-90"
        >
          Kembali
        </Link>
        </div>
      </>
  );
};
