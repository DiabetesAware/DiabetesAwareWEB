import { patients } from "./patientsList";
// import { BaseTable } from "../base-table/BaseTable";
// import { CenteredCell, TextCell } from "../base-table/TableCells";
// import { TableBodyRow } from "../base-table/TableRow";

export function UserTableActivityList() {
  // { data, currentPage, itemsPerPage }
    const colsItem = [
      { text: "ID" },
      { text: "No. Pasien" },
      { text: "Nama" },
      { text: "Usia" },
    ];
  return (
    <>
      {/* <BaseTable data={data} heads={TablesHead}>
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
      </BaseTable> */}

      <div className="relative overflow-x-auto sm:rounded-lg max-h-96 overflow-y-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {colsItem.map((item, i) => (
                <th scope="col" className="px-6 py-3" key={i}>
                  {item.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {patients.map((item, i) => (
              <tr className="odd:bg-white even:bg-gray-50" key={i}>
                <td className="px-6 py-4">{item.no}</td>
                <td className="px-6 py-4">{item.noPasien}</td>
                <td className="px-6 py-4">{item.namaLengkap}</td>
                <td className="px-6 py-4">{item.usia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
