import { axiosInstance } from "@/config";

export const APIGulaDarah = {
  postGds: async (data) => {
    try {
      const response = await axiosInstance.post("/gds/create-gds", data);
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
  getAllGds: async () => {
    try {
      const response = await axiosInstance.get("/gds");
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
      const response = await axiosInstance.patch(`/gds/update-gds/${id}`, data);
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
