import { MAIN_NAVIGATION_ITEMS } from "./menu";
import { ROUTES } from "./routes";

// Create URL to navigation item mapping for public
export const URL_TO_NAV_ITEM = MAIN_NAVIGATION_ITEMS.reduce((acc, item) => {
  acc[item.path] = item.label;
  return acc;
}, {} as Record<string, string>);

// Create navigation item to URL mapping for public
export const NAV_ITEM_TO_URL = MAIN_NAVIGATION_ITEMS.reduce((acc, item) => {
  acc[item.label] = item.path;
  return acc;
}, {} as Record<string, string>);

export const NAVIGATION_CONFIG = {
  MAIN: {
    URL_TO_NAV_ITEM,
    NAV_ITEM_TO_URL,
  },
};

export { MAIN_NAVIGATION_ITEMS, ROUTES };
