// Public routes configuration
export const PUBLIC_ROUTES = {
  HOME: "/",
  ABOUT: "/gioithieu",
  UNITS: "/donvi",
  PRODUCTS_SERVICES: "/spvadichvu",
  NEWS: "/tintuc",
  RESOURCES: "/nguonluc",
  RECRUITMENT: "/tuyendung",
  ADMISSION: "/tuyensinh",
} as const;

// Internal routes configuration
export const INTERNAL_ROUTES = {
  HOME: "/internal",
  ABOUT: "/internal/gioithieu",
  NEWS: "/internal/tintuc",
  DEVELOPMENT: "/internal/phattrien",
  REPORTS: "/internal/baocao",
} as const;

// All routes
export const ROUTES = {
  PUBLIC: PUBLIC_ROUTES,
  INTERNAL: INTERNAL_ROUTES,
} as const;
