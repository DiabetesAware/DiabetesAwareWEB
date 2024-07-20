// src/config/axios/index.js
import axios from "axios";
import { authService } from "@/config";
import { globalRoute } from "@/utils";
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const isAuthorized = authService.isAuthorized();
    console.log("isAuthorized:", isAuthorized); // Debugging
    if (isAuthorized) {
      const token = authService.getToken();
      console.log("token axiosInstance:", token); // Debugging
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      authService.clearCredentialsFromCookie();
      if (globalRoute.navigate) {
        globalRoute.navigate("/login");
      }
    }
    return Promise.reject(error);
  }
);