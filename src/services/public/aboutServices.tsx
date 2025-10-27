import { API_CONFIG } from "@/config/api";
import { publicApiClient } from "@/services/shared";
import { type Achievement } from "@/types/api/public/aboutTypes";

export class AboutService {
  static async getAchievements(): Promise<Achievement[]> {
    const response = await publicApiClient.post<Achievement[]>(
      `${API_CONFIG.ENDPOINTS.PUBLIC.ABOUT.ACHIEVEMENTS}`,
      {
        languageCode: "vie",
      }
    );
    return response.objData;
  }
}
