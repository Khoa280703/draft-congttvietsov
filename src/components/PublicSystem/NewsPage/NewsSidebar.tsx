import React from "react";
import { SidebarNavigation } from "@/components/PublicSystem";
import MostView from "./MostView";

interface NewsSidebarProps {
  activePath?: string;
}

const NewsSidebar: React.FC<NewsSidebarProps> = ({ activePath }) => {
  return (
    <div className="space-y-4">
      <SidebarNavigation activePath={activePath} />
      <MostView />
    </div>
  );
};

export default NewsSidebar;
