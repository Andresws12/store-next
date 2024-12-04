import { Token } from "@/api/token";

export async function authFetch(url: string, params?: RequestInit): Promise<Response> {
    const tokenCtrl = new Token();
    const token = tokenCtrl.getToken();

    const logout = () => {
        tokenCtrl.removeToken();
        window.location.replace("/");
    }

    if (!token) {
        logout();
    } else {
        if (tokenCtrl.hasExpired(token)) {
            logout();
        } else {
            if (!params) {
                params = {};
            }

            if (!params.headers) {
                params.headers = {};
            }

            params.headers = {
                ...params.headers,
                Authorization: `Bearer ${token}`,
            };

            try {
                return fetch(url, params);
            } catch (error) {
                throw error;
            }
        }
    }

    const response = await fetch(url, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return response;
}