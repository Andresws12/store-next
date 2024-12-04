import { apiPrefix } from "@/utils/const";
import { authFetch } from "@/utils/authFetch";
export class User {
  async getMe() {
    try {
      const url = apiPrefix("/users/me");

      const response = await authFetch(url);
      const data = await response.json();

      if (response.status !== 200) {
        return data;
      }

      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
