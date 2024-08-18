import React, { useEffect, useState } from "react";
import { LayoutDashboardContent } from "@/layouts/LayoutDashboardContent";
import { Flex, Heading } from "@chakra-ui/react";
import { DetailDataTableGulaDarah } from "@/components/tables/manage-data-gula-darah/DetailDataTableGulaDarah";
import { Spinner } from "@/components/spinner";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPatient,
  fetchPatientSelector,
  clearPatchPatientState,
} from "@/store/manage-patient";

import { clearFetchGdsState, patchGdsSelector } from "@/store/manage-gds";
const DetailGulaDarah = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status, data } = useSelector(fetchPatientSelector);
  const { updateStatus } = useSelector(patchGdsSelector);

  console.log("ini merupakan data detail", data);
  const [getData, setGetData] = useState(null);
  console.log("ini data getData", getData);
  useEffect(() => {
    if (id) {
      dispatch(fetchPatient(id));
    }
    return () => {
      if (updateStatus !== "idle") dispatch(clearPatchPatientState());
      if (updateStatus !== "idle") dispatch(clearFetchGdsState());
    };
  }, [dispatch, id, updateStatus]);

  useEffect(() => {
    if (data) {
      setGetData(data);
    }
  }, [data]);

  if (status === "loading") return <Spinner />;

  if (status === "failed") return <p>Gagal memuat data.</p>;

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
        {getData && (
          <div className="wrapper">
            <table className="mb-10">
              <tbody>
                <tr>
                  <td className="text-xl p-2">Nama</td>
                  <td>
                    <p className="ml-4 text-xl p-2">:</p>
                  </td>
                  <td>
                    <p className="ml-4 text-xl p-2">{getData.nama}</p>
                  </td>
                </tr>
                <tr>
                  <td className="text-xl p-2">No. Pasien</td>
                  <td>
                    <p className="ml-4 text-xl p-2">:</p>
                  </td>
                  <td>
                    <p className="ml-4 text-xl p-2">{getData.no_pasien}</p>
                  </td>
                </tr>
                <tr>
                  <td className="text-xl p-2">Usia</td>
                  <td>
                    <p className="ml-4 text-xl p-2">:</p>
                  </td>
                  <td>
                    <p className="ml-4 text-xl p-2">{getData.usia}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <DetailDataTableGulaDarah data={getData} />
          </div>
        )}
      </Flex>
    </LayoutDashboardContent>
  );
};

export default DetailGulaDarah;
