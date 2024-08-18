// ../apis/APISummary.js
import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";

export const APISummary = {
  getSummary: async () => {
    try {
      const response = await axiosInstance.get("/data/summary");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message);
      }
      throw error;
    }
  }
};
