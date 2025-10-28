import { INTERNAL_MENU_ITEMS } from "./menu";
import { ROUTES } from "./routes";

// Create URL to navigation item mapping for internal
export const URL_TO_NAV_ITEM = INTERNAL_MENU_ITEMS.reduce((acc, item) => {
  acc[item.path] = item.label;
  return acc;
}, {} as Record<string, string>);

// Create navigation item to URL mapping for internal
export const NAV_ITEM_TO_URL = INTERNAL_MENU_ITEMS.reduce((acc, item) => {
  acc[item.label] = item.path;
  return acc;
}, {} as Record<string, string>);

export const NAVIGATION_CONFIG = {
  INTERNAL: {
    URL_TO_NAV_ITEM,
    NAV_ITEM_TO_URL,
  },
};

export { INTERNAL_MENU_ITEMS, ROUTES };
