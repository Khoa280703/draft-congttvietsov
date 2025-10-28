// Public routes configuration
export const PUBLIC_ROUTES = {
  HOME: "/",
  CONTACT: "/lienhe",
  ABOUT: "/gioithieu",
  UNITS: "/donvi",
  PRODUCTS_SERVICES: "/spvadichvu",
  NEWS: "/tintuc",
  RESOURCES: "/cacnguonchung",
  RECRUITMENT: "/tuyendung",
  ADMISSION: "/tuyensinh",
} as const;

// All routes
export const ROUTES = {
  PUBLIC: PUBLIC_ROUTES,
} as const;
