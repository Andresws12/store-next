import { TOKEN } from "@/utils/const";
import { jwtDecode } from "jwt-decode";

export class Token {
  setToken(token: string) {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  hasExpired(token: string | null) {
    if(!token) return false;
    
    const tokenDecode = jwtDecode(token);

    if (!tokenDecode.exp) {
      return false;
    }

    const expireDate = tokenDecode.exp * 1000;
    const currentDate = Date.now();
    if (expireDate < currentDate) {
      return true;
    }
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }
}
