// Consolidated API Configuration
export const API_CONFIG = {
  // Base URLs
  PUBLIC_BASE_URL: "https://vietsovadminapi.sfb.vn/api",
  INTERNAL_BASE_URL: "https://vietsovadminapi.sfb.vn/api/internal",

  // Timeouts
  PUBLIC_TIMEOUT: 10000,
  INTERNAL_TIMEOUT: 15000,

  // Page sizes
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,

  // Endpoints
  ENDPOINTS: {
    // Public API Endpoints
    PUBLIC: {
      NEWS: {
        BY_CATEGORY: "/News/GetNewsByCategory",
        ALL: "/News/GetAllNews",
        BY_ID: "/News/GetNewsById",
        SEARCH: "/News/SearchNews",
        FEATURED: "/News/GetFeaturedNews",
        MOST_VIEWED: "/News/GetMostViewedNews",
      },
      CATEGORIES: {
        ALL: "/Category/FindCategoriesVietnam",
      },
      ABOUT: {
        CONTENT: "/About/GetContent",
        HISTORY: "/About/GetHistory",
        LEADERSHIP: "/About/GetLeadership",
        VISION_MISSION: "/About/GetVisionMission",
        ACHIEVEMENTS: "/GioiThieu/GetThanhTuuNoiBat",
      },
      PROJECTS: {
        ALL: "/Projects/GetAllProjects",
        BY_ID: "/Projects/GetProjectById",
        BY_CATEGORY: "/Projects/GetProjectsByCategory",
        FEATURED: "/Projects/GetFeaturedProjects",
        CATEGORIES: "/Projects/GetCategories",
      },
    },
    // Internal API Endpoints
    INTERNAL: {
      DASHBOARD: {
        STATS: "/Dashboard/GetStats",
        ACTIVITIES: "/Dashboard/GetRecentActivities",
        ANALYTICS_CHART: "/Dashboard/GetAnalyticsChart",
        USER_ACTIVITY: "/Dashboard/GetUserActivitySummary",
      },
      REPORTS: {
        GENERATE: "/Reports/Generate",
        ALL: "/Reports/GetAllReports",
        BY_ID: "/Reports/GetReportById",
        DOWNLOAD: "/Reports/Download",
        TEMPLATES: "/Reports/GetTemplates",
      },
      USERS: {
        ALL: "/Users/GetAllUsers",
        BY_ID: "/Users/GetUserById",
        CREATE: "/Users/CreateUser",
        UPDATE: "/Users/UpdateUser",
        DELETE: "/Users/DeleteUser",
      },
      ANALYTICS: {
        OVERVIEW: "/Analytics/GetOverview",
        TRENDS: "/Analytics/GetTrends",
        PERFORMANCE: "/Analytics/GetPerformance",
      },
    },
  },
} as const;

