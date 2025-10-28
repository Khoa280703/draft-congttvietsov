import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { LuTvMinimalPlay } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";
import { LuCross } from "react-icons/lu";

const actionButtons = [
  { text: "CẨM NANG VĂN HÓA VPS", icon: <LuTvMinimalPlay /> },
  { text: "SÁNG KIẾN - SÁNG CHẾ", icon: <GoLightBulb /> },
  { text: "THƯ MỤC GIẢI ĐÁP PHÁP LUẬT", icon: <IoBookOutline /> },
  { text: "CHUYÊN MỤC SỨC KHỎE", icon: <LuCross /> },
];

const ButtonSideBar: React.FC = () => {
  return (
    <div className="grid gap-4">
      {actionButtons.map((button, index) => (
        <button
          key={index}
          className="
            flex justify-start
            w-full
            bg-green-700 text-white text-base font-420 
            px-3 py-3
            rounded-xl 
            hover:bg-green-600 transition-colors
            shadow-md
          "
        >
          <span className="mr-3 text-xl">{button.icon}</span>

          <span className="tracking-tight">{button.text}</span>
        </button>
      ))}
    </div>
  );
};

export default ButtonSideBar;
