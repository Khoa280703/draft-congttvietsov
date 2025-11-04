import NewTicket from "@/components/NewsPage/NewsTicket";
import NewsArticle from "@/components/NewsPage/NewsArticle";
import LinkCenter from "@/components/LinkCenter";
import Sidebar from "@/components/Sidebar";

const InternalNewsDetail: React.FC = () => {
  return (
    <div>
      <NewTicket />
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-10 2xl:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-5 2xl:gap-6">
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
