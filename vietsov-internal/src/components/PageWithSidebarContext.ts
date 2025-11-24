import { createContext, useContext } from "react";

export const SidebarStateContext = createContext(false);

export const useSidebarState = () => useContext(SidebarStateContext);

