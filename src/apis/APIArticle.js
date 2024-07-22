import { AxiosError } from "axios";
import { axiosInstance } from "@/config";

export const APIArticle = {
  getAllArticle: async () => {
    try {
      const response = await axiosInstance.get("/article");
      console.log("Article response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Article error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  getArticleById: async (id) => {
    try {
      const response = await axiosInstance.get(`/article/${id}`);
      console.log("Article response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Article error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  addArticle: async (data) => {
    try {
      const response = await axiosInstance.post("/article/create-article", data);
      console.log("Create Article response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Article error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  updateArticle: async (data, id) => {
    try {
      const response = await axiosInstance.patch(`/article/update-article/${id}`, data);
      console.log("Update Article response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Article error response:", error.response);
        throw new Error(error.response.data.message);
      }
      console.error("Unexpected error:", error);
      throw error;
    }
  },
  deleteArticle: async (id) => {
    try {
      const response = await axiosInstance.delete(`/article/delete-article/${id}`);
      console.log("Delete Article response:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.error("Article error response:", error.response);
        throw new Error(error.response.data.message);
      }
    }
  },
};
