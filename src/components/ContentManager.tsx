import React from "react";
import NewsArticle from "@/components/PriviteSystem/NewsPage/NewsArticle";
import LinkCenter from "@/components/PriviteSystem/LinkCenter";
import Sidebar from "@/components/Sidebar";
import BlankPage from "@/components/BlankPage";
import HomePage from "@/components/PriviteSystem/HomePage/HomePage";
import NewTicket from "@/components/PriviteSystem/NewsPage/NewTicket";

const newsData = [
  "Đoàn sinh viên Trường Đại học Bách khoa - Đại học Quốc gia TP.HCM tham quan thực tế tại Vietsovpetro",
  "Đảng bộ Vietsovpetro được vinh danh tại Đại hội đại biểu",
];

interface ContentManagerProps {
  activeItem: string;
}

const ContentManager: React.FC<ContentManagerProps> = ({ activeItem }) => {
  switch (activeItem) {
    case "TRANG CHỦ":
      return <HomePage />;
    case "TIN TỨC SỰ KIỆN":
      return (
        <>
          <NewTicket items={newsData} />
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
        </>
      );
    default:
      return <BlankPage title={activeItem} />;
  }
};

export default ContentManager;
