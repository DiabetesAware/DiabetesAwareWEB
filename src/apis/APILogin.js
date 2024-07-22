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
        console.log("token APILogin: ", token);
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError)
        throw new Error(error.response.data.message);
    }
  },
};
