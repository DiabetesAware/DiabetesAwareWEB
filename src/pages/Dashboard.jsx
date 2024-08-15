import { useState, useEffect } from "react";
import { LayoutDashboardContent } from "../layouts/LayoutDashboardContent";
import { UserTableActivityList } from "@/components/tables";
import { APISummary } from "../apis/APISummary";
import { Spinner } from "@/components/spinner"; // Pastikan Spinner diimpor
import { useCustomToast } from "@/hooks/useCustomToast"; // Pastikan useCustomToast diimpor
import { patients } from "./patientsList"; // Pastikan patients diimpor dengan benar

export default function Dashboard() {
  const [summaryData, setSummaryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState({ status: "", message: "" });

  const getSummaryData = async () => {
    setIsLoading(true);
    try {
      const response = await APISummary.getSummary();
      console.log("API Response Data:", response.data);
      setSummaryData(response.data);
    } catch (error) {
      setToastMessage({ status: "error", message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSummaryData();
  }, []);

  useCustomToast(toastMessage.status, toastMessage.message);

  // Cek apakah summaryData ada sebelum mengakses propertinya
  const totalUsers = summaryData ? [
    { tag: "Total Patients", value: summaryData.total_patients, icon: "👥" },
    { tag: "Total Articles", value: summaryData.total_articles, icon: "📝" },
    { tag: "Total Admins", value: summaryData.total_admins, icon: "🛠️" },
    { tag: "Total GDS", value: summaryData.total_gds, icon: "📊" }
  ] : [];

  return (
    <LayoutDashboardContent>
      <p className="text-title text-3xl font-bold mb-5">Dashboard</p>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap gap-5 p-5 border bg-[#fff] h-full">
          <div className="w-full total-info grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {totalUsers.map((item, i) => (
              <div
                className="card p-2 rounded-md shadow-md gap-5 text-[#073D5B]"
                key={i}
              >
                <div className="wrapper">
                  <p className="text-lg">{item.tag}</p>
                </div>
                <div className="info mt-5 flex justify-between items-center">
                  <p className="text-3xl font-bold">{item.value}</p>
                  <i className="text-lg">{item.icon}</i>
                </div>
              </div>
            ))}
          </div>
          <div className="activity-info w-full">
            <div className="card p-5 border rounded-md shadow gap-5">
              <div className="card-header mb-5">
                <p className="text-2xl">Aktivitas Pasien</p>
              </div>
              <div className="card-body">
                <UserTableActivityList data={patients} />
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutDashboardContent>
  );
}
