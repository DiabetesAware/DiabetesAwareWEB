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

      console.log("Create Patient response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Create Patient error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  getAllPatient: async ({ page = 1, pageSize = 10, adminName = "" }) => {
    try {
      const response = await axiosInstance.get(
        `/patient?adminName=${adminName}&page=${page}&pageSize=${pageSize}`
      );
      console.log("Get Patient response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Get Patient error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  getPatient: async (id) => {
    try {
      const response = await axiosInstance.get(`/patient/${id}`);
      console.log("Get Patient response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Get Patient error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
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
      console.log("Update Patient response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Update Patient error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  deletePatient: async (id) => {
    try {
      const response = await axiosInstance.delete(`/patient/delete/${id}`);
      console.log("Delete Patient response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Delete Patient error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
};
