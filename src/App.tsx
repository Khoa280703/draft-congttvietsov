import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import NewTicket from "./components/NewsPage/NewTicket";
import ContentManager from "./components/ContentManager";
import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter";
import "./App.css";
import VietsopetroLogo from "./assets/vietsovlogogiulua.png";

const newsData = [
  "Đoàn sinh viên Trường Đại học Bách khoa - Đại học Quốc gia TP.HCM tham quan thực tế tại Vietsovpetro",
  "Đảng bộ Vietsovpetro được vinh danh tại Đại hội đại biểu",
];

function App() {
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <img
        src={VietsopetroLogo}
        alt="Vietsopetro Logo"
        className="w-36 h-24 mx-auto my-4"
      />
      <div className="pb-1">
        <Navigation
          activeItem={activeNavItem}
          onItemClick={handleNavItemClick}
        />
      </div>

      {activeNavItem === "TIN TỨC SỰ KIỆN" && <NewTicket items={newsData} />}

      <ContentManager activeItem={activeNavItem} />

      <>
        <PreFooter />
        <Footer />
      </>
    </div>
  );
}

export default App;
