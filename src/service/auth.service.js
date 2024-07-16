import Cookies from "js-cookie";

export class AuthService {
  isAuthorized() {
    return !!this.getToken() || !!this.getRefreshToken();
  }

  getToken() {
    return Cookies.get("idToken") || Cookies.get("oauthAccessToken");
  }

  getRefreshToken() {
    return Cookies.get("refreshToken");
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

  logout() {
    this.clearCredentialsFromCookie();
  }
}
