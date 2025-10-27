import { internalApiClient } from "@/services/shared";

export interface DashboardStats {
  totalUsers: number;
  totalNews: number;
  totalProjects: number;
  totalViews: number;
  monthlyGrowth: number;
  weeklyGrowth: number;
}

export interface RecentActivity {
  Id: number;
  Type: string;
  Title: string;
  Description: string;
  CreatedDate: string;
  UserName: string;
  Status: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

export class DashboardService {
  // Get dashboard statistics
  static async getDashboardStats(): Promise<DashboardStats> {
    try {
      const response = await internalApiClient.get<DashboardStats>(
        "/Dashboard/GetStats"
      );
      return response.objData;
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      throw error;
    }
  }

  // Get recent activities
  static async getRecentActivities(
    limit: number = 10
  ): Promise<RecentActivity[]> {
    try {
      const response = await internalApiClient.get<RecentActivity[]>(
        `/Dashboard/GetRecentActivities?limit=${limit}`
      );
      return response.objData;
    } catch (error) {
      console.error("Error fetching recent activities:", error);
      throw error;
    }
  }

  // Get chart data for analytics
  static async getAnalyticsChartData(
    period: string = "30d"
  ): Promise<ChartData> {
    try {
      const response = await internalApiClient.get<ChartData>(
        `/Dashboard/GetAnalyticsChart?period=${period}`
      );
      return response.objData;
    } catch (error) {
      console.error("Error fetching analytics chart data:", error);
      throw error;
    }
  }

  // Get user activity summary
  static async getUserActivitySummary(): Promise<{
    activeUsers: number;
    newUsers: number;
    returningUsers: number;
  }> {
    try {
      const response = await internalApiClient.get<{
        activeUsers: number;
        newUsers: number;
        returningUsers: number;
      }>("/Dashboard/GetUserActivitySummary");
      return response.objData;
    } catch (error) {
      console.error("Error fetching user activity summary:", error);
      throw error;
    }
  }
}


