// src/config/axios/index.js
import axios from "axios";
import { AuthService } from "@/service";
import { globalRoute } from "@/utils";

export const authService = new AuthService();

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (authService.isAuthorized()) {
    const token = authService.getToken();
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      authService.clearToken();
      globalRoute.navigate && globalRoute.navigate("/login");
    }
    return Promise.reject(error);
  }
);
