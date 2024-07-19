import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

export class AuthService {
  isTokenValid() {
    try {
      const token = this.getToken();
      if (!token) return false;

      const { exp } = jwtDecode(token);
      return Date.now() <= exp * 1000;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  isAuthorized() {
    if (!this.isTokenValid()) {
      this.clearCredentialsFromCookie();
      return false;
    }
    return true;
  }

  getToken() {
    return Cookies.get("idToken") || Cookies.get("oauthAccessToken");
  }

  getRefreshToken() {
    return Cookies.get("refreshToken");
  }

  setCredentialsToCookie({ token }) {
    const { exp } = jwtDecode(token);
    Cookies.set("token", token, { expires: new Date(exp * 1000) });
  }

  storeCredentialsToCookie({ idToken, oauthAccessToken, refreshToken }) {
    if (idToken) Cookies.set("idToken", idToken);
    if (oauthAccessToken) Cookies.set("oauthAccessToken", oauthAccessToken);
    if (refreshToken) Cookies.set("refreshToken", refreshToken);
  }

  clearCredentialsFromCookie() {
    Cookies.remove("idToken");
    Cookies.remove("oauthAccessToken");
    Cookies.remove("refreshToken");
  }

  clearToken() {
    Cookies.remove("token");
  }

  logout() {
    this.clearCredentialsFromCookie();
  }
}
