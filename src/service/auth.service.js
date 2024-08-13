import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import { axiosInstance } from "@/config/axios";

export class AuthService {
  isTokenValid() {
    try {
      const token = this.getToken();
      console.log("Token in isTokenValid:", token);
      if (!token) {
        return false;
      }
      return true;
    } catch (error) {
      console.error("Token validation error:", error);
      return false;
    }
  }

  isAuthorized() {
    if (!this.isTokenValid()) {
      this.clearCredentialsFromCookie();
      return false;
    } else {
      return true;
    }
  }

  getToken() {
    return Cookies.get("idToken");
  }

  setCredentialsToCookie({ token }) {
    const { exp } = jwtDecode(token);
    Cookies.set("idToken", token, { expires: new Date(exp * 1000) });
    console.log("Set credentials to cookie, token:", token);
  }

  clearCredentialsFromCookie() {
    Cookies.remove("idToken");
  }

  logout() {
    this.clearCredentialsFromCookie();
  }

  getAdminRole() {
    if (this.isAuthorized()) {
      const { id, role } = jwtDecode(this.getToken());
      console.log("Admin role:", role);
      return { id, role };
    }
    return null;
  }

  async getUserData(token) {
    if (!token) {
      console.error("Patient token is missing.");
      return null;
    }

    try {
      const response = await axiosInstance.get(`/patient/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch patient data", error);
      this.clearCredentialsFromCookie();
      return null;
    }
  }
}
