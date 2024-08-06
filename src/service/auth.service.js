import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { axiosInstance } from "@/config/axios";

export class AuthService {
  isTokenValid() {
    try {
      const token = this.getToken();
      console.log("token isTokenValid:", token);
      if (!token) {
        return false;
      }
      return true;
    } catch (error) {
      console.error(error);
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

  // getAdminRole() {
  //   if (this.isAuthorized()) {
  //     const { id, role } = this.getToken()
  //     return { id, role };
  //   }
  //   return null;
  // }

  getToken() {
    return Cookies.get("idToken");
  }

  setCredentialsToCookie({ token }) {
    const { exp } = jwtDecode(token);
    Cookies.set("idToken", token, { expires: new Date(exp * 1000) });
    console.log("ini token credential: ", token);
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
      return { id, role };
    }
    return null;
  }

  async getUserData() {
    if (this.isAuthorized()) {
      try {
        const response = await axiosInstance.get(`/patient/`);
        return response.data;
      } catch (error) {
        console.error("Failed to fetch user data", error);
        this.clearCredentialsFromCookie();
        return null;
      }
    }
    return null;
  }
}
