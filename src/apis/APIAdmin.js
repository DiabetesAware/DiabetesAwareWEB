import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";

export const APIAdmin = {
  getAllAdmin: async () => {
    try {
      const response = await axiosInstance.get("/admin");
      console.log("Get Admin response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Get Admin error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
};
