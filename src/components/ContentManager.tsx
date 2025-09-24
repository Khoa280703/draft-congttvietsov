import React from "react";
import NewsArticle from "./NewsPage/NewsArticle";
import LinkCenter from "./LinkCenter";
import Sidebar from "./Sidebar";
import BlankPage from "./BlankPage";
import HomePage from "./HomePage/HomePage";

interface ContentManagerProps {
  activeItem: string;
}

const ContentManager: React.FC<ContentManagerProps> = ({ activeItem }) => {
  switch (activeItem) {
    case "TRANG CHỦ":
      return <HomePage />;
    case "TIN TỨC SỰ KIỆN":
      return (
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <NewsArticle />
              <LinkCenter />
            </div>
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </main>
      );
    default:
      return <BlankPage title={activeItem} />;
  }
};

export default ContentManager;
