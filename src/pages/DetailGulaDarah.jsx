import { useState, useEffect } from "react";
import { LayoutDashboardContent } from "@/layouts/LayoutDashboardContent";
import { Flex, Heading } from "@chakra-ui/react";
import { DetailDataTableGulaDarah } from "@/components/tables/manage-data-gula-darah/DetailDataTableGulaDarah";
import { Spinner } from "@/components/spinner";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGds,
  fetchGdsSelector,
  clearFetchGdsState,
} from "@/store/manage-gds";

const DetailGulaDarah = () => {
  const { patient_id } = useParams();
  const dispatch = useDispatch();
  const { data, status } = useSelector(fetchGdsSelector);
  console.log("Data dari Redux store:", data);

  useEffect(() => {
    if (patient_id) {
      dispatch(fetchGds(patient_id));
    }
    return () => {
      dispatch(clearFetchGdsState());
    };
  }, [patient_id, dispatch]);

  const tableData = Array.isArray(data) ? data : [data];

  return (
    <LayoutDashboardContent>
      <Heading
        as={"h1"}
        color={"#073D5B"}
        fontSize={"2xl"}
        fontWeight={"bold"}
        mb={"1.5rem"}
      >
        Data Gula Darah Pasien
      </Heading>
      <Flex
        bg={"white"}
        borderRadius={"xl"}
        boxShadow={"md"}
        direction={"column"}
        gap={"1.5rem"}
        p={"1.5rem"}
      >
        {status === "loading" ? (
          <Spinner />
        ) : status === "failed" ? (
          <p>Gagal memuat data.</p>
        ) : (
          <div className="wrapper">
            {tableData.map((row, rowIndex) => (
              <table key={rowIndex} index={rowIndex} className="mb-10">
                <tr>
                  <td className=" text-xl p-2">Nama</td>
                  <td>
                    {" "}
                    <p className="ml-4 text-xl p-2">:</p>
                  </td>
                  <td>
                    <p className="ml-4 text-xl p-2">{row.nama}</p>
                  </td>
                </tr>
                <tr>
                  <td className=" text-xl p-2">No. Pasien</td>
                  <td>
                    {" "}
                    <p className="ml-4 text-xl p-2">:</p>
                  </td>
                  <td>
                    <p className="ml-4 text-xl p-2">{row.no_pasien}</p>
                  </td>
                </tr>
                <tr>
                  <td className=" text-xl p-2">Usia</td>
                  <td>
                    {" "}
                    <p className="ml-4 text-xl p-2">:</p>
                  </td>
                  <td>
                    <p className="ml-4 text-xl p-2">{row.usia}</p>
                  </td>
                </tr>
              </table>
            ))}
            <DetailDataTableGulaDarah data={tableData} />
          </div>
        )}
      </Flex>
    </LayoutDashboardContent>
  );
};

export default DetailGulaDarah;
