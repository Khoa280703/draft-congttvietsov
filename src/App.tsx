import { useState } from "react";
import Header from "@/components/PriviteSystem/Header";
import Navigation from "@/components/Navigation";
import ContentManager from "@/components/ContentManager";
import InternalInterface from "@/components/InternalInterface";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import "./App.css";
import VietsopetroLogo from "@/assets/vietsovlogogiulua.png";

function App() {
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");
  const [isInternal, setIsInternal] = useState(false);

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  const handleInternalToggle = () => {
    setIsInternal(!isInternal);
  };

  if (isInternal) {
    return <InternalInterface onInternalToggle={handleInternalToggle} />;
  }

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

      <ContentManager activeItem={activeNavItem} />

      <>
        <PreFooter />
        <Footer />
      </>

      <button
        onClick={handleInternalToggle}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-800 text-white rounded-md shadow-lg hover:bg-gray-700 transition-colors"
      >
        Nội bộ
      </button>
    </div>
  );
}

export default App;
