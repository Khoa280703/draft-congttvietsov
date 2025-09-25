import { PUBLIC_MENU_ITEMS, INTERNAL_MENU_ITEMS } from "./menu";
import { PUBLIC_ROUTES, INTERNAL_ROUTES, ROUTES } from "./routes";

// Create URL to navigation item mapping for public
export const PUBLIC_URL_TO_NAV_ITEM = PUBLIC_MENU_ITEMS.reduce((acc, item) => {
  acc[item.path] = item.label;
  return acc;
}, {} as Record<string, string>);

// Create navigation item to URL mapping for public
export const PUBLIC_NAV_ITEM_TO_URL = PUBLIC_MENU_ITEMS.reduce((acc, item) => {
  acc[item.label] = item.path;
  return acc;
}, {} as Record<string, string>);

// Create URL to navigation item mapping for internal
export const INTERNAL_URL_TO_NAV_ITEM = INTERNAL_MENU_ITEMS.reduce(
  (acc, item) => {
    acc[item.path] = item.label;
    return acc;
  },
  {} as Record<string, string>
);

// Create navigation item to URL mapping for internal
export const INTERNAL_NAV_ITEM_TO_URL = INTERNAL_MENU_ITEMS.reduce(
  (acc, item) => {
    acc[item.label] = item.path;
    return acc;
  },
  {} as Record<string, string>
);

// Navigation configuration
export const NAVIGATION_CONFIG = {
  PUBLIC: {
    MENU_ITEMS: PUBLIC_MENU_ITEMS,
    URL_TO_NAV_ITEM: PUBLIC_URL_TO_NAV_ITEM,
    NAV_ITEM_TO_URL: PUBLIC_NAV_ITEM_TO_URL,
    ROUTES: PUBLIC_ROUTES,
  },
  INTERNAL: {
    MENU_ITEMS: INTERNAL_MENU_ITEMS,
    URL_TO_NAV_ITEM: INTERNAL_URL_TO_NAV_ITEM,
    NAV_ITEM_TO_URL: INTERNAL_NAV_ITEM_TO_URL,
    ROUTES: INTERNAL_ROUTES,
  },
} as const;

// Re-export ROUTES for convenience
export { ROUTES };
