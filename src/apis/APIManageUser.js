import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";

export const APIManageUser = {
  createPatient: async (data) => {
    try {
      const response = await axiosInstance.post("/patient/create", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  getAllPatient: async ({ page = 1, pageSize = 10, adminName = "" }) => {
    try {
      const response = await axiosInstance.get(
        `/patient?adminName=${adminName}&page=${page}&pageSize=${pageSize}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  getPatient: async (id) => {
    try {
      const response = await axiosInstance.get(`/patient/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  patchPatient: async ({data, id}) => {
    try {
      const response = await axiosInstance.patch(
        `/patient/update/${id}`,
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
  deletePatient: async (id) => {
    try {
      const response = await axiosInstance.delete(`/patient/delete/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
};
