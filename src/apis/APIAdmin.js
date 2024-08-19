import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";

export const APIAdmin = {
  getAllAdmin: async ({ page = 1, adminName = "", pageSize = 1 }) => {
    try {
      const response = await axiosInstance.get(`/management-admin?adminName=${adminName}&page=${page}&pageSize=${pageSize}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message );
      }
      throw error;
    }
  },
  getAdmin: async (id) => {
    try {
      const response = await axiosInstance.get(`/management-admin/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  patchAdmin: async ({data, id}) => {
    try {
      const response = await axiosInstance.patch(
        `/management-admin/update/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  deleteAdmin: async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/management-admin/delete/${id}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
};
