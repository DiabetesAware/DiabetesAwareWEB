import { axiosInstance } from "@/config/axios";
import { AxiosError } from "axios";

export const APIBloodPresure = {
  postBlood: async (data) => {
    try {
      const response = await axiosInstance.post("/bp/create-bp", data);
      console.log("Create Blood response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Create Blood error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  getAllBlood: async () => {
    try {
      const response = await axiosInstance.get("/bp");
      console.log("Get Blood response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Get Blood error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  getBloodById: async (data, id) => {
    try {
      const response = await axiosInstance.get(`/bp/${id}`, data);
      console.log("Get Blood response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Get Blood error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  pathBlood: async (data, id) => {
    try {
      const response = await axiosInstance.patch(`/bp/update-bp/${id}`, data);
      console.log("Update Blood response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Blood error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  deleteBlood: async (data, id) => {
    try {
      const response = await axiosInstance.delete(`/bp/delete-bp/${id}`, data);
      console.log("Delete Blood response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Delete Blood error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
};
