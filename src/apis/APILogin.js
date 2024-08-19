import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";
import { authService } from "@/config";

export const APIAuth = {
  login: async (data) => {
    try {
      const response = await axiosInstance.post("/auth/login-admin", data);
      if (response.data) {
        const { token } = response.data.data;
        authService.setCredentialsToCookie({ token });
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError)
        throw new Error(error.response.data.message);
    }
  },
  createAdmin: async (data) => {
    try {
      const response = await axiosInstance.post("/auth/register-admin", data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
};
