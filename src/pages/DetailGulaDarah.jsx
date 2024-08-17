import { useEffect } from "react";
import { LayoutDashboardContent } from "@/layouts/LayoutDashboardContent";
import { Flex, Heading } from "@chakra-ui/react";
import { DetailDataTableGulaDarah } from "@/components/tables/manage-data-gula-darah/DetailDataTableGulaDarah";
import { Spinner } from "@/components/spinner";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatient, fetchPatientSelector,clearFetchPatientState } from "@/store/manage-patient";

const DetailGulaDarah = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status, data } = useSelector(fetchPatientSelector);
  console.log("data from redux", data);

  useEffect(() => {
    if (id) {
      dispatch(fetchPatient(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(clearFetchPatientState());
    };
  }, [dispatch]);

  if (status === "loading") return <Spinner />;
  const tableData = Array.isArray(data) ? data : [data];
  const patientData = data?.datas?.find((patient) => patient.id === id);

  console.log("ini data table", tableData);

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
