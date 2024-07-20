import Cookies from "js-cookie";

export class AuthService {
  isTokenValid() {
    try {
      const token = this.getToken();
      console.log("token isTokenValid:", token);
      if (!token) return false;
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

  getToken() {
    return Cookies.get("idToken");
  }

  setCredentialsToCookie({ token }) {
    Cookies.set("idToken", token, { expires: 7 });
    console.log("ini token credential: ", token);
  }

  clearCredentialsFromCookie() {
    Cookies.remove("idToken");
  }

  logout() {
    this.clearCredentialsFromCookie();
  }
}
