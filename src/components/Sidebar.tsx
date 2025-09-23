import React from "react";
import { FaArrowDown, FaShieldAlt, FaGraduationCap } from "react-icons/fa";

import ButtonSideBar from "./ButtonSideBar";
import StatisticCard from "./StatisticCard";
import StatisticCardWithBg from "./StatisticCardWithBg";

const statisticCardData1: StatisticCardData[] = [
  { period: "Ngày", plan: 8422.4, actual: 8275.0 },
  { period: "Tháng", plan: 16844.8, actual: 16446.0 },
  { period: "Năm", plan: 1471709.8, actual: 1467777.0 },
];

const statisticCardData2: StatisticCardData[] = [
  { period: "Ngày", plan: 8422.4, actual: 8275.0 },
  { period: "Tháng", plan: 16844.8, actual: 16446.0 },
  { period: "Năm", plan: 1471709.8, actual: 1467777.0 },
];

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <ButtonSideBar />
      <StatisticCard
        data={statisticCardData1}
        title="SẢN LƯỢNG DẦU KHAI THÁC VSP"
      />
      <StatisticCard
        data={statisticCardData2}
        title="SẢN LƯỢNG ĐẦU MỎ CÁ TẦM"
      />

      <StatisticCardWithBg
        data={statisticCardData2}
        title="SẢN LƯỢNG ĐẦU MỎ CÁ TẦM"
        note="Giá điều chỉnh Ngày 31/07/2025"
      />

      {/* Oil Price & Exchange Rate */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold text-gray-800 mb-3">GIÁ DẦU | TỶ GIÁ VSP</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-2">Mặt hàng</th>
                <th className="text-left p-2">Giá điều chỉnh</th>
                <th className="text-left p-2">Thực tế</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Dầu DO 0,05S-I</td>
                <td className="p-2">25,000</td>
                <td className="p-2 flex items-center">
                  24,500 <FaArrowDown className="text-red-500 ml-1" />
                </td>
              </tr>
              <tr>
                <td className="p-2">Dầu DO 0,001S-V</td>
                <td className="p-2">26,000</td>
                <td className="p-2 flex items-center">
                  25,800 <FaArrowDown className="text-red-500 ml-1" />
                </td>
              </tr>
              <tr>
                <td className="p-2">Dầu KO</td>
                <td className="p-2">24,500</td>
                <td className="p-2 flex items-center">
                  24,200 <FaArrowDown className="text-red-500 ml-1" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          *Giá điều chỉnh Ngày 31/07/2025
        </p>
      </div>

      {/* Safety Information */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center">
          <FaShieldAlt className="mr-2 text-green-600" />
          THÔNG TIN AN TOÀN
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>→ Ngày xảy ra tai nạn cuối cùng:</span>
            <span className="text-green-600 font-medium">150 Ngày trước</span>
          </div>
          <div className="flex justify-between">
            <span>→ Số vụ tai nạn lao động năm 2025:</span>
            <div className="text-right">
              <div className="text-red-600 font-medium">Xx (vụ)</div>
              <div className="text-green-600 text-xs">Giảm 30%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Training Schedule */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center">
          <FaGraduationCap className="mr-2 text-blue-600" />
          LỊCH ĐÀO TẠO NỘI BỘ
        </h3>
        <div className="space-y-3 text-sm">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-l-4 border-blue-500 pl-3">
              <div className="font-medium text-gray-800">
                Chương trình đào tạo nhận thức về an toàn thông tin năm 2025
              </div>
              <div className="text-gray-600 mt-1">Thời gian: 3 ngày</div>
              <div className="text-gray-600">Bắt đầu: 25/09/2026</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
