import React, { useState } from "react";
import Header from "@/components/PriviteSystem/Header";
import Navigation from "@/components/Navigation";
import ContentManager from "@/components/ContentManager";
import Footer from "@/components/Footer";
import PreFooter from "@/components/PreFooter";
import VietsopetroLogo from "@/assets/vietsovlogogiulua.png";

interface InternalInterfaceProps {
  onInternalToggle: () => void;
}

const InternalInterface: React.FC<InternalInterfaceProps> = ({
  onInternalToggle,
}) => {
  const [activeNavItem, setActiveNavItem] = useState("TRANG CHỦ");

  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <button
        onClick={onInternalToggle}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-800 text-white rounded-md shadow-lg hover:bg-gray-700 transition-colors"
      >
        Chuyển giao diện công khai
      </button>

      {/* Internal Interface Content */}
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

      <PreFooter />
      <Footer />
    </div>
  );
};

export default InternalInterface;
