import { axiosInstance } from "@/config";
import { AxiosError } from "axios";

export const APIGulaDarah = {
  createGds: async (data) => {
    try {
      const token = store.getState().patient.token;
      if (!token) {
        console.error("No token found, cannot create GDS form");
        throw new Error("Authorization token is missing");
      }

      const response = await axiosInstance.post("/gds/create-gds", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Create Gula Darah response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Create Gula Darah error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  getAllGds: async ({ page = 1, pageSize = 10, keyword = "" }) => {
    try {
      const response = await axiosInstance.get(
        `/gds?keyword=${keyword}&page=${page}&pageSize=${pageSize}`
      );
      console.log("Get Gula Darah response:", response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Get Gula Darah error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },

  getGds: async (id) => {
    try {
      const response = await axiosInstance.get(`/gds/${id}`);
      console.log("Get Gula Darah response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Get Gula Darah error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  patchGds: async (data, id) => {
    try {
      const response = await axiosInstance.patch(
        `/gds/update-gds/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Update Gula Darah response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Update  Gula Darah error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  deleteGds: async (data, id) => {
    try {
      const response = await axiosInstance.patch(`/gds/delete-gds/${id}`, data);
      console.log("Delete Gula Darah response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Delete  Gula Darah error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
};
