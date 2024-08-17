import { BaseTable } from "../base-table/BaseTable";
import { CenteredCell, TextCell } from "../base-table/TableCells";
import { TableBodyRow } from "../base-table/TableRows";
import { Link } from "react-router-dom";
import { Edit2 } from "iconsax-react";
import { CustomIconButton } from "@/components/buttons/IconButton";
import { useDisclosure } from "@chakra-ui/react";
import { ModalEditGds } from "@/components/modals/data-gds/ModalEditGds";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchGds ,patchGds } from "@/store/manage-gds/";

export const DetailDataTableGulaDarah = ({ data }) => {
  const TablesHead = [
    "Tanggal Periksa",
    "GDS",
    "TD Sistolik",
    "TD Diastolik",
    "Nadi /menit",
    "Nafas /menit",
    "Actions",
  ];


  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEditModal = (target) => {
    setId(target);
    dispatch(fetchGds(target));
    onOpen();
  };

  const handleSubmitEdit = (data) => {
    dispatch(patchGds({ id, data }));
    onClose();
  };


  const gulaDarahData = data[0]?.gula_darah;

  return (
    <>
      <ModalEditGds
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmitEdit}
      />
      <BaseTable data={data} heads={TablesHead}>
        {gulaDarahData.map((row, rowIndex) => (
          <TableBodyRow key={rowIndex} index={rowIndex}>
            <TextCell content={row.tanggal_periksa} />
            <TextCell content={row.gds} />
            <TextCell content={row.tekanan_darah_sistolik} />
            <TextCell content={row.tekanan_darah_diastolik} />
            <TextCell content={row.nadi_per_min} />
            <TextCell content={row.frekuensi_napas_per_min} />
            <CenteredCell>
              <CustomIconButton
                icon={<Edit2 />}
                color={"#201A18"}
                hoverColor={"#333333"}
                onClick={() => handleEditModal(row.id)}
              />
            </CenteredCell>
          </TableBodyRow>
        ))}
      </BaseTable>
      <div className="w-full flex justify-end">
        <Link
          to={"/dashboard/manage-gds"}
          className="mt-5 px-4 py-3 w-[100px] text-center text-white font-semibold rounded-lg bg-[#073D5B] hover:opacity-90"
        >
          Kembali
        </Link>
      </div>
    </>
  );
};