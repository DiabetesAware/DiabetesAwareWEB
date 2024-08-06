import { AxiosError } from "axios";
import { axiosInstance } from "@/config";

export const APIArticle = {
  getAllArticle: async (title = "", page, pageSize) => {
    try {
      const response = await axiosInstance.get(
        `/article?title=${title}&page=${page}&pageSize=${pageSize}`
      );
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
  getArticle: async (id) => {
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
  createArticle: async (data) => {
    try {
      const response = await axiosInstance.post(
        "/article/create-article",
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
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
  patchArticle: async ({data, id}) => {
    try {
      const response = await axiosInstance.patch(
        `/article/update-article/${id}`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
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
      const response = await axiosInstance.delete(
        `/article/delete-article/${id}`
      );
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
