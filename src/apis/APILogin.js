import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";

export const APIAuth = {
  login: async (data) => {
    try {
      const response = await axiosInstance.post("/auth/login-admin", data);
      console.log("Login response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Login error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
};
