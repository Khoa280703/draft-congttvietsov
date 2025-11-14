// Internal routes configuration
export const INTERNAL_ROUTES = {
  HOME: "/",
  ABOUT: "/gioithieu",
  NEWS: "/tintuc",
  DEVELOPMENT: "/phattrien",
  REPORTS: "/baocao",
  APPLICATIONS: "/ungdung",
  SEARCH: "/tracuu",
  CONTACT: "/lienhe",
} as const;

// All routes
export const ROUTES = {
  INTERNAL: INTERNAL_ROUTES,
} as const;
