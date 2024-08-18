import { axiosInstance } from "@/config";
import { AxiosError } from "axios";

export const APIGulaDarah = {
  createGds: async (data) => {
    try {
      const token = localStorage.getItem("patient_token");

      const response = await axiosInstance.post("/gds/create-gds", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Create Gula Darah error response:", error.response);
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  getAllGds: async ({ page, pageSize, keyword = "" }) => {
    try {
      const response = await axiosInstance.get(
        `/gds?keyword=${keyword}&page=${page}&pageSize=${pageSize}`
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },

  getGds: async (id) => {
    try {
      const response = await axiosInstance.get(`/gds/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  patchGds: async ({ data, id }) => {
    try {
      const response = await axiosInstance.patch(
        `/gds/update-gds/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json", // Ubah jika data yangyyy
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
  deleteGds: async ({ id }) => {
    try {
      const response = await axiosInstance.patch(`/gds/delete-gds/${id}`, data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
};
