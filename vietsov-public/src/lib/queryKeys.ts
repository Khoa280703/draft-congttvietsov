// Query Keys for React Query
export const queryKeys = {
  // Public API Keys
  public: {
    news: {
      all: ["public", "news"] as const,
      lists: () => [...queryKeys.public.news.all, "list"] as const,
      list: (filters: Record<string, any>) =>
        [...queryKeys.public.news.lists(), filters] as const,
      details: () => [...queryKeys.public.news.all, "detail"] as const,
      detail: (id: number) => [...queryKeys.public.news.details(), id] as const,
      featured: () => [...queryKeys.public.news.all, "featured"] as const,
      mostViewed: () => [...queryKeys.public.news.all, "mostViewed"] as const,
      search: (query: string) =>
        [...queryKeys.public.news.all, "search", query] as const,
    },
    categories: {
      all: ["public", "categories"] as const,
      lists: () => [...queryKeys.public.categories.all, "list"] as const,
      list: (level?: number) =>
        [...queryKeys.public.categories.lists(), level] as const,
    },
    about: {
      all: ["public", "about"] as const,
      content: () => [...queryKeys.public.about.all, "content"] as const,
      history: () => [...queryKeys.public.about.all, "history"] as const,
      leadership: () => [...queryKeys.public.about.all, "leadership"] as const,
      visionMission: () =>
        [...queryKeys.public.about.all, "visionMission"] as const,
      achievements: () =>
        [...queryKeys.public.about.all, "achievements"] as const,
    },
    projects: {
      all: ["public", "projects"] as const,
      lists: () => [...queryKeys.public.projects.all, "list"] as const,
      list: (filters: Record<string, any>) =>
        [...queryKeys.public.projects.lists(), filters] as const,
      details: () => [...queryKeys.public.projects.all, "detail"] as const,
      detail: (id: number) =>
        [...queryKeys.public.projects.details(), id] as const,
      featured: () => [...queryKeys.public.projects.all, "featured"] as const,
      categories: () =>
        [...queryKeys.public.projects.all, "categories"] as const,
    },
  },
  // Internal API Keys
  internal: {
    dashboard: {
      all: ["internal", "dashboard"] as const,
      stats: () => [...queryKeys.internal.dashboard.all, "stats"] as const,
      activities: (limit?: number) =>
        [...queryKeys.internal.dashboard.all, "activities", limit] as const,
      analytics: (period: string) =>
        [...queryKeys.internal.dashboard.all, "analytics", period] as const,
      userActivity: () =>
        [...queryKeys.internal.dashboard.all, "userActivity"] as const,
    },
    reports: {
      all: ["internal", "reports"] as const,
      lists: () => [...queryKeys.internal.reports.all, "list"] as const,
      details: () => [...queryKeys.internal.reports.all, "detail"] as const,
      detail: (id: number) =>
        [...queryKeys.internal.reports.details(), id] as const,
      templates: () =>
        [...queryKeys.internal.reports.all, "templates"] as const,
    },
  },
} as const;

