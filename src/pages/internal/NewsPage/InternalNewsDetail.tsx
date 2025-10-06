import NewTicket from "@/components/PriviteSystem/NewsPage/NewsTicket";
import NewsArticle from "@/components/PriviteSystem/NewsPage/NewsArticle";
import LinkCenter from "@/components/PriviteSystem/LinkCenter";
import Sidebar from "@/components/Sidebar";

const InternalNewsDetail: React.FC = () => {
  return (
    <div>
      <NewTicket />
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
    </div>
  );
};

export default InternalNewsDetail;
