import { AxiosError } from "axios";
import { axiosInstance } from "@/config";

export const APIArticle = {
  getAllArticle: async (title = "", page, pageSize) => {
    try {
      const response = await axiosInstance.get(
        `/article?title=${title}&page=${page}&pageSize=${pageSize}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  getArticle: async (id) => {
    try {
      const response = await axiosInstance.get(`/article/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
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
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
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
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  deleteArticle: async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/article/delete-article/${id}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data.message);
      }
    }
  },
};
