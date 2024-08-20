import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";

export const APIExportToExcel = {
  getExcelData: async ({ start_date, end_date }) => {
    try {
      const response = await axiosInstance.get(
        `export-report?start_date=${start_date}&end_date=${end_date}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.reponse) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
};
