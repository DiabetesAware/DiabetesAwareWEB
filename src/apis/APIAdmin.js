import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";

export const APIAdmin = {
  getAllAdmin: async ({ page = 1, adminName = "", pageSize = 1 }) => {
    try {
      const response = await axiosInstance.get(`/management-admin?adminName=${adminName}&page=${page}&pageSize=${pageSize}`);
      console.log("Get All Admin response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Get All Admin error response:", error.response);
        throw new Error(error.response.data.message );
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  getAdmin: async (id) => {
    try {
      const response = await axiosInstance.get(`/management-admin/${id}`);
      console.log("Get admin response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Get admin error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  patchAdmin: async (data, id) => {
    try {
      const response = await axiosInstance.patch(
        `/management-admin/update/${id}`,
        data
      );
      console.log("Update Admin response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Update Admin error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  deleteAdmin: async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/management-admin/delete/${id}`
      );
      console.log("Delete Admin response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Delete Admin error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
};
