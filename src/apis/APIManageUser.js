import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";

export const APIManageUser = {
  getAdmins: async ({ search = "", limit = 10, page = 1 }) => {
    try {
      const response = await axiosInstance.get(
        `/admins?search=${search}&limit=${limit}&page=${page}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError)
        throw new Error(error.response.data.message);
    }
  },
  deleteAdmin: async (id) => {
    try {
      const response = await axiosInstance.delete(`/admins/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError)
        throw new Error(error.response.data.message);
    }
  },
};
