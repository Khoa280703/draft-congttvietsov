import { getLanguageForAPI } from "./language";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export const api = {
  get: async <T>(endpoint: string): Promise<T> => {
    const acceptLanguage = getLanguageForAPI();
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Accept-Language": acceptLanguage,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  },

  post: async <T>(endpoint: string, data: any): Promise<T> => {
    const acceptLanguage = getLanguageForAPI();
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": acceptLanguage,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
  },
};
