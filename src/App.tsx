import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NewTicket from "./components/NewTicket";
import NewsArticle from "./components/NewsArticle";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter";
import LinkCenter from "./components/LinkCenter";
import "./App.css";
import VietsopetroLogo from "./assets/vietsovlogogiulua.png";

const newsData = [
  "Đoàn sinh viên Trường Đại học Bách khoa - Đại học Quốc gia TP.HCM tham quan thực tế tại Vietsovpetro",
  "Đảng bộ Vietsovpetro được vinh danh tại Đại hội đại biểu",
];

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <img
        src={VietsopetroLogo}
        alt="Vietsopetro Logo"
        className="w-36 h-24 mx-auto my-4"
      />
      <div className="pb-1">
        <Navigation />
      </div>
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

      <PreFooter />

      <Footer />
    </div>
  );
}

export default App;
